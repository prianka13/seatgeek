$("[data-toggle=popover]").popover({
  html: true,
  content: function () {
    var content = $(this).attr("data-popover-content");
    return $(content).children(".popover-body").html();
  }
});

$("#date_icon").click(function () {
  $("i#arrow").toggle();
  $(".dropdown-menu").toggle();
});