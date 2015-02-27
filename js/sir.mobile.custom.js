
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
