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

  //flavor 슬라이드
  var swiper = new Swiper(".flavor_swiper", {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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

  //new&best 탭
  $(".tab_content").hide();
  $(".tab_btn li:first").addClass("active").show();
  $(".tab_content:first").show();

  //On Click Event
  $(".tab_btn li").click(function () {
    $(".tab_btn li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active");
    $(".tab_content").hide();

    var activeTab = $(this).find("span").attr("data");
    $(activeTab).fadeIn();
    return false;
  });
});


$(function () {
  //좋아요 토글효과
  $(".likes").click(function () {
    $(this).children(".heart").toggleClass("like_toggle");
  });

  $(".label").click(function () {
    $(".optionList").slideToggle(600, 'linear');
    $(".down").toggleClass("up");
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
