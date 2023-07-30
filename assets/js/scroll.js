var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
const sidebar = document.querySelector('wrapper');

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
  var st = $(this).scrollTop();
  
  if(Math.abs(lastScrollTop - st) <= delta)
    return;
  
  if (st > lastScrollTop && st > navbarHeight){
    $('header').addClass('hidden');
    if(sidebar){
      sidebar.classList.addclass('full');
    }
  } else {
    if(st + $(window).height() < $(document).height()) {
      $('header').removeClass('hidden');
      if(sidebar){
        sidebar.classList.removeclass('full');
      }
    }
  }
  
  lastScrollTop = st;
}