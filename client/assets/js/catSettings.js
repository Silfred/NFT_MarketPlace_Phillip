
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 23,
    "mouthColor" : 44,
    "eyesColor" : 62,
    "earsColor" : 15,
    //Cattributes
    "eyesShape" : 4,
    "decorationPattern" : 2,
    "decorationColor" : 15,
    "animation" :  4,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
    $('#dnabody').html(defaultDNA.headColor);
    $('#dnamouth').html(defaultDNA.mouthColor);
    $('#dnaeyes').html(defaultDNA.eyesColor);
    $('#dnaears').html(defaultDNA.earsColor);
      
    $('#dnashape').html(defaultDNA.eyesShape)
    $('#dnadecoration').html(defaultDNA.decorationPattern)
    $('#dnadecorationcolor').html(defaultDNA.decorationColor)
    $('#dnaanimation').html(defaultDNA.animation)
    $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationcolor').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    mouthAndBellyColor(colors[dna.mouthcolor],dna.mouthcolor)
    $('#mouthcolor').val(dna.mouthcolor)
    eyeColor(colors[dna.eyecolor],dna.eyecolor)
    $('#eyecolor').val(dna.eyecolor)
    earsAndPaw(colors[dna.earsColor],dna.earsColor)
    $('#earcolor').val(dna.earsColor)
    eyeVariation(dna.eyesShape)
    $('#eyeshape').val(dna.eyesShape)
    decorationVariation(dna.decorationPattern)
    $('#decorationvariation').val(dna.decorationPattern)
    decorationColor(colors[dna.decorationColor], dna.decorationColor)
    $('#decorationcolor').val(dna.decorationColor)
    animationVariation(dna.animation)
    $('#animation').val(dna.animation)
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})
$('#mouthcolor').change(()=>{
  var colorVal = $('#mouthcolor').val()
  mouthAndBellyColor(colors[colorVal],colorVal)
})
$('#eyecolor').change(()=>{
  var colorVal = $('#eyecolor').val()
  eyeColor(colors[colorVal],colorVal)
})
$('#earcolor').change(()=>{
  var colorVal = $('#earcolor').val()
  earsAndPaw(colors[colorVal],colorVal)
})
$('#eyeshape').change(()=>{
  var shape = parseInt($('#eyeshape').val()) // value between 1 and 7 
  eyeVariation(shape)
})
$('#decorationvariation').change(()=>{
  var shape = parseInt($('#decorationvariation').val()) // value between 1 and 7
  var animation = parseInt($('#animation').val())
  decorationVariation(shape, animation)
})
$('#decorationcolor').change(()=>{
  var colorVal = $('#decorationcolor').val()
  decorationColor(colors[colorVal],colorVal)
})

$('#animation').change(()=>{
  var animation = parseInt($('#animation').val()) // value between 1 and 7
  var shape = parseInt($('#decorationvariation').val())
  animationVariation(animation, shape)
})

function showCattributes(){
  $('#cattributes').removeClass('hidden')
  $('#catColors').addClass('hidden')
}

function showColors(){
  $('#cattributes').addClass('hidden')
  $('#catColors').removeClass('hidden')
}

//Default Kitty
$('#default').click(()=>{
  renderCat(defaultDNA)
})

// Random Kitty

$('#random').click(()=>{

  var body = Math.floor(Math.random()* 89) +10
  headColor(colors[body],body)
  $('#bodycolor').val(body)

  var mouthcolor = Math.floor(Math.random()* 89) +10
  mouthAndBellyColor(colors[mouthcolor],mouthcolor)
  $('#mouthcolor').val(mouthcolor)

  var eyecolor = Math.floor(Math.random()* 89) +10
  eyeColor(colors[eyecolor],eyecolor)
  $('#eyecolor').val(eyecolor)

  var earcolor = Math.floor(Math.random()* 89) +10
  earsAndPaw(colors[earcolor],earcolor)
  $('#earcolor').val(earcolor)

  var eyeshape = Math.floor(Math.random()*7) +1 // value between 1 and 7 
  eyeVariation(eyeshape)
  $('#eyeshape').val(eyeshape)
  
  var decoshape = Math.floor(Math.random()*7) +1 // value between 1 and 7
  var decoanimation = Math.floor(Math.random()*7) +1
  decorationVariation(decoshape, decoanimation)
  parseInt( $('#decorationvariation').val(decoshape))

  var decocolor = Math.floor(Math.random()*89) +10
  decorationColor(colors[decocolor],decocolor)
  $('#decorationcolor').val()

  var animation = Math.floor(Math.random()*7) +1 // value between 1 and 7
  var shape = Math.floor(Math.random()*7) +1
  if(animation == 4){
    parseInt( $('#animation').val(decoanimation))
    parseInt( $('#decorationvariation').val(decoshape))
    animationVariation(decoanimation, decoshape)
  }
  else{
    parseInt( $('#animation').val(animation))
    animationVariation(animation, shape)
  }

})

