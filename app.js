const navSlide = () => {
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header-nav-links');
    
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
    });
    
}

navSlide();

const navMenu = document.querySelector("#burger")

navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})