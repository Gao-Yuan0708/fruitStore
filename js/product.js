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
    function loadProductsByPage(pno){
        $.ajax({
            type:"GET",
            url:"data/product_list.php",
            data:{pno:pno},
            success:function (pager) {
                var html="";
                for(var o of pager.data){
                    html+=`
                        <li class="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                <div class="item-inner">
                                    <div class="item-img">
                                        <a class="product-image" title="Product Title Here" href="product_detail.html">
                                            <img alt="Product Title Here" src="${o.pimg}" class="img-responsive">
                                        </a>
                                    </div>
                                    <div class="item-info">
                                        <div class="info-inner">
                                            <div class="item-title">
                                                <h6><a title="Product Title Here" href="product_detail.html"> ${o.pname} </a></h6>
                                            </div>
                                            <div class="item-content">
                                                <span class="glyphicon glyphicon-star-empty"></span>
                                                <span class="glyphicon glyphicon-star-empty"></span>
                                                <span class="glyphicon glyphicon-star-empty"></span>
                                                <span class="glyphicon glyphicon-star-empty"></span>
                                                <span class="glyphicon glyphicon-star-empty"></span>
                                            </div>
                                            <div class="item-price">
                                                <span class="price">${o.price}</span>
                                            </div>
                                            <div class="action">
                                                <button class="button btn-cart" type="button" title="" data-original-title="Add to Cart">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                    `;
                }
                $("#product-list .products-grids").html(html);
                //加载分页列表
                var html="";

                if(pager.pno>1)
                html+=`
                    <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">|&lt;</span>
                        </a>
                    </li>
                `;
                if(pager.pno-2>0){
                    html+=`<li><a href="${pager.pno-2}">${pager.pno-2}</a></li>`;
                }
                if(pager.pno-1>0){
                    html+=`<li><a href="${pager.pno-1}">${pager.pno-1}</a></li>`;
                }
                html+=`<li class="active"><a href="${pager.pno}">${pager.pno}</a></li>`;
                if(pager.pno+1<=pager.pageCount){
                    html+=`<li><a href="${pager.pno+1}">${pager.pno+1}</a></li>`;
                }
                if(pager.pno+2<=pager.pageCount){
                    html+=`<li><a href="${pager.pno+2}">${pager.pno+2}</a></li>`;
                }
                if(pager.pno<pager.pageCount)
                html+=`<li>
                   <a href="#" aria-label="Next">
                        <span aria-hidden="true">&gt;|</span>
                    </a>
                </li>`;
                $("#product-page").html(html);
            },
            error:function () {
                alert("网络故障，请检查！");
            }
        }).then(()=> {
            var pno=parseInt($("#product-page>li.active").children().first().html());
            $("#product-list>.products-grids").children().mouseover(function () {
                $(this).children().children().first().children().children().css("transform","scale(1.16)");
            }).mouseout(function(){
                $(this).children().children().first().children().children().css("transform","scale(1)");
             })

        });
    }
    loadProductsByPage(1);

    $("#product-page").on("click","li a",function(e){
        e.preventDefault();
        var pno=parseInt($("#product-page>li.active").children().first().html());
        if($(this).children().html() =="|&lt;"){
            console.log(1);
            loadProductsByPage(pno-1);
        }else if($(this).children().html() =="&gt;|"){
            console.log(2);
            loadProductsByPage(pno+1);
        }else{
            var pno=$(this).attr("href");
            loadProductsByPage(pno);
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
