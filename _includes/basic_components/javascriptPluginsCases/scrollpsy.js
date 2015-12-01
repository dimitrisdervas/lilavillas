$('.scrollspy').scrollSpy();
var length = $('.sidebar-suggestions').height() - $('.scrollpsy-block').height() + $('.sidebar-suggestions').offset().top;

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();
        var height = $('.scrollpsy-block').height() + 'px';

        if (scroll < $('.sidebar-suggestions').offset().top) {

            $('.scrollpsy-block').css({
                'position': 'relative',
                'top': 'auto'
            });

        } else if (scroll > length) {

            $('.scrollpsy-block').css({
                'position': 'fixed',
                'top': '0'
            });

        } else {

            $('.scrollpsy-block').css({
                'position': 'relative',
                'top': 'auto'
            });

        }
    });

