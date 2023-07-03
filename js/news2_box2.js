$(function(){
    $.ajax({
      url:"./json/news2_box2.json",
      dataType:"json",
      success:function(data){
        if(data.length>0){
          for(var i in data){
            let newsbox = $(".news2 .box2").eq(i); 
            $(".news2 > a").attr("href",data[i].href);                       
            newsbox.find('img').attr('src',data[i].src).attr('alt',data[i].alt);
            newsbox.find('h4').html(data[i].title + " <span>"+ data[i].discount+ "</span>");
            newsbox.find('h4').children('span').addClass('r');
            newsbox.children("span").text(data[i].info);            
          }
        }
      }
    });
  });