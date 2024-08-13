document.getElementById('scrollButton').addEventListener('click', function () {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        // Toggle icon image
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.src = 'Assets/light_mode.png';
        } else {
            themeIcon.src = 'Assets/dark_mode.png';
        }
    });
});