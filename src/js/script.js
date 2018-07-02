/***NAV Mobile***/
const navButton = document.getElementById('icon-nav');
const mainNav = document.getElementById('header__center');

navButton.addEventListener('click', addActive);

function addActive(){
    
    mainNav.classList.toggle('active');
    navButton.classList.toggle('icon-nav-Active');
}

/***END NAV Mobile***/

/***Smooth scroll jQuery***/
$(document).ready(function(){
    
    //Ger the header hight
    const headerHeight = $('header').outerHeight();
    
    $('.main-nav__button').click(function(e){
        const linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top -headerHeight
        }, 1000);
        e.preventDefault(); 
    });
});
/***END Smooth scroll jQuery***/
