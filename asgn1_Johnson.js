
var $ = function (id)
{
    return document.getElementById(id);
}


function displayResults()
{
    var myFirstName = $("firstname").value;
    var userAge = $("userAge").value;
    var userAgeInt = parseInt(userAge);
    var hoursSlept = $("hourslept").value;
    var hoursSleptInt= parseInt(hoursSlept);
    var yearsTotal = userAgeInt * (hoursSleptInt / 24);
    var yearsTotalR = math.round(yearsTotal);    
    
    var myText = "Hi " + myFirstName + "." + "You have slept " + yearsTotalR + " years of your life away.";
    
    $("mymsg").innerHTML = myText;
}

window.onload = function ()
{
    $("mybutton").onclick = displayResults;
}