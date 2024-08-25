let hamburgerMenu = document.querySelector("#hamburger-menu");
let navbar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle("ri-close-large-line");
    navbar.classList.toggle("active");
    
});




let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
            link.classList.remove('active')
            document.querySelectorAll('header nav a[href*=' + id + ']').classList.add("active");
        });
    };
  });

  let header = documen.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100)

  hamburgerMenu.classList.remove("ri-close-large-line");
  navbar.classList.remove("active");
};


const scrollUp = () => {
    const scrollUp = document.getElementById("scroolup")

    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") :
    scrollUp.classList.remove("show-scroll")


};


window.addEventListener('scroll', scrollUp)

const typeHome = new Typed(".multiple-text", {
    strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const sr = ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

sr.reveal(".home-content", ".heading", {origin: 'top'});
sr.reveal(".home-img", "services-container", "portfolio-box", ".concact form", {origin: 'bottom'});
sr.reveal(".home-content p", ".about-content", {origin: 'right'});
sr.reveal(".home-content h1", ".about-img", {origin: 'left'});