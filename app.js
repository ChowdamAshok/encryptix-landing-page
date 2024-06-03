window.addEventListener('scroll', function() {
    const image = document.getElementById('movingImage');
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const footerSection = document.getElementById('footer');

    const homeSectionHeight = homeSection.offsetHeight;
    const aboutSectionTop = aboutSection.offsetTop;
    const aboutSectionHeight = aboutSection.offsetHeight;
    const footerSectionTop = footerSection.offsetTop;

    const scrollY = window.scrollY;

    if (scrollY < aboutSectionTop) {
        // Move image from center of home section to right side of about section
        let progress = (scrollY / aboutSectionTop) * 100;
        progress = Math.min(100, Math.max(0, progress));

        const newTop = 50 + progress / 10;  // Move down by 50% to 60%
        const newLeft = 50 + (progress / 5);  // Move right by 50% to 100%

        image.style.top = `${newTop}%`;
        image.style.left = `${newLeft}%`;
        image.style.transform = `translate(-50%, -50%) rotate(30deg)`;
    } else if (scrollY < footerSectionTop) {
        // Move image from right side of about section to left side of footer section
        let progress = ((scrollY - aboutSectionTop) / aboutSectionHeight) * 100;
        progress = Math.min(100, Math.max(0, progress));

        const newTop = 40 + (progress / 10);  // Continue moving down by 60% to 70%
        const newLeft = 100 - (progress * 0.5);  // Move left by 100% to 0%

        image.style.top = `${newTop}%`;
        image.style.left = `${newLeft}%`;
        image.style.transform = `translate(-50%, -50%) rotate(0deg)`;
    } else {
        // Image stays at the left side of footer section
        image.style.top = `70%`;
        image.style.left = `50%`;
        image.style.transform = `translate(-50%, -50%) rotate(30deg)`;
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.remove('loading');
        document.querySelector('.loading-overlay').style.display = 'none';
    }, 2000);
});

gsap.from('.navbar a',{opacity: 0, duration: 1, delay:2.1, y:30, stagger:0.2})
gsap.from('.right',{opacity: 0, duration: 1, delay:1.5, y:30, stagger:0.2})
gsap.from('.left',{opacity: 0, duration: 1, delay:1.5, y:30, stagger:0.2})
gsap.from('.left-heading',{opacity: 0, duration: 1, delay:1.5, y:30, stagger:0.2})
gsap.from('#footer',{opacity: 0, duration: 1, delay:1.5, y:30, stagger:0.2})
gsap.from('#movingImage',{opacity: 0, duration: 1, delay:1.5, y:30, stagger:0.2})
