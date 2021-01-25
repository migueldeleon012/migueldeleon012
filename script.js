
$(document).ready(function() {
    let query = window.matchMedia('(max-width: 768px)')
    let nav = document.querySelector('.navbar');
    if(query.matches){
      nav.classList.add('nav-scrolled')
    }
    else{
      window.addEventListener('scroll', function(){
          let scrolled = window.scrollY > 0;
      
          nav.classList.toggle('nav-scrolled', scrolled)
      })
    }

    
    let scrollLink = $('.scroll-links');
    let scroll = $('.scroll')

    //footer smooth scrolling
    scroll.on('click', function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    })
    
    // navbar smooth scrolling
    scrollLink.on('click', function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top - 60
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      let scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        let sectionOffset = $(this.hash).offset().top - 70;
        
        if ( sectionOffset <= scrollbarLocation ) {
            $('.scroll-links').removeClass('active');
            $(this).closest('.scroll-links').addClass('active');
        }
      })
    })
    

    //mobile slide toggle
    $('.list-items').slideUp(0)
    $('.hamburger').on('click', function(){    
      $('.list-items').slideToggle(300)
    })
    $('.item').on('click', function(){
      $('.list-items').slideUp(300)
    })


  })