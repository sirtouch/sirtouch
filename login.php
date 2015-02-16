<?php 
	
	if ($_POST['username'] == 123 && $_POST['password'] == 1) {
		echo json_encode(array('result'=>'true', 'token'=>'342bh32hgjhfdsjhk'));
	}else {
		echo json_encode(array('result'=>'false'));
	}

?>