


gsap.registerPlugin(ScrollTrigger);

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

// (function () {
//   'use strict'
//   const forms = document.querySelectorAll('.requires-validation')
//   Array.from(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })()