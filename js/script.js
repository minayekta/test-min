const { innerHeight } = window
//zoom-in text section 1

//     // Calculate the scale factor based on scroll percentage
//     const scaleFactor = 1 + (scrollPercentage / 10);
gsap.to('#zoom-in h2', {
  scale: 100,
  stagger: 0.1,
  duration: 1,
  scrollTrigger: {
    trigger: '#zoom-in',
    pin: true,
    end: `+=${innerHeight * 0.6}`,
    scrub: 3,
  },
})

function reveal() {
  var reveals = document.querySelectorAll('.reveal')

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 400

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }
  }
}

window.addEventListener('scroll', reveal)


// gsap.registerPlugin(ScrollTrigger)

// let tl = gsap.timeline({
//   ScrollTrigger: {
//     trigger: '.cards',
//     markers: true,
//     start: '.cards',
//     scrub:true,
//     ease:"cards.easeOut",
//     toggleActions: "play none none reverse",
//   },
// })

// tl.from('.card1', 1, {y: 100, opacity: 0,duration: 20})
// tl.from('.card2', 1, {y: 100,opacity: 0,duration:2})
// tl.from('.card3', 1, {y: 100,opacity: 0,duration:3})
