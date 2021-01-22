window.addEventListener('scroll', function(){
    let nav = document.querySelector('nav');
    let scrolled = window.scrollY > 0;

    nav.classList.toggle('nav-scrolled', scrolled)
})