$(function(){
    $.ajax({
        url:"./json/news3_box2.json",
        dataType:"json",
        success:function(data){
            if(data.length>0){
                for(let i in data){
                    let news = $(".news3 .box2").eq(i);
                    news.parent('a').attr("href",data[i].href);
                    news.find('img').attr("src",data[i].src).attr("alt",data[i].title);
                    news.find('h4').text(data[i].title);
                    news.find('span').text(data[i].info);
                }
            }
        }
    });
});