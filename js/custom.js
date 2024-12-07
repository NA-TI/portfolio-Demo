// Get the toggle button and body element
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check if the user previously chose dark mode and apply it
if (localStorage.getItem('theme') === 'dark') {
  body.setAttribute('data-theme', 'dark');
  toggleButton.textContent = '☀️';  // Change button icon to 'light' (sun)
} else {
  body.setAttribute('data-theme', 'light');
  toggleButton.textContent = '🌙';  // Keep the 'dark' icon (moon)
}

// Toggle dark mode when the button is clicked
toggleButton.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark');
    toggleButton.textContent = '☀️';  // Change to light mode icon
    localStorage.setItem('theme', 'dark');  // Save user preference
  } else {
    body.setAttribute('data-theme', 'light');
    toggleButton.textContent = '🌙';  // Change to dark mode icon
    localStorage.setItem('theme', 'light');  // Save user preference
  }
});
