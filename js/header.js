changeHeaderHeight();
$(window).scroll(changeHeaderHeight);
function changeHeaderHeight() {
    $(".header").css({"max-height":(9*16>(($(window).scrollTop())/2))?9*16-(($(window).scrollTop())/2):"4em"});
  }