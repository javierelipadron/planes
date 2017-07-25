
$(document).ready(function(){


    //*********************************************************************/
    // RUN JS
    //********************************************************************/

    init();







    /********************************************************************************/
    /* CREACION Y CLONACION DE CAROUSEL PARA QUE QUEDEN 3 ITEMS ACTIVOS EN PANTALLA.
    /********************************************************************************/
    
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




    /*************************************/
    /* FUNCIONABILIDAD DE STRECHERS
    /*************************************/

    $(".strecher-blue").click(function() {

      if(!$(this).find(".btn-strecher-blue").hasClass("activo")){

        $(this).find(".btn-strecher-blue").addClass("activo");
        $(this).find(".btn-strecher-blue").attr("src","img/strecher-menos.png");
      
      }else{

        $(this).find(".btn-strecher-blue").removeClass("activo");
        $(this).find(".btn-strecher-blue").attr("src","img/strecher-mas.png");

      }

    })



    /*************************************/
    /* FUNCIONABILIDAD DE TABS
    /*************************************/
    

    $('.tab').click(function(e){

      $('.tab').removeClass("active");
      let id = $(this).attr("id");
      $('#' + id).addClass("active");

      let onlyid = id.split("-");
      show_tabs(onlyid[1]);
     
    });


    /*************************************/
    /* INICIALIZACION
    /*************************************/
    
    function init(){
        
        show_tabs(1);

    }


    /*************************************/
    /* INICIALIZACION
    /*************************************/

    function show_tabs(number){
          
        $(".content-tab").hide();
        $("#content-tab-" + number ).show();

    }

})
