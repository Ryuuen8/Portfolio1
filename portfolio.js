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

    // Fade-in effect for sections
    $(window).on("scroll", function() {
        $(".card-container, .content-container").each(function() {
            var position = $(this).offset().top;
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();

            if (position < scrollTop + windowHeight - 50) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });
});
