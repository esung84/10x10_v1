$(function(){
    $.ajax({
        url:"./json/brand_box.json",
        dataType:"json",
        success:function(data){
            if(data.length>0){
                for(let i in data){
                    let brandBox = $("#brand_box .snoopy").eq(i);
                    brandBox.parent('a').attr("href",data[i].href);
                    brandBox.find('img').attr('src',data[i].src).attr('alt',data[i].alt);
                }
            }
        }
    });
});