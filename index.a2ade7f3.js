function swiperSlider(){var e=document.querySelectorAll('[data-slider="team-slider"]');e&&e.forEach((function(e){var i=e.querySelector(".swiper-button-prev"),t=e.querySelector(".swiper-button-next"),s=e.querySelector(".swiper-pagination");new Swiper(e.querySelector(".swiper"),{speed:1500,centeredSlides:!1,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:2,spaceBetween:16,pagination:{el:s,clickable:!0,renderBullet:function(e,i){return'<li class="'+i+'"></li>'}},navigation:{nextEl:t,prevEl:i},on:{transitionStart:function(){var i=this.previousIndex,t=e.getElementsByClassName("swiper-slide")[i];t&&setTimeout((function(){t.classList.remove("is-play")}),1e3)},transitionEnd:function(){var i=this.activeIndex;e.getElementsByClassName("swiper-slide")[i].classList.add("is-play")}},breakpoints:{320:{slidesPerView:2,spaceBetween:16},1024:{slidesPerView:2,spaceBetween:40},1280:{slidesPerView:2,spaceBetween:40}}})}));var i=document.querySelectorAll('[data-slider="hotel-slider"]');i&&i.forEach((function(e){var i=e.querySelector(".swiper-button-prev"),t=e.querySelector(".swiper-button-next"),s=e.querySelector(".swiper-pagination");new Swiper(e.querySelector(".about-hotel-slider"),{speed:1500,slidesPerView:2,spaceBetween:20,pagination:{el:s,clickable:!0,renderBullet:function(e,i){return'<li class="'+i+'"></li>'}},navigation:{nextEl:t,prevEl:i},on:{transitionStart:function(){var i=this.previousIndex,t=e.getElementsByClassName("swiper-slide-homepage")[i];t&&setTimeout((function(){t.classList.remove("is-play")}),1e3)},transitionEnd:function(){var i=this.activeIndex;e.getElementsByClassName("swiper-slide-homepage")[i].classList.add("is-play")}},breakpoints:{320:{slidesPerView:2,spaceBetween:16},1024:{slidesPerView:3,spaceBetween:34},1280:{slidesPerView:3,spaceBetween:40}}})}));var t=document.querySelectorAll('[data-slider="team-slider"]');t&&t.forEach((function(e){var i=e.querySelector(".swiper-button-prev"),t=e.querySelector(".swiper-button-next"),s=e.querySelector(".swiper-pagination");new Swiper(e.querySelector(".swiper"),{speed:1500,centeredSlides:!1,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:2,spaceBetween:16,pagination:{el:s,clickable:!0,renderBullet:function(e,i){return'<li class="'+i+'"></li>'}},navigation:{nextEl:t,prevEl:i},on:{transitionStart:function(){var i=this.previousIndex,t=e.getElementsByClassName("swiper-slide")[i];t&&setTimeout((function(){t.classList.remove("is-play")}),1e3)},transitionEnd:function(){var i=this.activeIndex;e.getElementsByClassName("swiper-slide")[i].classList.add("is-play")}},breakpoints:{320:{slidesPerView:2,spaceBetween:16},1024:{slidesPerView:2,spaceBetween:40},1280:{slidesPerView:2,spaceBetween:40}}})}))}window.addEventListener("load",swiperSlider,!1);
//# sourceMappingURL=index.a2ade7f3.js.map
