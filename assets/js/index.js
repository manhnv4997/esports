$(document).ready(function () {
  window.addEventListener("scroll", function () {
    toggleMenuHeader();
    // const heightElementTopBarPc = $("#top-bar-pc").height() ?? 0;
    // const heightElementHead = $("#head-pc").height() ?? 0;
    // const heightAllElementTopPage = heightElementTopBarPc + heightElementHead;

    // const pointCurrentScroll = window.pageYOffset;
    // if (pointCurrentScroll > heightElementTopBarPc) {
    //   $("#head-pc").addClass("--fixed");
    //   $(".page-content").addClass("--pushed");
    // } else {
    //   $("#head-pc").removeClass("--fixed");
    //   $(".page-content").removeClass("--pushed");
    // }
  });
  $("#icon-close-menu-mobile").on("click", function () {
    $("#menu-mobile").toggleClass("--hide");
  });

  $("#icon-show-menu-mobile").on("click", function () {
    $("#menu-mobile").toggleClass("--hide");
  });

  $(".menu-mobile__icon-arrow").on("click", function () {
    $(this).toggleClass("--down");
  });

  $(".menu-mobile__menu-item").on("click", function () {
    console.log($(this));
    $(this).find(".menu-mobile__child-menu").toggleClass("--hide");
    $(this).toggleClass("--extend");
  });

  $(".tab-list__list-tab--li, .tab-scroll__head--li").on("click", function () {
    const parent = $(this).parent();
    for (const item of $(parent).find("li")) {
      const classString = $(item).attr("class");
      if (classString.includes("--active")) {
        const currentTargetData = $(item).attr("target-data");
        $(`#${currentTargetData}`).toggleClass("--hide");
      }
      $(item).removeClass("--active");
    }
    $(this).toggleClass("--active");
    const targetData = $(this).attr("target-data");
    $(`#${targetData}`).toggleClass("--hide");
  });
});

function toggleMenuHeader() {
  const heightElementTopBarPc = $("#top-bar-pc").height() ?? 0;
  const heightElementHead = $("#head-pc").height() ?? 0;

  const pointCurrentScroll = window.pageYOffset;
  if (pointCurrentScroll > heightElementTopBarPc) {
    $("#head-pc").addClass("--fixed");
    $(".page-content").addClass("--pushed");
  } else {
    $("#head-pc").removeClass("--fixed");
    $(".page-content").removeClass("--pushed");
  }
}
