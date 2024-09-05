const parallaxContent = document.querySelector('.parallax-content');

document.addEventListener('mousemove', (event) => {
    const xAxis = (window.innerWidth / 2 - event.pageX) / 25; /* Adjust the divisor for speed */
    const yAxis = (window.innerHeight / 2 - event.pageY) / 25; /* Adjust the divisor for speed */

    parallaxContent.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.addEventListener('mouseleave', () => {
    parallaxContent.style.transform = 'rotateY(0deg) rotateX(0deg)';
});
