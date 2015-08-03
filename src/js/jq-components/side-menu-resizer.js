var jQuery = require('jquery');

(function($, document){
    var min = 50;
    var max = 3600;
    var mainmin = 200;

    var app = $('#notes-app');
    var sidebar = app.find('.side-bar');
    var splitbar = app.find('.split-bar');

    splitbar.mousedown(function (e) {
        e.preventDefault();
        $(this).addClass("split-dragging");
        $(document).mousemove(function (e) {
            e.preventDefault();
            var x = e.pageX - sidebar.offset().left;
            if (x > min && x < max && e.pageX < ($(window).width() - mainmin)) {
                setTimeout(function(){
                    sidebar.css("width", x);
                },0);
            }
        });
    });
    $(document).mouseup(function (e) {
        $(document).unbind('mousemove');
        $(this).removeClass("split-dragging");
    });
})(jQuery, document);

