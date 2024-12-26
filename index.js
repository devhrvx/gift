$(".card-top").click(function () {
    $(this).fadeOut();
    console.log("card-top removed");
    $(this).before('<h1>Happy Birthday!</h1>').prev('h1').fadeIn();
});

$(".sunflower").on("mouseup", function() {
    window.location.href = "gallery.html";
});