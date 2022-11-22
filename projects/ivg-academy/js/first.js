     //  banner slick
     $('.banner-section').slick({
         dots: true,
         arrows: true,
         infinite: true,
         autoplay: false,
         prevArrow: $('#btn-left'),
         nextArrow: $('#btn-right'),
         slidesToShow: 1,
         slidesToScroll: 1,
         responsive: [{
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                 }
             },
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
             }
         ]
     });
     // banner slick end

     // testimonial slick
     $('.testimonail-slick').slick({
         dots: false,
         arrows: true,
         infinite: true,
         autoplay: false,
         prevArrow: $('#prv'),
         nextArrow: $('#nxt'),
         slidesToShow: 1,
         slidesToScroll: 1,
         responsive: [{
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     arrows: false,
                 }
             },
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
             }
         ]
     });
     // testimional slick ends


     // counter js
     var a = 0;
     $(window).scroll(function () {
         var oTop = $('.counter_section').offset().top - window.innerHeight;
         if (a == 0 && $(window).scrollTop() > oTop) {
             $('.counter_value').each(function () {
                 var $this = $(this),
                     countTo = $this.attr('data-count');
                 $({
                     countNum: $this.text()
                 }).animate({
                     countNum: countTo
                 }, {
                     duration: 2000,
                     easing: 'swing',
                     step: function () {
                         $this.text(Math.floor(this.countNum));
                     },
                     complete: function () {
                         $this.text(separator(this.countNum));
                         //alert('finished');
                     }
                 });
             });
             a = 1;
         }
     });
     // counter js ends

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