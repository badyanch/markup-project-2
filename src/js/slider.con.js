function swiperSlider() {


  // клас який потрібно брати і налаштовувати під себе

  const teamMain = document.querySelectorAll('[data-slider="team-slider"]');

  
  //const heroSlider = document.querySelectorAll('[data-slider="hero-slider"]');
  if (teamMain) {
    teamMain.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      //коментуємо чи видаляемо якщо не потрібно
      let pagination = slider.querySelector('.swiper-pagination');
      //коментуємо чи видаляемо якщо не потрібно

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 500,
        // автоплей
        centeredSlides: false,
        autoplay: {
        delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 2, // кількість слайдерів для показу
        spaceBetween: 16, // відстань між слайдерами
        loop: true,
        

        // крапки пагінації
        pagination: {
          el: pagination,
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
          },
        },
        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView:2,
            spaceBetween: 16,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is >= 1200px
          1280: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    });
  }


  // homepage-about-hotel

 const aboutHotel = document.querySelectorAll('[data-slider="hotel-slider"]');

  
  //const heroSlider = document.querySelectorAll('[data-slider="hero-slider"]');
  if (aboutHotel) {
    aboutHotel.forEach(slider => {
      // кнопки вперед та назад
       // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      //коментуємо чи видаляемо якщо не потрібно
      let pagination = slider.querySelector('.swiper-pagination');
      //коментуємо чи видаляемо якщо не потрібно

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 500,
        // автоплей
        centeredSlides: false,
        autoplay: {
        delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 2, // кількість слайдерів для показу
        spaceBetween: 16, // відстань між слайдерами
        // loop: true,
        // крапки пагінації
        pagination: {
          el: pagination,
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
          },
        },
        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView:2,
            spaceBetween: 16,
            // loop: true,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 3,
            spaceBetween: 34,
          },
          // when window width is >= 1200px
          1280: {
            slidesPerView: 3,
            spaceBetween: 86,
          },
        },
      });
    });
  }

  // if (heroSlider) {
  //     heroSlider.forEach(slider => {
  //         //
  //         let arrowLeft = slider.querySelector('.swiper-button-prev');
  //         let arrowRight = slider.querySelector('.swiper-button-next');
  //         //

  //         let pagination = slider.querySelector('.swiper-pagination');
  //         swiper = new Swiper(slider.querySelector('.swiper'), {
  //             speed: 500,
  //             //centeredSlides: true,
  //             // autoplay: {
  //             //     delay: 3000,
  //             //     disableOnInteraction: false,
  //             // },
  //             slidesPerView: 1,
  //             spaceBetween: 20,
  //             pagination: {
  //                 el: pagination,
  //                 clickable: true,
  //                 renderBullet: function (index, className) {
  //                     return '<li class="' + className + '"></li>';
  //                 },
  //             },
  //             //
  //             navigation: {
  //                 nextEl: arrowRight,
  //                 prevEl: arrowLeft,
  //             },
  //             //
  //             on: {
  //                 transitionStart: function () {
  //                     let previousIndex = this.previousIndex;
  //                     let previousSlide = slider.getElementsByClassName('swiper-slide')[previousIndex];
  //                     if (previousSlide) {
  //                         setTimeout(function () {
  //                             previousSlide.classList.remove('is-play');
  //                         }, 1000);
  //                     }
  //                 },
  //                 transitionEnd: function () {
  //                     let activeIndex = this.activeIndex;
  //                     let activeSlide = slider.getElementsByClassName('swiper-slide')[activeIndex];
  //                     activeSlide.classList.add('is-play');
  //                 },
  //             },
  //             breakpoints: {
  //                 // when window width is >= 320px
  //                 320: {
  //                     slidesPerView: 1,
  //                     spaceBetween: 20,
  //                 },
  //                 // when window width is >= 480px
  //                 768: {
  //                     slidesPerView: 2,
  //                     spaceBetween: 30
  //                 },
  //                 // when window width is >= 640px
  //                 1200: {
  //                     slidesPerView: 3,
  //                     spaceBetween: 40
  //                 }
  //             }

  //         });
  //     });
  // }



  // restaurant about

  const restaurantAbout = document.querySelectorAll('[data-slider="restaurantAbout"]');

  
  //const heroSlider = document.querySelectorAll('[data-slider="hero-slider"]');
  if (restaurantAbout) {
    restaurantAbout.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      //коментуємо чи видаляемо якщо не потрібно
      let pagination = slider.querySelector('.swiper-pagination');
      //коментуємо чи видаляемо якщо не потрібно

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 500,
        // автоплей
        centeredSlides: false,
        autoplay: {
        delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 2, // кількість слайдерів для показу
        spaceBetween: 16, // відстань між слайдерами
        loop: true,
        // крапки пагінації
        pagination: {
          el: pagination,
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
          },
        },
        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView:2,
            spaceBetween: 24,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is >= 1200px
          1280: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    });
  }






  
// homepage restaurant

  const detailsrestaurant = document.querySelectorAll('[data-slider="detailsrestaurant"]');

  
  //const heroSlider = document.querySelectorAll('[data-slider="hero-slider"]');
    if (detailsrestaurant) {
    detailsrestaurant.forEach(slider => {

      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      //коментуємо чи видаляемо якщо не потрібно
      let pagination = slider.querySelector('.swiper-pagination');
      //коментуємо чи видаляемо якщо не потрібно

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 500,
        // автоплей
        // centeredSlides: false,
        // autoplay: {
        // delay: 3000,
        //     disableOnInteraction: false,
        // },
        slidesPerView: 2, // кількість слайдерів для показу
        spaceBetween: 16, // відстань між слайдерами
        loop: true,
        // крапки пагінації
        pagination: {
          el: pagination,
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
          },
        },
        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView:2,

            spaceBetween: 24,

          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 2,
            spaceBetween: 34,
          },
          // when window width is >= 1200px
          1280: {
            slidesPerView: 2,
            spaceBetween: 86,
          },
        },
      });
    });
  }

   

}
window.addEventListener('load', swiperSlider, false);

