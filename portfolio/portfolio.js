function clickMenu() {
    if (menu.style.visibility == 'hidden') {
        menu.style.visibility = 'visible';
    } else {
        menu.style.visibility = 'hidden';
    }
}

const myObserver = new IntersectionObserver ((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('mostrar')
        } else {
            entry.target.classList.remove('mostrar')
        }
    })
})

const elements = document.querySelectorAll('.esconder')

elements.forEach((element) => myObserver.observe(element))