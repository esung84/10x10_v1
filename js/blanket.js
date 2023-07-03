$(function(){
$.ajax({
    url:"./json/blanket.json",
    dataType:"json",
    success:function(data){
        if(data.length>0){
            for(let i in data){
                let Blanket = $("#blanket .blanketBox").eq(i);
                Blanket.parent("a").attr("href",data[i].href);
                Blanket.find("img").attr("src",data[i].src).attr("alt",data[i].alt);
                Blanket.find("p").html("<span>"+data[i].discount+"</span>"+data[i].price);
                Blanket.find("span").addClass("r");       
            }
        };
    }
});
});