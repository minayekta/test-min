$(function () {
    gsap.registerPlugin(ScrollTrigger);
    
  
   
    gsap.to(".zoom-text", {
        scrollTrigger: {
          trigger: "#larger-title",
          scrub: true,
          pin: true,
          start: "center center",
          end: "+=1000",
          ease: "power2",
        },
        scale: 4.5,
        opacity: 0,
        height: 0,
      });
    
      gsap.to(".go-connect", {
        scrollTrigger: {
          trigger: ".go-connect",
          scrub: true,
          pin: true,
          start: "center center",
          end: "+=2500",
          ease: "power2",
        },
      });
    
 

      


      gsap.to(".title-join", {
        scrollTrigger: {
          trigger: ".connect-title",
          scrub: true,
          start: "center center",
          end: "+=500",
          ease: "power2",
        },
        y:"-500px",
      });

    
      gsap.to(".office-1", {
        scrollTrigger: {
          trigger: ".office-1",
          scrub: true,
          start: "center center",
          end: "bottom -40%",
          ease: "power2",
        },
        y:"-490px",
      });
    
      gsap.to(".office-2", {
        scrollTrigger: {
          trigger: ".office-2",
          scrub: true,
          start: "center center",
          end: "bottom -40%",
          ease: "power2",
        },
        y:"-980px",
      });
      
    // gsap.to(".office-1",{
    //     scrollTrigger:{
    //         trigger:".office-1",
    //         scrub:true,
    //         ease: "power2",
    //         start:"top -1px",
    //         end:"top -300%",
    //         pin:true
    //     },
    //      y:"-980px",
    // })
    // gsap.to(".office-2",{
    //     scrollTrigger:{
    //         trigger:".office-2",
    //         scrub:true,
    //         ease: "power2",
    //         start:"top 0%",
    //         end:"top -300%",
    //         pin:true
    //     },
    //     top:"-280vh"
    // })
});

// Function to handle the scroll and zoom animation
// function zoomOnScroll() {
//     const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

//     // Calculate the scale factor based on scroll percentage
//     const scaleFactor = 1 + (scrollPercentage / 10);

//     // Apply the scale transformation to the text
//     gsap.to(text, {
//         scale: scaleFactor,
//         ease: 'power1', // You can adjust the easing function
//     });
//     gsap.to(text, {
//         scale: scaleFactor,
//         ease: 'power2', // You can adjust the easing function
//     });
// }

// Add scroll event listener to trigger the animation
// window.addEventListener('scroll', zoomOnScroll);