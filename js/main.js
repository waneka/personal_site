
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  $window = $(window);
  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this);

    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

        // Put together our final background position
        var coords = '50% '+ yPos + 'px';

        // Move the background
        $bgobj.css({ backgroundPosition: coords });
    });
  });
});

