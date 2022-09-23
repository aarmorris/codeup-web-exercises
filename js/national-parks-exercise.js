$(document).ready(function(){
    $("#toggle").click(function (event){
        $('.invisible').toggleClass('hidden')
    });

    $("button").click(function(){
        $("ul li:last-child").css("background-color", "yellow");

    });
    
    $('h3').click(function(){
        $('ul').children().css("font-weight", "bold");
    });

    
    $("li").click(function(){
        $("li").parent().first().css("color", "blue");
    });


});