$(document).ready(function(){function e(e,s){var t=e.offset(),c=t.top,l=c-s;$("body,html").animate({scrollTop:l},700)}$("a").click(function(){var s=$(this).attr("href"),t=$(s);return e(t,40),$(".selected").removeClass("selected"),$(this).addClass("selected"),!1}),$(window).scroll(function(){$(this).scrollTop()>600?$("#nav-cont").addClass("sticky"):($(".selected").removeClass("selected"),$(this).addClass("selected"),$("#nav-cont").removeClass("sticky"))})});