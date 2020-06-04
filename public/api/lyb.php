<?php session_start(); ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<style type="text/css">
			body,ul,ol,p,h1,h2,h3,h4,h5,h6{
	margin: 0px;
	padding: 0px;
}
.leavemessage{
	background: #ccc;
}
			.message{
				margin: 0 auto;
				width: 850px;
				height: 924px;
				background: #fff;
			}
			.leavemessage li{
				padding-left: 15px;
				list-style: none;
			}
			
			.part1{
				height: 812px;
				overflow: scroll;
				overflow-x: hidden;
			}
			.part1 img{
				border-radius: 50%;
			}
			.topage{
				height: 50px;
			}
			.topage a{
				text-decoration: none;
				display: inline-block;
				padding: 5px 10px;
				margin:0 5px 5px 0;
				border: 1px solid #000;
				border-radius: 5px;
				background: #eee;
			}
			.topage a:link,.topage a:visited{
				color: #000;
			}
			.topage input:last-child{
				height: 30px;
				width: 30px;
			}
			.topage input:first-child{
				height: 36px;
			}
		</style>
		<script>
window.onload=function(){
  var img1=document.getElementById("img1");
  var  face=document.getElementById("face");
  face.onchange=function(){
	  img1.src="img/face/"+this.value;
  }
}
</script>
	</head>
	<body>
		<div class="leavemessage">
		
		<?php 
			//分页
			@$page=$_GET['page'];
			if(empty($page)){
				$page=1;
			}
			if($page<1){
				$page=1;
			}
			include("conn.php");
			$rs=mysql_query("select * from message order by addTime desc");
			//根据总的纪录，计算总页数；
			$rscount=mysql_num_rows($rs);
			$pagecount=ceil($rscount/5);
			if($page>=$pagecount){
				$page=$pagecount;
			}
			mysql_data_seek($rs,($page-1)*5);
		?>
		<form action="leave_message.php" method="post" style="margin: 0 auto;width: 500px;">
			<ul>
				<li><h3>我要留言</h3></li>
				<li>昵称：<input type="text" name="author"/>
					头像：<select name="face" id="face">
						<?php for($i=1;$i<=42;$i++){ ?>
							<option value="<?php echo $i.".gif";?>"><?php echo $i.".gif";?></option>
						<?php } ?>
					</select><img id="img1" src="img/face/1.gif"/>
				</li>
				<li>
					内容：<br /><textarea name="content"  cols="45" rows="10"></textarea>
				</li>
				<li><input type="submit" name="submit" value="发布留言"/></li>
			</ul>
		</form>
		<div class="message">
			
			<div>
				
			</div>
			<a href="login.php" id="bloglogin" style="float: right;">博主登录</a> | <a href="blogindex.php">首页</a>
		<?php if(@$_SESSION['login']=='success'){ ?>
			<a href="loginout.php" style="float: right;">注销</a>
			<script type="text/javascript">
				window.onload=function(){
					var bloglogin=document.getElementById("bloglogin");
				bloglogin.style="display:none";
				}
			</script>
		<?php } ?>
			<br /><br />
		<div class="part1">
		<ul>
			<?php 
			for($i=1;$i<=5;$i++){
				if($info=mysql_fetch_array($rs)){
			?>
			<li><img src="img/face/<?php echo $info['face']?>" /><?php echo $info['author'];?>&nbsp;&nbsp;留言说：</li><li>内容:<?php echo $info['content'];?></li><li>留言时间：<?php echo $info['addTime']?></li>
			<?php if(!empty($info['reply'])){ ?>
				<li>Darren回复道：<?php echo $info['reply'];?></li>
			<?php
			} ?>
			<?php if(@$_SESSION['login']=='success'){ ?>
				<li>
					<a href="delete.php?messageId=<?php echo $info['messageId']?>">删除留言</a>
					<a href="reply_message.php?messageId=<?php echo $info['messageId']?>">回复留言</a>
				</li>
			<?php } ?>
				<li><hr /></li>
			<?php 
				}
			}
			mysql_free_result($rs);
			mysql_close($conn);	
			?>
			</div>
			
			
			
			<div class="topage">
			<li>
				<a href="lyb.php?page=1">首页</a>
				<a href="lyb.php?page=<?php echo  $page-1;?>">上一页</a>
				<?php @$pn=$_GET["pn"];
	      if(empty($pn)){
			  $pn=1;
			  }
			  if($pn<=5){
				 $pn=5;
				 }
			  $j=$pn;
	   ?>
    <?php for($pn=$pn-4;$pn<=$j+5;$pn++){  
	         if($pn>$pagecount){
				 $pn=$pagecount;
				   break;
				 }
		     ?>
		     <a href="lyb.php?page=<?php echo $pn;?>&pn=<?php echo $pn;?>"><?php echo $pn?></a>&nbsp; 
		     <?php  } ?> 
		     	<a href="lyb.php?page=<?php echo  $page+1;?>">下一页</a>
				<a href="lyb.php?page=<?php  echo $pagecount?>">尾页</a>
		     	<form action="lyb.php" method="get" style="display: inline-block;">
		     		<input type="submit" value="跳转到第"/> <input type="text" name="page" id="page" size="4" maxlength="4" /> 页
				</form>    
			</li>
			</div>
		</ul>
		</div>
		<hr />
		
		</div>
	</body>
</html>