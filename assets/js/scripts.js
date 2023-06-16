$(document).ready(function(){

  $('#urban').on('click', function(){
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#feat-urban").offset().top
  }, 1000);
  })
  $('#archit').on('click', function(){
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#feat-architecture").offset().top
  }, 1000);
  })
  $('#sustain').on('click', function(){
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#feat-sustain").offset().top
  }, 1000);
  })
  $('#technical').on('click', function(){
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#feat-technical").offset().top
  }, 1000);
  })

})

