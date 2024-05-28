$(document).ready(function () {
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

  $(".tab__item").on("click", function () {
    for (const item of $(".tab__item")) {
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
