var x = 0;
var span = document.querySelector('span'); 
var add1 = document.getElementById('plus1'); 
var minus1 = document.getElementById('minus1'); 
var color;

//This is for the Fats, Sugars and Salts section
add1.addEventListener('click', function () {

  span.textContent = x+=1;
  if(x == 0)
  {
    color = "green";
  }

  if(x > 0)
  {
    color = "red";
  }
  span.style.color = color;
});

minus1.addEventListener('click', function () 
{

  span.textContent = x-=1;


  if(x == 0)
  {
    
    color = "green";
  }

  if(x > 0)
  {
    color = "red";
  }

  if(x < 0){span.textContent = 0}

 

  
  span.style.color = color;
});





//This is for the Fats,Spreads and Oils section
var x2 = 0;
var span1 = document.getElementById('quantity2');
var add2 = document.getElementById('plus2'); 
var minus2 = document.getElementById('minus2'); 

add2.addEventListener('click', function () {
  span1.textContent = x2+=1;
  if(x2 > 0)
  {
    color = "red";
  }

  if(x2 == 0)
  {
    color = "green";
  }
  
  span1.style.color = color;
});

minus2.addEventListener('click', function () 
{
  
 
  span1.textContent = x2-=1;
  if(x2 > 0)
  {
    color = "red";
  }

  if(x2 == 0)
  {
    color = "green";
  }

  if(x2 < 0){span1.textContent = 0;}
  
  span1.style.color = color;
});





//This is for the Proteins section
var x3 = 0;
var span2 = document.getElementById('quantity3'); 
var add3 = document.getElementById('plus3'); 
var minus3 = document.getElementById('minus3'); 

add3.addEventListener('click', function () {
  
  span2.textContent = x3+=1;
  if(x3 < 2)
  {
    color = "black";
  }
  if(x3 == 2)
  {
    color = "green";
  }

  if(x3 > 2)
  {
    color = "red";
  }
  span2.style.color = color;
});

minus3.addEventListener('click', function () 
{

 
  span2.textContent = x3-=1;
  if(x3 < 2)
  {
    color = "black";
  }
  if(x3 == 2)
  {
    color = "green";
  }

  if(x3 > 2)
  {
    color = "red";
  }

  if(x3 < 0){span2.textContent = 0;}

  span2.style.color = color;
});






//Dairy sections
var x4 = 0;
var span3 = document.getElementById('quantity4');
var add4 = document.getElementById('plus4'); 
var minus4 = document.getElementById('minus4'); 

add4.addEventListener('click', function () {
  
  span3.textContent = x4+=1;
 
  if(x < 3)
  {
    color = "black";
  }

  if(x4 == 3)
  {
    color = "green";
  }
  if(x4 > 3)
  {
    color = "red";
  }

  if(x4 < 0){span3.textContent = 0;}

  span3.style.color = color;
});

minus4.addEventListener('click', function () 
{
  
  
  span3.textContent = x4-=1;
  if(x4 == 3)
  {
    color = "green";
  }

  if(x4 < 3)
  {
    color = "black";
  }

  if(x4 > 3)
  {
    color = "red";
  }

  if(x4 < 0){span3.textContent = 0;}

  span3.style.color = color;
});




//Carbohydrates
var x5 = 0;
var span4 = document.getElementById('quantity5'); 
var add5 = document.getElementById('plus5'); 
var minus5 = document.getElementById('minus5'); 

add5.addEventListener('click', function () {
  
  span4.textContent = x5+=1
  if(x5 < 3)
  {
    color = "black";
  }

  if(x5 > 2 && x5 < 6)
  {
    color = "green";
  }
  if(x5 > 5)
  {
    color = "red";
  }
  
  span4.style.color = color;
});

minus5.addEventListener('click', function () 
{
 
  span4.textContent = x5-=1;
  if(x5 < 3)
  {
    color = "black";
  }

  if(x5 > 2 && x5 < 6)
  {
    color = "green";
  }
  if(x5 > 5)
  {
    color = "red";
  }

  if(x5 < 0){span4.textContent = 0;}

  span4.style.color = color;
});






//Vegetables and Fruits section
var x6 = 0;
var span5 = document.getElementById('quantity6'); 
var add6 = document.getElementById('plus6'); 
var minus6 = document.getElementById('minus6'); 

add6.addEventListener('click', function () {
 
  span5.textContent = x6+=1;
  if(x6 > 5)
  {
    color = "black";
  }
  if(x6 > 7)
  {
    color = "red";
  }

  if(x6 > 4 && x6 <= 7)
  {
    color = "green";
  }

  span5.style.color = color;
});

minus6.addEventListener('click', function () 
{
  
  span5.textContent = x6-=1;
  if(x6 < 5)
  {
    color = "black";
  }

  if(x6 > 7)
  {
    color = "red";
  }

  if(x6 > 4 && x6 <= 7)
  {
    color = "green";
  }

  if(x6 < 0){span5.textContent = 0;}
  
  span5.style.color = color;
});

//Another thing that needs to be done is to fix today's date=
function getDate(){
  var day = document.getElementById("date").value;
  getthedate.innerHTML= day;  
}



