$(function () {

    // add some tooltip
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // html in tooltip
    $('a[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'bottom',
        html: true
    });

    // dropdown management
    $(".dropdown-toggle").click(function () {
        $(this).next(".dropdown-menu").toggle();
    });

});

