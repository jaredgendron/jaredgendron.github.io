function changeText() {
  var headingElement = document.getElementById('heading');
  var paragraphElement = document.getElementById('paragraph');

  // Fade out the elements by setting opacity to 0
  headingElement.style.opacity = 0;
  paragraphElement.style.opacity = 0;

  // After a short delay (e.g., 100 milliseconds), change the text and fade in
  setTimeout(function() {
    var newText = "Jared <span class='gradient1'>Gendron</span>";

    headingElement.innerHTML = newText;
    paragraphElement.textContent = "Electrical Engineering Graduate, Vancouver BC";

    // Fade in the elements by setting opacity to 1
    headingElement.style.opacity = 1;
    paragraphElement.style.opacity = 1;
  }, 500);
}

// Execute the changeText() function after 3 seconds (3000 milliseconds) of page load
setTimeout(changeText, 1000);