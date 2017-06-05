/**
 * Created by jarek on 04.06.17.
 */
db.posts.find({'tags': 'politics', 'vote_count': {'$gt': 10}});
use test
//switched to db test
db.users.insert({name: "Kyle"})
//WriteResult({ "nInserted" : 1 })
db.users.find()
//{ "_id" : ObjectId("593449cfd67a70cb5e539c24"), "name" : "Kyle" }
