<?php
	header("Content-Type:application/json;charset=utf-8");
	@$uname = $_REQUEST["uname"];
	
	require("../init.php");
	
	$sql="SELECT * FROM org_user WHERE uname='$uname'";
	$result = mysqli_query($conn,$sql);
	
	$row = mysqli_fetch_assoc($result);
	//var_dump($row);
	if($row==null){
		echo "1";
	}else{
		echo "0";
	}
?>