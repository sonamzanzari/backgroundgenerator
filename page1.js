var database=[


{
username:"prisha",
pass:"abc"
},
{
username:"piyush",
pass:"pqr"
},
{
username:"sonam",
pass:"patni"
},
];
var newsfeed=[
{
username:"ppppp",
timeline:"so tired from all"
},
{
	username:"aaaaa",
	timeline:"cooollllll"

},
{
	username:"bbbbbbb",
	timeline:"wawwwwwww"

},

];
function isuservalid( username,pass)
{
for(var i=0;i<database.length;i++){
	if(database[i].username===username && database[i].pass===pass){
		return true;
	}}
	return false;
}
function signIn(username,pass){
if(isuservalid(username,pass)){
	console.log(newsfeed);
}else
{
	alert("Wrong username and pass");
}
}

var usernameprompt=prompt("what is your user name");
var passprompt=prompt("enter password");
signIn(usernameprompt,passprompt);

