document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section.fade-in');
    sections.forEach(section => {
        section.addEventListener('animationend', () => {
            section.style.opacity = 1;
            section.style.transform = 'none';
        });
    });
});

document.getElementById('signup').addEventListener('click', () => {
    alert('Вы записались на курс!');
});