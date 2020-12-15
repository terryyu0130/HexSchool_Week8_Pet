(function () {
  $(document).ready(function () {
      // Modal
      $('.intro .intro-reservation').on('click', function () {
          $('.reservation-content-alert').show();
      });
      //Home
      $('.back-home').on('click', function () {
          $('.reservation-content-alert').hide();
      });
      // reservation-content
      $('.next-reservation-content').on('click', function () {
          $('.reservation-content-alert').hide();
          $('.reservation-data-alert').show();
      });
      $('.back-reservation-content').on('click', function () {
          $('.reservation-data-alert').hide();
          $('.reservation-content-alert').show();
      });
      // reservation-data
      $('.next-reservation-data').on('click', function () {
          $('.reservation-data-alert').hide();
          $('.reservation-payment-alert').show();
      });
      $('.back-reservation-data').on('click', function () {
          $('.reservation-payment-alert').hide();
          $('.reservation-data-alert').show();
      });
      // reservation-payment
      $('.next-reservation-payment').on('click', function () {
          $('.reservation-data-alert').hide();
          $('.reservation-success-alert').show();
      });

      // member-menu
      $('.member-btn').on('click', function () {
          $(this).toggleClass('active');
          $('.member-header .member-menu').slideToggle();
      });

      // Switch photo
      $('.sub-photo-group .pic-one').on('click', function () {
          $('.photo-group .photo-two').hide();
          $('.photo-group .photo-three').hide();
          $('.photo-group .photo-four').hide();
          $('.photo-group .photo-one').show();
      });
      $('.sub-photo-group .pic-two').on('click', function () {
          $('.photo-group .photo-one').hide();
          $('.photo-group .photo-three').hide();
          $('.photo-group .photo-four').hide();
          $('.photo-group .photo-two').show();
      });
      $('.sub-photo-group .pic-three').on('click', function () {
          $('.photo-group .photo-one').hide();
          $('.photo-group .photo-two').hide();
          $('.photo-group .photo-four').hide();
          $('.photo-group .photo-three').show();
      });
      $('.sub-photo-group .pic-four').on('click', function () {
          $('.photo-group .photo-one').hide();
          $('.photo-group .photo-two').hide();
          $('.photo-group .photo-three').hide();
          $('.photo-group .photo-four').show();
      });
      // Mobile menu btn
      $('.header .btn').on('click', function () {
          $('.header .menu').slideToggle();
      });
  });
  
  if ( screen.width > 414 ) {
      // Swiper
      var mySwiper = new Swiper(".swiper-container", {
         // Optional parameters
         // 預設值是derection: 'horizonral，所以拿掉vertical就變水平'
         //direction: 'vertical',
         derection: "horizonral",
         //速度
         loop: true,
         //是否重複播放
         speed: 1200,
 
         //If we need Auto Play
         autoplay: {
             delay: 3000
         },
 
         //If we want to change effect
         effect: "slide",
 
         // If we need pagination
         pagination: {
             el: ".swiper-pagination"
         },
 
         // Navigation arrows
         navigation: {
             nextEl: ".swiper-button-next",
             prevEl: ".swiper-button-prev"
         }
 
         // And if we need scrollbar
         //如果不要就連同html一起拿掉
         // scrollbar: {
         //     el: '.swiper-scrollbar',
         // },
     });
 }
 else {
     var mySwiper = new Swiper(".swiper-container", {
 
         loop: false
 
     });
 }
})();