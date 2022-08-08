//const translate = require("solc/translate");

//Storage Variables
//specialNum;

//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function mouthAndBellyColor(color,code) {
    $('.cat__mouth-contour, cat__tail, .cat__chest_inner').css('background', '#' + color)  //This changes the mouth color of the cat
    $('#mouthcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function eyeColor(color,code) {
    $('.pupil-left, .pupil-right').css('background', '#' + color)  //This changes the eye color of the cat
    $('#eyecode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function earsAndPaw(color,code) {
    $('.cat__ear--left, .cat__ear--right, .cat__paw--left, .cat__paw--right, .cat__paw-right_inner, .cat__paw-left_inner').css('background', '#' + color)  //This changes the ear color of the cat
    $('#earscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function decorationColor(color,code) {
    $('#midDot, .cat__head-dots_first, .cat__head-dots_second').css('background','#' + color)
    $('#decorationvariationcolor').html('code: '+code)
    $('#dnadecorationcolor').html(code)
}

function eyeVariation(num) {

        $('#dnashape').html(num)
        switch (num) {
            case 1:

                normalEyes()
                $('#eyeName').html('Basic')//set the badge to "Basic"
                break
            case 2:
                normalEyes()//Reset the settings so no errors could occur
                $('#eyeName').html('Chill')//set the badge to "Chill"
                eyesType1() //Set border to change the shape of the eyes
                break
            case 3:
                normalEyes()//Reset the settings so no errors could occur
                $('#eyeName').html('Thinking')//set the badge to "Chill"
                eyesType2() //Set border to change the shape of the eyes
                break
                case 4:
                    normalEyes()//Reset the settings so no errors could occur
                    $('#eyeName').html('Professor')//set the badge to "Chill"
                    eyesType3() //Set border to change the shape of the eyes
                    break
                case 5:
                    $('#eyeName').html('Cross-eyed')//set the badge to "Chill"
                    eyesType4() //Set border to change the shape of the eyes
                break  
                case 6:
                    normalEyes()
                    $('#eyeName').html('Sfynx')//set the badge to "Chill"
                    eyesType5() //Set border to change the shape of the eyes
                break   
                case 7:
                    normalEyes()
                    $('#eyeName').html('Small Eyer')//set the badge to "Chill"
                    eyesType6() //Set border to change the shape of the eyes
                break       
            default:
                console.log("Not 1 or 2")
                break
        }
}
function decorationVariation(num, animation) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            if(num == 1){
                $('#variationName').html('Special Animation1')//3D Decorative Pattern
                specialAnimationType1()
            }
            else{
                $('#decorationName').html('Basic')
                normaldecoration()
                break
            }
        case 2:
            if(num == 2){
                $('#variationName').html('Special Animation2')//3D Decorative Pattern
                specialAnimationType2()
            }
            else{
                $('#decorationName').html('Croscy')//set the badge to Biggie
                decorationType1()
                break
            }   
        case 3:
            if(num == 3){
                $('#variationName').html('Special Animation3')//3D Decorative Pattern
                specialAnimationType3()
            }
            else{
                $('#decorationName').html('Meowthy')
                decorationType2()
                break
            }      
        case 4:
            if(num == 4){
                $('#variationName').html('Special Animation4')//3D Decorative Pattern
                specialAnimationType4()
            }
            else{
                $('#decorationName').html('Nothing')
                decorationType3()
                break    
            }
        case 5:
            if(num == 5){
                $('#variationName').html('Special Animation5')//3D Decorative Pattern
                specialAnimationType5()
            }
            else{
                $('#decorationName').html('Lefty')
                decorationType4()
                break   
            }
        case 6:
            if(num == 6){
                $('#variationName').html('Special Animation6')//3D Decorative Pattern
                specialAnimationType6()
            }
            else{
                $('#decorationName').html('Mirrory')
                decorationType5()
                break    
            }
        case 7:
            if(num == 7){
                $('#variationName').html('Special Animation7')//3D Decorative Pattern
                specialAnimationType7()
            }
            else{
                $('#decorationName').html('Browser')
                decorationType6()
                break                
            }
        case 8:
                $('#decorationName').html('Strange')
                decorationType7()
                break
        }
}

function animationVariation(num, shape){
    $('#dnadanimation').html(num)
        switch (num) {
            case 1:
                $('#variationName').html('Nodding')//Nodding Head
                AnimationType1()    
                break
            case 2:
                $('#variationName').html('Eye Roller')//Rolling Eyes
                AnimationType2()
                break
            case 3:
                $('#variationName').html('Tails')//Wagging Tail
                AnimationType3()
                break    
            case 4:
                 if(shape == 1){
                     $('#variationName').html('Special Animation1')//3D Decorative Pattern
                     specialAnimationType1()
                 }
                 if(shape == 2){
                    $('#variationName').html('Special Animation2')//3D Decorative Pattern
                    specialAnimationType2()
                }
                if(shape == 3){
                    $('#variationName').html('Special Animation3')//3D Decorative Pattern
                    specialAnimationType3()
                }
                if(shape == 4){
                    $('#variationName').html('Special Animation4')//3D Decorative Pattern
                    specialAnimationType4()
                }
                if(shape == 5){
                    $('#variationName').html('Special Animation5')//3D Decorative Pattern
                    specialAnimationType5()
                }
                if(shape == 6){
                    $('#variationName').html('Special Animation6')//3D Decorative Pattern
                    specialAnimationType6()
                }
                if (shape == 7){
                    $('#variationName').html('Browser')
                    specialAnimationType7()
                }
                break    
            case 5:
                $('#variationName').html('Cloaky Invisibility')//Disappearing Cat
                InvisibilityAnimation()
                break    
            case 6:
                $('#variationName').html('The Walking Cat')// The Walking Cat
                AnimationType4()
                break       
        }


}
function normalEyes() {
    $('.cat__eye').find('span').css('border', 'none', 'transform', 'scale(1)')
    $('.cat__eye--left').find('span').css('transform', 'scale(1.0)')
    $('.cat__eye--right').find('span').css('transform','scale(1.0)')
}

//Cattributes Eyes Types 1-6
function eyesType1(){
    $('.cat__eye').find('span').css('border-top','15px solid')
}

function eyesType2(){
    $('.cat__eye').find('span').css('border-bottom','15px solid')
}
function eyesType3(){
    $('.cat__eye').find('span').css('border-bottom','5px solid')
    $('.cat__eye--left').find('span').css('transform','scale(1.5)', 'border-top','7px solid')
    $('.cat__eye--right').find('span').css('transform','scale(1.2)')
}
function eyesType4(){
    normalEyes()//Reset the settings so no errors could occur
    $('.cat__eye--left').find('span').css({
        "border-top": '0px solid',
        "border-right": '5px solid',
        "border-bottom": '0px solid',
        "border-left": '0px solid',
        "border-image": 'initial',
        "transform": 'scale(-1, 1)'

    })
    $('.cat__eye--right').find('span').css({
        "border-top": '0px solid',
        "border-right": '5px solid',
        "border-bottom": '0px solid',
        "border-left": '0px solid',
        "border-image": 'initial',
        "transform": 'scale(1)'

    })
}
function eyesType5() {
    $('.cat__eye').find('span').css({ 'border-right': '15px solid', 'border-left': '15px solid' })
}
function eyesType6(){
    $('.cat__eye--left').find('span').css({
        "border-top": '5px solid',
        "border-right": '13px solid',
        "border-bottom": '5px solid',
        "border-left": '13px solid',
        "border-image": 'initial',
        "transform": 'scale(0.8)'

    })
    $('.cat__eye--right').find('span').css({
        "border-top": '5px solid',
        "border-right": '13px solid',
        "border-bottom": '5px solid',
        "border-left": '13px solid',
        "border-image": 'initial',
        "transform": 'scale(-0.8, 0.8)'
    })
}

//Decoration Types 1-6
function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ 
        "transform": "rotate(0deg)", 
        "height": "48px", 
        "width": "14px", 
        "top": "1px", 
        "border-radius": "0 0 50% 50%", 
        "visibility": "inherit",
        "left": "103px",
        "filter": "invert(0)"
    })

    $('.cat__head-dots_first').css({ 
        "transform": "rotate(0deg)", 
        "height": "35px", 
        "width": "14px", 
        "top": "1px", 
        "border-radius": 
        "50% 0 50% 50%", 
        "visibility": "inherit", 
        "left": "-20px",
        "filter": "invert(1)"
    })
    $('.cat__head-dots_second').css({ 
        "transform": "rotate(0deg)", 
        "height": "35px", 
        "width": "14px", 
        "top": "1px", 
        "border-radius": "0 50% 50% 50%", 
        "visibility": "inherit",   
        "left": "18px",
        "filter":"invert(1)"
    })
}

function decorationType1() { //Croscy
    normaldecoration()//Reset the settings so no errors could occur
    $('.cat__head-dots').css({
        "height": "68px",
        "width": "20px",
        "top": "1px",
        "left": "98px",
        "transform": "rotate(0)",
        "border-radius": "100%",

    })
        $('.cat__head-dots_first').css({
        "transform": "rotate(120deg)",
        "height": "68px",
        "width": "20px",
        "top": "0px",
        "border-radius": "100%",
        "left": "0px",
        "margin": "initial"
        })
    $('.cat__head-dots_second').css({
        "transform": "rotate(60deg)",
        "height": "68px",
        "width": "20px",
        "top": "0px",
        "border-radius": "100%", 
        "left": "0px",
    })
}

function decorationType2() { //Meowth
    normaldecoration()//Reset the settings so no errors could occur
    $('.cat__head-dots').css({
        "transform": 'rotate(0deg)',
        "height": '68px',
        "width": '35px',
        "top": '-37px',
        "border-radius": '50% 50% 30% 30%',
        "visibility": 'inherit',
        "left": '91px',
    })
    $('.cat__head-dots_first').css({
        "transform": 'rotate(0deg)',
        "height": '55px',
        "width": '13px',
        "top": '9px',
        "borderRadius": '100% 0% 0% 100%',
        "visibility": 'inherit',
        "left": '5px',
        "margin": 'initial'
    })
    $('.cat__head-dots_second').css({
        "transform": 'rotate(0deg)',
        "height": '55px',
        "width": '13px',
        "top": '9px',
        "border-radius": '0% 100% 100% 0%',
        "visibility": 'inherit',
        "left": '17px'
    })
}

function decorationType3() { //Nothing
    normaldecoration()//Reset the settings so no errors could occur
    $('.cat__head-dots').css(
        "visibility","hidden"
    )
    $('.cat__head-dots_first').css(
        "visibility","hidden"
    )
    $('.cat__head-dots_second').css(
        "visibility","hidden"
    )
}

function decorationType4() { //Lefty
    normaldecoration()//Reset the settings so no errors could occur
    $('.cat__head-dots').css(
        "transform", "rotate(30deg)",
        "left", "90px",
        "top", "13px",
    )
    $('.cat__head-dots_first').css(
        "top","10px"
    )
    $('.cat__head-dots_second').css(
        "top","-10px"
    )
}

function decorationType5() { //Mirrory
    normaldecoration()//Reset the settings so no errors could occur
    $('.cat__head-dots').css({
        "transform": "scaleY(-1.0)"
    })
    $('.cat__head-dots_first').css()
    $('.cat__head-dots_second').css()
}

function decorationType6() { //Browser
    normaldecoration()//Reset the settings so no errors could occur
    $('.cat__head-dots').css({
        'height': '48px',
        'width': '25px',
        'top': '1px',
        "border-radius": '5% 5% 50% 50%',
        'left': '95px',
    })
    $('.cat__head-dots_first').css({
        "transform": "rotate(100deg)",
        "height": "51px",
        "width": "14px",
        "top": "33px",
        "border-radius": "50% 50%",
        "left": "-55px"
})
    $('.cat__head-dots_second').css({
        'transform': 'rotate(80deg)',
        "height": '51px',
        "width": '14px',
        "top": '33px',
        "border-radius": '50% 50%',
        "left": '69px',
    })
}

function resetAnimation() {
    $('#head').removeClass("movingHead")
    $('#midDot').removeClass("SpecialPattern1")
    $('#midDot').removeClass("SpecialPattern2")
    $('#midDot').removeClass("SpecialPattern3")
    $('#midDot').removeClass("SpecialPattern4")
    $('#midDot').removeClass("SpecialPattern5")
    $('#midDot').removeClass("SpecialPattern6")
    $('#catEyes').removeClass("rollingEyes")
    $('#midDot').removeClass("rollingEyes")
    $('#tail').removeClass("waggingTails")
    $('#fullCat').removeClass("disappearingCat")
    $('#fullCat').removeClass("walkingCat")
}

function AnimationType1() {
    resetAnimation();
    $("#head").addClass("movingHead")
}

function AnimationType2() {
    resetAnimation();
    $('#catEyes').addClass("rollingEyes")
}

function AnimationType3() {
    resetAnimation();
    $('#tail').addClass("waggingTails")
}

function AnimationType4() {
    resetAnimation();
    $('#fullCat').addClass("walkingCat")
}

function specialAnimationType1() {
    resetAnimation();
    $('#midDot').addClass("SpecialPattern1")
}
function specialAnimationType2() {
    resetAnimation();
    $('#midDot').addClass("SpecialPattern2")
}
function specialAnimationType3() {
    resetAnimation();
    $('#midDot').addClass("SpecialPattern3")
}
function specialAnimationType4() {
    resetAnimation();
    $('#midDot').addClass("SpecialPattern4")
}
function specialAnimationType5() {
    resetAnimation();
    $('#midDot').addClass("SpecialPattern5")
}
function specialAnimationType6() {
    resetAnimation();
    $('#midDot').addClass("SpecialPattern6")
}
function InvisibilityAnimation(){
    resetAnimation();
    $('#fullCat').addClass("disappearingCat")
}