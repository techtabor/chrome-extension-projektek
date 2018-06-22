var bk=1;

$(document).ready(function() {
  $( "#gomb" ).click(function()
      {
       if(bk==1){  
       $(this).val('Kikapcsolva');
       bk=0;
   }else{
       $(this).val('Bekapcsolva');
       bk=1;
   };
     
      }
  )
   });