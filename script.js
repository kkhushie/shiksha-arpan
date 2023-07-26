
var tl = gsap.timeline()
tl.from("nav .logo", {
    x: -400,
    duration: 2
})
gsap.from("nav ul", {
    x: 1110,
    duration: 1
})
gsap.from(".right-one h1", {
    x: 500,
    opacity: 0,
})
tl.from(".right-one h1 span", {
    x: 500,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scale: 1.02,
    display: "none"
})

tl.from(".right-one img", {
    opacity: 0,
    scale: 0,
    duration:0.5,
})
gsap.from(".right-one p", {
    x: 500,
    duration:1,

    opacity: 0
})
// tl.from(".right-one button", {
//     x: 500,
//     opacity: 0,
// })
gsap.from(".discussion", {
    y: 400,
    pin:true,
    duration: 1
})
gsap.from(".right-one h1 button", {
    x: 300,

    opacity: .4,
    duration: 1
})
gsap.from(".left-one .quality", {
    y: 400,
    duration: 1
})
gsap.from(".left-one .quality ul li", {
    y: 400,
    stagger: 0.5,
    duration: 1
})
gsap.from(".content .left-one .top-image", {
    x: -600,
    duration: 3,
    opacity: 0
})
gsap.from("#page2 .facts h2", {
    opacity: 0,
duration:0.5,
    y: 200,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 50%",
        end: "top 30%",
        // markers: true

    }
})
gsap.from("#page2 .facts .first-fact", {
    opacity: 0,
    x: -1000,
    duration:0.6,

    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 70%",
        end: "top 30%",
        // markers: true

    }
})
gsap.from("#page2 .facts .second-fact", {
    opacity: 0,
    x: 1000,
    duration:1,

    scrollTrigger: {
        trigger: "#page2 .second-fact",
        scroller: "#main",
        start: "top 70%",
        end: "top 30%",
        // markers: true

    }
})
gsap.from("#page2 .facts .third-fact", {
    opacity: 0,
    duration:1,

    x: -1000,
    scrollTrigger: {
        trigger: "#page2 .third-fact",
        scroller: "#main",
        start: "top 70%",
        end: "top 30%",
        // markers: true

    }
})
gsap.from("#page2 .facts .forth-fact", {
    opacity: 0,
    x: 1000,
    duration:1,

    scrollTrigger: {
        trigger: "#page2 .forth-fact",
        scroller: "#main",
        start: "top 70%",
        end: "top 30%",
        // markers: true

    }
})
gsap.from("#page2 .facts .fifth-fact", {
    opacity: 0,
    duration:1,
    x: -1000,
    scrollTrigger: {
        trigger: "#page2 .fifth-fact",
        scroller: "#main",
        start: "top 70%",
        end: "top 30%",
        // markers: true

    }
})
gsap.from("#page3 h2",{
    y:200,
    duration:0.6,
    opacity:0,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 70%",
        end: "top 30%",
        // markers: true

    }
})
gsap.from("#page3 .three-testimon div",{
    y:200,
    stagger:0.4,
    duration:0.6,
    opacity:0,
    scrollTrigger: {
        trigger: "#page3 .three-testimon",
        scroller: "#main",
        start: "top 70%",
        end: "top 30%",
        // markers: true

    }
})
gsap.from("#page4 h2",{
  opacity:0,
  y:100,
    duration:0.6,
    scrollTrigger: {
        trigger: "#page4 ",
        scroller: "#main",
        start: "top 70%",
        end: "top 30%",
        // markers: true

    }
})
