$(document).ready(function () {
  handleToggleMenuHeader();
  handleShowSearchBox();
  handleShowTabInModalLoginRegister();
  handleShowLabelFieldInModalLoginRegister();
  handleShowPassword();
  handleShowContentTabList();
  handleToggleDropdownMenuMobile();

  $(".menu__item").on("click", function () {
    for (const item of $(".menu__item")) {
      const classString = $(item).attr("class");
      if (classString.includes("--active")) {
        $(item).removeClass("--active");
      }
    }
    $(this).addClass("--active");
  });

  $("#icon-close-menu-mobile").on("click", function () {
    $("#menu-mobile").toggleClass("--hide");
  });

  $("#icon-show-menu-mobile").on("click", function () {
    $("#menu-mobile").toggleClass("--hide");
  });
});

function handleToggleDropdownMenuMobile() {
  $(".menu-mobile__menu-item").on("click", function () {
    $(this).find(".menu-mobile__child-menu").toggleClass("--hide");
    $(this).toggleClass("--extend");
    $($(this).find(".menu-mobile__icon-arrow")).toggleClass("--down");
  });
}

function handleShowContentTabList() {
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
}

function handleShowPassword() {
  $(".icon-display-password").on("click", function () {
    const inputPassword = $($(this).closest(".field-password")).find("input");
    $($(".field-password").find("input")).attr("type", "text");
    if ($(this).attr("class").includes("icon-show")) {
      $(inputPassword).attr("type", "text");
      $(".icon-show").toggleClass("--hidden");
      $(".icon-hidden").toggleClass("--hidden");
    } else {
      $(inputPassword).attr("type", "password");
      $(".icon-show").toggleClass("--hidden");
      $(".icon-hidden").toggleClass("--hidden");
    }
  });
}

function handleShowLabelFieldInModalLoginRegister() {
  $(".field-input-email").on("input", function () {
    const inputValue = $(this).val() ?? null;
    const parent = $(this).parent();
    const fieldText = $(parent).find(".field-text");
    if (inputValue !== "" && inputValue != null) {
      $(parent).addClass("--not-empty");
      $(fieldText).removeClass("--hidden");
    } else {
      $(parent).removeClass("--not-empty");
      $(fieldText).addClass("--hidden");
    }
  });

  $(".field-input-password").on("input", function () {
    const inputValue = $(this).val() ?? null;
    const parent = $(this).parent();
    const fieldText = $(parent).find(".field-text");
    if (inputValue !== "" && inputValue != null) {
      $(parent).addClass("--not-empty");
      $(fieldText).removeClass("--hidden");
    } else {
      $(parent).removeClass("--not-empty");
      $(fieldText).addClass("--hidden");
    }
  });
}

function handleShowTabInModalLoginRegister() {
  $(".modal-header__tabs--item").on("click", function () {
    for (const item of $(".line-color")) {
      const classString = $(item).attr("class");
      if (classString.includes("--active")) {
        $(item).removeClass("--active");
      }
    }

    for (const item of $(".modal-header__tabs--item")) {
      const classString = $(item).attr("class");
      if (classString.includes("--active")) {
        const currentTargetData = $(item).attr("target-data");
        $(`#${currentTargetData}`).toggleClass("--hidden");
      }
      $(item).removeClass("--active");
    }

    $(this).addClass("--active");
    $($(this).find(".line-color")).addClass("--active");
    const targetData = $(this).attr("target-data");
    $(`#${targetData}`).toggleClass("--hidden");
  });
}

function handleShowSearchBox() {
  $("#search-box").on("click", function () {
    $(".icon-box").addClass("--active");
    $(".icon-box__text").addClass("--active");
    $(".box-search").addClass("--active");
  });
  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(
        ".icon-box, #icon-search, icon-box__text, #search-box"
      ).length
    ) {
      $(".icon-box").removeClass("--active");
      $(".icon-box__text").removeClass("--active");
      $(".box-search").removeClass("--active");
    }
  });
}

function handleToggleMenuHeader() {
  toggleMenuHeader();
  window.addEventListener("scroll", function () {
    toggleMenuHeader();
  });
}

function toggleMenuHeader() {
  const pointCurrentScroll = window.pageYOffset;
  const page = $("#head-pc").attr("page");
  const topBarPcHeight = $("#top-bar-pc").height() ?? 0;
  const heightElementHeadPc = $("#head-pc").height() ?? 0;
  const heightElementHeadMain = $("#head-main").height() ?? 0;
  const screenWidth = window.screen.width;

  console.log("screenWidth", screenWidth);

  if (page != "post-detail") {
    if (screenWidth <= 992) {
      if (pointCurrentScroll > 0) {
        $("#head-pc").addClass("--fixed");
        $(".page-content").addClass("--pushed");
      } else {
        $("#head-pc").removeClass("--fixed");
        $(".page-content").removeClass("--pushed");
      }
    } else {
      if (pointCurrentScroll > topBarPcHeight) {
        $("#head-pc").addClass("--fixed");
        $(".page-content").addClass("--pushed");
      } else {
        $("#head-pc").removeClass("--fixed");
        $(".page-content").removeClass("--pushed");
      }
    }
  } else {
    if (screenWidth <= 992) {
      if (pointCurrentScroll > heightElementHeadPc) {
        $("#head-main-content, #submenu-pc").addClass("d-none");
        $("#submenu-mb").addClass("--fixed");
      } else {
        $("#head-main-content, #submenu-pc").removeClass("d-none");
        $("#submenu-mb").removeClass("--fixed");
      }
    } else {
      if (pointCurrentScroll > topBarPcHeight) {
        $("#head-pc").addClass("--fixed");
        $(".page-content").addClass("--pushed");
      } else {
        $("#head-pc").removeClass("--fixed");
        $(".page-content").removeClass("--pushed");
      }
    }
  }
}
