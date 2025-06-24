// This script toggles the visibility of navigation links in responsive mode when a button is clicked.
// It also logs the toggle state to the console for debugging purposes.
document.addEventListener('DOMContentLoaded', () => {
  //create a toggle button and navigation links
  const toggleButton = document.querySelector('.nav-toggle');
  // Ensure the toggle button and nav links exist
  const navLinks = document.querySelector('.nav-links');

  // Remove previous listeners if needed (optional)
  toggleButton.replaceWith(toggleButton.cloneNode(true));
  
  // Re-select after cloning
  const newToggleButton = document.querySelector('.nav-toggle');
  
  // Add event listener to the toggle button
  newToggleButton.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation links
    navLinks.classList.toggle('active');
    // Log the toggle state to the console
    console.log('Toggled:', navLinks.classList.contains('active'));
  });
});

// This is a simple JavaScript module that exports a function to greet a user.
// Used for testing purposes in the tWebserverBrowser project.
export function greet(name) {
  return `Hello, ${name}!`;
}