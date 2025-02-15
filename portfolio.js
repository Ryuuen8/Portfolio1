$(document).ready(function() {
    // Smooth scrolling for navbar links
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    $(window).on("scroll", function() {
        $(".card-container").each(function() {
            var position = $(this).offset().top;
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
    
            if (position < scrollTop + windowHeight - 50) {
                $(this).addClass("fade-in");
            }
        });
    });
});
