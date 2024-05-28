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
});
