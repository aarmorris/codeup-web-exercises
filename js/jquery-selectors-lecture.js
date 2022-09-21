// The new $(document).ready

$(function(){
    const $refToLibrary = $("#library");
    // iD selector to alter content
    // $("#library").text("jQuery makes life easier");
    // get reference to content 
    // console.log(refToLibrary.text());
    let li3text = $refToLibrary.text();
    $refToLibrary.text(li3text + " makes life easier");
    // class selector and css method to alter styles
    //single declartion syntax
    // $(".framework").css('border', '1px solid black');
    // multiple declaration syntax
        $(".framework").css({
                'border': '1px solid black',
                 'width': 'fit-content'   
        });
    // type list with chained methods    
      
        $("p, li").text("I've taken over.").css("color", "hotpink");
});

