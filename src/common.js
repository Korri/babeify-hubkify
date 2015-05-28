//Include jquery if needed
window.jQuery || document.write("<script src='https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'>\x3C/script>");

//Run code
(function ($) {
    $("img").each(function () {
        var e = $(this);
        e.attr("src", forge_url(e.width(), e.height()));
    });
    $("*").filter(function () {
        var bg_image = "none";
        if (this.currentStyle) {
            bg_image = this.currentStyle.backgroundImage;
        }
        if (window.getComputedStyle) {
            bg_image = document.defaultView.getComputedStyle(this, null).getPropertyValue("background-image");
        }
        return bg_image !== "none" && bg_image.match(/url\(/i)
    }).each(function () {
        var _this = $(this);
        $("<img/>")
            .bind("load", function () {
                _this.css("background-image", 'url("' + forge_url($(this).width(), $(this).height()) + '")'), $(this).remove()
            })
            .hide()
            .appendTo("body")
            .attr("src", _this.css("background-image")
                .replace("url(", "")
                .replace(")", "")
                .replace("'", "")
                .replace('"', ""))
    });
})(window.jQuery, forge_url);
