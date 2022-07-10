
$(document).ready(function(){
        $(".logo").hover(function(){
      
          $(".logo").css("position","relative");
          $(".logo").animate({bottom: '2px'});
          $(".logo").html("Welcome to my Portfolio")
        });
      });