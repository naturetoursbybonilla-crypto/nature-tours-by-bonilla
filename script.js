const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* ===========================
   FAQ Accordion
=========================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    button.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;

        } else {

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});

/* ===========================
   Scroll Animation
=========================== */

const revealElements = document.querySelectorAll(
    ".experience-card, .feature, .about-grid, .gallery-grid img, .faq-item"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            element.classList.add("fade-up");
            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ===========================
   Header Effect
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(255,255,255,.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.92)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.05)";

    }

});

/* ===========================
   Back To Top
=========================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================
   Gallery Lightbox
=========================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");
lightbox.className = "lightbox";

const lightboxImage = document.createElement("img");

lightbox.appendChild(lightboxImage);

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

/* ===========================
   Smooth Internal Links
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ===========================
   Current Year
=========================== */

const copyright = document.querySelector(".copyright p");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerHTML =
        `© ${year} Nature Tours by Bonilla. All rights reserved.`;

}

console.log("Nature Tours by Bonilla V2.2 loaded successfully.");
// Sprint1
window.addEventListener('scroll',()=>document.body.classList.toggle('scrolled',scrollY>20));
