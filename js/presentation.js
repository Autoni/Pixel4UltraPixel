var controller = new ScrollMagic.Controller();

var tween = TweenMax.to(".presentation-img", 0.5,
        {
                //immediateRender : true,
                //ease : Circ.easeOut,
                scale : 0.5,
                onUpdate : function(){
                        //$(".presentation-img").css("background-image", url(images[obj.curImg]));
                }
        }
);

var scene = new ScrollMagic.Scene({triggerElement: ".container new-screen", duration: 500})
        .setTween(tween)
        .setPin(".presentation-img")
        .addIndicators()
        .addTo(controller);

 /*       
//Image sequence classes
const images = [
        "../assets/presentationImg.jpg",
        "../assets/pixelPresentation.png"
      ];
      
const obj = {curImg: 0};
      
const tween = TweenMax.to(obj, 0.5,
{
        curImg: images.length - 1,
        roundProps: "curImg",
        immediateRender: true,
        ease: Circ.easeOut,
        onUpdate: function () {
                var elements = document.querySelectorAll('.intro__image');
                for (var i = 0; i < elements.length; i++) {
                        elements[i].style.visibility = 'hidden';
                }
                document.getElementById(images[obj.curImg]).style.visibility = 'visible';
        }
});
      
const imagesScene = new ScrollMagic.Scene({triggerElement: ".container new-screen", duration: "300%"})
.setTween(tween)
.addTo(controller);
      
//Pin the Intro Media Section after image sequence is completed
new ScrollMagic.Scene({triggerElement: ".intro__end"})
.setClassToggle(".intro__media", "active")
.addTo(controller);
      
      
// Fading in elements once they are in the viewport
const fadeInElements = document.getElementsByClassName('fade');
for (var i=0; i<fadeInElements.length; i++) {
        const fadeInScene = new ScrollMagic.Scene({triggerElement: fadeInElements[i], reverse: false, triggerHook: 1})
        .setClassToggle(fadeInElements[i], 'fade--active')
        .addTo(controller);
}*/