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


var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('main-video', {
      height: '390',
      width: '640',
      videoId: 'vyiVRtNkrHI',
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      }
    });
}


// autoplay video
function onPlayerReady(event) {
}

// when video ends
function onPlayerStateChange(event) { 
    if(event.data === 0) {          
    }
    if(event.data === 1) {  
        $("#myCarousel").carousel('pause');
    
    }
}

