document.querySelectorAll('.slider').forEach((slider, idx) => {
   window[`slider_${idx+1}`] = new Swiper(slider, {
      freeMode : true,
      centeredSlides : true,
      direction : 'vertical',
      mousewheel : true,
      slidesPerView : 1.75,
      slidesOffsetBefore : -120
   });
});

bindSwipers(slider_1, slider_2, slider_3, slider_4);