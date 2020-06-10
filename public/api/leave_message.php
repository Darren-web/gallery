<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
	$userName=$_POST['userName'];
	$content=$_POST['content'];
	include("conn.php");
	$flag=mysql_query("insert into message(userName,content,time) value ('$userName','$content',now())");
	if($flag){
		echo '{"status":"1001","msg":"success"}'
	}else{
		echo '{"status":"1002","msg":"success"}'
	}
	mysql_close($conn);
}else{
	echo '{"status":"2001","msg":"error"}'
}
?>