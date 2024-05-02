document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        navLinks.forEach(navLink => {
          navLink.classList.remove('active');
        });
  
        link.classList.add('active');
      });
    });

   
    var smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < smoothScrollLinks.length; i++) {
        smoothScrollLinks[i].addEventListener('click', function(event) {
            var target = document.querySelector(this.getAttribute('href'));
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    const creditsLink = document.querySelector('.credits a');

    creditsLink.addEventListener('mouseenter', function() {
        creditsLink.style.color = '#3871FF'; 
        
    });

    creditsLink.addEventListener('mouseleave', function() {
        creditsLink.style.color = 'inherit'; 
        creditsLink.style.textDecoration = 'none'; 
    });

    const currentYear = new Date().getFullYear(); 
    creditsLink.innerText += ' ' + currentYear;
});









  