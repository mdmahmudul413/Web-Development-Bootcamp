show dbs
use harrykart
show collections

// single object updation
db.items.updateOne({ "name": "Samesung 30s" }, { $set: { "price": 5 } })


// multiple object updation
db.items.updateMany({ "name": "Samesung 30s" }, { $set: { "price": 5, "rating": 1 } })