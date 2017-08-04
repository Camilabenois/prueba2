
    	$(document).ready(function(){
    		$("#formulario").on('submit', function (event){
    			var texto= $("#mensaje").val();
    			event.preventDefault();
    			$(".right").prepend(
    				'<div class="twitter">'
                        +'<div class="eliminar glyphicon glyphicon-remove">'
                        +'</div>'
                        +'<div class="row twit">'
    				        + texto
        				+'</div>'
                        +'<div class="icon">'
                            +'<div class="glyphicon glyphicon-heart">'
                                + '<div class="contador pull-right">0'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>')
                $("#mensaje").val('').focus();
            
    		});
         $('#mensaje').on('keypress',function(e){
            if (e.keyCode==13) return false
            if (e.keyCode == 13 && e.shiftKey) return true   
             
         })  
         $('#mensaje').on('keyup',function(e){
            if (e.keyCode == 13) {
            var texto= $("#mensaje").val();
                event.preventDefault();
                $(".right").prepend(
                    '<div class="twitter">'
                        +'<div class="eliminar glyphicon glyphicon-remove">'
                        +'</div>'
                        +'<div class="row twit">'
                            + texto
                        +'</div>'
                        +'<div class="icon">'
                            +'<div class="glyphicon glyphicon-heart">'
                                + '<div class="contador pull-right">0'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>')
                $("#mensaje").val('').focus(); 

            }
         }) 

        $(".right").on("click", ".eliminar", function(){
            $(this).parent().fadeOut (800);
        }); 

        $(".right").on("click", ".glyphicon-heart", function(){
            $(this).addClass("likeable");
        }); 


        $(".right").on("click",".glyphicon-heart", function(){
            /*$(this).parent().css("color", "red");*/
            $(this).find('.contador').css("color", "navy");
            $(this).find('.contador').html(parseInt($(this).find('.contador').html()) + 1)
        /*    $(this).after('<div class="contador">1</div>');*/
            

        });

      

        });
    	

        
