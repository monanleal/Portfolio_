function clickMenu() {
    if (menu.style.visibility == 'hidden') {
        menu.style.visibility = 'visible';
    } else {
        menu.style.visibility = 'hidden';
    }
}

// const myObserver = new IntersectionObserver ((entries) => {
//     entries.forEach( (entry) => {
//         if(entry.isIntersecting) {
//             entry.target.classList.add('mostrar')
//         } else {
//             entry.target.classList.remove('mostrar')
//         }
//     })
// })

// const elements = document.querySelectorAll('.esconder')

// elements.forEach((element) => myObserver.observe(element))

window.sr = ScrollReveal({ reset: true });

sr.reveal('#areaInicial', {duration: 2000, distance:"90px" });
sr.reveal('#sobreMim', {duration: 2000, delay:200, distance:"1000px", origin:'left' });

sr.reveal('#habilidades', {duration: 3000 });

sr.reveal('#habilidades', {duration: 3000 });
sr.reveal('.caixas', {duration: 2500 });
sr.reveal('.projetos', {duration: 3000 });

sr.reveal('.caixa2P1', {rotate: {x: 0, y: 90, z:0 }, duration: 1500, delay: 300, origin:'left', distance:'1000px'});
sr.reveal('.caixa2P2', {rotate: {x: 0, y: 90, z:0 }, duration: 1500, delay: 700, origin:'left', distance:'1000px'});
sr.reveal('.caixa2P3', {rotate: {x: 0, y: 90, z:0 }, duration: 1500, delay: 1100, origin:'left', distance:'1000px'});

sr.reveal('.projeto1', {rotate: {x: 0, y:0, z:0 }, duration: 1500, delay: 300, distance:'900px'});
sr.reveal('.projeto2', {rotate: {x: 0, y:0, z:0 }, duration: 1500, delay: 500, distance:'900px'});
sr.reveal('.projeto3', {rotate: {x: 0, y:0, z:0 }, duration: 1500, delay: 700, distance:'900px'});
sr.reveal('.projeto4', {rotate: {x: 0, y:0, z:0 }, duration: 1200, delay: 400, distance:'900px'});
sr.reveal('.projeto5', {rotate: {x: 0, y:0, z:0 }, duration: 1200, delay: 600, distance:'900px'});