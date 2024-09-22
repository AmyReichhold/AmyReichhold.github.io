let lastScrollTop = 0;

function scrollChangesNavbarVisibility() {
    const navbar = document.getElementById('navbar');

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.style.top = '-3em'; // Hide the navbar (adjust based on navbar height)
    } else {
      // Scrolling up
      navbar.style.top = '0';
    }
    
    lastScrollTop = scrollTop;
}


function main() {
    window.addEventListener('scroll', scrollChangesNavbarVisibility);
}

window.onload = main;
