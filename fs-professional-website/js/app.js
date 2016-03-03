var $logo = $(".logo");
var $main = $(".main");

$logo.on("mouseenter", function(){
  $logo.addClass("logoL");
});

$logo.on("mouseleave", function(){
  $logo.removeClass("logoL");
});

$logo.on("click", function(){
    $logo.addClass("logoH");
    setTimeout(function() {
        $main.addClass("show");
    }, 1200);
    setTimeout(function() {
        $logo.addClass("hide");
    }, 5000);
});

$("#project").click(function() {
    $('html,body').animate({
      scrollTop: $("#projectPage").offset().top},
      'slow');

      setTimeout(function(){
        $(".project-img").addClass("animated flipInX");
      }, 200);

});

$("#about").click(function() {
    $('html,body').animate({
      scrollTop: $("#aboutPage").offset().top},
      'slow');
});

$(".logoN").click(function() {
    $('html,body').animate({
      scrollTop: 0},
      'slow');

});
