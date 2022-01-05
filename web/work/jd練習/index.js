window.addEventListener('load' , function(){
    var goback = this.document.querySelector('.goback')
    this.window.addEventListener('scroll' , function(){
        if(window.pageYOffset > 500){
            goback.style.display = 'block'
        }else{
            goback.style.display = 'none'
        }
    })
    goback.addEventListener('click' , function(){
        window.scroll(0 ,0)
    })
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
})