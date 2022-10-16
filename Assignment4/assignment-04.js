//For this assignment-04, node.js is used using my own connection from my own account from remotemysql
var mysql = require('mysql');

//Create a connection to link our database with node.js
var con = mysql.createConnection({
    host: "webcourse.cs.nuim.ie",
    user: "u200293",
    password: "ahChaeleew3fan6w",
    database: "cs230_u200293"
});

//Connect the database using the connect method
con.connect(function(err) {
    if (err) throw err; //Throws the error

    /*i) Let us first use C or Create in the CRUD functionality
    Let us first create 2 tables one for the Mr-Email Address and one for the Address Line-Eircode
    */

    
    //First create table with the Mr-Email denoted as Personal
    var database1 = "CREATE TABLE IF NOT EXISTS Personal (Title Enum('Mx', 'Ms', 'Mr', 'Mrs', 'Miss', 'Dr'), Firstname VARCHAR(255) NOT NULL, Surname VARCHAR(255) NOT NULL, Mobile VARCHAR(255) NOT NULL, Email VARCHAR(255) NOT NULL);";

    //Lets then connect the table to the database
    con.query(database1, function(err, result){
        if(err) throw err
        console.log("Database: Personal has been created");
    })

   
    //Lets now create the Address Line 1-Eircode Datase denoted as Address
    var database2 = "CREATE TABLE IF NOT EXISTS Address (Address_Line_1 VARCHAR(255) NOT NULL, Address_Line_2 VARCHAR(255), Town VARCHAR(255) NOT NULL, County VARCHAR(255) NOT NULL, Eircode VARCHAR(255)); ";
    
    //Lets connect the table to the database
    con.query(database2, function(err,result){
        if(err) throw err
        console.log("Database: Address has been created!");
    })
    
    
    /*Lets then create a names of a current Formula 1 driver Lewis Hamilton in
      the Personal Database
    */
    var user = "INSERT INTO `Personal`(`Title`, `Firstname`, `Surname`, `Mobile`, `Email`) VALUES ('Mr','Lewis','Hamilton','444444444','lhamilton44@f1.com');";
    con.query(user, function(err,result)
    {
        if(err) throw err
        console.log("Added user into Personal database");
    });
    var user = "INSERT INTO `Address`(`Address_Line_1`, `Address_Line_2`, `Town`, `County`, `Eircode`) VALUES ('44 Mercedes Street','Mercedes HQ','Brackley','Northamptonshire','EI44444');";
    
    con.query(user, function(err,result)
    {
        if(err) throw err
        console.log("Added user into Address database");
    });


    /* ii) Lets now do the R part or (Retrieve) */
    var user = "SELECT * FROM Personal WHERE Firstname = 'Lewis'";

    con.query(user, function(err,details)
    {
        if (err) throw err;
        console.log(details);
    });


    /* iii) Lets now do the U part or (Update)*/
    //Lets first update phone,email and title (Aside: Sir Lewis Hamilton as he recently got knighthood)
    var user = "UPDATE `Personal` SET Title='Dr' WHERE Title='Mr';";

    con.query(user,function(err,update)
    {
        if(err) throw err;
        console.log("Details has been updated");
    });

    var user = "UPDATE `Personal` SET Email='sirlhamilton44@f1.com' WHERE Email='lhamilton44@f1.com';";

    con.query(user,function(err,update)
    {
        if(err) throw err;
        console.log("Details has been updated");
    });

    var user = "UPDATE `Personal` SET Mobile='443444444' WHERE Mobile='444444444';";

    con.query(user,function(err,update)
    {
        if(err) throw err;
        console.log("Details has been updated");
    });

    var user = "UPDATE `Address` SET Eircode='EIMercedes' WHERE Eircode='EI44444';";

    con.query(user,function(err,update)
    {
        if(err) throw err;
        console.log("Details has been updated");
    });

    
  
    /*
    var user = "DELETE FROM `Personal` WHERE Firstname='Lewis'";
    con.query(user,function(err,update)
    {
        if(err) throw err;
        console.log("Details has been deleted");
    });

    var user = "DELETE FROM `Personal` WHERE Mobile='443444444'";
    con.query(user,function(err,update)
    {
        if(err) throw err;
        console.log("Details has been deleted");
    });

    var user = "DELETE FROM `Personal` WHERE Email = 'lhamilton44@f1.com'";
    con.query(user,function(err,update)
    {
        if(err) throw err;
        console.log("Details has been deleted");
    });

    
    var user = "DELETE FROM `Address` WHERE Eircode='EIMercedes'";
    con.query(user,function(err,update)
    {
        if(err) throw err;
        console.log("Details has been deleted");
    });*/
    
});

