//variables, debugging, data types, arrays, testing, logic, functions
//variables - used to define values, like it used to be in math class ie) x=10
var name = "alan"
var age = 28
var address = {
	houseNumber = 714,
	street = "Avery Ave",
	city = "Syracuse",
	state = "NY",
	zipcode = 13204,

}

//debugging and/or testing can be done by triggering alerts or using console.log
//the console can be read w/in the Inspect Element tool of Chrome
console.log("here's a console message!");
//or
alert(this makes an annooying pop-up box!);

//the different data types are Strings, Numbers, Boolean, and Undefined
//strings are any characters within quotes, like var city = "Syracuse"
//numbers are any integer, like var zipcode = 13204
//boolean are true/false. can work like the following:
boolean (2 > 0) //would return "true"
(2 > 0) //easier way to write above
//can also use == for "equal to" or !== for not equal

//Arrays - these hold multiple data tpes, like multiple strings, numbers, etc ex)
var oldCars = ["Xterra", "02 Grand Cherokee", "98 Grand Cherokee"];

//functions can help change a part of html or drive an action on a webpage
//it's triggered by a defined action, like "on-click" or "hover", etc
function addNumbers(firstNum, secondNum) {
	return firstNum + secondNum;
}
console.log(5, 10)

//logic can be used to create if, then statements
if (address.zipcode !== 13204) {
	console.log("you're lost!");
} else {
	console.log("home sweet home :)")
}