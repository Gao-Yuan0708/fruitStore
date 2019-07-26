(()=>{
    //载入页头
    $.ajax({
        type:"GET",
        url:"01-header.html",
        success:function(data){
            //console.log(data);
            $("#header").html(data);
        },
        error:function(){
            alert("网络错误！请检查！");
        }
    });
    //载入页尾
    $.ajax({
        type:"GET",
        url:"02-footer.html",
        success:function(data){
            //console.log(data);
            $("#footer").html(data);
        },
        error:function(){
            alert("网络错误！请检查！");
        }
    });
})();

(()=>{
    $(window).bind('scroll',function(){
        var len=$(this).scrollTop()
        if(len>=800){
            //显示回到顶部按钮
            $('#toTop').css("bottom",70).css("opacity",1);
        }else{
            //影藏回到顶部按钮
            $('#toTop').css("bottom",110).css("opacity",0);
        }
    })
    //绑定回到顶部按钮的点击事件
    $('#toTop').click(function(e){
        e.preventDefault();
        //动画效果，平滑滚动回到顶部
        $("html,body").animate({ "scrollTop": 0 },1000);
    })
})();

(()=>{
    var n=parseInt($("input#qty").val());
    $(".reduced").click(function(){
        n++;
        $("input#qty").val(n);
    });
    $(".increase").click(function () {
        if(n>1){
            n--;
            $("input#qty").val(n);
        }
    })
})();