const divider = 20;

$(window).scroll(()=>{
    $(".scroll-spin").css({"transform":`rotate(${$(window).scrollTop()/divider}deg)`})
    $(this).scrollTop()/5
});