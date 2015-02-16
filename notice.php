<?php 
	
	$notices = array(
		array(
			'id' => 1,
			'title' => '通知标题一',
			'time' => '2015-02-15'
		),
		array(
			'id' => 2,
			'title' => '通知标题二',
			'time' => '2015-02-16'
		),
		array(
			'id' => 1,
			'title' => '通知标题一',
			'time' => '2015-02-15'
		),
		array(
			'id' => 2,
			'title' => '通知标题二',
			'time' => '2015-02-16'
		),
		array(
			'id' => 1,
			'title' => '通知标题一',
			'time' => '2015-02-15'
		),
		array(
			'id' => 2,
			'title' => '通知标题二',
			'time' => '2015-02-16'
		)
	);

	echo json_encode($notices);

?>