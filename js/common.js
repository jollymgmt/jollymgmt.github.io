// svg icons support ie11
(function () {
    svg4everybody();
})();

// carousel arrows
var navArrows = ['\n    <svg class="icon icon-arrow-prev">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use>\n    </svg>', '<svg class="icon icon-arrow-next">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use>\n    </svg>'];

// owl carousel
$(document).ready(function () {
    var slider = $('.js-slider-gallery');
    slider.owlCarousel({
        items: 2,
        nav: true,
        navElement: 'button',
        navText: navArrows,
        dots: false,
        loop: true,
        smartSpeed: 700,
        responsive: {
            0: {
                nav: false,
                dots: true,
                items: 1
            },
            768: {
                nav: true,
                dots: false,
                items: 1
            },
            1024: {
                items: 2
            }
        }
    });
});

// header
(function () {
    var header = $('.js-header'),
        burger = header.find('.js-header-burger'),
        wrap = header.find('.js-header-wrap'),
        bg = header.find('.js-header-bg'),
        link = $('.js-link');
    burger.on('click', function () {
        burger.toggleClass('active');
        wrap.toggleClass('visible');
        bg.toggleClass('show');
    });
    bg.on('click', function () {
        burger.removeClass('active');
        wrap.removeClass('visible');
        bg.removeClass('show');
    });
    link.on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
        burger.removeClass('active');
        wrap.removeClass('visible');
        bg.removeClass('show');
    });
})();

AOS.init();