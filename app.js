const navSlide = () => {
    
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.header-nav-links');
    
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        burger.classList.toggle('active')
        console.log('close')
    });
    
}

navSlide();