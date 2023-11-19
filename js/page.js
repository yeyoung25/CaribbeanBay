$(document).ready(function(){
    navToggle($("div div:first-child nav div"));
    newspage();
    howTab();
    trafTab();
    backBtn($(".backBtn"));
    smoothtoAnchor();
});

function navToggle(button){
    $(button).click(function(){
        $(this).toggleClass("active");
    });
}

function newspage(){
    $(".lastP").click(function(e){
        alert("This is the last page.");
    });
  };

  function howTab(){
    $('.howCBContainer div:nth-child(2) ul.la9_20 li').click(function(){
      $('.howCBContainer div:nth-child(2) ul li').removeClass('active');
      $(this).addClass('active');
      $('.howCBContainer div:nth-child(2) div').removeClass('active');
      $('.' + $(this).attr('data-tab')).addClass('active');
    });
  }

  function trafTab(){
    $('.trafCBContainer div:nth-child(2) ul li').click(function(){
      $('.trafCBContainer div:nth-child(2) ul li').removeClass('active');
      $(this).addClass('active');
      $('.trafCBContainer div:nth-child(2) div').removeClass('active');
      $('.' + $(this).attr('data-tab')).addClass('active');
    });
  }

  function backBtn(button){
    $(button).click(function(){
      history.go(-1);
    });
  }

  function smoothtoAnchor(){
    const urlParams = new URL(location.href).searchParams;
    const scroll = urlParams.get('scroll');
  
    $('html,body').animate({ scrollTop: $("#" + scroll).offset()?.top - 150 }, 450, 'swing');
  }