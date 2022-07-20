const express = require("express");

const app = express();

const connectDB = require("./config/connectDB");
connectDB()

app.use(express.json())

const Person = require("./model/Person")

/***********************Create_and_Save_a_Record_of_a_Model***********************************/
// Person.insertMany([{
//     name:"Mehdi Sassi",
//     age:30,
//     favoriteFoods:["Couscous","Sandwich","Pizza"]
// }]).then( insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});
/*********************************************************************************************/


/***********************Create_Many_Records_with_model.create()*******************************/
// Person.create([
//     {
//         name:"Person X",
//         age:34,
//         favoriteFoods:["food1","foud2"]
//     },
//     {
//         name:"Person Y",
//         age:43,
//         favoriteFoods:["food3","food4"]
//     },
//     {
//         name:"Person Z",
//         age:19,
//         favoriteFoods:["food5","food6"]
//     }
// ]).then(insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});
/*********************************************************************************************/


/*********************Use_model.find()_to_Search_Your_Database********************************/
// Person.find().then(remainingPerson => {console.log(remainingPerson)});
/*********************************************************************************************/


/********************************Use_model.findOne()******************************************/
// Person.findOne().then(remainingPerson => {console.log(remainingPerson)});
/*********************************************************************************************/


/******************************Use_model.findById()*******************************************/
// let id = "62d7365dedc6e3853fe3cc97"; //just exemple 
// Person.findById(id, function (err, docs) {console.log(docs)});
/*********************************************************************************************/


/**********************************model.findOneAndUpdate()***********************************/
// Person.findOneAndUpdate({"name":"Mehdi Sassi"},{$set:{age:"31"}})
// .then(updatedPerson => {console.log("Updated Person: ",updatedPerson)});
/*********************************************************************************************/


/***********************************model.findByIdAndRemove()*********************************/
// let id = "62d7365dedc6e3853fe3cc97"; //just exemple 
// Person.findByIdAndRemove(id, function (err, docs) {console.log("Removed Person :",docs)});
/*********************************************************************************************/


/***************************************model.remove()****************************************/
// Person.remove({name:"Mehdi Sassi"})
// .then(removedPersons => {console.log("Removed Person :",removedPersons)});
/*********************************************************************************************/

const PORT = 4000;

app.listen(PORT, (err)=>{
    err
    ?console.log(err) 
    :console.log(`The Server is Running ${PORT}...`);
});