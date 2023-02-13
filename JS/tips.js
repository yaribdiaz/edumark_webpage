$('ul#time-line li').each(function(){			
    var stop = $(window).scrollTop() + $(window).height()/1.2;
    var litop = $(this).offset().top;
    if (stop > litop){
        $(this).addClass('visibility');
    }			
});
$(window).scroll(function(){	
    $('ul#time-line li').each(function(){			
        var stop = $(window).scrollTop() + $(window).height()/1.2;
        var litop = $(this).offset().top;
        if (stop > litop){
            $(this).addClass('visibility');
        } else{
            $(this).removeClass('visibility');
        };
        console.log(litop+' - '+stop);
    });
});