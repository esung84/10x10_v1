$(function(){
    $.ajax({
      url:"./json/popular.json",
      dataType:"json",
      success:function(data){
        if(data.length>0){
          for(var i in data){
           let popular = $("#popular > .desc").eq(i);
           popular.find("a").attr("href",data[i].href);
           popular.find("img").attr("src",data[i].src).attr("alt",data[i].alt);                      
          }
        }
      }
    });
  });