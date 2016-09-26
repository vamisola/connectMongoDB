var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
},  function(err, cat){
        if(err){
            console.log(err);
        } else {
            console.log(cat);
        }
});

//adding a new cat to the DB
// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong!");
//     }else {
//         console.log("We just saved a cat to the database");
//         console.log(cat);
//     }
// });

//retrieve all cats from the DB and console.log each one
Cat.find({}, function(err,cats){
   if(err){
       console.log("OH NOT< ERROR!");
       console.log(err);
   } else {
       console.log("all the cats...");
       console.log(cats);
   }
});
