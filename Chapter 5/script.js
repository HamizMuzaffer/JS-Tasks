var FirstNum = 3;
var SecondNum = 5;
var add = FirstNum + SecondNum;
document.write("Q.1  Sum of 3 and 5 is",add)

document.write("<br> <br> <br> <br> <br>")
var sub = FirstNum - SecondNum;
document.write("<br> Q.2", sub )


var mul = FirstNum * SecondNum;
document.write("<br>", mul )

var div = FirstNum / SecondNum;
document.write("<br>", div)

var mod = FirstNum % SecondNum;
document.write("<br>", mod)

document.write("<br> <br> <br> <br> <br>")


var num1
document.write("Q3 \n (a)", num1)
num1 = 22;
document.write(" <br>\n (b) \n Initial Value ", num1)
num2 = num1+1;
document.write(" <br>\n (c) \n  Value after increment ", num2)
num3 = num1+7;
document.write(" <br>\n (d) \n  Value after addition ", num3)
num4 = num3-1;
document.write(" <br>\n (e) \n  Value after decrement ", num4)
num5 = num4/3;
document.write(" <br>\n (f) \n The remainder is remainder ", num5)

document.write("<br> <br> <br> <br> <br>")


var store = 600;
var total = 600 * 5;

document.write("Q4 \n The total cost of buying five tickets is \n",total,"PKR")



document.write("<br> <br> <br> <br> <br>")
document.write("Q5<br>")
for(var i= 1; i<= 10; i++){
    document.write("7\nx\n",i,"\n=\n",7*i,"<br>")
}


document.write("<br> <br> <br> <br> <br>")


document.write("Q6 \n\n <br>")
var celcius= 32;
var farenheit = ((celcius * 9/5)+32)
var farenheit1 = 71;
var celcius1 = (farenheit1-32)*5/9
document.write( "(a) \n The Tempreature in celcius:\n",celcius )
document.write( "<br>(b) \n The Tempreature in farenheit after conversion:\n",farenheit )
document.write( "<br>(c) \n The Tempreature in farenheit:\n",farenheit1 )
document.write( "<br>(d) \n The Tempreature in celcius after conversion:\n",celcius1 )


document.write("<br> <br> <br> <br> <br>")

document.write("Q7 \n\n <br>")
var item1 = 650
var item2 = 100
document.write( "(a) \n The Price of item 1 :\n",item1 )
document.write( "<br>(b) \n The quantity of item 1 :\n",2 )
document.write( "<br>(c) \n The Price of item 2 :\n",item2 )
document.write( "<br>(d) \n The quantity of item 2 :\n",7 )
var ship = (item1*2)+(item2*7) 
document.write( "<br>(e) \n Shipping charges :\n", ship)


document.write("<br> <br> <br> <br> <br>")

var totalmarks = 1100;
var obtainedmarks = 990;
var percentage = (990/1100)*100

document.write("Q8 \n\n <br>")
document.write( "(a) \n Total Marks:\n",totalmarks )
document.write( "<br>(b) \n Marks Obtained :\n",obtainedmarks )
document.write( "<br>(c) \n Percentage :\n",percentage,"%" )


document.write("<br> <br> <br> <br> <br>")
document.write("Q9 \n\n <br>")

var usd=120;
var pkr=usd*306;
document.write( "(a) \n Amount in USD:\n",usd )
document.write( "<br>(b) \n Amount in PKR:\n",pkr )

document.write("<br> <br> <br> <br> <br>")

document.write("Q10 \n\n <br>")
var cal = 20;
var cal1= ((20+5)*10)/2
document.write( "(a) \n Given number:\n",cal )
document.write( "<br>(b) \n After calculation:\n",cal1)

document.write("<br> <br> <br> <br> <br>")
document.write("Q11 \n\n <br>")
var birth = 1999;
var current = 2023;
var age = current-birth;

document.write( "(a) \n Birth Year:\n",birth )
document.write( "<br>(b) \n Current Year:\n",current )
document.write( "<br>(c) \n Your Age is:\n",age )


document.write("<br> <br> <br> <br> <br>")
document.write("Q12 \n\n <br>")
var radius = 20;
var area = 3.142*radius*radius;
var circumference = 2*3.142*radius; 
document.write( "(a) \n Radius of a circle:\n",radius )
document.write( "<br>(b) \n Area of circle:\n",area )
document.write( "<br>(c) \n Circumference of circle:\n",circumference )



document.write("<br> <br> <br> <br> <br>")
document.write("Q13 \n\n <br>")
var currentage=19;
maximumAge = 60;
perday = 3;
favouriteSnack="Dairy Milk";
document.write( "(a) \n Favorite Snack:\n",favouriteSnack )
document.write( "<br>(b) \n Current Age :\n",currentage )
document.write( "<br>(c) \n Maximum Age:\n",maximumAge )
document.write( "<br>(d) \n Amount of it per day:\n",perday )
document.write( "<br>You can eat\n","\n",perday,"\n",favouriteSnack, "to last you untill the ripe age of\n",maximumAge )

