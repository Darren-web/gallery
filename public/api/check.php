<?php
header("content-type:text/html,charset:utf-8");

// $adminName=$_POST['userName'];
$adminName=$_GET['userName'];
$adminPwd=md5($_GET['userPwd']);
include("conn.php");
$rs=mysql_query("select * from admins where adminName='$adminName' and adminPwd='$adminPwd'");
$num=mysql_num_rows($rs);
if($num>0){
	echo '{
		"status":"success"
		}'
}else{
	echo '{
		"status":"error",
		"msg":"error"
		}';
}

?>