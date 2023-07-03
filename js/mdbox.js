$(function(){
    $.ajax({
      url:"./json/mdbox.json",
      dataType:"json",
      success:function(data){
        if(data.length>0){
          for(var i in data){

            var mdbox = $(".mdbox").eq(i);
            $("#md").children('a').eq(i).attr("href",data[i].href);
            mdbox.find('img').attr('src',data[i].img).attr('alt',data[i].name);
            mdbox.find('h6').text(data[i].name);
            mdbox.children('p').html("<span>"+data[i].discount+ "%</span> "+ data[i].price+"~");    
            mdbox.find('span').addClass('r');   
          }
        }
      }
    });
  });