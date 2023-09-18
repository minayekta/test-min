
    gsap.registerPlugin(ScrollTrigger);
    
  
   
    gsap.to(".zoom-text", {
        scrollTrigger: {
          trigger: ".zoom-section",
          scrub: true,
          pin: true,
          start: "center center",
           end: "+=1000",
          ease: "power2",
        },
        scale: 2.5,
        opacity: 0,
       
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
    
 

      
    
      const t1 = gsap.timeline({
        scrollTrigger:{
          trigger:".office-section",
          scrub:true,
          ease: "power2",
          pin:true
      }
      
      })
      t1.from(".content-title",{
        y:'120%',
        duration:10,
        opacity:0
      })
      t1.from(".office-1",{
        y:'100%',
        duration:10,
        opacity:1,
        // delay:2
      },)
   
      t1.from(".office-2",{
          y:'100%',
          duration:10,
          opacity:0,
        // delay:2
      })
      t1.from(".office-3",{
        y:'100%',
        duration:10,
        opacity:1,
        // delay:2
      },)
      t1.from(".office-4",{
        y:'100%',
        duration:10,
        opacity:0,
        // delay:2
      },)
      t1.from(".office-5",{
        y:'100%',
        duration:10,
        opacity:1,
        // delay:2
      },)

      // gsap.to(".title-join", {
      //   scrollTrigger: {
      //     trigger: ".office-section",
      //     scrub: true,
      //     start: "center center",
      //     end: "+=500",
      //     ease: "power2",
      //    duration:1
      //   },
      //   y:"-20px",
      // });

    
      // gsap.to(".office-1", {
      //   scrollTrigger: {
      //     trigger: ".office-posters-wrap",
      //     scrub: true,
      //     start: "center center",
      //     end: "bottom 0%",
      //     ease: "power2",
      //   },
      //   y:"-90px",
      // });
    
      // gsap.to(".office-2", {
      //   scrollTrigger: {
      //     trigger: ".office-posters-wrap",
      //     scrub: true,
      //     start: "center center",
      //     end: "bottom 0%",
      //     ease: "power2",
      //   },
      //   y:"-580px",
      // });
      
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