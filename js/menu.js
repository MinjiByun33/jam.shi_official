$(document).ready(function () {

    //header 보여주기
    var jbOffset = $("header").offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 969) {
            $("header").addClass("on");
        }
        else {
            $("header").removeClass("on");
        }
    });

    // language
    $(".label").click(function () {
        $(".optionList").slideToggle(600, 'linear');
        $(".down").toggleClass("up");
    });


    //top버튼
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 969) {//아이콘이 나타나길 원하는 높이를 설정하세요
            $('.top_btn').fadeIn();//나타날 아이콘 클래스 수정!
        } else {
            $('.top_btn').fadeOut();//나타날 아이콘 클래스 수정!
        }
    });
});


$(function () {
    //부드럽게 화면이동
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);//움직이는 시간 조정
                return false;
            }
        }
    });

    //more
    $(".more_btn").mousedown(function () {
        $(this).addClass("more_click");
    });
    $(".more_btn").mouseup(function () {
        $(this).removeClass("more_click");
    });



    //  isotope
    $("#tab").waitForImages(function () {
        var $container = $(".tab_container");
        $container.isotope({
            filter: "*",
        });

        $(".tab_filter a").click(function () {
            $(".tab_filter .active").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr("data-filter");
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery",
                },
            });
            return false;
        });
    });

    $(".tab_array a").click(function () {
        $(".tab_array .active").removeClass("active");
        $(this).addClass("active");
    });

});
