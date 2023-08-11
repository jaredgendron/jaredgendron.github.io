let didScroll;
let lastScrollTop = 0;
let delta = 5;
let currentTop;
let sidebarOffset;
let scrollPosition;
const navbarHeight = $('header').outerHeight();


if ($('#sidebar').length > 0) {
  sidebarOffset = $('#sidebar').offset().top;
  scrollPosition = $(document).scrollTop();
  currentTop = sidebarOffset - scrollPosition;
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