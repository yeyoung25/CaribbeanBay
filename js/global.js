$(document).ready(function () {
  customSlider(".banslider",'fade',true,1000,7000,true,true,1,1,0,0,null,'short',false,0);
  customSlider(".speslider",'horizontal',false,500,0,false,true,5,1,214,45,null,'full',false,0);
  headerAct();
  menuButton();
  gotop();
  sumDetail();
  mainHeader();
  justCopy();
  bxExt01();
  bxExt02();
  bxExt03();
  mainFnb($("header #fnbPanel ul>li"));
});

function mainHeader(){
  if(!$("#wrap").hasClass("indexContainer")){
    $("header").addClass("mouseOver");
  }else{
    headerEvent();
  }
}

function customSlider(sliderName,modeVal,slideAuto,slideSpeed,slidePause,slideInfiniteLoop,slideControls,slideMaxSlides,slideMinSlides,slideSlideWidth,slideSlideMargin,slidePagerCustom,slidepagerType,slideshrinkItems,slidemoveSlides){
    $(sliderName).bxSlider({
        mode: modeVal,
        auto: slideAuto,
        speed: slideSpeed,
        pause: slidePause,
        infiniteLoop: slideInfiniteLoop, 
        controls: slideControls,
        maxSlides: slideMaxSlides,
        minSlides: slideMinSlides,
        slideWidth: slideSlideWidth,
        slideMargin: slideSlideMargin,
        pagerCustom: slidePagerCustom,
        pagerType: slidepagerType,
        shrinkItems: slideshrinkItems,
        moveSlides: slidemoveSlides
    });
}
function bxExt01(){
  var $btn = $("[class^='thumbPager01'] li");
  $btn.click(function(){
    var target = "." + $(this).prop("class").replace("bx-clone","");
    $(this).siblings().removeClass("active");
    $(target).addClass("active");
  });
}
function bxExt02(){
  var $btn = $("[class^='thumbPager02'] li");
  $btn.click(function(){
    var target = "." + $(this).prop("class").replace("bx-clone","");
    $(this).siblings().removeClass("active");
    $(target).addClass("active");
  });
}
function bxExt03(){
  var $btn = $("[class^='thumbPager03'] li");
  $btn.click(function(){
    var target = "." + $(this).prop("class").replace("bx-clone","");
    $(this).siblings().removeClass("active");
    $(target).addClass("active");
  });
}

function headerScroll() {
  if (!$("#wrap").hasClass("indexContainer")) {
    return;
  } else if ($(window).scrollTop() == 0 && !$("#fnbPanel").hasClass("act")) {
    $("header").removeClass("mouseOver");
    $(".go_top").addClass("scrollTop");
  } else {
    $("header").addClass("mouseOver");
    $(".go_top").removeClass("scrollTop");
  }
}

function headerEvent() {
  $("header").hover(
    function () {
      $("header").addClass("mouseOver");
    },
    function () {
      if ($(window).scrollTop() == 0 && !$("#fnbPanel").hasClass("act")) {
        $("header").removeClass("mouseOver");
      }
    }
  );

  headerScroll();
  $(window).scroll(headerScroll);
}

function headerAct() {
  var headerHight = $("header").innerHeight();
  $("#fnbPanel").css("top", headerHight + "px");
  $(window).resize(function() {
    headerHight = $("header").innerHeight();
    $("#fnbPanel").css("top", headerHight + "px");
  });

  $(".menuBar").click(function () {
    $("body").toggleClass("scrollNone");
    $("#fnbPanel").toggleClass("act");
    if (!$("#fnbPanel").hasClass("act") && $(window).scrollTop() !== 0) {
      $(".go_top").removeClass("scrollTop");
      headerScroll();
    } else {
      $(".go_top").addClass("scrollTop");
      headerScroll();
    }
  });
}

function menuButton(){
  var menuBar = document.querySelector(".menuBar");
  menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("toggle");
  });
}

function gotop(){
  $(".go_top").click(function(){
      $('html, body').animate({scrollTop: '0'}, 680);
  });
}

function sumDetail(){ 
  $("summary").click(function(){
    if($("summary").hasClass("on")){
      $("summary").removeClass("on");
    }else {
      $("summary").addClass("on");
    }
  });
}

function justCopy(){
  var copyContent = "";
  $("#btnCopy").click(function(){
    copyContent = $("#copyMap").text();
    alert("Copied.");
  });
}

function mainFnb(button){

  $(button).click(function(){
    let li = $(this).find('li');
    let liHeight = li.outerHeight(true);
    let margin = li.outerHeight(true) - li.outerHeight();
    let liLength = li.length;
    let height = liHeight * liLength - margin;

    console.log(height)
    
    $(this).toggleClass("active");

    if($(this).hasClass('active')){
        $(this).children('ol').css('height', height + 'px');
    }else {
        $(this).children('ol').css('height', 0 + 'px');
    }
});
}
