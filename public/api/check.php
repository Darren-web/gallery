<?php

//error_reporting(0);
header("content-type:text/html,charset:utf-8");
$adminName=$_POST['userName'];
$adminPwd=md5($_POST['userPwd']);
include("conn.php");
$rs=mysql_query("select * from admins where adminName='$adminName' and adminPwd='$adminPwd'");
$num=mysql_num_rows($rs);
if($num>0){
	echo '{"status":"1001","msg":"success"}';
}else{
	echo '{"status":"2001","msg":"error"}';
}
?>