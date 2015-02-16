<?php 
	$contactList = array(
		array(
			'id' => 1,
			'sex' => '男',
			'face' => 'images/album.jpg',
			'title' => '总经理',
			'mobile' => '1333232324',
			'phone' => '54234432',
			'name' => '王洋辉',
			'email' => '112121@qq.com'
		),
		array(
			'id' => 2,
			'sex' => '男',
			'face' => 'images/album.jpg',
			'title' => '总经理',
			'mobile' => '1333232324',
			'phone' => '54234432',
			'name' => '哈哈哈哈',
			'email' => '43243@qq.com'
		)
	);
	echo json_encode($contactList);
?>