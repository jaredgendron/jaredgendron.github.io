// Define the branch URL
const branchUrl = 'https://api.github.com/repos/jaredgendron/jaredgendron.github.io/branches/main';

// Find the span element by its class name
const updateTimeSpan = document.querySelector('.updateTime');

updateTimeSpan.textContent = "Fetching...";

// Fetch branch data
fetch(branchUrl)
  .then(response => response.json())
  .then(branchData => {
    // Extract commit date from commit data
    const commitDate = new Date(branchData.commit.commit.committer.date);

    // Get the current date
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDiff = currentDate - commitDate;

    // Calculate days difference
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Define strings for "today" and "yesterday"
    const todayString = "today";
    const yesterdayString = "yesterday";

    let timeAgo;

    // Check if it's today
    if (daysDiff === 0) {
      timeAgo = todayString;
    }
    // Check if it's yesterday
    else if (daysDiff === 1) {
      timeAgo = yesterdayString;
    }
    // Otherwise, display "# days ago"
    else {
      timeAgo = daysDiff + " days ago";
    }

    // Format the date and time to display without seconds
    const options = { hour: 'numeric', minute: 'numeric' };
    const formattedDate = commitDate.toLocaleString(undefined, options);

    // Combine the timeAgo and formattedDate
    const updateTimeText = `${timeAgo}`;// at ${formattedDate}`;

    // Update the content of the span element
    updateTimeSpan.textContent = updateTimeText;
  })
  .catch(error => {
    updateTimeSpan.textContent = "Could not fetch the latest update timestamp at this time";
  });
