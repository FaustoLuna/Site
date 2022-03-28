$(document).ready(function(){
 
   // Menu Mobile

    $('#nav-toggle').click(function(e){

        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    });

});

   



