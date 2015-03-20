<?php 
	
	$noticeId = $_POST['noticeId'];
	
	$notices = array(
		array(
			'id' => 1,
			'title' => '通知标题一',
			'time' => '2015-02-15',
			'attachmentName' => '手机QQ最新版',
			'content' => '习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话'
		),
		array(
			'id' => 2,
			'title' => '通知标题二',
			'time' => '2015-02-16',
			'attachmentName' => '手机QQ最新版',
			'content' => '习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话'
		),
		array(
			'id' => 1,
			'title' => '通知标题一',
			'time' => '2015-02-15',
			'attachmentName' => '手机QQ最新版',
			'content' => '习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话'
		),
		array(
			'id' => 2,
			'title' => '通知标题二',
			'time' => '2015-02-16',
			'attachmentName' => '手机QQ最新版',
			'content' => '习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话'
		),
		array(
			'id' => 1,
			'title' => '通知标题一',
			'time' => '2015-02-15',
			'attachmentName' => '手机QQ最新版',
			'content' => '习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话'
		),
		array(
			'id' => 2,
			'title' => '通知标题二',
			'time' => '2015-02-16',
			'attachmentName' => '手机QQ最新版',
			'content' => '习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话!习近平发表重要讲话'
		)
	);
	
	foreach ($notices as $key => $value) {
		if ($notices[$key]['id'] == $noticeId) {
			$noticeDetail = $notices[$key];
			break;
		}
	}
	

	echo json_encode($noticeDetail);

?>