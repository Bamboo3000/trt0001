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

$(document).ready(function() {
    subMenuToggle();
    mobileMenuOpen();
    mobileMenuClose();
});