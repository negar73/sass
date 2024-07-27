$(document).ready(function(){
    $('.price-Table').hover(function(){
        $('#priceTable .priceContent.active').removeClass('active');
        $(this).removeClass('active');  
        $('a.price-plan.btn.btn-purchase.activeBtn').removeClass('activeBtn'); 
    });

$('.price-Table').mouseleave(function(){
        $('.price-Table .priceContent.two').addClass('active');
        $(this).addClass('active');    
    $('.two a.price-plan.btn.btn-purchase').addClass('activeBtn'); 
    });

 



})
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});