/**
 * I will be using node.js to use 2 functionalities of CRUD Create and Retrieve
 * Please type node server.js and go to local 'http://localhost:8000/api/user' to see it in full action
 * Also use Google Chrome to for the usage of localhost:8000.
 * Due to the difficulty of this exercise I have used Dr.Keatings midterm code as a template but not reusing 
 * any code used in his js.
 * I have split the code into a few sections to make  life a lot easier.
 */

//Section 1: Connect to the database
var sql = require('mysql');

//Connecting to the database
var sqlconnection = sql.createConnection(
  {
    host: "webcourse.cs.nuim.ie",
    user: "u200293",
    password: "ahChaeleew3fan6w",
    database: "cs230_u200293",
  });
  
  //Need to print out to tell the user that they have connected to the database
  sqlconnection.connect(function(error){
    if(error) throw error; console.log("Hi! You have connected to the database :)");
  })

//Section 2: This will allow us to connect to a port and also we need to create a server too.
var port = 8000;
var http = require("http");
var server = http.createServer();

//Lets see if it has connected to the port
server.listen(port, function()
{
  console.log("You have connect to port: " + port);  
})

//Section 3: This section will allow us to use the POST and GET Functionalities or the C and R functionalities of CRUD
//3.1 lets first initialize a few variables.
//Aside: These are all imported from the npm of the node.js
var url = require("url"); 
var filesystem = require("fs"); 
var string = require("querystring");    

//3.2 Lets use the server now to do the POST and GET Functionalities
server.on("request", function(post,get)
{
  var method = post.method;
  var body = "";

  //Lets first of all use filesystem to open the html needed for this assignment
  filesystem.readFile(__dirname + "/server.html", function (err, data) 
  {
    get.end(data); 
  }); 
  

  //Lets now get the 2 Functionalities needed Create or C and Retrieve or R
  filesystem.readFile(__dirname + "/server.html/api/user", function (err, data) 
  {
    switch(url.format(post.url))
    {
      case "/api/user":

      //This will now initialize C or Create
        if (method === "POST") 
        {
      

         post.on("data", function (info) 
         {
           body = info.toString();
           data = string.parse(body);
           
           var sql = `INSERT INTO Personal (Title, Firstname, Surname, Mobile,Email) VALUES ('${data.title}','${data.firstname}','${data.surname}','${data.mobile}','${data.email}')`;
           var sql1 = `INSERT INTO Address (Address_Line_1, Address_Line_2, Town, County,Eircode) VALUES ('${data.address1}','${data.address2}','${data.town}','${data.county}','${data.eircode}')`
           sqlconnection.query(sql, function (err, result) 
           {
             if (err) throw err;
             console.log(`You have created the following user: ['${data.title}','${data.firstname}','${data.surname}','${data.mobile}','${data.email}', '${data.address1}','${data.address1}','${data.town}','${data.county}','${data.eircode}]\n`);
           });

           
         });
        }
        break;
    }


          //This will now initialize R or Retrieve but it will retrieve all the data in the database
    switch(url.format(post.url))
    {
      case "/api/user":
        if (method === "GET") 
        {
          sqlconnection.query("SELECT * FROM Personal",
            function (err, result, fields) {
              if (err) throw err;
    
              console.log("You have retrived \n\n" +JSON.stringify(result, null, 2) +"\n");
            }
          );
        }
        break;
    }
  }); 

  

});

      
