'use strict';

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookieMessage()
{
	if(getCookie('cookieConfirm') !== 'yes') {
		document.getElementById('cookieMessage').classList.add('show');
	}
}

function cookieAgree()
{
	setCookie('cookieConfirm', 'yes', 365);
	document.getElementById('cookieMessage').classList.remove('show');
}

function hasClass(el, cls) 
{
	return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

function slideTo(el)
{
	$('html, body').animate({
		scrollTop: $(el).offset().top
	}, 500);
}

function subMenuToggle()
{
    $('.navigation__menu').find('> ul').find('> li').on('mouseenter', function() {
        $(this).find('> .sub').stop(true, true).fadeIn(200);
    });
    $('.navigation__menu').find('> ul').find('> li').on('mouseleave', function() {
        $(this).find('> .sub').stop(true, true).fadeOut(200);
    });
}

function mobileMenuOpen()
{
    $('.container__nav-mobile').find('.menu-open').on('click', function(e) {
        e.preventDefault();
        $('.container__nav').addClass('active');
        $('.container__nav-mobile').addClass('hide');
        $('.fadeincont').fadeIn(200);
    });
}

function mobileMenuClose()
{
    $('.container__nav').find('.menu-close').on('click', function(e) {
        e.preventDefault();
        $('.container__nav').removeClass('active');
        $('.container__nav-mobile').removeClass('hide');
        $('.fadeincont').fadeOut(250);
    });
    $('.fadeincont').on('click', function(e) {
        e.preventDefault();
        $('.container__nav').removeClass('active');
        $('.container__nav-mobile').removeClass('hide');
        $('.fadeincont').fadeOut(200);
    });
}


function initContactMap()
{
	var contact_map = document.getElementById('contact_map');
	var map = new google.maps.Map(contact_map, {
		center: {lat: 52.3214064, lng: 4.8788931},
		zoom: 11,
		scrollwheel: false,
		draggable: true,
		mapTypeControl: false,
		scaleControl: true,
		streetViewControl: true
	});
	var pathArray = location.href.split( '/' );
	var protocol = pathArray[0];
	var host = pathArray[2];
	var $url = protocol + '//' + host;
	var image = {
		url: $url+'/themes/sative/assets/img/map_logo.png',
		// This marker is 20 pixels wide by 32 pixels high.
		size: new google.maps.Size(238, 328),
		// The origin for this image is (0, 0).
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at (0, 32).
		anchor: new google.maps.Point(30, 82),
		scaledSize: new google.maps.Size(60, 82)
	};
	var marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(52.3214064,4.8788931),
		icon: image
	});
	// map.set('styles', 
    //     [
    //         {
    //             "featureType": "water",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#e9e9e9"
    //                 },
    //                 {
    //                     "lightness": 17
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "landscape",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#f5f5f5"
    //                 },
    //                 {
    //                     "lightness": 20
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.highway",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#ffffff"
    //                 },
    //                 {
    //                     "lightness": 17
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.highway",
    //             "elementType": "geometry.stroke",
    //             "stylers": [
    //                 {
    //                     "color": "#ffffff"
    //                 },
    //                 {
    //                     "lightness": 29
    //                 },
    //                 {
    //                     "weight": 0.2
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.arterial",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#ffffff"
    //                 },
    //                 {
    //                     "lightness": 18
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.local",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#ffffff"
    //                 },
    //                 {
    //                     "lightness": 16
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "poi",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#f5f5f5"
    //                 },
    //                 {
    //                     "lightness": 21
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "poi.park",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#dedede"
    //                 },
    //                 {
    //                     "lightness": 21
    //                 }
    //             ]
    //         },
    //         {
    //             "elementType": "labels.text.stroke",
    //             "stylers": [
    //                 {
    //                     "visibility": "on"
    //                 },
    //                 {
    //                     "color": "#ffffff"
    //                 },
    //                 {
    //                     "lightness": 16
    //                 }
    //             ]
    //         },
    //         {
    //             "elementType": "labels.text.fill",
    //             "stylers": [
    //                 {
    //                     "saturation": 36
    //                 },
    //                 {
    //                     "color": "#333333"
    //                 },
    //                 {
    //                     "lightness": 40
    //                 }
    //             ]
    //         },
    //         {
    //             "elementType": "labels.icon",
    //             "stylers": [
    //                 {
    //                     "visibility": "off"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "transit",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#f2f2f2"
    //                 },
    //                 {
    //                     "lightness": 19
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "administrative",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#fefefe"
    //                 },
    //                 {
    //                     "lightness": 20
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "administrative",
    //             "elementType": "geometry.stroke",
    //             "stylers": [
    //                 {
    //                     "color": "#fefefe"
    //                 },
    //                 {
    //                     "lightness": 17
    //                 },
    //                 {
    //                     "weight": 1.2
    //                 }
    //             ]
    //         }
    //     ]
	// );
}

function instafeed()
{
    instafetch.init({
        accessToken: '1208001461.1677ed0.60e2485b8e264f408c9e09a5b5b8ef9d',
        target: 'instafeed',
        numOfPics: 15,
        caption: true
    });
    // var userFeed = new Instafeed({
    //     get: 'user',
    //     userId: '3954768309',
    //     accessToken: '1208001461.1677ed0.60e2485b8e264f408c9e09a5b5b8ef9d',
    //     clientId: 'c6f85add2e5f4b41a9e2af457244631e',
    //     template: '<a href="{{link}}"><img src="{{image}}" /></a>',
    //     error: function(error) {
    //         console.log(error);
    //     }
    // });
    // userFeed.run();

}

$(document).ready(function() {
    subMenuToggle();
    mobileMenuOpen();
    mobileMenuClose();
    instafeed();
});