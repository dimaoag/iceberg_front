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


// tabs
$(".tab-item").not(":first").hide();
$(".tabs .tab").click(function() {
    $(".tabs .tab").removeClass("active-tab").eq($(this).index()).addClass(" active-tab");
    $(".tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active-tab");


// Initialize and add the map
function initMap() {
    var iceberg = {lat: 49.235373, lng: 28.489296};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 19, center: iceberg});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: iceberg, map: map});
}
