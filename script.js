$(document).ready(function() {
    // Get the button
    var mybutton = document.getElementById("backToTopButton");

    // When the user scrolls down 70px from the top of the document, show the button
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            mybutton.style.display = "block";
        }
        else {
            mybutton.style.display = "none";
        }
    }
});
// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

