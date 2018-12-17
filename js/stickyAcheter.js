$(document).ready(function(){
    console.log($( window ).width());
 $(window).resize(function() {
        if($( window ).width()< 1000)
        {
            $(".container-button").addClass("fixAcheter");

        }
        else if($( window ).width()> 1000)
        {
            $(".container-button").removeClass("fixAcheter");
        }
    
    })
});