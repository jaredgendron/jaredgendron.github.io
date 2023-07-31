const projectLinks = document.querySelectorAll('.project-link');

function handleProjectClick(event) {
  const markupDoc = event.target.dataset.document;
  console.log(markupDoc);
  fetch(`/documents/${markupDoc}.md`)
  .then(response => response.text())
  .then(markdownString => {
    const converter = new showdown.Converter({
      extensions: [
        function() {
          return [{
            type: 'output',
            filter: function(text) {
              return text.replace(/<pre><code class="(.+?)">([\s\S]+?)<\/code><\/pre>/g, function(match, classes, code) {
                const language = classes.split(' ')[0];
                const highlightedCode = hljs.highlight(code, { language }).value;
                return `<pre><code class="${language}">${highlightedCode}</code></pre>`;
              });
            }
          }];
        }
      ]
    });
      
    const html = converter.makeHtml(markdownString);
    document.getElementById('markdown-container').innerHTML = html;
  });

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