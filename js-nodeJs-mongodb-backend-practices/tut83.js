show dbs
use harrykart
show collections
db.items.find({ price: 22000 })

//Deleting items from mongo database

//deleteOne will delete the first match of filter object
db.items.deleteOne({ price: 20000 })

//deleteMany will delete the whole match of filter object
db.items.deleteMany({ price: 20000 })