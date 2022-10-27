// Searching for data in mongoDB
use harrykart

// This query will return all the objects with rating 4.5
db.items.find({ "rating": 4.5 })

// This query will return all the objects with rating >= 4.5
db.items.find({ "rating": { $gte: 3.5 } })

// This query will return all the objects with rating > 4.5
db.items.find({ "rating": { $gt: 3.5 } })

// This query will return all the objects with rating < 4.5
db.items.find({ "rating": { $lt: 3.5 } })

// This query will return all the objects with rating <= 4.5
db.items.find({ "rating": { $lte: 3.5 } })

//AND Operator
db.items.find({ "rating": { $gte: 4.5 }, "price": { $gt: 5000 } })

//OR Operation
db.items.find({ $or: [{ "rating": { $gte: 4.5 }, "price": { $gt: 5000 } }] })