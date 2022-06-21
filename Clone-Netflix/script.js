$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const menuToggle = document.querySelector('.toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active'); 

    
    if(menuToggle.classList.contains('active')){
        menu.classList.remove('opacidade');
    }else{
        menu.classList.add('opacidade');
    }
  
});






