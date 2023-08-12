$(document).ready(function(){
  

  // var value = $("#myselection option:selected");
  // alert(value.text());

  $('.swiper-filter').on( 'click', 'a', function() {
    var filter = $(this).attr('data-filter');
    console.log(filter);
    $('.swiper-product .swiper-slide').css('display', 'none')
    $('.swiper-product .swiper-slide' + filter).css('display', '')
    $( '.swiper-filter a' ).removeClass( 'swiper-active' );
    $( this ).addClass( 'swiper-active' );
    
    productSwiper.updateSize();
    productSwiper.updateSlides();
    productSwiper.updateProgress();
    productSwiper.updateSlidesClasses();
    productSwiper.slideTo(1);
    productSwiper.scrollbar.updateSize();
    
    return false;
  });

  var filterSwiper = new Swiper ('.swiper-filter', {
      slidesPerView: 3.2,
      spaceBetween: 30,
    })
  
  var productSwiper = new Swiper ('.swiper-product', {
      /*grabCursor: true,*/
      observer: true,
      slidesPerView: 3.2,
      runCallbacksOnInit: true,
      observer: true,
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2.2,
          spaceBetween: 20
        }
      },
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next-f-ct',
        prevEl: '.swiper-button-prev-f-ct',
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable : true,
      },
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable : true,
        snapOnRelease : true,
      },
      scrollbarHide:false,
      updateOnImagesReady: true
    })
  
});



