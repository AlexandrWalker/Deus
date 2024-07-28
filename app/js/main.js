(() => {
  document.addEventListener('DOMContentLoaded', () => {

    (function () {
      var dropdownItem = document.querySelectorAll('.dropdown'),
        dropdownActive = document.getElementsByClassName('dropdown-active'),
        navMenu = document.getElementById('nav-menu');

      Array.from(dropdownItem).forEach(function (item, i, dropdownItem) {
        item.addEventListener('click', function (e) {
          if (dropdownActive.length > 0 && dropdownActive[0] !== this)
            dropdownActive[0].classList.remove('dropdown-active');

          this.classList.toggle('dropdown-active');
          navMenu.classList.toggle('visible');
        });

        navMenu.addEventListener('click', event => {
          event._isClickWithInMenu = true;
        });
        document.querySelector('.dropdown').addEventListener('click', event => {
          event._isClickWithInMenu = true;
        });
        document.body.addEventListener('click', event => {
          if (event._isClickWithInMenu) return;
          navMenu.classList.remove("visible")

          if (dropdownActive.length > 0 && dropdownActive[0] !== this)
            dropdownActive[0].classList.remove('dropdown-active');
        });

        window.addEventListener('keydown', (e) => {
          if (e.key === "Escape") {
            navMenu.classList.remove("visible")

            if (dropdownActive.length > 0 && dropdownActive[0] !== this)
              dropdownActive[0].classList.remove('dropdown-active');
          }
        });
      });
    })();

    (function () {
      let burger = document.getElementById("burger"),
        mobMenu = document.getElementById("mob-menu");

      burger.addEventListener("click", function () {
        burger.classList.toggle("active")
        mobMenu.classList.toggle("active")
        document.body.classList.toggle("no-scroll")
      })

      window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
          burger.classList.remove("active")
          mobMenu.classList.remove("active")
          document.body.classList.remove("no-scroll")
        }
      });
    })();

    const heroSlider = new Swiper('.hero__slider', {
      loop: true,
      effect: "fade",
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.hero__slider-next',
        prevEl: '.hero__slider-prev'
      },
    });

  });
})();