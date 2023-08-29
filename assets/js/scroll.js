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
      $('#sidebar').css('top', currentTop);
    }
  }
  
  lastScrollTop = st;
}

fetch('https://api.chess.com/pub/player/slyjey/stats')
  .then(response => response.json())
  .then(data => {
    // Extract rating and date
    const chessBlitzRating = data.chess_blitz.last.rating;
    const chessBlitzDate = new Date(data.chess_blitz.last.date * 1000); // Convert to milliseconds

    // Format the date into a human-readable format
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = chessBlitzDate.toLocaleDateString('en-US', options);

    console.log(`Chess Blitz Rating: ${chessBlitzRating} on ${formattedDate}`);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });