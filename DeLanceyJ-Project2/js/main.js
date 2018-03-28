console.log("ready!");


function ranNumGen(){
/*Store array for the list of First Names we'll be taking from*/
var firstArray = ["Bob", "Luthor", "Killmonger", "Jackie", "Liara", "Malgor", "Josie", "Maleficent", "Kilgrave", "Susan"];
/*Store array for the list of Last Names we'll be taking from*/
var lastArray = ["Clinton", "Greyjoy", "Wales the Outlaw", "Simpson", "Stormrage", "Jones", "Gutshredder", "Smith", "Strider", "Lannister"];
//Store the user's input into variable i
var i = document.querySelector("input[name='inputNumber']").value;
//Create a variable to store number of names generated to use in a while loop
var nameCount = 0;
//Create a variable that uses math.random() method to generate a random first name
var randomFirst = firstArray[Math.floor(Math.random() * firstArray.length)];
//Create a variable that uses math.random() method to generate a random last name
var randomLast = lastArray[Math.floor(Math.random() * lastArray.length)];



/*Use while loop to procedurally generate randon names equal to the number the user inputted.*/
while(nameCount < i){
	document.querySelector(".users-input").innerHTML += randomFirst + " " + randomLast + "<br>";

	var randomFirst = firstArray[Math.floor(Math.random() * firstArray.length)];

	var randomLast = lastArray[Math.floor(Math.random() * lastArray.length)];

	nameCount++;



}
	/*Add a message that only appears once the while loop is completed.*/
	document.querySelector(".snarky-message").innerHTML = "To be honest, I'd just stick with what your mama gave you..." + "<br>" + "<br>" + "Refresh the page to get more names!";


}