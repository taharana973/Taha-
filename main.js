
 function validate (){
    var Fname, pwd, Lname, pwd_error, fname_error, lname_error ;
   Fname= document.getElementById("fname");
   Lname= document.getElementById("lname");
   pwd = document.getElementById("pwd");
   email= document.getElementById("email");
   pwd_error = document.getElementById("pwd_error");
   fname_error = document.getElementById("fname_error");
   lname_error = document.getElementById("lname_error");
   email_error= document.getElementById("email_error");
    
    if (Fname.value =="") {
        fname_error.innerHTML= "Please fill First Name";
}   else{
    fname_error.innerHTML="";
}
    if (Lname.value =="") {
    lname_error.innerHTML= "Please fill Last Name";
}   else{
    lname_error.innerHTML="";
}
    if (pwd.value =="") {
    pwd_error.innerHTML= "Must fill Password";
}   else{
    pwd_error.innerHTML="";
}
    if (email.value =="") {
    email_error.innerHTML= "Must fill Email";
}   else{
    email_error.innerHTML="";
}

}