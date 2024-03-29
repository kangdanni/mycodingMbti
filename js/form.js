function scrollUp() {
  const vheight = $(".test").height();
  $("html, body").animate(
    {
      scrollTop: (Math.ceil($(window).scrollTop() / vheight) - 1) * vheight,
    },
    500
  );
}

function scrollDown() {
  const vheight = $(".test").height();
  $("html, body").animate(
    {
      scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight,
    },
    500
  );
}

$(function () {
  $(".next_btn").click(function (e) {
    let divs = $(this).parent().prev().children();
    let inputs = divs.find("input:checked");
    if (inputs.length < 1) {
      alert("문항이 선택되지 않았습니다.");
      return false;
    }
    e.preventDefault();
    scrollDown();
  });

  $(".prev_btn").click(function (e) {
    e.preventDefault();
    scrollUp();
  });

  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
});
