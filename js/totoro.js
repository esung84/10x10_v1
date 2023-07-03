$(function(){
    $.ajax({
        url:"./json/totoro.json",
        dataType:"json",
        success:function(data){
            if(data.length>0){
                for(let i in data){
                    let totoro = $("#totoro .desc").eq(i);
                    totoro.parent("a").attr("href",data[i].href);
                    totoro.find('img').attr("src",data[i].src).attr("alt",data[i].title);
                    totoro.find('h5').text(data[i].title);
                    totoro.find('p').text(data[i].price).prepend("<span> "+data[i].discount+" </span>");
                    totoro.find('span').addClass('r');
                }
            }
        }
    });
});