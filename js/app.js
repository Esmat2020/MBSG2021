const navbarSlide = () => {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar-nav');

    burger.addEventListener('click',()=>
    {
        navbar.classList.toggle('nav-active');
    });
}
navbarSlide();