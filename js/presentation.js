var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: ".container new-screen", duration: 500})
        .setTween(".presentation-img", {scale: 0.5})
        .setPin(".presentation-img")
        .addIndicators()
        .addTo(controller);