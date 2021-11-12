const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*scroll home*/
sr.reveal('.rounded-circle', {})
sr.reveal('#name', { delay: 200 })
sr.reveal('#title', { origin: 'right', delay: 400 })

/*scroll about*/
sr.reveal('.about_social', { delay: 500 })
sr.reveal('#exp', { origin: 'left', delay: 300 })
sr.reveal('#quote', { origin: 'right', delay: 300 })

/*scroll portfolio*/
sr.reveal('#list-portfolio', { delay: 500 })

/*scroll blog*/
sr.reveal('#list-blog', { delay: 500 })

/*scroll team*/
sr.reveal('#list-team', { delay: 500 })