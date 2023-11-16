$(document).ready(function(){
    navToggle($("div div:first-child nav div"));
    newspage();
    howTab();
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
    $('.howCBContainer div:nth-child(2) ul li').click(function(){
      $('.howCBContainer div:nth-child(2) ul li').removeClass('active');
      $(this).addClass('active');
      $('.howCBContainer div:nth-child(2) div').removeClass('active');
      $('.' + $(this).attr('data-tab')).addClass('active');
    });
  }