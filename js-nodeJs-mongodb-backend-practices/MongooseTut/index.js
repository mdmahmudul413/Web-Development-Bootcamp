//include mongoose package. database: harrykart
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harrykart', { useNewUrlParser: true, useUnifiedTopology: true });

//Build connection with MongoDB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("We are connected bro/sis.");
});

//Schema
var kittySchema = new mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function() {
    var greeting = "My name is " + this.name;
    console.log(greeting);
}

//Model
var Kitten = mongoose.model('Kitten', kittySchema);

//object to store document in mongoDB
var harryKitty = new Kitten({ name: 'harryKitty' });
var harryKitty2 = new Kitten({ name: 'harryKitty2' });
// console.log(harryKitty.name); // 'harryKitty'
// harryKitty.speak();

//save object to mongoDB
harryKitty.save(function(err, k) {
    if (err) return console.error(err);
    //k.speak();
});

//save another object to mongoDB
harryKitty2.save(function(err, k) {
    if (err) return console.error(err);
    //k.speak();
});

//find harrykitty object in harrykart database at kittens collections
Kitten.find({ name: "harryKitty" }, function(err, k) {
    if (err) return console.error(err);
    console.log(k);
})

//find harrykitty2 object in harrykart database at kittens collections
Kitten.find({ name: "harryKitty2" }, function(err, k) {
    if (err) return console.error(err);
    console.log(k);
})