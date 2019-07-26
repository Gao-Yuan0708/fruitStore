(()=>{
    $("#uname").blur(function(){
        var uname=$(this).val();
        if(uname==""){
            $("#uname").parent().addClass("has-error").removeClass("has-success")
                .children().siblings().addClass("glyphicon-remove").removeClass("glyphicon-ok");
            $("#uname").parent().parent().next().children().removeClass("msg-succ")
                .addClass("msg-error")
                .html(`用户名不能为空！`);
        }else{
            $.ajax({
                type:"POST",
                url:"data/register/check-uname.php",
                data:{uname:uname},
                success:function(data){
                    if(data==1){
                        //用户名可用
                        $("#uname").parent().addClass("has-success").removeClass("has-error")
                            .children().siblings().addClass("glyphicon-ok").removeClass("glyphicon-remove");
                        $("#uname").parent().parent().next().children().removeClass("msg-error").addClass("msg-succ").html("可用");
                    }else{
                        //用户名不可用
                        $("#uname").parent().addClass("has-error").removeClass("has-success")
                            .children().siblings().addClass("glyphicon-remove").removeClass("glyphicon-ok");
                        $("#uname").parent().parent().next().children().removeClass("msg-succ").addClass("msg-error").html("用户名已存在！");
                    }
                },
                error:function(){
                    alert("网络错误！请检查！");
                }
            })
        }
    });

    $("#upwd").blur(function () {
        var upwd=$(this).val();
        var cpwd=$("#cpwd").val();
        if(upwd==""){
            $("#upwd").parent().addClass("has-error").removeClass("has-success")
                .children().siblings().addClass("glyphicon-remove").removeClass("glyphicon-ok");
            $("#upwd").parent().parent().next().children().removeClass("msg-succ")
                .addClass("msg-error")
                .html(`密码不能为空！`);
        }else{
            if(upwd==cpwd){
                $("#cpwd").parent().addClass("has-success").removeClass("has-error")
                    .children().siblings().addClass("glyphicon-ok").removeClass("glyphicon-remove");
                $("#cpwd").parent().parent().next().children().removeClass("msg-error").addClass("msg-succ").html("验证通过");
            }else{
                $("#cpwd").parent().addClass("has-error").removeClass("has-success")
                    .children().siblings().addClass("glyphicon-remove").removeClass("glyphicon-ok");
                $("#cpwd").parent().parent().next().children().removeClass("msg-succ").addClass("msg-error").html("两次输入密码不一致！");
            }
            $("#upwd").parent().addClass("has-success").removeClass("has-error")
                .children().siblings().addClass("glyphicon-ok").removeClass("glyphicon-remove");
            $("#upwd").parent().parent().next().children().removeClass("msg-error").addClass("msg-succ").html("可用");
        }
    });

    $("#cpwd").blur(function () {
        var upwd=$("#upwd").val();
        var cpwd=$(this).val();
        if(cpwd==""){
            $("#cpwd").parent().addClass("has-error").removeClass("has-success")
                .children().siblings().addClass("glyphicon-remove").removeClass("glyphicon-ok");
            $("#cpwd").parent().parent().next().children().removeClass("msg-succ").addClass("msg-error").html("不能为空！");
        }else{
            if(upwd==cpwd){
                $("#cpwd").parent().addClass("has-success").removeClass("has-error")
                    .children().siblings().addClass("glyphicon-ok").removeClass("glyphicon-remove");
                $("#cpwd").parent().parent().next().children().removeClass("msg-error").addClass("msg-succ").html("验证通过");
            }else{
                $("#cpwd").parent().addClass("has-error").removeClass("has-success")
                    .children().siblings().addClass("glyphicon-remove").removeClass("glyphicon-ok");
                $("#cpwd").parent().parent().next().children().removeClass("msg-succ").addClass("msg-error").html("两次输入密码不一致！");
            }
        }
    });

    $("#email").blur(function () {
        var email=$(this).val();
        if(email==""){
            $("#email").parent().addClass("has-error").removeClass("has-success")
                .children().siblings().addClass("glyphicon-remove").removeClass("glyphicon-ok");
            $("#email").parent().parent().next().children().removeClass("msg-succ").addClass("msg-error").html("不能为空！");
        }else {
            $("#email").parent().addClass("has-success").removeClass("has-error")
                .children().siblings().addClass("glyphicon-ok").removeClass("glyphicon-remove");
            $("#email").parent().parent().next().children().removeClass("msg-error").addClass("msg-succ").html("可用");
        }
    });

    $("#phone").blur(function () {
        var phone=$(this).val();
        if(phone==""){
            $("#phone").parent().addClass("has-error").removeClass("has-success")
                .children().siblings().addClass("glyphicon-remove").removeClass("glyphicon-ok");
            $("#phone").parent().parent().next().children().removeClass("msg-succ").addClass("msg-error").html("不能为空！");
        }else {
            $("#phone").parent().addClass("has-success").removeClass("has-error")
                .children().siblings().addClass("glyphicon-ok").removeClass("glyphicon-remove");
            $("#phone").parent().parent().next().children().removeClass("msg-error").addClass("msg-succ").html("可用");
        }
    });

    $("#user_name").blur(function () {
        var user_name=$(this).val();
        if(user_name==""){
            $("#user_name").parent().addClass("has-error").removeClass("has-success")
                .children().siblings().addClass("glyphicon-remove").removeClass("glyphicon-ok");
            $("#user_name").parent().parent().next().children().removeClass("msg-succ").addClass("msg-error").html("不能为空！");
        }else {
            $("#user_name").parent().addClass("has-success").removeClass("has-error")
                .children().siblings().addClass("glyphicon-ok").removeClass("glyphicon-remove");
            $("#user_name").parent().parent().next().children().removeClass("msg-error").addClass("msg-succ").html("可用");
        }
    });

    $("#checkbox").change(function () {
        var check=$(this).is(":checked");
        if(check){
            $("#reg-btn").removeClass("disabled");
        }else{
            $("#reg-btn").addClass("disabled");
        }
    });
})();

(()=>{
    $("#reg-btn").click(function(){
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        var email=$("#email").val();
        var phone=$("#phone").val();
        var gender=parseInt($("input[name='gender']:checked").val());
        var user_name=$("#user_name").val();
        $.ajax({
            type:"POST",
            url:"data/register/register.php",
            data:{
                uname:uname,
                upwd:upwd,
                email:email,
                phone:phone,
                gender:gender,
                user_name:user_name
            },
            success:function(data){
                $("#modal-msg").html(data.msg);
                if(data.msg!="注册失败！"){
                    setTimeout(function(){
                        location.href = "index.html";
                    },1500);
                }
            },
            error:function () {
                alert("网络错误！请检查！");
            }

        });
    });
})();
