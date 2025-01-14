document.addEventListener('DOMContentLoaded', () => {
    console.log('Contact Us page loaded');
    // Add any additional JavaScript functionality here
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