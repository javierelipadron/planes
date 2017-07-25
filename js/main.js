
$(document).ready(function(){


    $('#myCarousel').carousel({
      interval: false
    })

   
    $('.carousel .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
      }
      else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });



    $(".strecher-blue").click(function() {
      if(!$(this).find(".btn-strecher-blue").hasClass("activo")){
        $(this).find(".btn-strecher-blue").addClass("activo");
        $(this).find(".btn-strecher-blue").attr("src","img/strecher-menos.png");
      }else{
        $(this).find(".btn-strecher-blue").removeClass("activo");
        $(this).find(".btn-strecher-blue").attr("src","img/strecher-mas.png");
      }

    })

  




})
