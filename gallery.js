$(window).on('load', function() {
    $('.loader').fadeOut();
    $('.content').fadeIn();

    let currentIndex = 0;
    const images = $('.gallery-image');
    const imageCount = images.length;

    function showNextImage() {
        images.eq(currentIndex).fadeOut(500, function() {
            currentIndex = (currentIndex + 1) % imageCount;
            images.eq(currentIndex).fadeIn(500);
        });
    }

    images.eq(currentIndex).show();
    setInterval(showNextImage, 3500);
});