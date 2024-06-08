$(document).ready(function(){
    // Set the initial slide index
    var slideIndex = 0;

    // Function to show the next slide
    function showNextSlide() {
        // Hide the current slide
        $('.value-slide').eq(slideIndex).fadeOut();
        // Increment slideIndex and wrap around if it exceeds the number of slides
        slideIndex = (slideIndex + 1) % $('.value-slide').length;
        // Show the next slide
        $('.value-slide').eq(slideIndex).fadeIn();
    }

    // Initially show the first slide
    $('.value-slide').eq(0).show();

    // Call the showNextSlide function every 5 seconds
    setInterval(showNextSlide, 5000);
});
