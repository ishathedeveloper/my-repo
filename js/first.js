$('.toggle-button').on('click', function(e) {
    $('.fixed-header').toggleClass("mobile-open"); //you can list several class names 
    e.preventDefault();
  });