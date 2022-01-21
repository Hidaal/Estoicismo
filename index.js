const elements = document.querySelectorAll('.bx-text');

console.log(elements)
elements.forEach(element => {
    ScrollReveal().reveal(element, {
        distance: '0px',
        origin: 'bottom',
        opacity: '0%',
        viewFactor: 0.3,
        reset: true,
        duration: '800'
    })
})

