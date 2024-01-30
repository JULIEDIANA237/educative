window.addEventListener('DOMContentLoaded', function() {
    var navbarContainer = document.getElementById('header');
    var footerContainer = document.getElementById('footer');
    
    fetch('navbar.html')
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        navbarContainer.innerHTML = html;
      })
      .catch(function(error) {
        console.log('Une erreur s\'est produite lors du chargement de la navbar :', error);
      });
      
    fetch('footer.html')
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        footerContainer.innerHTML = html;
      })
      .catch(function(error) {
        console.log('Une erreur s\'est produite lors du chargement du footer :', error);
      });
  });