
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
      show_tabs_mobile(onlyid[1]);
     
    });



    /*************************************/
    /* FUNCIONABILIDAD DE TABS MOBIL
    /*************************************/
    

    $('.flecha-right').click(function(e){

      let id = $(this).attr("href");

      let onlyid = id.split("-");
      show_tabs(onlyid[2]);
      show_tabs_mobile(onlyid[2]);

      show_tabs_mobile_slide(2);


     
    });

     $('.flecha-left').click(function(e){

      let id = $(this).attr("href");

      let onlyid = id.split("-");

      show_tabs(onlyid[2]);
      show_tabs_mobile(onlyid[2]);
      show_tabs_mobile_slide(2);
     

    });



    /*************************************/
    /* INICIALIZACION
    /*************************************/
    
    function init(){
        
        show_tabs(1);
        show_tabs_mobile(1);

    }


    /*************************************/
    /* INICIALIZACION
    /*************************************/

    function show_tabs(number){
        
        // init for desktop and tablet          
        $(".content-tab").hide();
        $("#content-tab-" + number ).show();

    }



    function show_tabs_mobile(number){
        

        // init for mobile
        $(".tab-mobile-general").hide();
        $(".content-tab-mobile").hide();
        $("#tab-mobile-" + number ).show();
        $("#content-tab-mobile-" + number ).show();

       

    }

      function show_tabs_mobile_slide(number){
         $('html,body').animate({
            scrollTop: $("#tab-mobile-" + number).offset().top },
         'slow');
      }

})
