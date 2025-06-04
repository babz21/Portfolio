// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dark mode toggle
  document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
