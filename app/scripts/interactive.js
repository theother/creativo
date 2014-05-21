////////////////////////
//Interactive Fetures //
////////////////////////


// FitText
(function(){
    jQuery("#mTitle").fitText(.5, { minFontSize: '20px', maxFontSize: '120px' });
    jQuery(".mobileHomeTitle").fitText(.9, { minFontSize: '10px', maxFontSize: '40px' });
    jQuery(".mobileTagLine").fitText(4, { minFontSize: '10px', maxFontSize: '40px' });
    jQuery(".mobileTagLineSpan").fitText(.5, { minFontSize: '10px', maxFontSize: '60px' });
    jQuery(".mobileTagLocation").fitText(4, { minFontSize: '10px', maxFontSize: '40px' });

//paralax
    jQuery(".mobilePageShadowAbout").fitText(1.5, { minFontSize: '30px', maxFontSize: '60px' });
    jQuery(".mobilePageShadowProcess").fitText(1.5, { minFontSize: '30px', maxFontSize: '60px' });
    jQuery(".mobilePageShadowContact").fitText(1.5, { minFontSize: '30px', maxFontSize: '60px' });

//About
    jQuery(".aTitle").fitText(4.5, { minFontSize: '15px', maxFontSize: '80px' });
    jQuery(".aTitleTwo").fitText(4.5, { minFontSize: '15px', maxFontSize: '80px' });

//process
    jQuery(".pMainTitle").fitText(1, { minFontSize: '15px', maxFontSize: '120px' });    
    jQuery(".icon").fitText(.5, { minFontSize: '15px', maxFontSize: '150px' });
    
})();




//////////////////
//Text          //
/////////////// //


(function($) {
   $.fn.flowtype = function(options) {

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         maximum   : 9999,
         minimum   : 1,
         maxFont   : 9999,
         minFont   : 1,
         fontRatio : 35
      }, options),

// Do the magic math
// =================
      changes = function(el) {
         var $el = $(el),
            elw = $el.width(),
            width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
            fontBase = width / settings.fontRatio,
            fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
         $el.css('font-size', fontSize + 'px');
      };

// Make the magic visible
// ======================
      return this.each(function() {
      // Context for resize callback
         var that = this;
      // Make changes upon resize
         $(window).resize(function(){changes(that);});
      // Set changes on load
         changes(this);
      });
   };
}(jQuery));


$('.pDescript').flowtype({
   minimum : 500,
   maximum : 1200,
    minFont : 12,
   maxFont : 20,
   fontRatio : 20
});

$('.borderContainer').flowtype({
   minimum : 500,
   maximum : 1200,
    minFont : 12,
   maxFont : 20,
   fontRatio : 50
});

//Mobile nav // //
/////////////// //
//////////////////

$(document).ready(function(){

    $('.js-menu-trigger').on('click touchstart', function(e){
      $('.js-menu').toggleClass('is-visible');
      $('.js-menu-screen').toggleClass('is-visible');
      e.preventDefault();
    });

    $('.js-menu-screen').on('click touchstart', function(e){
      $('.js-menu').toggleClass('is-visible');
      $('.js-menu-screen').toggleClass('is-visible');
      e.preventDefault();
    });
  });


//////////////////////////
//Mobile Flashing Telly //
//////////////////////////


//percent

var $window = $(window);
var documentHeight = $(document).height();
var windowHeight = $window.height();
var scrollTop = $window.scrollTop();
var telly = $("#mobileHeadTitle");
var a = 1; 

$window.on("scroll", function() {
  scrollTop = $(window).scrollTop();        
  var scrollPercent = (scrollTop) / (documentHeight - windowHeight); //gives us the scroll percent range from 0 to 1

//console.log(scrollPercent);


if (scrollPercent > 0.02 ) { 
  TweenMax.to(telly, 1, {css:{opacity:1}, ease:Quint.easeIn});
}

else {
  TweenMax.to(telly, 1, {css:{opacity:0}, ease:Quint.easeIn});
}

});


// // function for flashing
// (function(){
//   TweenMax.to($('#mobileTellyFlash'), 1, {alpha:.4, repeat:-1, yoyo:true, repeatDelay:0.5});
// })();




/////////////////////////
//About Vertial slider //
/////////////////////////

 $(".js-vertical-tab-content").hide();
  $(".js-vertical-tab-content:first").show();

  /* if in tab mode */
  $(".js-vertical-tab").click(function(event) {
    event.preventDefault();

    $(".js-vertical-tab-content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).show();

    $(".js-vertical-tab").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
  });

  /* if in accordion mode */
  $(".js-vertical-tab-accordion-heading").click(function(event) {
    event.preventDefault()

    $(".js-vertical-tab-content").hide();
    var accordion_activeTab = $(this).attr("rel");
    $("#"+accordion_activeTab).show();

    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-vertical-tab").removeClass("is-active");
    $(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
  });





/////////////////////////
//Contact Form         //
/////////////////////////

//Name
$("#text_field").focus(function () {
  $(".formName").addClass( "nameFocus" );
});

$("#text_field").focusout(function () {
  $(".formName").removeClass( "nameFocus" );
});

//Phone
$("#text_field2").focus(function () {
  $(".formPhone").addClass( "focus" );
});

$("#text_field2").focusout(function () {
  $(".formPhone").removeClass( "focus" );
});

//Email
$("#text_field3").focus(function () {
  $(".formEmail").addClass( "focus" );
});

$("#text_field3").focusout(function () {
  $(".formEmail").removeClass( "focus" );
});

//Message
$("#text_area").focus(function () {
  $(".formMessage").addClass( "messageFocus" );
});

$("#text_area").focusout(function () {
  $(".formMessage").removeClass( "messageFocus" );
});

