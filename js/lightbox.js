
$(document).ready(function(){


    $( ".link-lightbox" ).click(function(e) {  

        if ($(document).outerWidth() < 5000 && $(document).outerWidth() >= 425) {

            e.preventDefault();
            var t =  "lightbox/" +  $(this).attr("id");
            $.fancybox.open({
                href: t,
                type: "iframe",
                fitToView: false,
                width: 450,
                height: 400,
                autoSize: false,
                closeClick: true,
                overlayShow: true,
                helpers: {
                            overlay: {
                                css: {
                                    'display': 'inline',
                                }
                            }
                    }
            })



        } else if ($(document).outerWidth() <= 425) {

            
            var t =  "lightbox/" +  $(this).attr("id");
            var t =   $(this).attr("href");
            $.fancybox.open({
                href: t,
                type: "iframe",
                fitToView: false,
                width: 260,
                height: 350,
                autoSize: false,
                closeClick: true,
                overlayShow: true,
                helpers: {
                        overlay: {
                                css: {
                                    'display': 'inline',
                                }
                        }
                }

            });

        }

    });

     $(".btn-accion" ).on( "click", function(e) {

        e.preventDefault();
        if ($(document).outerWidth() < 5000 && $(document).outerWidth() >= 425) {

            var t =   $(this).attr("href");
            $.fancybox.open({
                href: t,
                type: "iframe",
                fitToView: false,
                width: 550,
                height: 450,
                autoSize: false,
                closeClick: true,
                overlayShow: true,
                helpers: {
                            overlay: {
                                css: {
                                    'display': 'inline',
                                }
                            }
                    }
            })



        } else if ($(document).outerWidth() <= 425) {

            var t =   $(this).attr("href");
            $.fancybox.open({
                href: t,
                type: "iframe",
                fitToView: false,
                width: 260,
                height: 450,
                autoSize: false,
                closeClick: true,
                overlayShow: true,
                helpers: {
                        overlay: {
                                css: {
                                    'display': 'inline',
                                }
                        }
                }

            });

        }

    });

})  