$(document).ready(function () {
    window.onscroll = function () { myFunction() };
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    let video = document.getElementById('video')

    $('#play-icon').click(() => {
        switchIcon();
        video.paused ? video.play() : video.pause();
    });

    video.addEventListener('ended', () => {
        switchIcon();
    }, false);

    function switchIcon() {
        $('#play-icon').toggleClass('fa-play-circle');
        $('#play-icon').toggleClass('fa-pause-circle');
    }
});