$(document).ready(function(){ 
   $("#testrespo").click(afficherMenu);
    if(window.width >1000)
      {
        $(".navigation").removeClass("responsiveM");
      }
    }); 
function afficherMenu(e)
{
    console.log("afficher");
    $(".navigation").addClass("responsiveM");
    $(".nav").addClass("responsiveLi");
    $("#testrespo").off("click");
    $("#testrespo").click(cacherMenu);
}
function cacherMenu(e)
{
    console.log("cacher");
    $(".navigation").removeClass("responsiveM");
    $(".nav").removeClass("responsiveLi");
    $("#testrespo").off("click");
    $("#testrespo").click(afficherMenu);
}