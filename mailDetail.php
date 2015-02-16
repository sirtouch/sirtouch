<?php 

	$id = $_POST['id'];
	$mailList = array(
		array(
			'id' => 1,
			"from" => "lishujun@qq.com",
			"to" => "58135482@qq.com",
			'name' => '呵呵',
			"subject" => "test1",
			"time" => "2014-01-12 12:00:00",
			"attachment" => array("name" => "1.jpg", "url" => "http://www.csdn.net/1.jpg")
		),
		array(
			'id' => 2,
			"from" => "lishusdsjun@qq.com",
			"to" => "5dsds2@qq.com",
			'name' => '呵呵哒',
			"subject" => "test2",
			"time" => "2014-11-12 12:00:00",
			"attachment" => array("name" => "2.jpg", "url" => "http://www.csdn.net/1.jpg")
		)
	);
	foreach ($mailList as $key => $value) {
		if ($mailList[$key]['id'] == $id) {
			$mailDetail = $mailList[$key];
			break;
		}
	}
	
	echo json_encode($mailDetail);

?>