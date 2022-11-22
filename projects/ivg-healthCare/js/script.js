$('.toggle-button').on('click', function(e) {
    $('.fixed-header').toggleClass("mobile-open"); //you can list several class names 
    e.preventDefault();
  });

//    // testimoniak-slick
$('.testimonial-slick').slick({
    dots: false,
    arrows: true,
         infinite: true,
         autoplay: false,
         prevArrow: $('#btn-left'),
         nextArrow: $('#btn-right'),
         slidesToShow: 1,
         slidesToScroll: 1
     
  });
 // testimoniak-slick end

//   accordion js
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
// accordion js end
