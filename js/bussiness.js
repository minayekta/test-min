

gsap.registerPlugin(ScrollTrigger);
    
const t1 = gsap.timeline({
  scrollTrigger:{
    trigger:".business-section",
    scrub:true,
    ease: "power2",
    pin:true
}

})
// t1.from(".image-card1",{
//     y:'100%',
//     duration:1
// })
t1.from(".text-card1",{
  y:'100%',
  duration:1,
  opacity:0
})
t1.from(".image-card2",{
    y:'100%',
    duration:1,
    opacity:1
})
t1.from(".text-card2",{
  y:'100%',
  duration:1,
  opacity:0
})


    
// gsap.to(".office-1", {
//     scrollTrigger: {
//       trigger: ".business-section",
//       scrub: true,
//       start: "center center",
//       end: "bottom 0%",
//       ease: "power2",
//     },
//     y:"-90px",
//   });

//   gsap.to(".office-2", {
//     scrollTrigger: {
//       trigger: ".business-section",
//       scrub: true,
//       start: "center center",
//       end: "bottom 0%",
//       ease: "power2",
//     },
//     y:"-580px",
//   });