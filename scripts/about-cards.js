
$(".about-card").mousemove(function (e) {
    const limits = 35.0;
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top; 
    let offsetX = x / rect.width;
    let offsetY = y / rect.height;

    let rotateY = (offsetX) * (limits * 2) - limits;
    let rotateX = (offsetY) * (limits * 2) - limits;


  $(this).css({
    transform: "perspective(1000px) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)"
  });

  let glarePos = rotateX + rotateY + 90;
  $(this)
    .children()
    .children()
    .css("left", glarePos + "%");
});

$(".about-card").mouseleave(function () {
  $(".about-card").css({ "transform": "scale(1.0)"});
});
