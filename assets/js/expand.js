// Title section click event
document.addEventListener('click', function (event) {
  const target = event.target;
  const titleSection = target.closest('.title-section');

  if (titleSection) {
    const project = titleSection.parentElement;
    project.classList.toggle('expanded');
  }
});
