var main = function() {
  $(".btn").click(function() {
  	$(this).toggleClass('active');
  });
};

$(document).ready(main);
