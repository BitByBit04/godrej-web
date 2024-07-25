function loader(){
  let loadertl = gsap.timeline()

  loadertl.from('.loader h1 span', {
      y: 150,
      stagger: 0.09,
      duration: 2.5,
      ease: "bounce.out"
  })

  loadertl.to('.loader h1 span', {
      x: 150,
      opacity: 0,
      delay: 0.4,
  })

  loadertl.to('.bg-loader', {
      height: "0%",
      top: 0
  })

  loadertl.to('.loader', {
      display: 'none',
      oncomplete: animatehomepage
  })
}
loader()
// home page animation
function animatehomepage() {
  let hometl = gsap.timeline()
  hometl.from(".logo", {
      y: -100,
      duration: 0.5,
      opacity: 0,
  })
  hometl.from('.nav-partition', {
      opacity: 0
  })
  hometl.from(".links li, #nav-bag", {
      y: -40,
      stagger: 0.1,
      opacity: 0,
      duration: 0.4,
  })
  hometl.from('.left-home h1 span', {
      y: 50,
      duration: 0.6,
      stagger: 0.1,
      opacity: 0,
      delay: -0.9,
  })
  hometl.from('.left-home .btn', {
      x: -50,
      duration: 0.4,
      opacity: 0,
  })
  hometl.from('.right-home', {
      x: 200,
      duration: 0.6,
      opacity: 0,
      delay: -0.2,
  })
  hometl.from('.home-beans', {
      x: -100,
      duration: 0.6,
      opacity: 0,
      delay: -0.4,
  })
}
// Navbar Dropdown
function dropdown() {
  let droptl = gsap.timeline()

  droptl.to(".dropdown", {
      top: "12vh",
      duration: 0.6,
  })
  droptl.to("#dropdown-btn", {
      rotate: "-90deg",
      duration: 0.4,
      delay: -0.6
  })
  droptl.from(".menu-content li", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
  })

  droptl.pause()

  const naviagtedropdown = document.querySelectorAll("#dropdown-navigation, .dropdown")
  naviagtedropdown.forEach(link => {
      link.addEventListener("mouseenter", () => {
          droptl.play()
      })
  })

  naviagtedropdown.forEach(link => {
      link.addEventListener("mouseleave", () => {
          droptl.reverse()
      })
  })

};
dropdown();
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const homeContent = document.querySelector('.home-content');

    // Function to add or remove the 'scrolled' class based on the scroll position
    function onScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Check if the home-content is in the viewport and add 'visible' class
        const rect = homeContent.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            homeContent.classList.add('visible');
        } else {
            homeContent.classList.remove('visible');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', onScroll);

    // Initial check in case the page is already scrolled
    onScroll();
});


const container = document.querySelector('.scrolling-images');
let scrollSpeed = 1;

function scrollImages() {
    container.scrollLeft += scrollSpeed;
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth || container.scrollLeft <= 0) {
        scrollSpeed = -scrollSpeed;
    }
    requestAnimationFrame(scrollImages);
}

scrollImages();

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    });
  
    document.querySelectorAll('.container').forEach(section => {
      observer.observe(section);
    });
  });

//    sec 6

