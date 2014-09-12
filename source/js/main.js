$(document).ready(function(){

  //Parallax Effect

  /*

  var background = $('.bgFullWidth');

  var docwindow = $(window);
  var measure = $('#measure');

  function newPos(pos, adjust, ratio){
      return ((pos - adjust) * ratio)  + "px";
  }
      
  function move(){
      
      //var pos = measure.offset().top;
      var pos = docwindow.scrollTop();
          
      bgFullWidth.css({'top' : newPos(pos, 0, -0.5)});//.queue('fx');
          
  }
      
      
  var didScroll = false;
      
  $(window).scroll(function(){
      didScroll = true;
  });
   
  setInterval(function() {
      if (didScroll) {
          didScroll = false;
          move();
      }
  }, 10); */

  //http://code.tutsplus.com/tutorials/simple-parallax-scrolling-technique--net-27641

  /*
  var $window = $(window); //You forgot this line in the above example

    $('section[data-type="background"]').each(function(){
      var $bgobj = $(this); // assigning the object
      $(window).scroll(function() {     
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      //var yPos = -(($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
      // Put together our final background position
      var coords = '0, '+ yPos + 'px,' + ' 0';
      // Move the background
      $bgobj.css({ transform: 'translate3d('coords')' });
      });
  }); */

  //Scroll to Top
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  }); 

  // Single Page Scroll
  //http://anythinggraphic.net/sticky-navigation-and-scrolling/

   $('a').click(function(){
  
    var el = $(this).attr('href');
    var elWrapped = $(el);
    
    scrollToDiv(elWrapped,40);

    $(".selected").removeClass("selected");
    $(this).addClass("selected");

    return false;
    
  });
    
  function scrollToDiv(element,navheight){
    
    var offset = element.offset();
    var offsetTop = offset.top;
    var totalScroll = offsetTop-navheight;
    
    $('body,html').animate({
    scrollTop: totalScroll
    }, 700);  
  }

  //Sticky Nav Bar

  $(window).scroll(function() {
  if ($(this).scrollTop() > 600){  
      $('#nav-cont').addClass("sticky");   
    }
    else{
      $(".selected").removeClass("selected");
      $(this).addClass("selected");
      $('#nav-cont').removeClass("sticky");
    }
  }); 

});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
jQuery(document).ready(function(){
    if( !isMobile.any() ){
        $(window).stellar();        
    }
});
