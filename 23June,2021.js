//1.
alert("I’m JavaScript!");

//2.
<script src="script.js"></script> // quotes
//3.
alert("I’m invoked!");
//4.
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
ld`)
alert(3 +
    1
    + 2); // this is multiple line code and its working


// Alert contains can be of single or double quoted and semi colon has nothing to do.
// if we are displaying single line in alert we use single or double quoted
// if we want to display multiple lines then we opt for backstrick i.e; ``
// we can also write experssions in alert.


//4.
let admin = 9, fname = 10.5;
fname = "Guvi";
lname = "geek"
admin = fname + " " + lname;
alert(admin); // "Guvi geek"

//5.
let fname = 10.5;
fname = "Guvi";
lname = "geek"
let name = fname + lname;
let message = 'hello' + ' ' + fname + ' ' + lname;
alert(message);

//6.
let a = prompt("First number?");
let b = prompt("Second number?");
c = +a + +b;
alert(c);

//7.
var a = "2" > "12";
// 2 and 12 are treated as strings
//Don't touch below this
if (a) {
    console.log("Code is Blasted")
}
else {
    console.log("Diffused")
}

//8.
let a = prompt("Enter a number?");
if (a) {
    console.log('OMG it works for any number inc 0');
}
else {
    console.log("Success");
} // In prompt donot enter any number and press enter.

//9.
let value = prompt('How many runs you scored in this ball');
var num1 = value;
console.log(typeof (num1));
if (typeof (num1) == 'number') {
    if (num1 === 4) {
        console.log("You hit a Four");
    } else if (num1 === 6) {
        console.log("You hit a Six");
    } else {
        console.log(value);
    }
} else {
    console.log("I couldn't figure out");
}

//10.
let login = 'Employee';
var message1 = login;
if (message1 === 'Employee') {
    var message = "Welcome the " + message1;
} else {
    var message = "Welcome the " + message1;
}
console.log(message);

//11.
// You cant change the value of the msg
var message;
if (message === null || message === 2 || message === undefined) {
    var message = "welcome boss";
}
else {
    var message = "Go away";
}
console.log(message);


//12.




//13.
let message;
let lock = null;
//Dont change any code below this
if (lock && " " || undefined) {
    message = "Go away";
}
else {
    message = "welcome";
}
console.log(message);


//14.
//You can change only 2 characters
let i = 3;
while (i) {
    console.log(i);
    --i;
}

//15.

//15.

for (let num = 1; num <= 10; num++) {
    console.log(num);
}
//16. //You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
}
//17.
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
    console.log('Wrapped ' + gifts[i] + ' and added a bow!');
}
//18.
let countdown = 100; while (countdown > 0) {
    countdown--;
    if (countdown == 0) {
        console.log("disarm the bomb");
    }
}

//19.
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
    msg += "hi"; // hi will be output: 1st if is exceuted and ignored the rest and prints the message
}
if (lemeout) {
    msg += 'Hello';
}
console.log(msg);

________________________________________________________________________________________________________
//22222222222222222222222222222222222222222222

//1.
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < numsArr.length; i++) {
    new_string += numsArr[i]
}
console.log(new_string);
___________________________________________________________________________________________________ //3.
//3.
var new_string = "";
for (var i = 11; i > 0; i--) {
    new_string += i + " ";
}
console.log(new_string);
________________________________________________________________________________________________________

//4.
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 == 0) {
        console.log("even");
    }
    else {
        console.log(numsArr[i]);
    }
}


//5.
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 !== 0) {
        console.log("even");
    } else {
        console.log(numsArr[i]);
    }
}

//6.
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <= 10; i++) {
    sum += numsArr[i]
} console.log(sum);

//7.
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < 10; i++) {
    if (numsArr[i] % 2 == 0)
        sum += numsArr[i]
} console.log(sum);

//8.
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 === 0) {
        sum += numsArr[i]
    } else {
        sum -= numsArr[i]
    }
}
console.log(sum);

//9.
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
    console.log(numsArr[i])
}