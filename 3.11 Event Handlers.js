var main = function() {
  $(".like-button").click(function() {
    $(this).toggleClass("active");
  });
};

$(document).ready(main);
