// Store page elements as variables
var body = $("body");
var navbar = $("#navbar");
var about = $("#about");
var portfolio = $("#portfolio");
var contact = $("#contact");
var navLinkContainer = $("#nav-link-container");
var navbarSpacing = $("#navbar-spacing");
var navAbout = $("#nav-about");
var navPortfolio = $("#nav-portfolio");
var navContact = $("#nav-contact");

// When the document loads, execute stickyNavbar
$(document).ready( function() {
    stickyNavbar();
    updateNavbar();
});


// When the user scrolls the page, execute stickyNavbar
window.onscroll = function() {
    stickyNavbar();
    updateNavbar();
};

// Get the offset position of the navbar
var navbarOffset = navbar.offset().top;

// Define stickyNavbar function
function stickyNavbar() {

    // Add sticky class to navbar when you reach its scroll position 
    if (window.pageYOffset > navbarOffset) {

        navbar.addClass("sticky");

        // Remove "sticky" from navbar-spacing div to prevent content from jumping up into empty space
        navbarSpacing.removeClass("sticky");
        
        // Remove "sticky" when not past its scroll position
    } else {
        navbar.removeClass("sticky");
        // Make navbar-spacing div "sticky" again
        navbarSpacing.addClass("sticky");
    }
}

// Define updateNavbar function
function updateNavbar() {

    // Get the offset position of each section of the page
    var portfolioOffset = portfolio.offset().top;

    // Get the height of the document
    var bodyHeight = body[0].scrollHeight;

    // Get the window height
    var windowHeight = window.innerHeight;

    // If at the bottom of the page, make the 'contact' tab current 
    if (window.pageYOffset > bodyHeight - windowHeight - 50) {
        navAbout.removeClass("nav-current");
        navAbout.addClass("nav-not-current");
        navPortfolio.removeClass("nav-current");
        navPortfolio.addClass("nav-not-current");
        navContact.removeClass("nav-not-current");
        navContact.addClass("nav-current");

    // If scroll position is past the start of portfolio section, make the 'portfolio' tab current 
    } else if (window.pageYOffset > portfolioOffset - 80) {
        navAbout.removeClass("nav-current");
        navAbout.addClass("nav-not-current");
        navPortfolio.removeClass("nav-not-current");
        navPortfolio.addClass("nav-current");
        navContact.removeClass("nav-current");
        navContact.addClass("nav-not-current");
    }

    // If anywhere else on the page, make 'about' tab current 
    else {
        navAbout.removeClass("nav-not-current");
        navAbout.addClass("nav-current");
        navPortfolio.removeClass("nav-current");
        navPortfolio.addClass("nav-not-current");
        navContact.removeClass("nav-current");
        navContact.addClass("nav-not-current");
    }
}

navAbout.click(function() {

    // Get the height of the navLinkContainer
    var navbarHeight = navLinkContainer[0].clientHeight;
    
    // Get the offset position of the About section of the page
    var aboutOffset = about.offset().top;
    
    // Set vertical scroll position to the position of the About section minus the navLinkContainer height
    window.scrollTo({
        top: aboutOffset - navbarHeight,
        left: 0,
        behavior: "smooth"
    });
})

navPortfolio.click(function() {
    
    // Get the height of the navbar
    var navbarHeight = navLinkContainer[0].clientHeight;
    
    // Get the offset position of the Portfolio section of the page
    var portfolioOffset = portfolio.offset().top;
    
    // Set vertical scroll position to the position of the Portfolio section minus the navLinkContainer height
    window.scrollTo({
        top: portfolioOffset - navbarHeight,
        left: 0,
        behavior: "smooth"
    });
})
    
navContact.click(function() {

    // Get the height of the navLinkContainer
    var navbarHeight = navLinkContainer[0].clientHeight;
    
    // Get the offset position of the Contact section of the page
    var contactOffset = contact.offset().top;
    
    // Set vertical scroll position to the position of the Contact section minus the navLinkContainer height
    window.scrollTo({
        top: contactOffset - navbarHeight,
        left: 0,
        behavior: "smooth"
    });
})