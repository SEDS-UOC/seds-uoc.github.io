function activateHambugs() {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
}

// Loading quotes into footer; added here since it's common for all pages.
function loadQuote(location=""){
  fetch(`.${location}/data/quotes.csv`, {
    method: "GET",
  })
  .then(response => {return response.text()})
  .then(csvData => {
    // Split text according to lines(Quotes)
    var allQuotes = csvData.split(/\r\n|\n/);
    // Pick a random quote
    var quote = allQuotes[Math.floor(Math.random() * allQuotes.length)].split('|');
    document.getElementById("quote").innerHTML = `<i>" ${quote[0]} "</i><br><div style="float: right;"> - ${quote[1]}</div>`;
  });
}
