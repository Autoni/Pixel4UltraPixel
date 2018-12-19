$(document).ready(function(){ 
 
    

	// define images
	let images = [
		"assets/Photos/Série d_images APN/camera20002.jpg",
		"assets/Photos/Série d_images APN/camera20003.jpg",
		"assets/Photos/Série d_images APN/camera20004.jpg",
		"assets/Photos/Série d_images APN/camera20005.jpg",
		"assets/Photos/Série d_images APN/camera20006.jpg",
		"assets/Photos/Série d_images APN/camera20007.jpg",
        "assets/Photos/Série d_images APN/camera20008.jpg",
        "assets/Photos/Série d_images APN/camera20009.jpg",
		"assets/Photos/Série d_images APN/camera20010.jpg",
		"assets/Photos/Série d_images APN/camera20011.jpg",
		"assets/Photos/Série d_images APN/camera20012.jpg",
		"assets/Photos/Série d_images APN/camera20013.jpg",
		"assets/Photos/Série d_images APN/camera20014.jpg",
        "assets/Photos/Série d_images APN/camera20015.jpg",
        "assets/Photos/Série d_images APN/camera20016.jpg",
		"assets/Photos/Série d_images APN/camera20017.jpg",
		"assets/Photos/Série d_images APN/camera20018.jpg",
		"assets/Photos/Série d_images APN/camera20019.jpg",
		"assets/Photos/Série d_images APN/camera20020.jpg",
		"assets/Photos/Série d_images APN/camera20021.jpg",
        "assets/Photos/Série d_images APN/camera20022.jpg",
        "assets/Photos/Série d_images APN/camera20023.jpg",
		"assets/Photos/Série d_images APN/camera20024.jpg",
		"assets/Photos/Série d_images APN/camera20025.jpg",
		"assets/Photos/Série d_images APN/camera20026.jpg",
		"assets/Photos/Série d_images APN/camera20027.jpg",
		"assets/Photos/Série d_images APN/camera20028.jpg",
        "assets/Photos/Série d_images APN/camera20029.jpg",
        "assets/Photos/Série d_images APN/camera20030.jpg",
		"assets/Photos/Série d_images APN/camera20031.jpg",
	];

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 0.5,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 0,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#img_camera").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger_cam", duration: 550})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	// handle form change
	//$("form.move input[name=duration]:radio").change(function () {
	//	scene.duration($(this).val());
	//});

});