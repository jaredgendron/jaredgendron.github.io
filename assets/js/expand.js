const projectLinks = document.querySelectorAll('.project-link');
const projectTitle = document.getElementById('project-title');
const projectSummary = document.getElementById('project-summary');
const projectDescription = document.getElementById('project-description');
const projectImage = document.getElementById('project-image');

function handleProjectClick(event) {
  const selectedProjectTitle = event.target.dataset.title;
  const selectedProject = findProjectByTitle(selectedProjectTitle);
  projectTitle.innerText = selectedProject.title;
  projectSummary.innerText = selectedProject.summary;
  projectDescription.innerText = selectedProject.description;
  projectImage.src = selectedProject.image;
}

projectLinks.forEach(link => {
  link.addEventListener('click', handleProjectClick);
});

function findProjectByTitle(title) {
  for (const project of projects) {
    if (project.title === title) {
      return project;
    }
  }
  return null;
}

if (projects.length > 0) {
  projectTitle.innerText = projects[0].title;
  projectSummary.innerText = projects[0].summary;
  projectDescription.innerText = projects[0].description;
  projectImage.src = projects[0].image;
}
