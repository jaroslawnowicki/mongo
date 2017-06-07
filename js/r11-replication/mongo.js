 
> rs.initiate()
{
	"info2" : "no configuration specified. Using a default configuration for the set",
	"me" : "192.168.0.20:27017",
	"ok" : 1
}
mon:SECONDARY> rs.add("192.168.0.20:27018")
{ "ok" : 1 }
mon:PRIMARY> rs.add("192.168.0.20:27019". {arbiterOnly: true})
2017-06-07T16:50:14.570+0000 E QUERY    [thread1] SyntaxError: missing name after . operator @(shell):1:29
mon:PRIMARY> rs.add("192.168.0.20:27019", {arbiterOnly: true})
{ "ok" : 1 }
mon:PRIMARY> db.isMaster()
{
	"hosts" : [
		"192.168.0.20:27017",
		"192.168.0.20:27018"
	],
	"arbiters" : [
		"192.168.0.20:27019"
	],
	"setName" : "mon",
	"setVersion" : 3,
	"ismaster" : true,
	"secondary" : false,
	"primary" : "192.168.0.20:27017",
	"me" : "192.168.0.20:27017",
	"electionId" : ObjectId("7fffffff0000000000000001"),
	"lastWrite" : {
		"opTime" : {
			"ts" : Timestamp(1496854240, 1),
			"t" : NumberLong(1)
		},
		"lastWriteDate" : ISODate("2017-06-07T16:50:40Z")
	},
	"maxBsonObjectSize" : 16777216,
	"maxMessageSizeBytes" : 48000000,
	"maxWriteBatchSize" : 1000,
	"localTime" : ISODate("2017-06-07T16:50:44.093Z"),
	"maxWireVersion" : 5,
	"minWireVersion" : 0,
	"readOnly" : false,
	"ok" : 1
}


mon:PRIMARY> rs.status()
{
	"set" : "mon",
	"date" : ISODate("2017-06-07T16:56:11.489Z"),
	"myState" : 1,
	"term" : NumberLong(1),
	"heartbeatIntervalMillis" : NumberLong(2000),
	"optimes" : {
		"lastCommittedOpTime" : {
			"ts" : Timestamp(1496854570, 1),
			"t" : NumberLong(1)
		},
		"appliedOpTime" : {
			"ts" : Timestamp(1496854570, 1),
			"t" : NumberLong(1)
		},
		"durableOpTime" : {
			"ts" : Timestamp(1496854570, 1),
			"t" : NumberLong(1)
		}
	},
	"members" : [
		{
			"_id" : 0,
			"name" : "192.168.0.20:27017",
			"health" : 1,
			"state" : 1,
			"stateStr" : "PRIMARY",
			"uptime" : 722,
			"optime" : {
				"ts" : Timestamp(1496854570, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2017-06-07T16:56:10Z"),
			"electionTime" : Timestamp(1496854100, 1),
			"electionDate" : ISODate("2017-06-07T16:48:20Z"),
			"configVersion" : 3,
			"self" : true
		},
		{
			"_id" : 1,
			"name" : "192.168.0.20:27018",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 390,
			"optime" : {
				"ts" : Timestamp(1496854560, 1),
				"t" : NumberLong(1)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1496854560, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2017-06-07T16:56:00Z"),
			"optimeDurableDate" : ISODate("2017-06-07T16:56:00Z"),
			"lastHeartbeat" : ISODate("2017-06-07T16:56:10.219Z"),
			"lastHeartbeatRecv" : ISODate("2017-06-07T16:56:10.219Z"),
			"pingMs" : NumberLong(0),
			"syncingTo" : "192.168.0.20:27017",
			"configVersion" : 3
		},
		{
			"_id" : 2,
			"name" : "192.168.0.20:27019",
			"health" : 1,
			"state" : 7,
			"stateStr" : "ARBITER",
			"uptime" : 345,
			"lastHeartbeat" : ISODate("2017-06-07T16:56:10.219Z"),
			"lastHeartbeatRecv" : ISODate("2017-06-07T16:56:06.911Z"),
			"pingMs" : NumberLong(0),
			"configVersion" : 3
		}
	],
	"ok" : 1
}


mon:PRIMARY> db.users.insert({name: "jarek"})
WriteResult({ "nInserted" : 1 })


jarek@jarek-n:~$ docker exec -it mongorep2 bash
root@192:/# mongo
MongoDB shell version v3.4.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.3
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
	http://docs.mongodb.org/
Questions? Try the support group
	http://groups.google.com/group/mongodb-user
Server has startup warnings: 
2017-06-07T16:44:08.902+0000 I STORAGE  [initandlisten] 
2017-06-07T16:44:08.902+0000 I STORAGE  [initandlisten] ** WARNING: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine
2017-06-07T16:44:08.902+0000 I STORAGE  [initandlisten] **          See http://dochub.mongodb.org/core/prodnotes-filesystem
2017-06-07T16:44:12.843+0000 I CONTROL  [initandlisten] 
2017-06-07T16:44:12.843+0000 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2017-06-07T16:44:12.843+0000 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2017-06-07T16:44:12.843+0000 I CONTROL  [initandlisten] 
2017-06-07T16:44:12.844+0000 I CONTROL  [initandlisten] 
2017-06-07T16:44:12.844+0000 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'.
2017-06-07T16:44:12.844+0000 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
2017-06-07T16:44:12.844+0000 I CONTROL  [initandlisten] 
mon:SECONDARY> show dbs;
2017-06-07T16:59:04.310+0000 E QUERY    [thread1] Error: listDatabases failed:{
	"ok" : 0,
	"errmsg" : "not master and slaveOk=false",
	"code" : 13435,
	"codeName" : "NotMasterNoSlaveOk"
} :
_getErrorWithCode@src/mongo/shell/utils.js:25:13
Mongo.prototype.getDBs@src/mongo/shell/mongo.js:62:1
shellHelper.show@src/mongo/shell/utils.js:761:19
shellHelper@src/mongo/shell/utils.js:651:15
@(shellhelp2):1:1
mon:SECONDARY> show dbs;
2017-06-07T16:59:15.057+0000 E QUERY    [thread1] Error: listDatabases failed:{
	"ok" : 0,
	"errmsg" : "not master and slaveOk=false",
	"code" : 13435,
	"codeName" : "NotMasterNoSlaveOk"
} :
_getErrorWithCode@src/mongo/shell/utils.js:25:13
Mongo.prototype.getDBs@src/mongo/shell/mongo.js:62:1
shellHelper.show@src/mongo/shell/utils.js:761:19
shellHelper@src/mongo/shell/utils.js:651:15
@(shellhelp2):1:1
mon:SECONDARY> show dbs
2017-06-07T16:59:44.506+0000 E QUERY    [thread1] Error: listDatabases failed:{
	"ok" : 0,
	"errmsg" : "not master and slaveOk=false",
	"code" : 13435,
	"codeName" : "NotMasterNoSlaveOk"
} :
_getErrorWithCode@src/mongo/shell/utils.js:25:13
Mongo.prototype.getDBs@src/mongo/shell/mongo.js:62:1
shellHelper.show@src/mongo/shell/utils.js:761:19
shellHelper@src/mongo/shell/utils.js:651:15
@(shellhelp2):1:1
mon:SECONDARY> rs.slaveOk()
mon:SECONDARY> show dbs;
admin  0.000GB
local  0.000GB
test   0.000GB
mon:SECONDARY> use test
switched to db test
mon:SECONDARY> show collections;
users
mon:SECONDARY> db.users.find()
{ "_id" : ObjectId("59383089aec7627b289db4c2"), "name" : "jarek" }


mon:PRIMARY> db.getReplicationInfo()
{
	"logSizeMB" : 40388.49667930603,
	"usedMB" : 0.01,
	"timeDiff" : 1013,
	"timeDiffHours" : 0.28,
	"tFirst" : "Wed Jun 07 2017 16:48:17 GMT+0000 (UTC)",
	"tLast" : "Wed Jun 07 2017 17:05:10 GMT+0000 (UTC)",
	"now" : "Wed Jun 07 2017 17:05:13 GMT+0000 (UTC)"
}
