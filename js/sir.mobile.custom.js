
// SIR Custom JS

/*


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
*/



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
    var json_str = "[{'subdepts': [{'subdepts': [], 'name': '\u884c\u653f\u90e8\u95e8', 'members': [{'qq': 123001, 'loginname': 'x1', 'name': '\u90a2\u4e00', 'title': '\u884c\u653f1', 'mobile': ['13800138001'], 'msn': '', 'sex': '\u7537', 'phone': ['010-88880001-0001'], 'wechat': 'ABCD001', 'password': '123qwe', 'email': ['x1@email.com']}, {'qq': 123002, 'loginname': 'x2', 'name': '\u90a2\u4e8c', 'title': '\u884c\u653f2', 'mobile': ['13800138002'], 'msn': '', 'sex': '\u7537', 'phone': ['010-88880001-0002'], 'wechat': 'ABCD002', 'password': '123qwe', 'email': ['x2@email.com']}, {'qq': 123003, 'loginname': 'x3', 'name': '\u90a2\u4e09', 'title': '\u884c\u653f3', 'mobile': ['13800138003'], 'msn': '', 'sex': '\u7537', 'phone': ['010-88880001-0003'], 'wechat': 'ABCD003', 'password': '123qwe', 'email': ['x3@email.com']}]}, {'subdepts': [], 'name': '\u4eba\u529b\u90e8\u95e8', 'members': [{'qq': 123004, 'loginname': 'r1', 'name': '\u4efb\u4e00', 'title': '\u4eba\u529b1', 'mobile': ['13800138004'], 'msn': '', 'sex': '\u7537', 'phone': ['010-88880001-0004'], 'wechat': 'ABCD004', 'password': '123qwe', 'email': ['r1@email.com']}, {'qq': 123005, 'loginname': 'r2', 'name': '\u4efb\u4e8c', 'title': '\u4eba\u529b2', 'mobile': ['13800138005'], 'msn': '', 'sex': '\u7537', 'phone': ['010-88880001-0005'], 'wechat': 'ABCD005', 'password': '123qwe', 'email': ['r2@email.com']}]}, {'subdepts': [], 'name': '\u8d22\u52a1\u90e8\u95e8', 'members': [{'qq': 123006, 'loginname': 'c1', 'name': '\u8521\u4e00', 'title': '\u8d22\u52a11', 'mobile': ['13800138006'], 'msn': '', 'sex': '\u5973', 'phone': ['010-88880001-0006'], 'wechat': 'ABCD006', 'password': '123qwe', 'email': ['c1@email.com']}, {'qq': 123007, 'loginname': 'c2', 'name': '\u8521\u4e8c', 'title': '\u8d22\u52a12', 'mobile': ['13800138007'], 'msn': '', 'sex': '\u5973', 'phone': ['010-88880001-0007'], 'wechat': 'ABCD007', 'password': '123qwe', 'email': ['c1@email.com']}, {'qq': 123008, 'loginname': 'c3', 'name': '\u8521\u4e09', 'title': '\u8d22\u52a13', 'mobile': ['13800138008'], 'msn': '', 'sex': '\u5973', 'phone': ['010-88880001-0008'], 'wechat': 'ABCD008', 'password': '123qwe', 'email': ['c1@email.com']}]}], 'name': '\u5168\u4f53\u4eba\u5458', 'members': []}]";
    
    return json_str;
}

Address.prototype.get = function(id)
{
    var json_str = {
                "id": "user_c3"
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
            };

    return json_str;
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
 
File.prototype.share = function (path)
{
    json_str = {
        ""
    }
}
 
//--------------- ATTENDANCE ---------------
function Attendance(){}
Attendance.prototype.checkin = function(areaLocation)
{
    var json_str = "{\"result\":\"true\", \"message\": \"342bh32hgjhfdsjhk\"}";
    return(json_str);
}

Attendance.prototype.checkout = function(areaLocation)
{
    var json_str = "{\"result\":\"false\", \"message\": \"超时\"}";
    return(json_str);
}

Attendance.prototype.getInfo = function()
{
    //没数据返回空记录。例如：{"cleckin":"","cleckout":""}
    var json_str = {
        "checkin":"2015-03-14 08:00:00",
        "checkout":"2015-03-14 18:00:00"
    }
    return json_str;
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
    var json_str = {
        "id":"100",
        "from":"lishujun@qq.com",
        "to":"58135482@qq.com",
        "subject":"test",
        "time":"2014-01-12 12:00:00",
        "attachment":[{"name":"1.jpg", "url":"http://www.csdn.net/1.jpg"}],
        "content":"sdfskajdfskdjfsdfj",
    }
    
    if(id == 100)
        return json_str;
    
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
     
    var json_str = {
        "id":"100",
        "from":"lishujun@qq.com",
        "to":"58135482@qq.com",
        "subject":"test",
        "time":"2014-01-12 12:00:00",
        "attachment":[{"name":"1.jpg", "url":"http://www.csdn.net/1.jpg"}],
    }
    
    if(folderId == 100 && pageSize == 10 && pageNo == 1)
        return [json_str];
    
    return [];
 }
 
 Mail.prototype.clean = function()
 {
    return true;
 }
