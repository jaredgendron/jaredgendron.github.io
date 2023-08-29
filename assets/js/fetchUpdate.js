// Define the branch URL
const branchUrl = 'https://api.github.com/repos/jaredgendron/jaredgendron.github.io/branches/main';

// Find the span element by its class name
const updateTimeSpan = document.querySelector('.updateTime');

updateTimeSpan.textContent = "Fetching...";

// Fetch branch data
fetch(branchUrl)
  .then(response => response.json())
  .then(branchData => {
    // Extract commit date and time value from commit data
    const commitDate = branchData.commit.commit.committer.date;

    // Format the date and time (optional)
    const formattedDate = new Date(commitDate).toLocaleString();

    // Update the content of the span element
    updateTimeSpan.textContent = formattedDate;
  })
  .catch(error => {
    updateTimeSpan.textContent = "Could not fetch latest update timestamp at this time";
  });
