let userName = "Admin"
let password = "TheMaster";

if (userName === "Admin")
{
    if (password === "TheMaster")
    {
        console.log("Welcome!");
    }
    else if( password === "")
    {
        console.log("Canceled");
    }
    else {
        console.log ("Wrong Password");
    }
}
else if (userName === "") {
    console.log("Canceled")
} else {
    console.log ("I don't know you");
}
//new branch