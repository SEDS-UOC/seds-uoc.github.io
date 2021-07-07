// ---------------------------------------------
// Do activities after loading document

document.addEventListener("DOMContentLoaded", () => {
  
  // Include navbar.js first!
  activateHambugs(); 

  !function(){window;const e=document.documentElement;if(e.classList.remove("no-js"),e.classList.add("js"),document.body.classList.contains("has-animations")){(window.sr=ScrollReveal()).reveal(".reveal-on-scroll",{duration:600,distance:"20px",easing:"cubic-bezier(0.5, -0.01, 0, 1.005)",origin:"top",interval:100})}}();

 
});

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


