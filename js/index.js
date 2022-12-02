var loginform =document.getElementById("loginform")
var regform= document.getElementById("regform")
var indicator =document.getElementById("indicator")
function register()
{
    regform.style.transform="translateX(0px)"
    loginform.style.transform="translateX(0px)"
    indicator.style.transform="translateX(100px)"
}
function login()
{
    regform.style.transform="translateX(300)"
    loginform.style.transform="translateX(300px)"
    indicator.style.transform="translateX(0px)"
}
function regtr()
{
    if(regform.style.display="none")
    {
        regform.style.display="block";
    }
    else {
        regform.style.display="none";
    }
}