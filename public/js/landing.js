// ---------------------------------------------
// Hamburger functionality

document.addEventListener("DOMContentLoaded", () => {
  // Load wordpress posts first
  loadWordpressPosts();
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
});

// ---------------------------------------------
// AJAX requests to Wordpress API

var test;
// https://stackoverflow.com/questions/8567114/how-to-make-an-ajax-call-without-jquery
function loadWordpressPosts() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      // XMLHttpRequest.DONE == 4
      if (xmlhttp.status == 200) {
        var resp = xmlhttp.responseText;
        resp = JSON.parse(resp);
        test = resp;
        
        // Reset HTML content
        document.getElementById("news-items").innerHTML = "";

        for (var i = 0; i < resp.length; i++) {
          var post_image =
            resp[i]._embedded["wp:featuredmedia"]["0"].source_url;
          var post_title = resp[i].title.rendered;
          var post_link = resp[i].link;

          var card_html = `
                <div class="column">
                <div
                    class="card news-card blue-gradient hvr-icon-wobble-horizontal"
                >
                    <div class="card-content">
                    <div class="content">
                        <div class="columns">
                        <div class="column is-two-thirds newscard-column card-text">
                            <h1 class="title is-5 mb-0">${post_title}</h1>
                            <a href="${post_link}">
                                <p class="mt-0">
                                See More
                                <span class="icon is-small">
                                    <i class="fa fa-arrow-right hvr-icon"></i>
                                </span>
                                </p>
                            </a>
                        </div>
                        <div class="column is-one-third newscard-column">
                            <img
                            class=""
                            src="${post_image}"
                            alt=""
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                `;
          document.getElementById("news-items").innerHTML += card_html;
        }
      } else if (xmlhttp.status == 400) {
        alert("Error 400 in retrieving blog posts.");
      } else {
        alert("Error in retrieving blog posts.");
      }
    }
  };

  xmlhttp.open(
    "GET",
    "https://blog.sedsuoc.lk/wp-json/wp/v2/posts?per_page=3&_embed",
    true
  );
  xmlhttp.send();
}
