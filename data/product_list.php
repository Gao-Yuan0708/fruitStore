<?php
	header("Content-Type:application/json;charset=utf-8");
	require_once("init.php");
	
	@$pno=$_REQUEST["pno"];
	
	$pageSize=15;
	
	if(!$pno){
		$pno=1;
	}else{
		$pno=intval($pno);//将字符串数据转换整数js  parseInt()
	}
	
	//echo $pno;
	$output=[
	"recodeCount"=>0,//满足条件的的总记录数
	"pageCount"=>0,//总页数
	"pno"=>$pno,//当前数据所有页码
	"data"=>null,	//每个页大小
	"pageSize"=>$pageSize
	];

	$sql="SELECT COUNT(*) FROM org_product";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	$output["recodeCount"]=intval($row[0]);
	$output["pageCount"]=ceil($output["recodeCount"]/$output["pageSize"]);
	
	$start=($output["pno"]-1)*$output["pageSize"];
	$count=$output["pageSize"];

	$sql="SELECT pname,price,pimg";
	$sql .=" FROM org_product";
	$sql .=" GROUP BY pid";
	$sql .=" LIMIT $start,$count";
	$result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$output["data"]=$rows;

	echo json_encode($output);
?>  