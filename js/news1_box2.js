$(function(){
    $.ajax({
      url:"./json/10x10_news.json",
      dataType:"json",
      success:function(data){
        if(data.length>0){
          for(var i in data){
            let newsbox = $(".news1 .box2").eq(i); 
            newsbox.parent('a').attr("href",data[i].href);                       
            newsbox.find('img').attr('src',data[i].src).attr('alt',data[i].alt);
            newsbox.find('h4').html(data[i].title + "<span>"+ data[i].discount+ "</span>");
            newsbox.find('h4').children('span').addClass('r');
            newsbox.children("span").text(data[i].info);            
          }
        }
      }
    });
  });