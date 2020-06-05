<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
	$author=$_POST['author'];
	$content=$_POST['content'];
	$face=$_POST['face'];
	include("conn.php");
	$flag=mysql_query("insert into message(author,content,face,addTime) value ('$author','$content','$face',now())");
	if($flag){
		header("location:lyb.php");
	}else{
		echo '<script>alert("发布留言错误，请联系博主");location.href="lyb.php";</script>';
	}
	mysql_close($conn);
}else{
	header("location:error.php");
}
?>