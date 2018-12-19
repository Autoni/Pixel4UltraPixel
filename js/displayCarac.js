$(document).ready(function(){
    $(".nom-carac").click(function(e){

        console.log("click1");
        let info= e.target.id; 
        $("[info="+info+"]").toggle();
                
    });
});