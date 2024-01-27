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


const joinLink = document.getElementById("join-link");
const loginLink = document.getElementById("login-link");
const loginLinkModal = document.getElementById("login-link-modal");
const signupLink = document.getElementById("signup-link-modal");
const headerTitle = document.getElementById("header-title");
const modal = document.getElementById("login-modal");
const closeModalBtn = document.querySelector(".close");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

// Afficher la boîte modale d'inscription
joinLink.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "block";
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
});


// Afficher la boîte modale de connexion
loginLink.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "block";
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

// Afficher la boîte modale d'inscription
signupLink.addEventListener("click", function(e) {
  e.preventDefault();
  headerTitle.textContent = "Level up your career for free";
  modal.style.display = "block";
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
});

// Afficher la boîte modale de connexion
loginLinkModal.addEventListener("click", function(e) {
  e.preventDefault();
  headerTitle.textContent = "Welcome Back";
  modal.style.display = "block";
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

// Fermer la boîte modale
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Fermer la boîte modale lorsque l'utilisateur clique en dehors de celle-ci
window.addEventListener("click", function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});


const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#login-password');
const passwordInputSign = document.querySelector('#signup-password');

togglePassword.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.classList.add('active');
  } else {
    passwordInput.type = 'password';
    togglePassword.classList.remove('active');
  }
});

togglePassword.addEventListener('click', function() {
  if (passwordInputSign.type === 'password') {
    passwordInputSign.type = 'text';
    togglePassword.classList.add('active');
  } else {
    passwordInputSign.type = 'password';
    togglePassword.classList.remove('active');
  }
});

const loginEnterpriseLink = document.querySelector('#login-enterprise a');
const modalEnterprise = document.getElementById('modal-enterprise');
const closeButton = modalEnterprise.querySelector('.close');
const backLink = modalEnterprise.querySelector('.back-link');
const modalLogin = document.getElementById('login-modal');


function showEnterpriseModal() {
  modalEnterprise.classList.add('active');
  modalLogin.classList.remove('active');
}


function showLoginModal() {
  modalEnterprise.classList.remove('active');
  modalLogin.classList.add('active');
}

loginEnterpriseLink.addEventListener('click', showEnterpriseModal);
closeButton.addEventListener('click', showLoginModal);
backLink.addEventListener('click', showLoginModal);

