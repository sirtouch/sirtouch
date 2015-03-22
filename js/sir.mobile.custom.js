
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
    /*var result = "";
    $.ajax({ url: "http://192.168.1.81/mobile/login/", 
        data:{username:username, password:password},
        dataType:"text",
        type:"GET",
        async:false,
        success: function(data){
            result = data;
        }});
    return result;*/
}
function logout()
{

    var json_str = "{\"result\":\"true\", \"token\": \"342bh32hgjhfdsjhk\"}";

    return(json_str);
    /*var result = "";
    console.log("##"+ getTokenId())
    $.ajax({ url: "http://192.168.1.81/mobile/login/", 
        data:{'sessionid':getTokenId()},
        dataType:"json",
        type:"GET",
        async:false,
        success: function(data){
            result = data;
        }});
    return result;*/
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
    
    var json_str = "{\"result\":\"true\", \"token\": \"342bh32hgjhfdsjhk\"}";

    return(json_str);
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
    var json_str = "[{\"subdepts\": [{\"subdepts\": [], \"name\": \"\u884c\u653f\u90e8\u95e8\", \"members\": [{\"loginname\": \"x1\", \"sex\": \"\u7537\", \"phone\": [\"010-88880001-0001\"], \"wechat\": \"ABCD001\", \"password\": \"123qwe\", \"qq\": 123001, \"name\": \"\u90a2\u4e00\", \"title\": \"\u884c\u653f1\", \"mobile\": [\"13800138001\"], \"msn\": \"\", \"email\": [\"x1@email.com\"]}, {\"loginname\": \"x2\", \"sex\": \"\u7537\", \"phone\": [\"010-88880001-0002\"], \"wechat\": \"ABCD002\", \"password\": \"123qwe\", \"qq\": 123002, \"name\": \"\u90a2\u4e8c\", \"title\": \"\u884c\u653f2\", \"mobile\": [\"13800138002\"], \"msn\": \"\", \"email\": [\"x2@email.com\"]}, {\"loginname\": \"x3\", \"sex\": \"\u7537\", \"phone\": [\"010-88880001-0003\"], \"wechat\": \"ABCD003\", \"password\": \"123qwe\", \"qq\": 123003, \"name\": \"\u90a2\u4e09\", \"title\": \"\u884c\u653f3\", \"mobile\": [\"13800138003\"], \"msn\": \"\", \"email\": [\"x3@email.com\"]}]}, {\"subdepts\": [], \"name\": \"\u4eba\u529b\u90e8\u95e8\", \"members\": [{\"loginname\": \"r1\", \"sex\": \"\u7537\", \"phone\": [\"010-88880001-0004\"], \"wechat\": \"ABCD004\", \"password\": \"123qwe\", \"qq\": 123004, \"name\": \"\u4efb\u4e00\", \"title\": \"\u4eba\u529b1\", \"mobile\": [\"13800138004\"], \"msn\": \"\", \"email\": [\"r1@email.com\"]}, {\"loginname\": \"r2\", \"sex\": \"\u7537\", \"phone\": [\"010-88880001-0005\"], \"wechat\": \"ABCD005\", \"password\": \"123qwe\", \"qq\": 123005, \"name\": \"\u4efb\u4e8c\", \"title\": \"\u4eba\u529b2\", \"mobile\": [\"13800138005\"], \"msn\": \"\", \"email\": [\"r2@email.com\"]}]}, {\"subdepts\": [], \"name\": \"\u8d22\u52a1\u90e8\u95e8\", \"members\": [{\"loginname\": \"c1\", \"sex\": \"\u5973\", \"phone\": [\"010-88880001-0006\"], \"wechat\": \"ABCD006\", \"password\": \"123qwe\", \"qq\": 123006, \"name\": \"\u8521\u4e00\", \"title\": \"\u8d22\u52a11\", \"mobile\": [\"13800138006\"], \"msn\": \"\", \"email\": [\"c1@email.com\"]}, {\"loginname\": \"c2\", \"sex\": \"\u5973\", \"phone\": [\"010-88880001-0007\"], \"wechat\": \"ABCD007\", \"password\": \"123qwe\", \"qq\": 123007, \"name\": \"\u8521\u4e8c\", \"title\": \"\u8d22\u52a12\", \"mobile\": [\"13800138007\"], \"msn\": \"\", \"email\": [\"c1@email.com\"]}, {\"loginname\": \"c3\", \"sex\": \"\u5973\", \"phone\": [\"010-88880001-0008\"], \"wechat\": \"ABCD008\", \"password\": \"123qwe\", \"qq\": 123008, \"name\": \"\u8521\u4e09\", \"title\": \"\u8d22\u52a13\", \"mobile\": [\"13800138008\"], \"msn\": \"\", \"email\": [\"c1@email.com\"]}]}], \"name\": \"\u5168\u4f53\u4eba\u5458\", \"members\": []}]";
    
    return(json_str);
}

Address.prototype.get = function(id)
{
    var json_str = "{\"name\": \"\u8521\u4e09\", \"title\": \"\u8d22\u52a13\", \"mobile\": [\"13800138008\"], \"sex\": \"\u5973\", \"phone\": [\"010-88880001-0008\"], \"email\": [\"c3@email.com\"], \"id\": \"user_c3\"}";

    return(json_str);
}


//--------------- NOTICE ---------------
function Notice(){}
Notice.prototype.sync = function()
{
    return true;
} 

 Notice.prototype.all = function()
 {
    var json_str = "[{\"id\":\"100\", \"title\":\"\u6d4b\u8bd51\", \"time\":\"2015-01-27 11:20:20\", \"attachmentName\":\"1.jpg\"},{\"id\":\"101\", \"title\":\"\u6d4b\u8bd52\", \"time\":\"2015-01-27 11:20:20\", \"attachmentName\":\"2.jpg\"}]";
    return(json_str);
 
    //  获取所有的notice的列表
    /*var result = "[]";
    $.ajax({ url: "http://192.168.1.81/mobile/notice_sync/", 
        data:{'token':getTokenId()},
        dataType:"json",
        type:"GET",
        async:false,
        success: function(data){
            result = data;
        }});
    return result;*/
}
 
 Notice.prototype.get = function(id)
 {
    if(id == '100')
    {
        var json_str = "{\"id\":\"100\", \"title\":\"\u6d4b\u8bd5\", \"time\":\"2015-01-27 11:20:20\", \"attachmentName\":\"1.jpg\", \"content\":\"\u6d4b\u8bd5\u5185\u5bb9\"}";
        return(json_str);
    }
    else
    {
        var json_str = "{\"id\":\"100\", \"title\":\"\u6d4b\u8bd5\", \"time\":\"2015-01-27 11:20:20\", \"attachmentName\":\"3.jpg\", \"content\":\"\u6d4b\u8bd5\u5185\u5bb9\"}";
        return(json_str);
    }
    
    /*var result = "{}";
    // 从noticeGetContent中根据id查询指定notice
    console.log("!!!!!!"+ id)
    $.ajax({ 
        url: "http://192.168.1.81/mobile/noticeGetContent/", 
        data:{'token':getTokenId(),
            'noticeId':id
        },
        dataType:"json",
        type:"GET",
        async:false,
        success: function(data){
            result = data;
        }});
    return result;*/
 }

 Notice.prototype.attachment = function(id)
 {
    // 根据Notice的id获取内部附件的下载链接
    var token = getTokenId();
    var url = "http://192.168.1.81/mobile/noticeGetAttachment/?token="+token+"&noticeId=" + id;
    return url;
 }

 //--------------- FILE ---------------
 
 function File(){}
 File.prototype.list = function (path)
 {
    //[{"path": "/公共资料", "type": "directory", "name": "公共资料", "size": ""}, {"path": "/商务团队", "type": "directory", "name": "商务团队", "size": ""}, {"path": "/存档文件", "type": "directory", "name": "存档文件", "size": ""}, {"path": "/对外共享", "type": "directory", "name": "对外共享", "size": ""}, {"path": "/>用户个人文件", "type": "directory", "name": "用户个人文件", "size": ""}, {"path": "/部署文件", "type": "directory", "name": "部署文件", "size": ""}, {"path": "/白皮书.pdf", "type": "file", "name": "白皮书.pdf", "size": "212007"}, {"path": "/监控服务.pdf", "type": "file", "name": "监控服务.pdf", "size": "3969629"}, {"path": "/讲演稿.pdf", "type": "file", "name": "讲演稿.pdf", "size": "3718187"}]
    var json_str = "[{\"path\": \"\/\u516c\u5171\u8d44\u6599\", \"type\": \"directory\", \"name\": \"\u516c\u5171\u8d44\u6599\", \"size\": \"\"}, {\"path\": \"\/\u5546\u52a1\u56e2\u961f\", \"type\": \"directory\", \"name\": \"\u5546\u52a1\u56e2\u961f\", \"size\": \"\"}, {\"path\": \"\/\u5b58\u6863\u6587\u4ef6\", \"type\": \"directory\", \"name\": \"\u5b58\u6863\u6587\u4ef6\", \"size\": \"\"}, {\"path\": \"\/\u5bf9\u5916\u5171\u4eab\", \"type\": \"directory\", \"name\": \"\u5bf9\u5916\u5171\u4eab\", \"size\": \"\"}, {\"path\": \"\/\u7528\u6237\u4e2a\u4eba\u6587\u4ef6\", \"type\": \"directory\", \"name\": \"\u7528\u6237\u4e2a\u4eba\u6587\u4ef6\", \"size\": \"\"}, {\"path\": \"\/\u90e8\u7f72\u6587\u4ef6\", \"type\": \"directory\", \"name\": \"\u90e8\u7f72\u6587\u4ef6\", \"size\": \"\"}, {\"path\": \"\/\u767d\u76ae\u4e66.pdf\", \"type\": \"file\", \"name\": \"\u767d\u76ae\u4e66.pdf\", \"size\": \"212007\"}, {\"path\": \"\/\u76d1\u63a7\u670d\u52a1.pdf\", \"type\": \"file\", \"name\": \"\u76d1\u63a7\u670d\u52a1.pdf\", \"size\": \"3969629\"}, {\"path\": \"\/\u8bb2\u6f14\u7a3f.pdf\", \"type\": \"file\", \"name\": \"\u8bb2\u6f14\u7a3f.pdf\", \"size\": \"3718187\"}]";
    // switch(path)
    // {
    //     case "/":
    //         return ["/cloud", "/"+User.username];
        
    //     case "/cloud":
    //         return [];
            
    //     case "/"+User.username:
    //         return [];
            
    //     default:
    //         return [];
    // }
    // return(json_str);
}
 
File.prototype.share = function (path){
    var json_str = "{\"url\": \"http:\/\/sirself.sirbox.cn\/sir\/data\/public\/9c73dc.php\"}";
    return(json_str);
}
 
//--------------- ATTENDANCE ---------------
function Attendance(){}
Attendance.prototype.checkin = function(areaLocation)
{
	//alert("hhhhhh");
    var json_str = "{\"result\":\"true\", \"message\": \"342bh32hgjhfdsjhk\"}";
	/*var json_str = "[]";
	$.ajax({url:"http://192.168.1.77/mobile/checkin/",
		data:{'sessionid':'bbbbf789b5024d1498176ec17c87219a'},
		dataType:"json",
		type:"GET",
		async:false,
		success:function(data){
			json_str = data;
		}})*/
	//73cd154ec06f4e63aa7ddba88b00e878
    return(json_str);
}

Attendance.prototype.checkout = function(areaLocation)
{
    var json_str = "{\"result\":\"false\", \"message\": \"\u8d85\u65f6\"}";
	/*var json_str = "[]";
	$.ajax({url:"http://192.168.1.77/mobile/checkout/",
		data:{'sessionid':'bbbbf789b5024d1498176ec17c87219a','attendance_id':'6'},
		dataType:"json",
		type:"GET",
		async:false,
		success:function(data){
			json_str = data;
		}})*/
	//73cd154ec06f4e63aa7ddba88b00e878
    return(json_str);
}

Attendance.prototype.getInfo = function()
{
    //没数据返回空记录。例如：{"cleckin":"","cleckout":""}
    //var json_str = "{\"checkin\": \"2015-03-14 08:00:00\", \"checkout\": \"2015-03-14 18:00:00\"}";
    var json_str = "[]";
	$.ajax({url:"http://192.168.1.77/mobile/getinfo/",
		data:{'sessionid':'bbbbf789b5024d1498176ec17c87219a'},
		dataType:"json",
		type:"GET",
		async:false,
		success:function(data){
			json_str = data;
		}})
	//73cd154ec06f4e63aa7ddba88b00e878
    return(json_str);
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
    var json_str = "{\"from\": \"lishujun@qq.com\", \"content\": \"sdfskajdfskdjfsdfj\", \"to\": \"58135482@qq.com\", \"attachment\": [{\"url\": \"http:\/\/www.csdn.net\/1.jpg\", \"name\": \"1.jpg\"}], \"time\": \"2014-01-12 12:00:00\", \"id\": \"100\", \"subject\": \"test\",\"nextMailId\": \"101\"}";
    
    if(id == 100)
        return(json_str);
    
    return null;
 }
 
 Mail.prototype.send = function(info)
 {
    return true
 }
 
 Mail.prototype.getFolderList = function()
 {
    var json_str = "[{\"id\": \"100\", \"name\": \"\u6536\u4ef6\u7bb1\"}, {\"id\": \"101\", \"name\": \"\u53d1\u4ef6\u7bb1\"}, {\"id\": \"102\", \"name\": \"\u8349\u7a3f\u7bb1\"}, {\"id\": \"103\", \"name\": \"\u5783\u573e\u7bb1\"}, {\"id\": \"104\", \"name\": \"Redmine\"}]";
    return(json_str);
 }
 
 Mail.prototype.getMailList = function(folderId, pageSize, pageNo)
 {
     
    var json_str = "[{\"from\": \"lishujun@qq.com\", \"content\": \"sdfskajdfskdjfsdfj\", \"to\": \"58135482@qq.com\", \"attachment\": [{\"url\": \"http:\/\/www.csdn.net\/1.jpg\", \"name\": \"1.jpg\"}], \"time\": \"2014-01-12 12:00:00\", \"id\": \"100\", \"subject\": \"test1\", \"nextMailId\": \"101\"},{\"from\": \"lishujun@qq.com\", \"content\": \"sdfskajdfskdjfsdfj\", \"to\": \"58135482@qq.com\", \"attachment\": [{\"url\": \"http:\/\/www.csdn.net\/1.jpg\", \"name\": \"2.jpg\"}], \"time\": \"2014-01-12 12:00:00\", \"id\": \"101\", \"subject\": \"test\", \"nextMailId\": \"102\"},{\"from\": \"lishujun@qq.com\", \"content\": \"sdfskajdfskdjfsdfj\", \"to\": \"58135482@qq.com\", \"attachment\": [{\"url\": \"http:\/\/www.csdn.net\/1.jpg\", \"name\": \"3.jpg\"}], \"time\": \"2014-01-12 12:00:00\", \"id\": \"102\", \"subject\": \"test\", \"nextMailId\": \"103\"}]";
    
    if(folderId == '100' && pageSize == '10' && pageNo == '1')
        return(json_str);
    
    return [];
 }
 
 Mail.prototype.clean = function()
 {
    return true;
 }


// 获取当前的sessionid
function getTokenId(){
   var c_name = 'token';
   if(document.cookie.length>0){
      c_start=document.cookie.indexOf(c_name + "=")
      if(c_start!=-1){ 
        c_start=c_start + c_name.length+1 
        c_end=document.cookie.indexOf(";",c_start)
        if(c_end==-1) c_end=document.cookie.length
        return unescape(document.cookie.substring(c_start,c_end));
      }
   }
  }
 
