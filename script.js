var database = [
	{
		username: "phal",
		password: "damn2020"
	}		
];

var newsFeed = [

	{
		username: "bobby",
		timeline: "so busy today"
	}
];

var userNameprompt = prompt("what's your username")
var passwordNameProme = prompt("what is your passord")

function signIn(user,passord) {
		if (user === database[0].username && 
			pass === database[0].passord) {
			console.log(newsFeed);
	   } else {
	   		alert ("sorry, you user the wrong password!");

	    }	
}

signIn(userNameprompt, passwordNameProme);
