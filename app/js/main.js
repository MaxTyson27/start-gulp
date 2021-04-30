$(function () {
  $('.products__item-content').matchHeight();

  $('.tabs__item-title').on('click', function () {
    if ($('.tabs__items').hasClass('tabs__items-one')) {
      if ($('.tabs__item-title').not($(this)).hasClass('tabs__item-title--active')) {
        $('.tabs__item-title--active').toggleClass('tabs__item-title--active').next().slideToggle(300);
      }
      $('tabs__item-title').not($(this)).removeClass('tabs__item-title--active');
      $('tabs__item-content').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('tabs__item-title--active').next().slideToggle(300);
  });
});

