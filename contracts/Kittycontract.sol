pragma solidity ^0.5.0;

import "./IERC721.sol";
import "./Ownable.sol";

contract KittyContract is IERC721, Ownable {

// Mapping owner address to token count
mapping(address => uint) ownershipTokenCount;

// Mapping from token ID to owner address
mapping (uint256=>address) tokenIdHolder;

//stuct of kitty
struct Kitty{
    uint256 genes;
    uint64 timeOfBirth;
    uint32 mumId;
    uint32 dadId;
    uint16 generation;
}

//array of kitty's called Kittens for totalSupply function
Kitty[] Kitties;

// Token name 
string public constant tokenName = "HelloKitties";

// Token symbol 
string public constant tokenSymbol = "KTY";


/** CRYPTOKITTIES FUNCTIONS 


Functions that we need for this to work:
There are several ways to create a cat:

Gen0 cat creation => That creates a generation 0 cat. This is mostly limited to a max creation.
Breeding cat creation => This is done with 2 cats. 1 dad and 1 mom. This will be a second generation cat if both parent cats are Gen0
*/
//EVENTS
event Birth(
    address owner, 
    uint256 KittenId, 
    uint256 mumId, 
    uint256 dadId, 
    uint256 genes
);
// the amount of maximum Kitties that can be created
uint256 public constant CREATION_LIMIT_GEN0 = 1111;

//Counts the amount of Kitties created
uint256 public gen0Counter;


//FUNCTIONS
function createKittyGen0(uint256 _genes) public onlyOwner returns (uint256){
    //LIMIT THE AMOUNT OF GEN0 KITTIES
    require(gen0Counter < CREATION_LIMIT_GEN0);
    gen0Counter++;

    //Gen0 have no owners, they are own by the contract
    return _createKitty(0, 0, 0, _genes, msg.sender);
}


function _createKitty(
    uint256 _mumId,
    uint256 _dadId,
    uint256 _generation,
    uint256 _genes,
    address _owner
)private returns (uint256){
    Kitty memory _Kitty = Kitty({
        genes: _genes,
        timeOfBirth: uint64(now),
        mumId: uint32(_mumId),
        dadId: uint32(_dadId),
        generation: uint16(_generation)
    });
    uint256 newKittenId = Kitties.push(_Kitty) - 1;

    emit Birth(_owner, newKittenId, _mumId, _dadId, _genes);

    _transfer(address(0), _owner, newKittenId);

    return newKittenId;
}


/**
     * @dev Returns the number of tokens in ``owner``'s account.
     */
    function balanceOf(address owner) external view returns (uint256 balance){
        return ownershipTokenCount[owner];
    }

    /*
     * @dev Returns the total number of tokens in circulation.
     */
    function totalSupply() external view returns (uint256 total){
        return Kitties.length;
    }
    /*
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory _tokenName){
        return tokenName; 
    }

    /*
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory _tokenSymbol){
        return tokenSymbol;
    }

    /**
     * @dev Returns the owner of the `tokenId` token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function ownerOf(uint256 tokenId) external view returns (address owner){
        require(tokenIdHolder[tokenId] != address(0), "ERC721: Invalid token ID");
        return tokenIdHolder[tokenId];
    }


     /* @dev Transfers `tokenId` token from `msg.sender` to `to`.
     *
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - `to` can not be the contract address.
     * - `tokenId` token must be owned by `msg.sender`.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 tokenId) external{
    require(to != address(0), "Cannot transfer token to Zero address");
    require(to != address(this), "Cannot send token to Contract");
    require(_owns(msg.sender, tokenId), "Token must be yours if you want to send it");

    _transfer(msg.sender, to, tokenId);

    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal {
        ownershipTokenCount[_to]++;

        tokenIdHolder[_tokenId] = _to;

        if(_from != address(0)){
            ownershipTokenCount[_from] --;
        }

        emit Transfer(msg.sender, _to, _tokenId);
    }

    function _owns(address _claimant, uint256 _tokenId) internal view returns(bool){
        return tokenIdHolder[_tokenId] == _claimant;
    }

    function getKatInformation(uint256 _tokenId) public view returns( uint256 genes, uint256 timeOfBirth, uint256 mumId, uint256 dadId, uint256 generation){
        return (Kitties[_tokenId].genes, Kitties[_tokenId].timeOfBirth, Kitties[_tokenId].mumId, Kitties[_tokenId].dadId, Kitties[_tokenId].generation);
    }
}
