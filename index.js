var jumpLinks = document.querySelectorAll('.jump-link');
var jumpHeading = document.getElementById('jump-heading');
var jumpMessage = document.getElementById('jump-message');
var jumpImg = document.getElementById('jump-img');

var currentIndex = 0;
var intervalId;

function showContent() {
  var link = jumpLinks[currentIndex];
  var message = link.dataset.message;
  var image = link.dataset.image;

  jumpHeading.textContent = link.textContent;
  jumpMessage.textContent = message;
  jumpImg.src = image;

  // Réinitialiser la couleur de tous les liens
  jumpLinks.forEach(function(link) {
    link.style.backgroundColor = '';
    link.style.color = '';
    link.style.boxShadow = '';
  });

  // Appliquer la couleur rouge au lien actuel
  link.style.backgroundColor = '#cacae9';
  link.style.color = 'blue';
  link.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';

  currentIndex++;
  if (currentIndex >= jumpLinks.length) {
    currentIndex = 0;
  }
}

function startInterval() {
  showContent();
  intervalId = setInterval(showContent, 5000); // 5000 milliseconds = 5 seconds
}

function stopInterval() {
  clearInterval(intervalId);
}

jumpLinks.forEach(function(link) {
  link.addEventListener('mouseover', stopInterval);
  link.addEventListener('mouseout', startInterval);
});

startInterval();

document.getElementById("login-link").addEventListener("click", function() {
  document.getElementById("login-modal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("login-modal").style.display = "none";
});