const baby = document.getElementById('baby');
const mandalorian = document.getElementById('mandalorian');
const title = document.getElementById('title');

window.addEventListener('scroll', function() {
    const value = window.scrollY;

    baby.style.top = value * 0.25 + 'px';
    mandalorian.style.top = value * 0.11 + 'px';
    title.style.top = 150 + value * 1 + 'px';
});
