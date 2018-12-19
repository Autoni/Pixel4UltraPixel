$(document).ready(function(){
    let positiontop = $("#barrenav").offset().top;
    console.log(positiontop);
    $(window).scroll(function()
    {
        if($(this).scrollTop()> positiontop)
        {
            $("#barrenav").addClass("fixNav");
            $(".fixNav").removeAttr("id");

        }
        else
        {
            $(".fixNav").attr("id","barrenav");
            $("#barrenav").removeClass("fixNav");
        }
    })
});