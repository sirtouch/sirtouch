
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
    var json_str = "{\"url\": \"http:\/\/sirself.sirbox.cn\/sir\/data\/public\/9c73dc.php\"}";
    return(json_str);
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
    var json_str = "{\"result\":\"false\", \"message\": \"\u8d85\u65f6\"}";
    return(json_str);
}

Attendance.prototype.getInfo = function()
{
    //没数据返回空记录。例如：{"cleckin":"","cleckout":""}
    var json_str = "{\"checkin\": \"2015-03-14 08:00:00\", \"checkout\": \"2015-03-14 18:00:00\"}";
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
    var json_str = "{\"from\": \"lishujun@qq.com\", \"content\": \"sdfskajdfskdjfsdfj\", \"to\": \"58135482@qq.com\", \"attachment\": [{\"url\": \"http:\/\/www.csdn.net\/1.jpg\", \"name\": \"1.jpg\"}], \"time\": \"2014-01-12 12:00:00\", \"id\": \"100\", \"subject\": \"test\"}";
    
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
