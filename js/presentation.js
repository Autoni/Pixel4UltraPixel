TweenMax.set(".fadeIn", {autoAlpha:0});
var tween = TweenMax.staggerTo(".fadeIn", 1, {autoAlpha:1}, 1);

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "30%"})
    .setTween(tween)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);





/*var controller = new ScrollMagic.Controller();

var tweenBG = TweenMax.to(".presentation-img", 1,
        {
                //immediateRender : true,
                //ease : Circ.easeOut,
                scale : 0.5,
                opacity: 0,
                onUpdate : function(){
                        //$(".presentation-img").css("background-image", url(images[obj.curImg]));
                }
        }
);

var sceneBG = new ScrollMagic.Scene({triggerElement: ".container new-screen", duration: "100%"})
        .setTween(tweenBG)
        .setPin(".presentation-img")
        .addIndicators()
        .addTo(controller);

var tweenPX = TweenMax.to(".presentation-pixel-img", 1,
        {
                //immediateRender : true,
                //ease : Circ.easeOut,
                scale : 0.5,
                opacity: 1,
                onUpdate : function(){
                        //$(".presentation-img").css("background-image", url(images[obj.curImg]));
                }
        }
);

var scenePX = new ScrollMagic.Scene({triggerElement: ".container new-screen", duration: "100%"})
        .setTween(tweenPX)
        .setPin(".presentation-pixel-img")
        .addIndicators()
        .addTo(controller);
*/