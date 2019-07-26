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
    $(".index-banner-bottom .jtv-img-box").hover(function () {
        $(this).children().first().toggleClass("hover");
    });
    //秒
    var s=parseInt($("#time-second").html());
    var timer1=setInterval(function () {
        s--;
        $("#time-second").html(s)
        if(s<=0){
            s=59;
        }
    },1000);
    //分
    var m=parseInt($("#time-min").html());
    var timer2=setInterval(function () {
        m--;
        $("#time-min").html(m);
        if(m<=0){
            m=59;
        }
    },1000*60);
    //时
    var h=parseInt($("#time-hour").html());
    var timer3=setInterval(function () {
        h--;
        $("#time-hour").html(h);
        if(h<=0){
            h=23;
        }
    },1000*60*60);
})();

(()=>{
//	$("[data-toggle=tab-ul]").children().hover(
//		function(){
//			$(this).children().first().children().css("transform","scale(1.16)");
//		},
//		function(){
//			$(this).children().first().children().css("transform","scale(1)");
//		}
//	)
	$(".item-info a h6").hover(
		function(){
			$(this).css("color","#8EC750");
		},
		function(){
			$(this).css("color","#333");
		}
	)
	
	$("[data-toggle=tab-ul]").children().mouseover(function(){
		$(this).children().first().children().css("transform","scale(1.16)");
	}).mouseout(function(){
		$(this).children().first().children().css("transform","scale(1)");
	})
	
	$("#tab-page").on("click","a",e=>{
		e.preventDefault();
		var $tar=$(e.target);
		//console.log($tar.parent());
		if(!$tar.parent().hasClass("active")){
			$tar.parent().addClass("active").siblings().removeClass("active");
			//$($tar.attr("href")).addClass("active").siblings().removeClass("active");
			$($tar.attr("href")).css("display","block").siblings().css("display","none");
		}	
	})
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
})()
