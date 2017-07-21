$(document).ready(function() {

    'use strict';

    // Replace no-js and adjust touch classes  
    ! function() {
        document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, 'js');
        var yesIfTouchDevice = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        if (yesIfTouchDevice) {
            document.documentElement.className += " touch";
        } else {
            document.documentElement.className += " no-touch";
        }
    }();
    //replacing no-js and touch finishes

    // Global Module starts: For user agent device details
    var userAgent = function() {
        var yesIfTouchDevice = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        var yesIfRatina = (window.devicePixelRatio > 1);

        function isTouchDevice() {
            return yesIfTouchDevice;
        }

        function isRatina() {
            return yesIfRatina;
        }

        function width() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        }

        return {
            isTouchDevice: isTouchDevice,
            isRatina: isRatina,
            width: width
        }
    }();
    // Global Module finishes: User Agent

    // Module: Sidebar starts
    ! function() {
        $(".button-collapse").sideNav();


        //search form functionality on smaller screens  
        $(".search-wrapper i.search").click(function() {
            if (!$(".nav-wrapper").hasClass("open") && (userAgent.width() < 993)) {
                $(".nav-wrapper").addClass("open");
            }
        });
        $(".nav-wrapper .search-wrapper i.close").click(function() {
            $(".nav-wrapper").removeClass("open");
        });

        
        


    }();
    // Module: Sidebar ends


});
