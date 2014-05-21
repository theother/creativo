console.log('\'Allo \'Captain!');




//Test Size dem mediaQ, then fire mag
//
(function() {
  var qry1;

  $('.dimensions').html('Width: ' + $(window).width() + 'px');

  $(window).resize(function() {
    return $('.dimensions').html('Width: ' + $(this).width() + 'px');
  });

  qry1 = Harvey.attach('screen and (min-width:800px)', {
    setup: function() {

        //Formate Layout
        //

        /* use as handler for resize*/
        $(window).resize(adjustLayout).resize();
        /* call function in ready handler*/
        $(document).ready(function(){
            adjustLayout();
            /* your other page load code here*/
        })

        function adjustLayout(){
            $('#homeWrapper').css({
                position: 'absolute',
                left: ($(window).width() - $('#homeWrapper').outerWidth())/2,
                top: ($(window).height() - $('#homeWrapper').outerHeight())/4
            });

        }
    },
    

    on: function() {
      //Start tween

var quote = document.getElementById("quote"),
    decoy = document.getElementById("decoys"),
    quoteSplit = new SplitText(quote, {type:"words"}),
    decoySplit = new SplitText(decoy, {type:"words"}),
    tl = new TimelineMax({delay:0.5, repeat:0, repeatDelay:1}),
    allWords = quoteSplit.words.concat(decoySplit.words),

    box1 = $('.box1'),

    mTitle = $('#mTitle'),
    mTitle2 = $('#mTitle2'),
    mTitle3 = $('#mTitle3'),
    mBold = $('#mBold'),
    splitTitle = new SplitText(mTitle, {type:"chars"}),
    splitTitle2 = new SplitText(mTitle2, {type:"chars"}),
    splitTitle3 = new SplitText(mTitle3, {type:"chars"}),


    iconOne = $('.iconOne'),
    iconTwo = $('.iconTwo'),
    iconThree = $('.iconThree'),

    smallHeadLogo = $('.smallHeadLogo'),
    modal2 = $('.modal2'),


    i;

TweenLite.set([quote, decoy], {visibility:"visible"});
TweenLite.set(allWords, {boxShadow:"(0px 0px 8px rgba(0, 0, 0, 0.7)"});
TweenMax.set(iconOne, {css:{autoAlpha:0, scale:'0'}});
TweenMax.set(iconTwo, {css:{autoAlpha:0, scale:'0'}});
TweenMax.set(iconThree, {css:{autoAlpha:0, scale:'0'}});
TweenMax.set(smallHeadLogo, {css:{opacity:('0')}});
TweenMax.set(modal2, {css:{autoAlpha:0, scale:'0'}});



//intro
for(i = 0; i < allWords.length; i++) {
  tl.fromTo(allWords[i], 0.4 + Math.random() * 0.5, {x:randomInteger(-400, 400), y:randomInteger(-300, 300), autoAlpha:0}, {force3D:true, rotation:randomInteger(-60, 60), y:randomInteger(60, 450), x:randomInteger(-350, 350), autoAlpha:1, ease:Power2.easeOut}, Math.random() * 0.5);
}

//show sentence
for(i = 0; i < quoteSplit.words.length; i++) {
  tl.to(quoteSplit.words[i], 0.5, {rotation:randomInteger(-6, 10), x:randomInteger(-2, 2), y:randomInteger(-4, 4), scaleX:1.1, scaleY:1.1,}, "sentence+=" + i * 0.3);
}

//outro
tl.staggerTo(allWords, 0.3, {autoAlpha:0, scale:0, ease:Back.easeIn.config(5)}, 0.01, "+=2");



//secondComing
tl.staggerFrom(splitTitle.chars, .5, {autoAlpha:0, rotationX:360, transformOrigin:"100% 100% 100", ease:Back.easeOut}, 0.10);
tl.staggerFrom(splitTitle2.chars, .5, {autoAlpha:0, rotationX:0, transformOrigin:"0% 50% -50", rotationY:360, ease:Back.easeOut}, 0.02);
tl.staggerFrom(splitTitle3.chars, .75, {autoAlpha:0, rotationY:360, ease:Back.easeOut}, 0.02);
tl.to(iconOne, .5,  {css:{autoAlpha:1, scale:'1'}, ease:Back.easeOut});
tl.to(iconTwo, .5,  {css:{autoAlpha:1, scale:'1'}, ease:Back.easeOut});
tl.to(iconThree, .5,  {css:{autoAlpha:1, scale:'1'}, ease:Back.easeOut});
tl.to(modal2, 1.25,  {css:{autoAlpha:1, scale:'1'}, ease:Bounce.easeOut});
tl.to(smallHeadLogo, 1.25,  {css:{opacity:('1'), scale:'1'}});

function randomInteger(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

     },


    off: function() {
     console.log('off fire') ;
    }
  });


}).call(this);


(function() {
  var qry2;

  qry2 = Harvey.attach('screen and (min-width:800px)', {
    setup: function() {
    },
    

    on: function() {
    
///////////////////////////
//Init Scroll Controller //
//Scrolling Magic        //
///////////////////////////

var controller;
$(document).ready(function($) {
    // init controller
    controller = new ScrollMagic();
});



//////////////
//Logo Head //
//////////////

$(document).ready(function($) {
    var smallHeadLogo = $(".smallHeadLogo");
    var header = $(".header");
    var switchNavColor = $(".switchNavColor");
    var pageIndicate = $(".pageIndicate");
    var hTitle = $(".hTitle");
    var smallHeadLogo = $(".smallHeadLogo");
    var tl = new TimelineMax({repeat:0, repeatDelay:1});


    // build tween
    var tween = new TimelineMax ()
        .add([
         tl.to(smallHeadLogo, 0.6, {css:{autoAlpha:0}, ease:Circ.easeIn})   
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#mTitle3", offset: 200})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    scene.addIndicators();
});

// ////////////////////////
// // Header Page Switch //
// ////////////////////////

var $window = $(window)
                var $box = $(".box");
                var $menus = $(".header ul");
                
                var currentIndex = 0;
                var lastIndex = -1;
                
                var positions = []
                
                //
                
                $menus.find("li").each(function(index){
                    
                    $(this).css({
                        position: "absolute",
                        top: index*74,
                        color: $box.eq(index).css("background-color")
                    });
                    setHeader();
                });
                
                //
                
                $window.scroll(function() {    
                    
                    var scrollTop = $window.scrollTop();
                    
                    $.each(positions, function(index, value){
                        if(value > scrollTop ){ 
                            if(currentIndex != index){
                                lastIndex = currentIndex;
                                currentIndex = index;
                                setHeader();
                            }
                            return false;   
                        }
                    });
                    
                });
                
                function setHeader(){
                
                    TweenLite.to( $menus, 0.5, {top: -74*currentIndex - 14 });
                
                    if(currentIndex > lastIndex){
            //some animation from top to bottom
                        //console.log("otgore nadolu");
                    } else {
             //some animation from bottom to top 
                        //console.log("otdolu nagore");
                    }
                }
                
                $window.resize(function(){
                    positions.length = 0;
                    $box.each(function(){
                        var $elem = $(this);
                        return  positions.push( parseInt($elem.offset().top + $elem.height() - 100));
                    });
                }).resize();


//////////
//About //
//////////


//Process1
$(document).ready(function($) {

var titleContain = (".pTitleContain"),
    process1 = ("#process1"),
    process2 = ("#process2"),
    tl = new TimelineMax({repeat:0, repeatDelay:1});


    //Set Objects
    TweenMax.set(process1, {css:{transform:"translateX(-250%)", alpha:0}});
    TweenMax.set(process2, {css:{transform:"translateX(250%)", alpha:0}});



    // build tween
    var tween = new TimelineMax ()
        .add([
            //TweenMax.fromTo("#parallax #big", 1, {scale: 2, alpha: 0.3, top: "100%"}, {top: "0%", ease: Linear.easeNone}),
            tl.to(process1, .5, {css:{transform:"translateX(0%)", alpha:1}}),
            tl.to(process2, .5, {css:{transform:"translateX(0%)", alpha:1}}),
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: titleContain, offset: 250})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    //scene.addIndicators();
});


//Process2
$(document).ready(function($) {

var process1 = ("#process1"),
    process3 = ("#process3"),
    process4 = ("#process4"),
    tl = new TimelineMax({repeat:0, repeatDelay:1});


    TweenMax.set(process3, {css:{transform:"translateX(-250%)", alpha:0}});
    TweenMax.set(process4, {css:{transform:"translateX(250%)", alpha:0}});
    


    // build tween
    var tween = new TimelineMax ()
        .add([
            //TweenMax.fromTo("#parallax #big", 1, {scale: 2, alpha: 0.3, top: "100%"}, {top: "0%", ease: Linear.easeNone}),
            tl.to(process3, .5, {css:{transform:"translateX(0%)", alpha:1}}),
            tl.to(process4, .5, {css:{transform:"translateX(0%)", alpha:1}}),
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: process1, offset: 250})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    //scene.addIndicators();
});

//Process3
$(document).ready(function($) {

var process4 = ("#process4"),
    process5 = ("#process5");
    tl = new TimelineMax({repeat:0, repeatDelay:1});


    TweenMax.set(process5, {css:{transform:"translateY(250%)", alpha:0}});

    // build tween
    var tween = new TimelineMax ()
        .add([
            tl.to(process5, .5, {css:{transform:"translateY(0%)", alpha:1}}),
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: process4, offset: 400})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    //scene.addIndicators();
});

/////////////////////
//header functioin //
/////////////////////


$(document).ready(function($) {

    // build tween
    var btn = $(".btn");
    var section1 = $("#home");
    var secDiv = section1.height();
    var offS = secDiv - 70;
    var header = $(".header");
    var switchNavColor = $(".switchNavColor");
    var pageIndicate = $(".pageIndicate");
    var hTitle = $(".hTitle");
    var smallHeadLogo = $(".smallHeadLogo");
    var word = $(".word")
    var tl = new TimelineMax({repeat:0, repeatDelay:1});

    //Set Objects
    TweenMax.set(btn, {css:{opacity:0, marginTop:(-70)}});

// build tween
    var tween = tl.to(header, 0.25, {css:{backgroundColor: "white", opacity:"0.95"}});
                tl.to(pageIndicate, 0, {css:{className:'+=headerWhite'}});
                tl.to(hTitle, 0, {css:{className:'+=headerWhite'}});
                tl.to(smallHeadLogo, 0, {css:{display: "none"}});
                tl.to(switchNavColor, 0, {css:{className:'+=whiteNav'}});
                tl.to(word, 0, {css:{className:'+=borderLeftNav'}});
                tl.to(btn, .75, {css:{marginTop:(1), opacity:1}, ease:Bounce.easeOut});
                tl.to(btn, .1, {css:{marginTop:(-3)}});       

    // build scene
    var scene = new ScrollScene({offset: offS})
                    .setTween(tween)
                    .addTo(controller);


    // show indicators (requires debug extension)
    //scene.addIndicators();
});
     },


    off: function() {

     console.log('off fire') ;
    }
  });


}).call(this);


$("#homeButton").hover(over, out);

function over(){
TweenMax.to($("#homeButton"), 1, {
    width: '200px',
    height: '200px',
    borderRadius:"50%",
    fontSize: '3em'
});
}

function out(){
TweenMax.to($("#homeButton"), 1, {
    width: '300px',
    height: '100px',
    borderRadius:"0%",
    fontSize: '5em',
    backgroundImage: 'none'
});
}






(function() {
  var qry1;


  qry3 = Harvey.attach('screen and (min-width:800px)', {
    setup: function() {

    },
    

    on: function() {
      //Start tween

///////////////////////////
//Init Scroll Controller //
//Scrolling Magic        //
///////////////////////////

var controller;
$(document).ready(function($) {
    // init controller
    controller = new ScrollMagic();
});







////////////
//Paralax //
////////////

//paralax1
$(document).ready(function($) {

    // build tween
    var tween = new TimelineMax ()
        .add([
            TweenMax.fromTo("#parallax #big", 1, {scale: 2, alpha: 0.3, top: "100%"}, {top: "0%", ease: Linear.easeNone}),
            TweenMax.to("#parallax #parallaxbg", 1, {backgroundPosition: "0 -20%", ease: Linear.easeNone})
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#parallax", duration: $(window).height() + 200, offset: -500})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    //scene.addIndicators();
});



$(document).ready(function($) {
    // build tween
    var tween = new TimelineMax ()
        .add([
            TweenMax.fromTo("#prlxTextOne", 1, {left: "100%"}, {left: "-5%", ease: Linear.easeNone}),
            TweenMax.fromTo("#prlxTextTwo", 1, {right: "100%"}, {left: "10%", ease: Linear.easeNone}),
            TweenMax.to("#parallaxTwo #parallaxbgTwo", 1, {backgroundPosition: "0% -20%", ease: Linear.easeNone})
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#parallaxTwo", duration: $(window).height() + 200, offset: -500})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    //scene.addIndicators();
});


$(document).ready(function($) {
    // build tween
    var tween = new TimelineMax ()
        .add([
            TweenMax.fromTo("#prlxTextOne", 1, {alpha: 1, scale: 1}, {alpha: 0, scale: 1.3}),
            TweenMax.fromTo("#prlxTextTwo", 1, {alpha: 1, scale: 1}, {alpha: 0, scale: 1.3}),
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#parallaxTwo", duration: 100, offset: 475})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    scene.addIndicators();
});



//paralax3
$(document).ready(function($) {
    // build tween
    var tween = new TimelineMax ()
        .add([
            TweenMax.to("#parallaxThree #parallaxbgThree", 1, {backgroundPosition: "0% -15%", ease: Linear.easeNone}),
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#parallaxThree", duration: $(window).height() - 200, offset: -150})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    scene.addIndicators();
});

//paralax3 text
$(document).ready(function($) {
    // build tween
    var mySplitText = new SplitText("#prlxTextDec", {type:"chars"});
    var tween = new TimelineMax ()
        .add([
            TweenMax.staggerTo("#prlxTextDec > div", 0.0001, {css:{className:'+=underline'}}, 0.2),
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#parallaxThree", duration: $(window).height() - ($(window).height()/1.5), offset: ($(window).height()/8)})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    scene.addIndicators();
});


     },


    off: function() {
     console.log('off fire') ;
    }
  });


}).call(this);



// //////////////
// //Front Mag //
// //////////////
// ///


// //Formate Layout
// //

// /* use as handler for resize*/
// $(window).resize(adjustLayout).resize();
// /* call function in ready handler*/
// $(document).ready(function(){
//     adjustLayout();
//     /* your other page load code here*/
// })

// function adjustLayout(){
//     $('#homeWrapper').css({
//         position: 'absolute',
//         left: ($(window).width() - $('#homeWrapper').outerWidth())/2,
//         top: ($(window).height() - $('#homeWrapper').outerHeight())/4
//     });

// }


// //Start tween

// var quote = document.getElementById("quote"),
//     decoy = document.getElementById("decoys"),
//     quoteSplit = new SplitText(quote, {type:"words"}),
//     decoySplit = new SplitText(decoy, {type:"words"}),
//     tl = new TimelineMax({delay:0.5, repeat:0, repeatDelay:1}),
//     allWords = quoteSplit.words.concat(decoySplit.words),

//     box1 = $('.box1'),

//     mTitle = $('#mTitle'),
//     mTitle2 = $('#mTitle2'),
//     mTitle3 = $('#mTitle3'),
//     mBold = $('#mBold'),
//     splitTitle = new SplitText(mTitle, {type:"chars"}),
//     splitTitle2 = new SplitText(mTitle2, {type:"chars"}),
//     splitTitle3 = new SplitText(mTitle3, {type:"chars"}),


//     iconOne = $('.iconOne'),
//     iconTwo = $('.iconTwo'),
//     iconThree = $('.iconThree'),

//     smallHeadLogo = $('.smallHeadLogo'),
//     modal2 = $('.modal2'),


//     i;

// TweenLite.set([quote, decoy], {visibility:"visible"});
// TweenLite.set(allWords, {boxShadow:"(0px 0px 8px rgba(0, 0, 0, 0.7)"});
// TweenMax.set(iconOne, {css:{autoAlpha:0, scale:'0'}});
// TweenMax.set(iconTwo, {css:{autoAlpha:0, scale:'0'}});
// TweenMax.set(iconThree, {css:{autoAlpha:0, scale:'0'}});
// TweenMax.set(smallHeadLogo, {css:{opacity:('0')}});
// TweenMax.set(modal2, {css:{autoAlpha:0, scale:'0'}});



// //intro
// for(i = 0; i < allWords.length; i++) {
//   tl.fromTo(allWords[i], 0.4 + Math.random() * 0.5, {x:randomInteger(-400, 400), y:randomInteger(-300, 300), autoAlpha:0}, {force3D:true, rotation:randomInteger(-60, 60), y:randomInteger(60, 450), x:randomInteger(-350, 350), autoAlpha:1, ease:Power2.easeOut}, Math.random() * 0.5);
// }

// //show sentence
// for(i = 0; i < quoteSplit.words.length; i++) {
//   tl.to(quoteSplit.words[i], 0.5, {rotation:randomInteger(-6, 10), x:randomInteger(-2, 2), y:randomInteger(-4, 4), scaleX:1.1, scaleY:1.1,}, "sentence+=" + i * 0.3);
// }

// //outro
// tl.staggerTo(allWords, 0.3, {autoAlpha:0, scale:0, ease:Back.easeIn.config(5)}, 0.01, "+=2");



// //secondComing
// tl.staggerFrom(splitTitle.chars, .5, {autoAlpha:0, rotationX:360, transformOrigin:"100% 100% 100", ease:Back.easeOut}, 0.10);
// tl.staggerFrom(splitTitle2.chars, .5, {autoAlpha:0, rotationX:0, transformOrigin:"0% 50% -50", rotationY:360, ease:Back.easeOut}, 0.02);
// tl.staggerFrom(splitTitle3.chars, .75, {autoAlpha:0, rotationY:360, ease:Back.easeOut}, 0.02);
// tl.to(iconOne, .5,  {css:{autoAlpha:1, scale:'1'}, ease:Back.easeOut});
// tl.to(iconTwo, .5,  {css:{autoAlpha:1, scale:'1'}, ease:Back.easeOut});
// tl.to(iconThree, .5,  {css:{autoAlpha:1, scale:'1'}, ease:Back.easeOut});
// tl.to(modal2, 1.25,  {css:{autoAlpha:1, scale:'1'}, ease:Bounce.easeOut});
// tl.to(smallHeadLogo, 1.25,  {css:{opacity:('1'), scale:'1'}});

// function randomInteger(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min);
// }



// $("#homeButton").hover(over, out);

// function over(){
// TweenMax.to($("#homeButton"), 1, {
//     width: '200px',
//     height: '200px',
//     borderRadius:"50%",
//     fontSize: '3em'
// });
// }

// function out(){
// TweenMax.to($("#homeButton"), 1, {
//     width: '300px',
//     height: '100px',
//     borderRadius:"0%",
//     fontSize: '5em',
//     backgroundImage: 'none'
// });
// }




///////////////////////////
//Init Scroll Controller //
//Scrolling Magic        //
///////////////////////////

var controller;
$(document).ready(function($) {
    // init controller
    controller = new ScrollMagic();
});







// ////////////
// //Paralax //
// ////////////

// //paralax1
// $(document).ready(function($) {

//     // build tween
//     var tween = new TimelineMax ()
//         .add([
//             TweenMax.fromTo("#parallax #big", 1, {scale: 2, alpha: 0.3, top: "100%"}, {top: "0%", ease: Linear.easeNone}),
//             TweenMax.to("#parallax #parallaxbg", 1, {backgroundPosition: "0 -20%", ease: Linear.easeNone})
//         ]);

//     // build scene
//     var scene = new ScrollScene({triggerElement: "#parallax", duration: $(window).height() + 200, offset: -500})
//                     .setTween(tween)
//                     .triggerHook("onCenter")
//                     .addTo(controller);

//     // show indicators (requires debug extension)
//     //scene.addIndicators();
// });



// $(document).ready(function($) {
//     // build tween
//     var tween = new TimelineMax ()
//         .add([
//             TweenMax.fromTo("#prlxTextOne", 1, {left: "100%"}, {left: "-5%", ease: Linear.easeNone}),
//             TweenMax.fromTo("#prlxTextTwo", 1, {right: "100%"}, {left: "10%", ease: Linear.easeNone}),
//             TweenMax.to("#parallaxTwo #parallaxbgTwo", 1, {backgroundPosition: "0% -20%", ease: Linear.easeNone})
//         ]);

//     // build scene
//     var scene = new ScrollScene({triggerElement: "#parallaxTwo", duration: $(window).height() + 200, offset: -500})
//                     .setTween(tween)
//                     .triggerHook("onCenter")
//                     .addTo(controller);

//     // show indicators (requires debug extension)
//     //scene.addIndicators();
// });


// $(document).ready(function($) {
//     // build tween
//     var tween = new TimelineMax ()
//         .add([
//             TweenMax.fromTo("#prlxTextOne", 1, {alpha: 1, scale: 1}, {alpha: 0, scale: 1.3}),
//             TweenMax.fromTo("#prlxTextTwo", 1, {alpha: 1, scale: 1}, {alpha: 0, scale: 1.3}),
//         ]);

//     // build scene
//     var scene = new ScrollScene({triggerElement: "#parallaxTwo", duration: 100, offset: 475})
//                     .setTween(tween)
//                     .triggerHook("onCenter")
//                     .addTo(controller);

//     // show indicators (requires debug extension)
//     scene.addIndicators();
// });



// //paralax3
// $(document).ready(function($) {
//     // build tween
//     var tween = new TimelineMax ()
//         .add([
//             TweenMax.to("#parallaxThree #parallaxbgThree", 1, {backgroundPosition: "0% -15%", ease: Linear.easeNone}),
//         ]);

//     // build scene
//     var scene = new ScrollScene({triggerElement: "#parallaxThree", duration: $(window).height() - 200, offset: -150})
//                     .setTween(tween)
//                     .triggerHook("onCenter")
//                     .addTo(controller);

//     // show indicators (requires debug extension)
//     scene.addIndicators();
// });

// //paralax3 text
// $(document).ready(function($) {
//     // build tween
//     var mySplitText = new SplitText("#prlxTextDec", {type:"chars"});
//     var tween = new TimelineMax ()
//         .add([
//             TweenMax.staggerTo("#prlxTextDec > div", 0.0001, {css:{className:'+=underline'}}, 0.2),
//         ]);

//     // build scene
//     var scene = new ScrollScene({triggerElement: "#parallaxThree", duration: $(window).height() - ($(window).height()/1.5), offset: ($(window).height()/8)})
//                     .setTween(tween)
//                     .triggerHook("onCenter")
//                     .addTo(controller);

//     // show indicators (requires debug extension)
//     scene.addIndicators();
// });

