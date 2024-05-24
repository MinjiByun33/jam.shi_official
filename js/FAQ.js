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

    //tab
    $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
    $(".tabs li:nth-child(2)").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_content:first").show();

    //On Click Event
    $("ul.tabs li").click(function () {
        $(".tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();

        var activeTab = $(this).find("span").attr("tabs");
        $(activeTab).fadeIn();
        return false;
    });


    //같은 페이지 내에서 동작하게 하는 코드
    //   $(".sub li").click(function () {
    //     var indexNo = $(this).index();
    //     $(".tabs li").removeClass("active");
    //     $(".tabs li").eq(indexNo).addClass("active");
    //     $(".tab_content").hide();
    //     var activeTab2 = $(".tabs li.active").find("span").attr("tabs");
    //     $(activeTab2).fadeIn();
    //     return false;
    //   });


    //   //다른 페이지에서 이동할때 필요한 코드
    //   var location = window.location.hash;
    //   var tab_arr = [];
    //   $(".tabs li span").each(function (index, element) {
    //     tab_arr.push($(this).attr("tabs"));
    //   });

    //   var numb = jQuery.inArray(location, tab_arr)
    //   $('.tabs li').removeClass("active");
    //   $('.tabs li').eq(numb).addClass("active");
    //   $(".tab_content").hide();
    //   $('.tab_container').find(location).show();

    //   return false;

    //number
    $(".num").click(function () {
        $(this).siblings(".num").removeClass("num_on");
        $(this).addClass("num_on");

    });



});


$(function () {
    //vertical swiper
    var swiper = new Swiper(".notice", {
        direction: "vertical",
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

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

    //아코디언
    $(".tab_container>.tab_content>li").click(function () {
        $(this).children(".answer").slideToggle();
    });
    $(".tab_container>.tab_content>li").click(function () {
        $(this).children(".question").toggleClass("turn");

    });

});
