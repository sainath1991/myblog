/*!
 * Start Bootstrap - Clean Blog v3.3.7+1 (http://startbootstrap.com/template-overviews/clean-blog)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
(function($, Drupal) {
    $("body").on("input propertychange", ".floating-label-form-group", function(o) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(o.target).val())
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus")
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus")
    })
}), jQuery(document).ready(function(o) {
    var s = 1170;
    if (o(window).width() > s) {
        var i = o(".navbar-custom").height();
        o(window).on("scroll", {
            previousTop: 0
        }, function() {
            var s = o(window).scrollTop();
            s < this.previousTop ? s > 0 && o(".navbar-custom").hasClass("is-fixed") ? o(".navbar-custom").addClass("is-visible") : o(".navbar-custom").removeClass("is-visible is-fixed") : s > this.previousTop && (o(".navbar-custom").removeClass("is-visible"), s > i && !o(".navbar-custom").hasClass("is-fixed") && o(".navbar-custom").addClass("is-fixed")), this.previousTop = s
        })
    }
})(jQuery, Drupal);