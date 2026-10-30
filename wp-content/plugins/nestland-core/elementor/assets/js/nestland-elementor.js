/* ==============================================
NESTLAND CAROUSEL
============================================== */
(function ($) {
    'use strict';

    /*----- ELEMENTOR LOAD FUNCTION CALL ---*/

    $(window).on('elementor/frontend/init', function () {

        var dataBackground = function (){
            //1. Data Background Set
            $("[data-background]").each(function () {
                $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
            });
        }


        var nestlandMarquee = function () {
            nodeMarquee({
                parent: ".marquees_wrapper",
                speed: 1,
                pauseOnHover : true,
                prependWhitespace: true,
            });
        }

        var nestlandCounter = function () {
          

          
            
       
        }

        var nestlandTestimonial = function () {
            var swiper = new Swiper(".nlv2_testimonial_slide2", {
                slidesPerView: 3,
                spaceBetween: 30,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                scrollbar: {
                    el: ".swiper-scrollbar",
                    dragSize: 100

                },

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            });

            var swiper = new Swiper(".nlv2_testimonial_slide", {
                slidesPerView: 1,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },

                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
            });
        }

        var nestlandExperienceCounter = function () {
            if ($(".odometer").length) {
                $('.odometer').appear();
                $(document.body).on('appear', '.odometer', function (e) {
                    var odo = $(".odometer");
                    odo.each(function () {
                        var countNumber = $(this).attr("data-count");
                        $(this).html(countNumber);
                    });
                    window.xboOptions = {
                        format: 'd',
                    };
                });
            }
        }

        elementorFrontend.hooks.addAction('frontend/element_ready/global', function ($scope, $) { dataBackground(); });
        elementorFrontend.hooks.addAction('frontend/element_ready/nestland_marquee.default', function ($scope, $) { nestlandMarquee(); });
        elementorFrontend.hooks.addAction('frontend/element_ready/nestland_counter.default', function ($scope, $) { nestlandCounter(); });
        elementorFrontend.hooks.addAction('frontend/element_ready/nestland_testimonial.default', function ($scope, $) { nestlandTestimonial(); });
        elementorFrontend.hooks.addAction('frontend/element_ready/nestland_experiences.default', function ($scope, $) { nestlandExperienceCounter(); });


    });

})(jQuery);
/* ==============================================
NESTLAND STICKY
============================================== */

var $j = jQuery.noConflict();

$j(document).ready(function () {
    "use strict";
    // Xpcs header
    xpcsHeader();
});


function xpcsHeader() {

    var header = $j('.xpcs-header-yes'),
        container = $j('.xpcs-header-yes .elementor-container'),
        header_elementor = $j('.elementor-edit-mode .xpcs-header-yes'),
        header_logo = $j('.xpcs-header-yes .elementor-widget-theme-site-logo img, .xpcs-header-yes .elementor-widget-image img'),
        data_settings = header.data('settings');

    if (typeof data_settings != 'undefined') {
        var responsive_settings = data_settings["transparent_on"];
        var width = $j(window).width(),
            header_height = header.height(),
            logo_width = header_logo.width(),
            logo_height = header_logo.height();
    }

    // Check responsive is enabled
    if (typeof width != 'undefined' && width) {
        if (width >= 1025) {
            var enabled = "desktop";
        } else if (width > 767 && width < 1025) {
            var enabled = "tablet";
        } else if (width <= 767) {
            var enabled = "mobile";
        }
    }
    

    if ($j.inArray(enabled, responsive_settings) != '-1') {

        var scroll_distance = data_settings["scroll_distance"];
        var transparent_header = data_settings["transparent_header_show"];
        var background = data_settings["background"];
        var bottom_border_color = data_settings["custom_bottom_border_color"],
            bottom_border_view = data_settings["bottom_border"],
            bottom_border_width = data_settings["custom_bottom_border_width"];

        var shrink_header = data_settings["shrink_header"],
            data_height = data_settings["custom_height_header"],
            data_height_tablet = data_settings["custom_height_header_tablet"],
            data_height_mobile = data_settings["custom_height_header_mobile"];

        var shrink_logo = data_settings["shrink_header_logo"],
            data_logo_height = data_settings["custom_height_header_logo"],
            data_logo_height_tablet = data_settings["custom_height_header_logo_tablet"],
            data_logo_height_mobile = data_settings["custom_height_header_logo_mobile"];

        var change_logo_color = data_settings["change_logo_color"];

        var blur_bg = data_settings["blur_bg"];

        var scroll_distance_hide_header = data_settings["scroll_distance_hide_header"];

        // add transparent class
        if (transparent_header == "yes") {
            header.addClass('xpcs-header-transparent-yes');
        }

        // header height shrink
        if (typeof data_height != 'undefined' && data_height) {
            if (width >= 1025) {
                var shrink_height = data_height["size"];
            } else if (width > 767 && width < 1025) {
                var shrink_height = data_height_tablet["size"];
                if (shrink_height == '') {
                    shrink_height = data_height["size"];
                }
            } else if (width <= 767) {
                var shrink_height = data_height_mobile["size"];
                if (shrink_height == '') {
                    shrink_height = data_height["size"];
                }
            }
        }

        // logo height shrink

        if (typeof data_logo_height != 'undefined' && data_logo_height) {
            if (width >= 1025) {

                var shrink_logo_height = data_logo_height["size"];
                if (shrink_logo_height == '') {
                    shrink_logo_height = shrink_height;

                    var percent = parseInt(shrink_logo_height) / parseInt(header_height),
                        width = logo_width * percent,
                        height = logo_height * percent;
                } else {
                    width = logo_width * shrink_logo_height / 100,
                        height = logo_height * shrink_logo_height / 100;
                }

            } else if (width > 767 && width < 1025) {

                var shrink_logo_height = data_logo_height_tablet["size"];
                if (shrink_logo_height == '') {
                    shrink_logo_height = data_logo_height["size"];
                    if (shrink_logo_height == '') {
                        shrink_logo_height = shrink_height;

                        var percent = parseInt(shrink_logo_height) / parseInt(header_height),
                            width = logo_width * percent,
                            height = logo_height * percent;
                    } else {
                        width = logo_width * shrink_logo_height / 100,
                            height = logo_height * shrink_logo_height / 100;

                    }
                }


            } else if (width <= 767) {

                var shrink_logo_height = data_logo_height_mobile["size"];
                if (shrink_logo_height == '') {
                    shrink_logo_height = data_logo_height["size"];
                    if (shrink_logo_height == '') {
                        shrink_logo_height = shrink_height;

                        var percent = parseInt(shrink_logo_height) / parseInt(header_height),
                            width = logo_width * percent,
                            height = logo_height * percent;
                    } else {
                        width = logo_width * shrink_logo_height / 100,
                            height = logo_height * shrink_logo_height / 100;
                    }
                }


            }
        }

        // border bottom
        if (typeof bottom_border_width != 'undefined' && bottom_border_width) {
            var bottom_border = bottom_border_width["size"] + "px solid " + bottom_border_color;
        }


        // hide header on scroll
        if (typeof scroll_distance_hide_header != 'undefined' && scroll_distance_hide_header) {

            var mywindow = $j(window);
            var mypos = mywindow.scrollTop();

            mywindow.scroll(function () {
                if (mypos > scroll_distance_hide_header["size"]) {
                    if (mywindow.scrollTop() > mypos) {
                        header.addClass('headerup');
                    } else {
                        header.removeClass('headerup');
                    }
                }
                mypos = mywindow.scrollTop();
            });
        }

        // scroll function
        $j(window).on("load scroll", function (e) {
            var scroll = $j(window).scrollTop();

            if (header_elementor) {
                header_elementor.css("position", "relative");
            }

            if (scroll >= scroll_distance["size"]) {
                header.removeClass('header').addClass("xpcs-header");
                header.css("background-color", background);
                header.css("border-bottom", bottom_border);
                header.removeClass('xpcs-header-transparent-yes');

                if (shrink_header == "yes") {
                    header.css({"padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0"});
                    container.css({"min-height": shrink_height, "transition": "all 0.4s ease-in-out", "-webkit-transition": "all 0.4s ease-in-out", "-moz-transition": "all 0.4s ease-in-out"});

                }

                if (shrink_logo == "yes") {
                    header_logo.css({"width": width, "transition": "all 0.4s ease-in-out", "-webkit-transition": "all 0.4s ease-in-out", "-moz-transition": "all 0.4s ease-in-out"});

                }

                if (change_logo_color == "yes") {
                    header_logo.addClass("change-logo-color");

                }

                if (blur_bg == "yes") {
                    header.css({"backdrop-filter": "saturate(180%) blur(20px)", "-webkit-backdrop-filter": "saturate(180%) blur(20px)"});

                }

            } else {
                header.removeClass("xpcs-header").addClass('header');
                header.css("background-color", "");
                header.css("border-bottom", "");

                if (transparent_header == "yes") {
                    header.addClass('xpcs-header-transparent-yes');
                }
                if (shrink_header == "yes") {
                    header.css({"padding-top": "", "padding-bottom": "", "margin-top": "", "margin-bottom": ""});
                    container.css("min-height", "");
                }
                if (shrink_logo == "yes") {
                    header_logo.css({"height": "", "width": ""});
                }
                if (change_logo_color == "yes") {
                    header_logo.removeClass("change-logo-color");

                }
                if (blur_bg == "yes") {
                    header.css({"backdrop-filter": "", "-webkit-backdrop-filter": ""});
                }
            }


        });
    }

}





