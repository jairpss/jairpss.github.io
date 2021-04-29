const navSlide = () => {
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header-nav-links');
    
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
    });
    
}

navSlide();