
// SIR Custom JS




function getNotices()
{
    var json_str = "[{\"id\":1}]";

    //var json_str = "[{\"id\":1,\"title\":\"\\u901a\\u77e5\\u6807\\u9898\\u4e00\",\"time\":\"2015-02-15\"},{\"id\":2,\"title\":"\\u901a\\u77e5\\u6807\\u9898\\u4e8c\",\"time\":\"2015-02-16\"},{\"id\":1,\"title\":\"\\u901a\\u77e5\\u6807\\u9898\\u4e00\",\"time\":\"2015-02-15\"},{\"id\":2,\"title\":\"\\u901a\\u77e5\\u6807\\u9898\\u4e8c\",\"time\":\"2015-02-16\"},{\"id\":1,\"title\":\"\\u901a\\u77e5\\u6807\\u9898\\u4e00\",\"time\":\"2015-02-15\"},{\"id\":2,\"title\":\"\\u901a\\u77e5\\u6807\\u9898\\u4e8c\",\"time\":\"2015-02-16\"}]";
    return(json_str);

}

function login(username, password)
{

    var json_str = "{\"result\":\"true\", \"token\": \"342bh32hgjhfdsjhk\"}";

    return(json_str);
}


function getContacts()
{
    var json_str = "[{\"id\":1,\"sex\":\"\\u7537\",\"face\":\"images\\/album.jpg\",\"title\":\"\\u603b\\u7ecf\\u7406\",\"mobile\":\"1333232324\",\"phone\":\"54234432\",\"name\":\"\\u738b\\u6d0b\\u8f89\",\"email\":\"112121@qq.com\"},{}]";
    
    //var json_str = "[{"id":1,"sex":"\u7537","face":"images\/album.jpg","title":"\u603b\u7ecf\u7406","mobile":"1333232324","phone":"54234432","name":"\u738b\u6d0b\u8f89","email":"112121@qq.com"},{"id":2,"sex":"\u7537","face":"images\/album.jpg","title":"\u603b\u7ecf\u7406","mobile":"1333232324","phone":"54234432","name":"\u54c8\u54c8\u54c8\u54c8","email":"43243@qq.com"}]";

    return(json_str);
}




//--------------- USER ----------------
function User()
{
	User.username = "";
}

User.login = function(username, password)
{
	User.username = username;
	return true;
}

User.logout = function()
{
	User.username = "";
	return true;
}

//--------------- ADDRESS ---------------

function Address(){}
Address.prototype.sync = function()
{
	return true;
}

Address.prototype.all = function()
{
	var obj = [
		{
			"subdepts": [
				{
					"subdepts": [],
					"name": "行政部门",
					"members": [
						{
							"sex": "女",
							"phone": [
								"010-88880001-0008"
							],
							"name": "蔡三",
							"title": "财务3",
							"mobile": [
								"13800138008"
							],
							"email": [
								"c1@email.com"
							]
						}
					]
				}
			],
			"name": "全体人员",
			"members": []
		}
	];
	
	return obj;
}


//--------------- NOTICE ---------------
function Notice(){}
Notice.prototype.sync = function()
{
	return true;
} 

 Notice.prototype.all = function()
 {
	return [{"id":"100", "title":"测试", "time":"2015-01-27 11:20:20", "attachmentName":"1.jpg"}];
 }
 
 Notice.prototype.get = function(id)
 {
	if(id = 100)
	{
		return {"id":"100", "title":"测试", "time":"2015-01-27 11:20:20", "attachmentName":"1.jpg", "content":"测试内容"}
	}
	else
	{
		return null;
	}
 }
 
 //--------------- FILE ---------------
 
 function File(){}
 File.prototype.list = function (path)
 {
	switch(path)
	{
		case "/":
			return ["/cloud", "/"+User.username];
		
		case "/cloud":
			return [];
			
		case "/"+User.username:
			return [];
			
		default:
			return [];
	}
 }
 
//--------------- ATTENDANCE ---------------
function Attendance(){}
Attendance.prototype.checkin = function(areaLocation)
{
	return true;
}

 //--------------- MAIL ---------------
 function Mail(){}
 Mail.prototype.syncFolders = function()
 {
	//[{"id":"1000", "name":"INBOX"}]
	return true;
 }
 
 Mail.prototype.syncMails = function(lastMailId)
 {
	return true;
 }
 
 Mail.prototype.getMailData = function(id)
 {
	var obj = {
		"id":"100",
		"from":"lishujun@qq.com",
		"to":"58135482@qq.com",
		"subject":"test",
		"time":"2014-01-12 12:00:00",
		"attachment":[{"name":"1.jpg", "url":"http://www.csdn.net/1.jpg"}],
		"content":"sdfskajdfskdjfsdfj",
	}
	
	if(id == 100)
		return obj;
	
	return null;
 }
 
 Mail.prototype.send = function(info)
 {
	return true
 }
 
 Mail.prototype.getFolderList = function()
 {
	return [{"id":"100", "name":"TEST"}];
 }
 
 Mail.prototype.getMailList = function(folderId, pageSize, pageNo)
 {
	 
	var obj = {
		"id":"100",
		"from":"lishujun@qq.com",
		"to":"58135482@qq.com",
		"subject":"test",
		"time":"2014-01-12 12:00:00",
		"attachment":[{"name":"1.jpg", "url":"http://www.csdn.net/1.jpg"}],
	}
	
	if(folderId == 100 && pageSize == 10 && pageNo == 1)
		return [obj];
	
	return [];
 }
 
 Mail.prototype.clean = function()
 {
	return true;
 }
