$(function(){
    $.ajax({
      url:"./json/event1.json",
      dataType:"json",
      success:function(data){
        if(data.length>0){
          for(var i in data){
            let event= $(".event1").eq(i);
            event.find('img').attr('src',data[i].src).attr('alt',data[i].alt);
            event.find('h3').html(data[i].title + " <span>" + data[i].special + "</span>");
            if(i<2){
              event.find('span').addClass('r');
            }
            else{
              event.find('span').addClass('b')
            }                        
            event.find('p').text(data[i].info);                         
          }          
        }
      }
    });       
  });