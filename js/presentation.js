var controller = new ScrollMagic.Controller();

var tween = TweenMax.to(".presentation-img", 1,
        {
                //immediateRender : true,
                //ease : Circ.easeOut,
                scale : 0.5,
                //opacity: 0,
                onUpdate : function(){
                        //$(".presentation-img").css("background-image", url(images[obj.curImg]));
                }
        }
);

var scene = new ScrollMagic.Scene({triggerElement: ".container new-screen", duration: "100%"})
        .setTween(tween)
        .setPin(".presentation-img")
        .addIndicators()
        .addTo(controller);
