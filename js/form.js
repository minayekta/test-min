
    gsap.registerPlugin(ScrollTrigger);
    
  const t1 = gsap.timeline({
    scrollTrigger:{
      trigger:".form-section",
      scrub:true,
      ease: "power2",
      pin:true
  }

  })
  t1.from(".image-form",{
      x:'-200%',
      duration:1
  })
  t1.from(".text-form",{
    x:'200%',
    duration:1
} , "<")

