$("#my-dropmenu-page").parent().hover(
    function () {
        $("#my-dropmenu-page").css("transform","perspective(1160px) rotateX(0deg)").css("opacity",1);
    },
    function(){
        $("#my-dropmenu-page").css("transform","perspective(1160px) rotateX(90deg)").css("opacity",0);
    }
);

$("#my-dropmenu-page>li>a").hover(
    function () {
        $(this).addClass("aHover");
    },
    function () {
        $(this).removeClass("aHover");
    }
);

$(".mega-menu").hover(
    function () {
        $(this).children().last().css("transform","perspective(1160px) rotateX(0deg)").css("opacity",1);
    },
    function (e) {
        $(this).children().last().css("transform","perspective(1160px) rotateX(-90deg)").css("opacity",0);
    }
);

$(".mega-menu-wrapper ul>li>a").hover(
  function () {
      $(this).toggleClass("achover");
  }
);
$("#my-nav").removeClass("fixed_nav");
/*login*/
(()=>{
    var uname=sessionStorage.getItem("uname");
    console.log(uname);
    if(uname){
        $("#login").html(
            `<div id="login-suc">
                    <span class="login-uname">${uname}</span>
                    <a href="#" class="login-exit">退出</a>
             </div>`
        );
    }else{
        console.log(1);
        $("#login").html(`
            <a href="#" data-toggle="modal" data-target="#myModal" id="login-def">Login</a>
            <!--Modal-->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title text-center" id="myModalLabel">Welcome to login</h4>
                        </div>
                        <div class="modal-body text-center">
                            <form class="form-horizontal" id="login-form">
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">Uname:</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="inputEmail3" placeholder="UserName">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword3" class="col-sm-2 control-label">Password:</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-10 col-md-offset-2 text-left">
                                        <div id="tip" class="text-danger">
                                            <img style="width:4%;margin-right:3px;" src="img/err.png">用户名或密码不正确！
                                        </div>
                                    </div>
                                </div>

                            </form>
                            <a href="register.html">注册新用户</a>
                            <a href="#">忘记密码了？</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success" id="login-for">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    $(".login-exit").click(e=>{
        e.preventDefault();
        sessionStorage.removeItem("uname");
        history.go(0);
    });

    $("#login-for").click(e=>{
        e.preventDefault();
        var uname=$("#inputEmail3").val();
        var upwd=$("#inputPassword3").val();
        $.ajax({
            type:"GET",
            url:"data/login.php",
            data:{uname:uname,upwd:upwd},
            success:function (data) {
                console.log("succ");
                console.log(data.code);
                console.log(data.uname);
                if(data.code==-1){
                    $("#tip").css("display","block");
                }else{
                    $("#tip").css("display","none");
                    sessionStorage.setItem("uname",uname);
                    history.go(0);
                }
            },
            error:function (data) {
                alert("您的网络出现故障，请检查");
            }
        });
    });
})();

(()=>{
    $(window).scroll(()=>{
        if($("html,body").scrollTop()>=200)
            $("#my-nav").addClass("fixed_nav");
        else
            $("#my-nav").removeClass("fixed_nav");
    });
})();


