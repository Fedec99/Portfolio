// Loader
const loaderContainer = document.querySelector('.loaderContainer')
const pageContent = document.querySelector('#pageContent')

window.addEventListener('load', () => {
    loaderContainer.classList.add('hidden')
    pageContent.classList.add('visible')
})

// Type effect
const words = ['Fullstack Developer', 'Student']

let mainTimeline = gsap.timeline({
    repeat: -1
})

words.forEach(word => {
    let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 4,
    })

    textTimeline.to('#typeWriter', {
        text: word,
        duration: 1,
        onUpdate: () => {
            cursorTimeline.restart()
            cursorTimeline.pause()
        },
        onComplete: () => {
            cursorTimeline.play()
        }
    })

    mainTimeline.add(textTimeline)
})

let cursorTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: .8
})

cursorTimeline.to('#typeCursor', {
    opacity: 1,
    duration: 0
}).to('#typeCursor', {
    opacity: 0,
    duration: 0,
    delay: .8
})

//Magnet buttons
const magneto = document.querySelectorAll('.magneto')
const magnetoText = document.querySelectorAll('.magneto .magnetoText')
const dbgr = document.querySelector('#debugger')

for (let i = 0; i < magneto.length; i++) {
    const activateMagneto = (e) => {
        let boundBox = magneto[i].getBoundingClientRect()
        const magnetoStrength = 45
        const magnetoTextStrength = 40
        const newX = ((e.clientX - boundBox.left)/magneto[i].offsetWidth) - 0.5
        const newY = ((e.clientY - boundBox.top)/magneto[i].offsetHeight) - 0.5
        
        gsap.to(magneto[i], {
            duration: 1,
            x: newX * magnetoStrength,
            y: newY * magnetoStrength,
            ease: Power4.easeOut,
        })
    
        gsap.to(magnetoText[i], {
            duration: 1,
            x: newX * magnetoTextStrength,
            y: newY * magnetoTextStrength,
            ease: Power4.easeOut,
        })
    }

    const resetMagneto = (e) => {
        gsap.to(magneto[i], {
            duration: 1,
            x: 0,
            y: 0,
            ease: Elastic.easeOut,
        })
        gsap.to(magnetoText[i], {
            duration: 1,
            x: 0,
            y: 0,
            ease: Elastic.easeOut,
        })
    }
    
    magneto[i].addEventListener('mousemove', activateMagneto)
    magneto[i].addEventListener('mouseleave', resetMagneto)
}


// Portfolio
const projects = document.querySelectorAll('.project')
const portfolio = document.querySelector('#portfolioTitle')
const portfolioDiv = document.querySelector('#portfolio')

projects.forEach(project => {
    let projectText = project.querySelector('.projectText')
    let projectMedia = project.querySelector('.projectMedia')

    gsap.set(projectText, {
        xPercent: -100,
        opacity: 0,
    })

    gsap.set(projectMedia, {
        xPercent: 100,
        opacity: 0,
    })

    gsap.to(projectText, {
        scrollTrigger: {
            trigger: project,
            start: 'top bottom',
            end: 'bottom 90%',
            scrub: true
        },
        xPercent: 0,
        opacity: 1,
    })

    gsap.to(projectMedia, {
        scrollTrigger: {
            trigger: project,
            start: 'top bottom',
            end: 'bottom 90%',
            scrub: true
        },
        xPercent: 0,
        opacity: 1,
    })
})

gsap.set(portfolio, {
    xPercent: -100,
    opacity: 0,
})

gsap.to(portfolio, {
    scrollTrigger: {
        trigger: portfolioDiv,
        start: 'top bottom',
        end: 'top 10%',
        scrub: true
    },
    xPercent: 0,
    opacity: 1,
})



// About me
const aboutMe = document.querySelector('#aboutMeTitle')
const aboutMeDiv = document.querySelector('#aboutMe')
const aboutMeContainer = document.querySelector('#aboutMeContainer')

gsap.set(aboutMe, {
    xPercent: -100,
    opacity: 0
})

gsap.set(aboutMeContainer, {
    xPercent: 30,
    opacity: 0
})

gsap.to(aboutMe, {
    scrollTrigger: {
        trigger: aboutMeDiv,
        start: 'top bottom',
        end: 'top 10%',
        scrub: true
    },
    xPercent: 0,
    opacity: 1,
})

gsap.to(aboutMeContainer, {
    scrollTrigger: {
        trigger: aboutMeContainer,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true
    },
    xPercent: 0,
    opacity: 1,
})

//Contacts
const contacts = document.querySelector('#contactsTitle')
const contactsDiv = document.querySelector('#contacts')
const contactsNav = document.querySelector('#contactsNav')

gsap.set(contacts, {
    xPercent: -100,
    opacity: 0
})

gsap.set(contactsNav, {
    xPercent: 30,
    opacity: 0
})

gsap.to(contacts, {
    scrollTrigger: {
        trigger: contactsDiv,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true
    },
    xPercent: 0,
    opacity: 1,
})

gsap.to(contactsNav, {
    scrollTrigger: {
        trigger: contactsDiv,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true
    },
    xPercent: 0,
    opacity: 1,
})

//Lenis scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//cursor circle

/* let cursor = document.querySelector('#cursorCircle')
document.body.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
}) */