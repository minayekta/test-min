$(function () {
  gsap.registerPlugin(ScrollTrigger);
  



  gsap.to("#larger-title", {
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

  // CONNETCT OFFICES (behind titles)
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

  gsap.to(".go-connect", {
    scrollTrigger: {
      trigger: ".go-connect",
      scrub: true,
      start: "center center",
      end: "+=300",
      ease: "power2",
    },
    opacity:1,
  });






  // 

  gsap.to(".connect-title", {
    scrollTrigger: {
      trigger: ".go-connect",
      scrub: true,
      start: "center center",
      end: "+=500",
      ease: "power2",
    },
    y:"-200px",
  });

  gsap.to(".office-posters-wrap", {
    scrollTrigger: {
      trigger: ".go-connect",
      scrub: true,
      start: "center center",
      end: "+=500",
    },
    y:"-400px",
    opacity:1,
    duration:10,
    ease: Linear.easeNone
  });

  gsap.to(".office-2", {
    scrollTrigger: {
      trigger: ".office-2",
      scrub: true,
      start: "center center",
      end: "+=500",
      ease: "power2",
    },
    y:"-490px",
  });

  gsap.to(".office-3", {
    scrollTrigger: {
      trigger: ".office-3",
      scrub: true,
      start: "center center",
      end: "+=500",
      ease: "power2",
    },
    y:"-980px",
  });

  
  $(window).scroll(function () {
    let topToElement = $(".space-test").offset().top,
      heightElement = $(".space-test").outerHeight(),
      windowHeight = $(window).height(),
      scrollFromTop = $(this).scrollTop();
      let howMuchTrigger = topToElement - windowHeight
    if (scrollFromTop > howMuchTrigger  && scrollFromTop - howMuchTrigger < 300 ) {
      $(".moving-form .image-part").removeClass("separated")
      $(".moving-form .form-part").removeClass("separated")
    }
  });





});


