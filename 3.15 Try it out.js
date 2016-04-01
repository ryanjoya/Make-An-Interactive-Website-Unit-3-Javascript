var main = function() {
  $(document).keypress(function(event) {
    if(event.which === 103) {
      $('btn-like').toggle();
      }

  });
};

$(document).ready(main);
