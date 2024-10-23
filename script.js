const parallaxContent = document.querySelector('.parallax-content');



document.addEventListener('mousemove', (event) => {

    const rotateSpeed = 25;

    const xAxis = (window.innerWidth / 2 - event.pageX) / rotateSpeed; /* Adjust the divisor for speed */

    const yAxis = (window.innerHeight / 2 - event.pageY) / rotateSpeed; /* Adjust the divisor for speed */



    parallaxContent.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});



document.addEventListener('mouseleave', () => {

    parallaxContent.style.transform = 'rotateY(0deg) rotateX(0deg)';

});

