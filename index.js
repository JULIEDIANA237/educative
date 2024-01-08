// Chargement du header
fetch("header.html")
.then(response => response.text())
.then(data => {
  document.getElementById("headerContainer").innerHTML = data;
});

// Chargement du banner
fetch("banner.html")
.then(response => response.text())
.then(data => {
  document.getElementById("bannerContainer").innerHTML = data;
});

// Chargement des cours en vedette
fetch("featured-courses.html")
.then(response => response.text())
.then(data => {
  document.getElementById("featuredCoursesContainer").innerHTML = data;
});

// Chargement des témoignages
fetch("testimonials.html")
.then(response => response.text())
.then(data => {
  document.getElementById("testimonialsContainer").innerHTML = data;
});

// Chargement du footer
fetch("footer.html")
.then(response => response.text())
.then(data => {
  document.getElementById("footerContainer").innerHTML = data;
});

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrolled = window.scrollY || document.documentElement.scrollTop;

  if (scrolled > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});