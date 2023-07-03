$(function(){
      
    function prev(){

      $('.slide li:last').prependTo('.slide');

      $('.slide').css('margin-left',-1500);    // $('.slide').css({marginLeft:-1000}); 

      $('.slide').stop().animate({marginLeft:0},1500);
      
    }
    
    function next(){

      $('.slide').stop().animate({marginLeft:-1500}, function(){

        $('.slide li:first').appendTo('.slide');

        $('.slide').css({marginLeft:0});

      });

    }

    function slide(){

      $('.slide').stop().animate({marginLeft:-1500}, function(){

        $('.slide li:first').appendTo('.slide');

        $('.slide').css({marginLeft:0});

      });

    }

    setInterval(slide, 3000);

  });