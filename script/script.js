let btnToTop = document.querySelector('.footer__btn-to-top');

  btnToTop.onclick = function () {
    window.scrollTo(0, 0);
  };

  window.onscroll = function () {
    if (window.pageYOffset > 200) {
      btnToTop.classList.add('shown');
    } else {
      btnToTop.classList.remove('shown');
      }
  };
  