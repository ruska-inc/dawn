$(window).on('load scroll', function () {
  var box = $('.blur');
  var animated = 'animated';

  box.each(function () {
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if (scrollPos > boxOffset - wh + 200) {
      $(this).addClass(animated);
    }
  });
});

//float-btn
window.addEventListener('scroll', function () {
  var fadeInElements = document.querySelectorAll('.froat-button');
  fadeInElements.forEach(function (element) {
    element.style.opacity = 1;
  });
});
