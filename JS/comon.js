$(function(){
    $("#fullpage").fullpage({
        continuousVertical:true,
        // navigation:true,
        controlArrowColor:'#ccc',
        verticalCentered:false,
        // sectionsColor:["red","#666","#000"],
        slidesNavigation:true
    })
    setInterval(function(){
        $.fn.fullpage.moveSlideRight()
    },5000)

    $('.tablebar p').each(function(i){
        $(this).click(function(){
        $('.tablebar p').removeClass('on').eq(i).addClass('on');
        $('.tabcontent>div').hide().eq(i).show();
        return false;
        })
    })
// ---------------------
    $(".navlist li").mouseover(function(){
     
           $(this).children(".erjinav").show();
        })
         
    $(".navlist li").mouseout(function() {
         
       $(this).children(".erjinav").hide();
    })
    


    $(".navlist li").mouseover(function(){
     
           $(this).children(".erjinav1").show();
        })
         
    $(".navlist li").mouseout(function() {
         
       $(this).children(".erjinav1").hide();
    })


    $(".navlist li").mouseover(function(){
     
           $(this).children(".erjinav2").show();
        })
         
    $(".navlist li").mouseout(function() {
         
       $(this).children(".erjinav2").hide();
    })

    // -----------------------------------------------
})

