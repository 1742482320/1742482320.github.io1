
$(document).ready(function(){

    $('a.blog-button').on('click',function(){
        $('.panel-cover').addClass('panel-cover-collapsed');
    });
    if (window.location.hash && window.location.hash == "#blog") {
        $('.panel-cover').addClass('panel-cover-collapsed');
    }
});
