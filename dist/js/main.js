(() => {
  document.addEventListener('DOMContentLoaded', () => {

    //============================================================DROPDOWN-START
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
    //============================================================DROPDOWN-END

    //============================================================BURGER-BTN-START
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
    //============================================================BURGER-BTN-END

    //============================================================SWIPER-START
    const progressCircle = document.querySelector(".autoplay-progress svg");

    const heroSlider = new Swiper('.hero__slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoHeight: true,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: '.hero__slider-next',
        prevEl: '.hero__slider-prev'
      },
    });

    const advanSlider = new Swiper('.advan__slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 60,
      centeredSlides: true,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.advan__slider-next',
        prevEl: '.advan__slider-prev'
      },
    });

    const partnersSlider = new Swiper('.partners__slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 60,
      centeredSlides: true,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    //============================================================SWIPER-END

    //============================================================TAB-START
    const tabBtn = document.querySelectorAll('.why__tab')
    const tabItem = document.querySelectorAll('.why__items')

    tabBtn.forEach(tabClick);

    function tabClick(item) {
      item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('tab-active')) {

          tabBtn.forEach(function (item) {
            item.classList.remove('tab-active');
          });

          tabItem.forEach(function (item) {
            item.classList.remove('tab-active');
          });

          currentBtn.classList.add('tab-active');
          currentTab.classList.add('tab-active');
        }
      })
    }
    //============================================================TAB-END

    //============================================================MODAL-START
    var close = document.querySelectorAll('.modal__close-btn');
    var openBtn = document.querySelectorAll('.modal-btn');

    Array.from(openBtn, openButton => {
      openButton.addEventListener('click', e => {
        let modalId = e.target.getAttribute('data-id');
        document.getElementById(modalId).classList.add("open");

        Array.from(close, closeButton => {
          closeButton.addEventListener('click', e => document.getElementById(modalId).classList.remove("open"));

          window.addEventListener('keydown', (e) => {
            if (e.key === "Escape") {
              document.getElementById(modalId).classList.remove("open")
            }
          });

          document.querySelector(".modal.open .modal__box").addEventListener('click', event => {
            event._isClickWithInModal = true;
          });

          document.getElementById(modalId).addEventListener('click', event => {
            if (event._isClickWithInModal) return;
            event.currentTarget.classList.remove('open');
          });
        });
      });
    });
    //============================================================MODAL-END

  });
})();