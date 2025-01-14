document.addEventListener('scroll', function() {
    let services = document.querySelectorAll('.project');
    services.forEach(service => {
      let servicePosition = service.getBoundingClientRect().top;
      let screenPosition = window.innerHeight;
  
      if(servicePosition < screenPosition) {
        service.style.opacity = '1';
        service.style.transform = 'translateY(0)';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('change', () => {
        const nav = document.querySelector('nav ul');
        if (menuToggle.checked) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
});