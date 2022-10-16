/**
 * This assignment requires the use of CRUD Functionalities using MongoDB 
 * To make stuff easier I have created a separate js file for my connection to my MongoDB Account and the main js file itself
 * For this particular assignmnet I have used Node.js, so to check work type "assignment-05.js" on terminal
 */
 
//Lets set up a few variables that are needed for this CRUD Functionality
const MongoClient = require('mongodb').MongoClient; //Uses MongoDB
const assert = require('assert');
const connect = require("./connect"); //Link us with the connect.js containing link to my MongoDB account to this file
const client = new MongoClient(connect.database.url, {useUnifiedTopology:true});//Connects us officially to the MongoDB Account
const ObjectId = require('mongodb').ObjectId;


//Lets now create a name for the database
const databasename = "Database";

/**
 *  Lets now create the CRUD Development aspect of the code
 *  To make things easier aswell I have created 3 separate "databases" for Personal Details, Phones and Stores
 */

    // Section 2.1 = Lets start off with the Create or (C) functionalities for PersonalDetails,Phones and Orders
     
    const insertCustomer = function(db,callback)
    {
          //Put this into the database and print the details out in the console log
          const collection = db.collection("Userdata")

        //Create an object array containing a few names, like always I will name them after Formula 1 Drivers 
        var details = 
        {Title:"Mr",Firstname:"Lando",Lastname:"Norris",Mobile:"44444444444",Email:"lnorris4@f1.com",
        HomeAddress:{AddressLine1:"4 McLaren HQ", AddressLine2:"", Town:"Woking", County:"Surrey", Eirocde:""},
        ShippingAddress:{AddressLine1:"4 McLaren HQ", AddressLine2:"", Town:"Woking", County:"Surrey", Eirocde:""}
        };

        collection.insertOne(details,function(err,result)
        {
            if(err) throw err;
            console.log("You have inserted new Details check below for details: ");
            console.log(details);
            callback(callback);
        });
    }

    //Now lets use it to insert the type of phones he/she has bought
    const insertPhones = function(db,callback)
    {
        var phones={Manufacturer:"Apple", Model:"iPhone 6",Price:"€599"};
        
        const collection = db.collection("Phones");

        collection.insertOne(phones,function(err,result)
        {
            if(err) throw err;
            console.log("You have inserted new details, check below:")
            console.log(phones);
            callback(result);
        });
    }

    //Lets also use that now to create the Orders section of the code
    const insertOrder=function(db,callback){
   

        const collection=db.collection('Orders');
        var orderNumber={OrderID:ObjectId('5ea3036c30ec840a99fea87b'),UserID:ObjectId('607e0dca02dfdc55dcc68a35'),PhoneID:ObjectId('607e0dcd02dfdc55dcc68a36')};
        collection.insertOne(orderNumber,function(err,result){
            if(err)throw err;
            console.log("Document inserted into orders:");
            console.log(orderNumber);
            callback(result);
        });
    }

    //Section 2.2 Lets now use Retrieve or R to "Find" Customers, Orders and the Phone types
    const findCustomer = function(db,callback)
    {
        //Lets do the same thing first of all by linking the method to the Customer database
        const collection = db.collection("Userdata");

        //Now using the find method we can find the person we are looking for through a use of an array
        collection.find({'Firstname':'Lewis'}).toArray(function(err,docs)
        {
            console.log("We have found the user you are looking for!");
            console.log(docs);
            callback(docs);
        })
    }

    //Lets uae this next step to find Phones that the person bought
    const findPhone = function(db,callback)
    {
        const collection = db.collection("Phones");

        collection.find({'Manufacturer':'Samsung'}).toArray(function(err,docs)
        {
            console.log("We have found the Phone you are looking for!")
            console.log(docs);
            callback(docs);
        });
    }

    const findOrders = function(db,callback)
    {
        const collection = db.collection("Orders");
       

        collection.find(ObjectId('608304405dbf552c44e332b3')).toArray(function(err,docs)
        {
          
            console.log("Here is the data we have found from that OrderID")
            console.log(docs);
            callback(docs);
        });
    }

    //Section 2.3 = Lets now use the U or Update functionality
    const updateCustomer = function(db,callback)
    {
        const collection = db.collection("Userdata");
        collection.updateOne({Firstname:"Lewis"},{$set:{Email:"lhamilton447@f1.com",Title:"Sir",Mobile:"444444444444",
        HomeAddress:{Eircode:"MERC44"},ShippingAddress:{AddressLine1:"44 Mercedes HQ",Eircode:"MERC44"}}},function(err,result)
        {
                assert.equal(err,null);
                assert.equal(1,result.result.n);
                console.log("We have updated the detials of the user you have requested!");
                callback(result);
        });
    }

    const updatePhones = function(db,callback)
    {
        const collection=db.collection('Phones');
        collection.updateOne({Manufacturer:"Samsung"},{$set:{Price:"€199.99"}},function(error,result)
        {
            assert.equal(error,null);
            assert.equal(1,result.result.n);
            console.log("We have updated the detials of the Phones you have requested!");
            callback(result);
        });
    }

    const updateOrders = function(db,callback)
    {
        const collection = db.collection("Orders");

        collection.updateOne({OrderID:ObjectId("5ea3036c30ec840a99fea87b")},{$set:{UserID:ObjectId('5ea2f526d38b360d61ff7281')}}, 
        function(error,result)
        {
            assert.equal(error,null);
            assert.equal(1,result.result.n);
            console.log("We have updated the order numbers of the data you have chosen");
            callback(result);
        });
    }

    //Section 2.4 = Lets now use the D component of the CRUD component which means Delete
    const deleteCustomers = function(db,callback)
    {
        const collection = db.collection("Userdata");

        collection.deleteOne({Firstname:"Lewis"}, function(error,result)
        {
            assert.equal(error,null);
            assert.equal(1,result.result.n);
            console.log("We have delete the user you have requested");
            callback(result);
        });
    }

    /*
    const deletePhones = function(db,callback)
    {
        const collection = db.collection("Phones");

        collection.deleteOne({Manufacturer:"Samsung"}, function(error,result)
        {
            assert.equal(error,null);
            assert.equal(1,result.result.n);
            console.log("We have delete the phone you have requested");
            callback(result);
        });
    }

    const deleteOrders = function(db,callback)
    {
        const collection = db.collection("Orders");

        collection.deleteOne({OrderID:ObjectId("5ea3036c30ec840a99fea87b")}, function(error,result)
        {
            assert.equal(error,null);
            assert.equal(1,result.result.n);
            console.log("We have delete the order you have requested");
            callback(result);
        });
    }
    */

    //Now using all that data lets use it to connect to the MongoDB Server
client.connect(function(err){
    assert.equal(null,err);
    console.log("Hi, you have connected to the server!");
    const db = client.db(databasename);
    
    //Using a recursive function we can complete the whole CRUD Functionality.
    insertCustomer(db,function()
    {
        insertPhones(db,function()
        {
            insertOrder(db,function()
            {
                findCustomer(db,function()
                {
                    findPhone(db,function()
                    {
                        findOrders(db,function(){
                            updateCustomer(db,function()
                            {
                                updatePhones(db,function()
                                {
                                    updateOrders(db,function()
                                    {
                                       // deleteCustomer(db,function()
                                        //{
                                            //deletePhone(db,function()
                                            //{
                                               // deleteOrder(db, function()
                                                //{
                                                    client.close(); 
                                               // })
                                            //})
                                        //})
                                    })
                                });
                            });
                        });
                    });
                });
            });
        })
    });

    
         
})


