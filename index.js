gsap.registerPlugin(ScrollTrigger);

gsap.from(".header", {
    y: -80,
    opacity:0,
    duration:1,
    ease:"power3.out"
});

gsap.from(".home-content h3", {
    x:-100,
    opacity:0,
    duration:1,
    delay:0.5
});

gsap.from(".home-content h1", {
    x:-100,
    opacity:0,
    duration:1,
    delay:0.8
});

gsap.from(".home-content p", {
    x:-100,
    opacity:0,
    duration:1,
    delay:1.1
});

gsap.from(".btn-1", {
    y:50,
    opacity:0,
    duration:1,
    delay:1.4
});

gsap.from(".img-profile img", {
    scale:0.8,
    opacity:0,
    duration:1.2,
    delay:0.5,
    ease:"back-out(1.7)"
});

gsap.to(".img-profile img", {
    y: 15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


gsap.from(".about-img img", {
    ScrollTrigger:{
        trigger:".about",
        start: "top 80%"
    },
    x:-100,
    opacity:0,
    duration:1
});

gsap.from(".about-content", {
    ScrollTrigger:{
        trigger:".about",
        start:"top 80%"
    },
    x:100,
    opacity:0,
    duration:1
});

// gsap.from(".card", {
//     scrollTrigger: {
//         trigger: "#services",
//         start: "top 80%"
//     },
//     y: 60,
//     opacity: 0,
//     duration: 0.8,
//     stagger: 0.2
// });


gsap.from(".contact-form", {
    ScrollTrigger:{
        trigger: ".contact-form",
        start: "top 85%"
    },
    y:80,
    opacity:0,
    duration:1
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach(section => {
        const seectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= seectionTop - 200){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});