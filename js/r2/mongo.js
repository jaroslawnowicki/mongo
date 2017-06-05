/**
 * Created by jarek on 05.06.17.
 */
> use tutorial
switched to db tutorial
> db.users.insert({username:"smith"})
WriteResult({ "nInserted" : 1 })
> db.users.find()
{ "_id" : ObjectId("5934e7bd95768a6ce9364b3e"), "username" : "smith" }
> db.users.insert({username: "jones"})
WriteResult({ "nInserted" : 1 })
> db.users.count()
2
> db.users.find()
{ "_id" : ObjectId("5934e7bd95768a6ce9364b3e"), "username" : "smith" }
{ "_id" : ObjectId("5934e7d795768a6ce9364b3f"), "username" : "jones" }
> db.users.find({username: "jones"})
{ "_id" : ObjectId("5934e7d795768a6ce9364b3f"), "username" : "jones" }
> db.users.find({$or: [ {username: "smith"}, {username: "jones"}]})
{ "_id" : ObjectId("5934e7bd95768a6ce9364b3e"), "username" : "smith" }
{ "_id" : ObjectId("5934e7d795768a6ce9364b3f"), "username" : "jones" }
> db.users.find({username: "smith"})
{ "_id" : ObjectId("5934e7bd95768a6ce9364b3e"), "username" : "smith" }
> db.users.update({username: "smith"}, {$set: {country: "Canada"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.users.find({username: "smith
    2017-06-05T05:13:26.126+0000 E QUERY    [thread1] SyntaxError: unterminated string literal @(shell):1:25
> db.users.find({username: "smith"})
{ "_id" : ObjectId("5934e7bd95768a6ce9364b3e"), "username" : "smith", "country" : "Canada" }
> db.users.update({username: "smith"}, {country: "Canada"})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.users.find({country: "Canada"})
{ "_id" : ObjectId("5934e7bd95768a6ce9364b3e"), "country" : "Canada" }
> db.users.update({country: "Canada"}, {username: "smith", country: "Canada"})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.users.update({username: "smith"}, {$unset: {country: 1}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.users.find({username:  "smith"})
{ "_id" : ObjectId("5934e7bd95768a6ce9364b3e"), "username" : "smith" }
> db.users.find({username:  'smith'})
{ "_id" : ObjectId("5934e7bd95768a6ce9364b3e"), "username" : "smith" }
> db.users.update({username: "smith"}, {$set: {favorities: {cities: ["Chicago", "Chayehnne

    db.users.update({username: "smith"}, {$set: {favorities: {cities: ["Chicago", "Cheyenne"], movies: ["Casablanca", "The Stig"]}}})
    WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
    > db.users.update({username: "jones"}, {$set: {favorities: {movies: ["Casablanca", "Rocky"]}}})
    WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
    > db.users.find().pretty()
    {
        "_id" : ObjectId("5934e7bd95768a6ce9364b3e"),
        "username" : "smith",
        "favorities" : {
            "cities" : [
                "Chicago",
                "Cheyenne"
            ],
            "movies" : [
                "Casablanca",
                "The Stig"
            ]
        }
    }
    {
        "_id" : ObjectId("5934e7d795768a6ce9364b3f"),
        "username" : "jones",
        "favorities" : {
            "movies" : [
                "Casablanca",
                "Rocky"
            ]
        }
    }
    > db.users.find({favorities.movies: "Casablanca:})
2017-06-05T05:21:42.606+0000 E QUERY    [thread1] SyntaxError: missing : after property id @(shell):1:25
> db.users.find({favorities.movies: "Casablanca"})
2017-06-05T05:21:55.355+0000 E QUERY    [thread1] SyntaxError: missing : after property id @(shell):1:25
> db.users.find({"favorities.movies": "Casablanca"})
{ "_id" : ObjectId("5934e7bd95768a6ce9364b3e"), "username" : "smith", "favorities" : { "cities" : [ "Chicago", "Cheyenne" ], "movies" : [ "Casablanca", "The Stig" ] } }
{ "_id" : ObjectId("5934e7d795768a6ce9364b3f"), "username" : "jones", "favorities" : { "movies" : [ "Casablanca", "Rocky" ] } }



> use tutorial
switched to db tutorial
> db.foo.remove()
2017-06-05T05:23:49.405+0000 E QUERY    [thread1] Error: remove needs a query :
    DBCollection.prototype._parseRemove@src/mongo/shell/collection.js:409:1
DBCollection.prototype.remove@src/mongo/shell/collection.js:434:18
@(shell):1:1
> show collections;
users
> db.users.find()
{ "_id" : ObjectId("5934e7bd95768a6ce9364b3e"), "username" : "smith", "favorities" : { "cities" : [ "Chicago", "Cheyenne" ], "movies" : [ "Casablanca", "The Stig" ] } }
{ "_id" : ObjectId("5934e7d795768a6ce9364b3f"), "username" : "jones", "favorities" : { "movies" : [ "Casablanca", "Rocky" ] } }
> db.foo.remove()
2017-06-05T05:24:29.312+0000 E QUERY    [thread1] Error: remove needs a query :
    DBCollection.prototype._parseRemove@src/mongo/shell/collection.js:409:1
DBCollection.prototype.remove@src/mongo/shell/collection.js:434:18
@(shell):1:1
> db.users.remove({"favorities.cities", "Cheyenne"})
2017-06-05T05:25:07.440+0000 E QUERY    [thread1] SyntaxError: missing : after property id @(shell):1:36
> db.users.remove({"favorities.cities": "Cheyenne"})
WriteResult({ "nRemoved" : 1 })
> db.users.drop()
true
> help
db.help()                    help on db methods
db.mycoll.help()             help on collection methods
sh.help()                    sharding helpers
rs.help()                    replica set helpers
help admin                   administrative help
help connect                 connecting to a db help
help keys                    key shortcuts
help misc                    misc things to know
help mr                      mapreduce

show dbs                     show database names
show collections             show collections in current database
show users                   show users in current database
show profile                 show most recent system.profile entries with time >= 1ms
show logs                    show the accessible logger names
show log [name]              prints out the last segment of log in memory, 'global' is default
use <db_name>                set current database
db.foo.find()                list objects in collection foo
db.foo.find( { a : 1 } )     list objects in foo where a == 1
it                           result of the last line evaluated; use to further iterate
DBQuery.shellBatchSize = x   set default number of items to display on shell
exit                         quit the mongo shell
> for (i=0; i < 20000; i++) { db.numbers.save({num: i}); }
WriteResult({ "nInserted" : 1 })
> db.numbers.count()
20000
> db.numbers.find()
{ "_id" : ObjectId("5934eb8d84969d82e1d88936"), "num" : 0 }
{ "_id" : ObjectId("5934eb8e84969d82e1d88937"), "num" : 1 }
{ "_id" : ObjectId("5934eb8e84969d82e1d88938"), "num" : 2 }
{ "_id" : ObjectId("5934eb8e84969d82e1d88939"), "num" : 3 }
{ "_id" : ObjectId("5934eb8e84969d82e1d8893a"), "num" : 4 }
{ "_id" : ObjectId("5934eb8e84969d82e1d8893b"), "num" : 5 }
{ "_id" : ObjectId("5934eb8e84969d82e1d8893c"), "num" : 6 }
{ "_id" : ObjectId("5934eb8e84969d82e1d8893d"), "num" : 7 }
{ "_id" : ObjectId("5934eb8e84969d82e1d8893e"), "num" : 8 }
{ "_id" : ObjectId("5934eb8e84969d82e1d8893f"), "num" : 9 }
{ "_id" : ObjectId("5934eb8e84969d82e1d88940"), "num" : 10 }
{ "_id" : ObjectId("5934eb8e84969d82e1d88941"), "num" : 11 }
{ "_id" : ObjectId("5934eb8e84969d82e1d88942"), "num" : 12 }
{ "_id" : ObjectId("5934eb8e84969d82e1d88943"), "num" : 13 }
{ "_id" : ObjectId("5934eb8e84969d82e1d88944"), "num" : 14 }
{ "_id" : ObjectId("5934eb8e84969d82e1d88945"), "num" : 15 }
{ "_id" : ObjectId("5934eb8e84969d82e1d88946"), "num" : 16 }
{ "_id" : ObjectId("5934eb8e84969d82e1d88947"), "num" : 17 }
{ "_id" : ObjectId("5934eb8e84969d82e1d88948"), "num" : 18 }
{ "_id" : ObjectId("5934eb8e84969d82e1d88949"), "num" : 19 }
Type "it" for more
              > db.numers.find({num: 500})
              > db.numbers.find({num: 500})
{ "_id" : ObjectId("5934eb8e84969d82e1d88b2a"), "num" : 500 }
> db.numbers.find({num: {"$gt": 199995}})
> db.numbers.find({num: {"$gt": 19995}})
{ "_id" : ObjectId("5934eb9384969d82e1d8d752"), "num" : 19996 }
{ "_id" : ObjectId("5934eb9384969d82e1d8d753"), "num" : 19997 }
{ "_id" : ObjectId("5934eb9384969d82e1d8d754"), "num" : 19998 }
{ "_id" : ObjectId("5934eb9384969d82e1d8d755"), "num" : 19999 }
> db.numbers.find({num: {$gt: 19995}})
{ "_id" : ObjectId("5934eb9384969d82e1d8d752"), "num" : 19996 }
{ "_id" : ObjectId("5934eb9384969d82e1d8d753"), "num" : 19997 }
{ "_id" : ObjectId("5934eb9384969d82e1d8d754"), "num" : 19998 }
{ "_id" : ObjectId("5934eb9384969d82e1d8d755"), "num" : 19999 }
> db.numbers.find({num: {$gt: 20, $lt: 25})
    ...
    ...
> db.numbers.find({num: {$gt: 20, $lt: 25}})
{ "_id" : ObjectId("5934eb8e84969d82e1d8894b"), "num" : 21 }
{ "_id" : ObjectId("5934eb8e84969d82e1d8894c"), "num" : 22 }
{ "_id" : ObjectId("5934eb8e84969d82e1d8894d"), "num" : 23 }
{ "_id" : ObjectId("5934eb8e84969d82e1d8894e"), "num" : 24 }
