let didScroll;
let lastScrollTop = 0;
let delta = 5;
let currentTop;
const navbarHeight = $('header').outerHeight();

if ($('#sidebar').length > 0) {
  currentTop = $('#sidebar').offset().top;
}

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  let st = $(this).scrollTop();
  
  if(Math.abs(lastScrollTop - st) <= delta)
    return;
  
  if (st > lastScrollTop && st > navbarHeight){
    $('header').css('top', -navbarHeight);
    $('#sidebar').css('top', currentTop-navbarHeight);
  } else {
    if(st + $(window).height() < $(document).height()) {
      $('header').css('top', 0);
      $('#sidebar').css('top', currentTop)
    }
  }
  
  lastScrollTop = st;
}