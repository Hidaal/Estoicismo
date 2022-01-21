const elements = document.querySelectorAll('.bx-text');

elements.forEach(element => {
    ScrollReveal().reveal(element, {
        distance: '0px',
        origin: 'bottom',
        opacity: '0%',
        reset: true,
        duration: '900'
    })
})

