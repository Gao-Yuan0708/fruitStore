<?php
	header("Content-Type:application/json;charset=utf-8");
	@$uname = $_REQUEST["uname"];
	@$upwd=$_REQUEST["upwd"];
	@$email=$_REQUEST["email"];
	@$phone=$_REQUEST["phone"];
	@$gender=$_REQUEST["gender"];
	@$user_name=$_REQUEST["user_name"];
	require("../init.php");

	$sql="INSERT INTO org_user VALUES (NULL,'$uname','$upwd','$email','$phone',$gender,'$user_name') ";
	$result = mysqli_query($conn,$sql);
	if($result==true){
		echo '{"msg":"注册成功！3s后跳转到首页..."}';
	}else{
		echo '{"msg":"注册失败！"}';
	}
?>