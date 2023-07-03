$(function(){
    $.ajax({
      url:"./json/10x10_box.json",
      dataType:"json",
      success:function(data){
        if(data.length>0){
          for(var i in data){
            let oneday = $(".box").eq(i);
            oneday.children('a').attr("href",data[i].href);            
            oneday.find('img').attr('src',data[i].src).attr('alt',data[i].alt);
            oneday.find('p').html("<a href='"+data[i].href+"'>"+data[i].title +"</a>");
            oneday.children('h6').html("<span>"+data[i].discount+ "</span> "+ data[i].price+"~");    
            oneday.find('span').addClass('r');   
          }
        }
      }
    });
  });