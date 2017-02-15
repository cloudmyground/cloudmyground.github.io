var main = function(){
  //console.log('miss me?');

  //------Smooth scrolling to anchor tag------//
  $('#pullwork').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
  });
};
$(document).ready(main);
