document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("mX-q13fEtB8WZ-5Zf"); 
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_tepwqin", "template_s8ava8t", params)
            .then(function (response) {
                console.log("SUCCESS!", response);
                alert("Email sent successfully!");
            })
            .catch(function (error) {
                console.error("FAILED...", error);
                alert("Error sending email: " + error);
            });
    });
});


$(document).ready(function() {
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

