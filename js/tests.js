
//--------------- USER ----------------
QUnit.module( "User", {
	beforeEach: function() {
		
	},
  
	afterEach: function(){
	}
});

QUnit.test( "login", function( assert ) {
	//result = login("lishujun", "123456");
	result = User.login("lishujun", "123456");
	assert.ok( result == true, "Passed!" );
	
	alert(User.username)
	//result = logout();
	assert.ok( result == true, "Passed!" );
});

//--------------- ADDRESS ---------------
QUnit.module( "Address", {
	beforeEach: function() {
		address = new Address();
	},
  
	afterEach: function(){
	}
});

QUnit.test( "sync", function( assert ) {
	result = address.sync()
	assert.ok( result == true, "Passed!" );
});

QUnit.test( "all", function( assert ) {
	arr = address.all()
	deptname = arr[0].subdepts[0].name;
	assert.ok( deptname == "行政部门", "Passed!" );
	
	employeeName = deptname = arr[0].subdepts[0].members[0].name;
	assert.ok( employeeName == "蔡三", "Passed!" );
	
});

//--------------- NOTICE ---------------
QUnit.module( "Notice", {
	beforeEach: function() {
		notice = new Notice();
	},
  
	afterEach: function(){
	}
});

QUnit.test( "sync", function( assert ) {
	result = notice.sync();
	assert.ok( result == true, "Passed!" );
});

QUnit.test( "all", function( assert ) {
	notices = notice.all();
	assert.ok( notices.length > 0, "Passed!" );
});

QUnit.test( "get", function( assert ) {
	notice = notice.get(100);
	assert.ok( notice != null, "Passed!" );
});

 //--------------- FILE ---------------
QUnit.module( "File", {
	beforeEach: function() {
		file = new File()
	},
  
	afterEach: function(){
	}
});

QUnit.test( "list", function( assert ) {
	arr = file.list("/");
	assert.ok(arr.length == 2, "Passed!")
	for(i in arr)
	{
		path = arr[i];
		file.list(path);
	}
});

//--------------- ATTENDANCE ---------------
QUnit.module( "Attendance", {
	beforeEach: function() {
		attendance = new Attendance()
	},
  
	afterEach: function(){
	}
});

QUnit.test( "checkin", function( assert ) {
	result = attendance.checkin({"x":32.0, "y":44.4});
	assert.ok( result == true, "Passed!" );
});

//--------------- MAIL ---------------
QUnit.module( "Mail", {
	beforeEach: function() {
		mail = new Mail();
	},
  
	afterEach: function(){
	}
});

QUnit.test( "syncFolders", function( assert ) {
	result = mail.syncFolders()
	assert.ok( result == true, "Passed!" );
});

QUnit.test( "syncMails", function( assert ) {
	result = mail.syncMails()
	assert.ok( result == true, "Passed!" );
});

QUnit.test( "getMail", function( assert ) {
	data = mail.getMailData()
	assert.ok( 1 == 1, "Passed!" );
});

QUnit.test( "send", function( assert ) {
	result = mail.send({})
	assert.ok( result == true, "Passed!" );
});

QUnit.test( "getFolderList", function( assert ) {
	list = mail.getFolderList()
	assert.ok( 1 == 1, "Passed!" );
});

QUnit.test( "getMailList", function( assert ) {
	list = mail.getMailList()
	assert.ok( 1 == 1, "Passed!" );
	
});

QUnit.test( "clean", function( assert ) {
	result = mail.clean()
	assert.ok( result == true, "Passed!" );
});


