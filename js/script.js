//
// new fullScroll({
//     // parent container
//     container : 'main',
//     // content section
//     sections : 'section',
//     // animation speed
//     animateTime : 0.7,
//     // easing for animation
//     animateFunction : 'ease',
//     // current position
//     currentPosition: 0,
//     // display dots navigation
//     displayDots: true,
//     // where to place the dots navigation
//     dotsPosition: 'left'
// });
$(document).ready(function(){
    new fullScroll({
        mainElement: 'main',
        displayDots: true,
        dotsPosition: 'right',
        animateTime: 0.5,
        animateFunction: 'ease'
    });
});
