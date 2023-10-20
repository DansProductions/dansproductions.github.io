gsap.from('.albuns .box img', { duration: 1, opacity: 0, x: '-25%', stagger: .3 });


gsap.from('.outros .box img', {
    duration: 1,
    opacity: 0,
    x: '-25%',
    stagger: .3,
    scrollTrigger: {
        trigger: '.albuns',
        start: "bottom center"
    }
});



gsap.from('.info .main', { duration: 1, y: '20vh', scale: 3, delay: 1 });
gsap.from('.info .ques', { duration: 0.5, opacity: 0, y: '20vh', y: '2vh', delay: 1.8 });
gsap.from('.info .ami', { duration: 0.5, opacity: 0, y: '20vh', y: '2vh', delay: 1.4 });
gsap.from('.info .map', { duration: 0.5, opacity: 0, y: '20vh', y: '2vh', delay: 1.4 });
gsap.from('.info .redes', { duration: 0.5, opacity: 0, y: '20vh', y: '2vh', delay: 1.4 });