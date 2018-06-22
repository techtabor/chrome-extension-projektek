$(document).ready(function() {
    $( "IMG" ).click(function()
        {
            $(this).wrap('<a href="'+this.src+'" download></a>');
          
        },
    )
    .hover(function(){
            $(this).css("opacity", "0.5");
            
        },
         function(){
            $(this).css("opacity", "1");
        
        });
 
    
     });

