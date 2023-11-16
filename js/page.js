$(document).ready(function(){
    justToggle($("div div:first-child nav div"));

});

function justToggle(button){
$(button).click(function(){
    $(this).toggleClass("active");
});
}
  