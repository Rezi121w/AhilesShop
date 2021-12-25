localStorage.setItem("Admin", 0)
localStorage.setItem("Market", 0)
function Reg() {
    var name = document.getElementById("username");
    var email = document.getElementById("email");
    var pas = document.getElementById("pas");
    var pasr = document.getElementById("pasr");
    var code = document.getElementById("scode");
    var user = localStorage.getItem("user");
    var emm = localStorage.getItem("email");
    if (name.value == "" || name.value == user) {
      alert("Enter Another Name");
    }
    else if (email.value == "" || email.value == emm) {
      alert("Enter Another Email");
    }
    else if (pas.value == "") {
      alert("Enter Password");
    }
    else if (pasr.value == "") {
      alert("Repeat Password");
    }
    else if (pasr.value != pas.value) {
      alert("Password Don't Match");
    }
    else if (code.value == "") {
      alert("Enter Code!!!");
    }
    else{
      alert("You Are register") 
      localStorage.setItem("user", name.value) ;
      localStorage.setItem("email", email.value) ;
      localStorage.setItem("password", pas.value);
      localStorage.setItem("scode", code.value);
      window.location.replace("index.html")
    }
}
function log() {
 var login = document.getElementById("username")
 var password = document.getElementById("pas");
 var user = localStorage.getItem("user");
 var pas = localStorage.getItem("password");
 if(login.value == "Admin" && password.value == "admintest"){
  localStorage.setItem("Admin", 1)
  window.open("Admin.html",'_self');  
}
else if(login.value != user){
alert("User don't Found")
}
else if(password.value != pas){
    alert("Not Write Password")
}
else{
  window.open("market.html",'_self');  
  localStorage.setItem("Market", 1)
}
}
function fpass(){
let email = document.getElementById("forgot").value;
let emar = localStorage.getItem("email");
let pas = localStorage.getItem("password");
let code = localStorage.getItem("scode");
if(email == ""){
alert("Enter email")
}
else if(code != document.getElementById("secure").value){
alert("No No, You can't hack ")
}
else if(email == emar){
  alert("Your password is "+pas)
}
else{
  alert("Email don't Register")
}
}