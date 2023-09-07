$(function () {
    gsap.registerPlugin(ScrollTrigger);
    
  
   
    gsap.to("#section3",{
        scrollTrigger:{
            trigger:"#section3",
            scrub:true,
            // markers:true,
            start:"top 0px",
            end:"top -300%",
            pin:true
        },
        top:"-0vh"

    })
    gsap.to(".section3-center-cover",{
        scrollTrigger:{
            trigger:"#section3",
            scrub:true,
            // markers:true,
            start:"top 0%",
            end:"top -300%",
            // pin:true
        },
        top:"-280vh"
    })
});
