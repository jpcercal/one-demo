"use strict";
var configureNavigationBar = function () {
    var navbarCssSelector = '#navbar-nav';
    try {
        $(navbarCssSelector).onePageNav({
            currentClass: 'active',
            scrollSpeed: 800,
        });
    }
    catch (e) { }
    var menuItemCssSelector = '.navbar-nav .nav-item .nav-link';
    var collapseCssSelector = '#navigation-bar--collapsible';
    $(menuItemCssSelector).on('click', function (event) {
        $(collapseCssSelector).collapse('hide');
    });
};
var configureAnimation = function () {
    // (new WOW({
    //     animateClass: 'animated',
    //     offset: 100,
    //     mobile: false,
    // })).init();
    AOS.init({
        offset: 200,
        duration: 400,
        easing: 'ease-in-sine',
        delay: 100,
    });
};
var configureNewsletterForm = function () {
    var form = $('#newsletter-form');
    var responseMessageCssSelector = '.newsletter .newsletter__response-message';
    var classToBeAddedWhenResponseArrives = 'newsletter__response-message--response-received';
    form.on('submit', function (e) {
        var newsletterData = {
            email: $('input[name="email"]', form).val(),
        };
        $.post($(form).attr('action'), newsletterData).always(function () {
            form.fadeOut('fast', function () { return $(responseMessageCssSelector).addClass(classToBeAddedWhenResponseArrives); });
        });
        e.preventDefault();
    });
};
$(function () {
    configureAnimation();
    configureNewsletterForm();
    configureNavigationBar();
    new Typed("#typed", {
        backSpeed: 20,
        fadeOut: true,
        loop: true,
        showCursor: true,
        smartBackspace: false,
        startDelay: 800,
        stringsElement: "#typed-strings",
        typeSpeed: 30
    });
});
