gsap.registerPlugin(ScrollTrigger);


const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");

//  close
function closeMenu() {
    menuToggle.classList.remove("active");
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
});


overlay.addEventListener("click", closeMenu);

//navigation link 
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = document.querySelector(".header").offsetHeight;
            const sectionPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: sectionPosition,
                behavior: "smooth"
            });

            closeMenu();
        }
    });
})

// Contact Me button
document.querySelectorAll('a[href^="#"]:not(.navbar a)').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = document.querySelector(".header").offsetHeight;
            const sectionPosition = targetSection.offsetTop - headerHeight;
            
            // Smooth scroll to section
            window.scrollTo({
                top: sectionPosition,
                behavior: "smooth"
            });
        }
    });
})


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

// gsap.to(".img-profile img", {
//     y: 15,
//     duration: 2,
//     repeat: -1,
//     yoyo: true,
//     ease: "sine.inOut"
// });

gsap.from(".about-img img", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%"
    },
    x: -100,
    opacity: 0,
    duration: 1
});

gsap.from(".about-content", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%"
    },
    x: 100,
    opacity: 0,
    duration: 1
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

// Skills
const skillsSection = document.querySelector('.skills');
const skillProgressBars = document.querySelectorAll('.skill-progress');
let skillsAnimated = false;


function animateSkills() {
    if (skillsAnimated) return;
    
    skillProgressBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-progress');
        
        setTimeout(() => {
            bar.style.width = targetWidth + '%';
            bar.classList.add('animate');
        }, index * 100);
    });
    
    skillsAnimated = true;
}


function checkSkillsInView() {
    if (!skillsSection) return;
    
    const rect = skillsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // 70% visible
    if (rect.top <= windowHeight * 0.7 && rect.bottom >= 0) {
        animateSkills();
        window.removeEventListener('scroll', checkSkillsInView);
    }
}


if (skillsSection) {
    window.addEventListener('scroll', checkSkillsInView);
    checkSkillsInView();
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".timeline-item").forEach(el => {
    observer.observe(el);
});

document.querySelectorAll(".exp-card").forEach(el => {
    observer.observe(el);
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
