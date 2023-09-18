
gsap.registerPlugin(ScrollTrigger);
    
  
   
gsap.to(".zoom-text", {
    scrollTrigger: {
      trigger: ".zoom-section",
      scrub: true,
      pin: true,
      start: "center center",
      end: "+=1000",
      ease: "slow",
    },
    scale: 2.5,
    opacity: 0,
    height: 0,
  });

  // gsap.to(".go-connect", {
  //   scrollTrigger: {
  //     trigger: ".go-connect",
  //     scrub: true,
  //     pin: true,
  //     start: "center center",
  //     end: "+=2500",
  //     ease: "power2",
  //   },
  // });



  

  const t3 = gsap.timeline({
    scrollTrigger:{
      trigger:".go-content",
      scrub:true,
      ease: "slow",
      pin:true
  }
  
  })
  t3.from(".content-title",{
    y:'120%',
    duration:20,
    opacity:0
  })
  t3.from(".office-1",{
    y:'100%',
    duration:10,
    opacity:1,
    // delay:2
  },)

  t3.from(".office-2",{
      y:'100%',
      duration:10,
      opacity:0,
    // delay:2
  })
  t3.from(".office-3",{
    y:'100%',
    duration:10,
    opacity:1,
    // delay:2
  },)
  t3.from(".office-4",{
    y:'100%',
    duration:10,
    opacity:0,
    // delay:2
  },)
  t3.from(".office-5",{
    y:'100%',
    duration:10,
    opacity:1,
    // delay:2
  },)

    
const t2= gsap.timeline({
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
t2.from(".text-card1",{
  y:'100%',
  duration:1,
  opacity:0
})
t2.from(".image-card2",{
    y:'100%',
    duration:1,
    opacity:1
})
t2.from(".text-card2",{
  y:'100%',
  duration:1,
  opacity:1
})






console.log(window.innerWidth)
let WIDTH = $(window).width()
var w = window.innerWidth;
var h = window.innerHeight;
if(w> 768){
  const t1 = gsap.timeline({
    scrollTrigger:{
      trigger:".form-section",
      scrub:true,
      ease: "power2",
      pin:true,
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
}else{
  const t1 = gsap.timeline({
    scrollTrigger:{
      trigger:".form-section",
      scrub:true,
      ease: "power2",
      pin:true
  }

  })
  t1.from(".image-form",{
      y:'-100%',
      duration:1
  })
  t1.from(".text-form",{
    y:'100%',
    duration:1
} , "<")
}