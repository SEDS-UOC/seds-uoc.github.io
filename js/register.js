// ---------------------------------------------
// Do activities after loading document

document.addEventListener("DOMContentLoaded", () => {
  // Add hambug functionality
  activateHambugs(); // Include navbar.js first!
  // Load the footer quote
  loadQuote("/..");
});
