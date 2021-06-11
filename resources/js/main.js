// Hamburger Menu

function openMenu() {
    document.getElementById('navbar').style.width = "100%";
}

function closeMenu() {
    document.getElementById('navbar').style.width = "0%";
}

// Smooth Scroll

$('.menu-items a, scroll-cta-btn a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false
});

//WOW Animation
new WOW().init();

// Mixit up
var mixer = mixitup('.portfolio-grid');