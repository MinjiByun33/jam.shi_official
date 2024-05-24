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

    //처음들어갔을때 모습 만들기...
    $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
    $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌


});


$(function () {

//처음들어갔을때 모습 만들기...
$(".tab_content").hide(); //tab_content 부분을 모두 숨김.
$("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
$(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

//On Click Event
$("ul.tabs li").click(function () {

    $("ul.tabs li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
    //(클릭한 li만 붙음. 내가 클릭한 부분에 들어갈 스타일을 따로 붙여준다.)
    $(".tab_content").hide(); //모든 contents들 숨김

    var activeTab = $(this).find("span").attr("data");
    //내가 방금 클릭한 li 안에 있는 span태그의 data부분 안에 들어있는 id 이름을 가져오는것.
    $(activeTab).show(); //위에서 가져온 아이디 이름에 해당하는 대상만 보이게 한다.
    //여기서 fadeIn대신에 show를 쓰면 번쩍번쩍한 등장 느낌을 없앨 수 있다.
    return false;
});

    //swiper
    var swiper = new Swiper(".recipe_slide", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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


});
