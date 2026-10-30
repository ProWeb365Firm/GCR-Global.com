(function ($) {



    //3. Mobile Menu
    $(".mobile-menu-toggle").on("click", function () {
        $(".mobile-menu").addClass("active");
    });

    $(".mobile-menu .close").on("click", function () {
        $(".mobile-menu").removeClass("active");
    });

    $(".mobile-menu ul li.has-submenu i").each(function () {
        $(this).on("click", function () {
            $(this).siblings("ul").slideToggle();
            $(this).toggleClass("icon-rotate");
        });
    });
    // Add mobile dropdown Icon
    $('.mobile-menu ul li.has-submenu').each(function(){
        $(this).append('<i class="isax icon-arrow-down1"></i>');
    });

    $(".mobile-menu ul li.has-submenu i").each(function () {
        $(this).on("click", function () {
            $(this).siblings('ul').slideToggle();
            $(this).toggleClass("icon-rotate");
        });
    });

    $(document).on("mouseup", function (e) {
        var offCanvusMenu = $(".mobile-menu");

        if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
            $(".mobile-menu").removeClass("active");
        }
    });
    $(document).on("mouseup", function (e) {
        var offCanvusMenu = $(".mobile-menu");

        if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
            $(".mobile-menu").removeClass("active");
        }
    });

    //4.Brand logo slider
    var swiper = new Swiper(".nl__brand-logo-items", {
        slidesPerView: 1,
        loop: true,
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
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });



  // 6.Counter
  
  $(window).on('load', function () {
        $('.nl__header-counter-number .odometer').each(function () {
            var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
        });
        
  });


function nl_counter_section(){
    var flag = true;
    $('.nl__countdown-section').each(function() {
        if ($(this).isInViewport()) {   // Here we check perticular section is in the viewport or number-counter-section
            if (flag) {
                /* FOR number counter(odometer)  */
                var arr = [],
                i = 0;
                $('.nl__counter-number .odometer').each(function() {
                   
                   var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
                    
                });
                flag = false;
            }
        } else {}
    });
}


function nl_hero_counter_section(){
    var flag = true;
    $('.nl__home-one-hero').each(function() {
        if ($(this).isInViewport()) {   // Here we check perticular section is in the viewport or number-counter-section
            if (flag) {
                /* FOR number counter(odometer)  */
                var arr = [],
                i = 0;
                $('.nl__header-counter-number .odometer').each(function() {
                   
                   var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
                    
                });
                flag = false;
            }
        } else {}
    });
}

// for check the section in view port or not;
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function() {

    //  odometer section is on view-port or not
    nl_counter_section();
    //nl_hero_counter_section();
    //resize-function
    $(window).resize(function() {
        nl_counter_section();
        //nl_hero_counter_section();
    });
    
    $(window).on("scroll",function(){
      nl_counter_section();
      //nl_hero_counter_section();
    });
});



    (function() {
        const heart = document.getElementById('Cartheart');
        heart.addEventListener('click', function() {
          heart.classList.toggle('nl-icon-heart-2');
        });
        const heart2 = document.getElementById('Cartheart2');
        heart2.addEventListener('click', function() {
          heart2.classList.toggle('nl-icon-heart-2');
        });
        const heart3 = document.getElementById('Cartheart3');
        heart3.addEventListener('click', function() {
          heart3.classList.toggle('nl-icon-heart-2');
        });
      });




if (document.getElementById('preloader') != null){
        // PRELOADER
        let settings = {
            progressSize: 320,
            progressColor: '#DCF9F5',
            lineWidth: 2,
            lineCap: 'round',
            preloaderAnimationDuration: 800,
            startDegree: -90,
            finalDegree: 270
        }

        function setAttributes(elem, attrs) {

            for (let key in attrs) {
                elem.setAttribute(key, attrs[key]);
            }

        }

        let preloader = document.createElement('div'),
            canvas = document.createElement('canvas'),
            size;

        (function () {

            let width = window.innerWidth,
                height = window.innerHeight;

            if (width > height) {

                size = Math.min(settings.progressSize, height / 2);

            } else {

                size = Math.min(settings.progressSize, width - 50);

            }

        })();

        setAttributes(preloader, {
            class: "preloader",
            id: 'preloader',
            style: 'transition: opacity ' + settings.preloaderAnimationDuration / 1000 + 's'
        });
        setAttributes(canvas, {
            class: 'progress-bar',
            id: 'progress-bar',
            width: settings.progressSize,
            height: settings.progressSize
        });


        preloader = document.getElementById('preloader');

        let progressBar = document.getElementById('progress-bar'),
            images = document.images,
            imagesAmount = images.length,
            imagesLoaded = 0,
            barCtx = progressBar.getContext('2d'),
            circleCenterX = progressBar.width / 2,
            circleCenterY = progressBar.height / 2,
            circleRadius = circleCenterX - settings.lineWidth,
            degreesPerPercent = 3.6,
            currentProgress = 0,
            showedProgress = 0,
            progressStep = 0,
            progressDelta = 0,
            startTime = null,
            running;

        (function () {

            return requestAnimationFrame
                || mozRequestAnimationFrame
                || webkitRequestAnimationFrame
                || oRequestAnimationFrame
                || msRequestAnimationFrame
                || function (callback) {
                    setTimeout(callback, 1000 / 60);
                };

        })();

        Math.radians = function (degrees) {
            return degrees * Math.PI / 180;
        };


        progressBar.style.opacity = settings.progressOpacity;
        barCtx.strokeStyle = settings.progressColor;
        barCtx.lineWidth = settings.lineWidth;
        barCtx.lineCap = settings.lineCap;
        let angleMultiplier = (Math.abs(settings.startDegree) + Math.abs(settings.finalDegree)) / 360;
        let startAngle = Math.radians(settings.startDegree);
        document.body.style.overflowY = 'hidden';
        preloader.style.backgroundColor = settings.preloaderBackground;


        for (let i = 0; i < imagesAmount; i++) {

            let imageClone = new Image();
            imageClone.onload = onImageLoad;
            imageClone.onerror = onImageLoad;
            imageClone.src = images[i].src;

        }

        function onImageLoad() {

            if (running === true) running = false;

            imagesLoaded++;

            if (imagesLoaded >= imagesAmount) hidePreloader();

            progressStep = showedProgress;
            currentProgress = ((100 / imagesAmount) * imagesLoaded) << 0;
            progressDelta = currentProgress - showedProgress;

            setTimeout(function () {

                if (startTime === null) startTime = performance.now();
                running = true;
                animate();

            }, 10);

        }

        function animate() {

            if (running === false) {
                startTime = null;
                return;
            }

            let timeDelta = Math.min(1, (performance.now() - startTime) / settings.preloaderAnimationDuration);
            showedProgress = progressStep + (progressDelta * timeDelta);

            if (timeDelta <= 1) {


                barCtx.clearRect(0, 0, progressBar.width, progressBar.height);
                barCtx.beginPath();
                barCtx.arc(circleCenterX, circleCenterY, circleRadius, startAngle, (Math.radians(showedProgress * degreesPerPercent) * angleMultiplier) + startAngle);
                barCtx.stroke();
                requestAnimationFrame(animate);

            } else {
                startTime = null;
            }

        }
        function hidePreloader() {
            setTimeout(function () {
                $("body").addClass("page-loaded");
                document.body.style.overflowY = '';
            }, settings.preloaderAnimationDuration + 100);
        }
    }
  var resizeTimer;

    /*
    * Wp default search widget edit and
    * remove search button from the form and
    * added icon for search
    * */
    function add_Search_Icon_In_Wp_Default_Search_Widget(){
        var searchSubmitBTN = document.querySelector('.nestland__blog-sidebar .widget_search .search-submit');
        if (null != searchSubmitBTN){
            searchSubmitBTN.remove();
            var searchIcon = document.createElement('button');
            searchIcon.className = 'search-icon';
            searchIcon.setAttribute('type', 'submit');
            searchIcon.innerHTML = '<i class="fa fa-search"></i>'; // Replace with your preferred search icon HTML

            var searchForm = document.querySelector('.nestland__blog-sidebar .widget_search .search-form');
            searchForm.appendChild(searchIcon);
        }

    }
    add_Search_Icon_In_Wp_Default_Search_Widget();


    function scrollTop(){
        //Make sure the user has scrolled at least double the height of the browser
        var toggleHeight = $(window).outerHeight() * 0.5;
        $(window).scroll(function() {

            if ($(window).scrollTop() > toggleHeight) {
                //Adds active class to make button visible
                $(".m-backtotop").addClass("active");
            } else {
                //Removes active class to make button visible
                $(".m-backtotop").removeClass("active");
            }
        });

        //Scrolls the user to the top of the page again
        $(".m-backtotop").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    }
    scrollTop();

    const header = document.querySelector(".page-header");
    const toggleClass = "is-sticky";

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 150) {
            header.classList.add(toggleClass);
        } else {
            header.classList.remove(toggleClass);
        }
    });

})(jQuery);

