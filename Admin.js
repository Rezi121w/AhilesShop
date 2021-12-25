var admin = localStorage.getItem("Admin")
if(admin == 1){ 
} 
else{
    window.location.replace("index.html")
}
function payeer(){
    document.getElementById("dropdownMenuButton").innerText = "Payeer";
    document.getElementById("name").placeholder = "P1011092385";
}
function yandex(){
    document.getElementById("dropdownMenuButton").innerText = "Yandex Money";
    document.getElementById("name").placeholder = "4100 1155 3988 6117";
}
function paypal(){
    document.getElementById("dropdownMenuButton").innerText = "PayPal";
    document.getElementById("name").placeholder = "PayPal Email";
}
var sendmoney = Math.floor(Math.random() * 10000) + 1000;
document.getElementById("mon").innerText = sendmoney;
function wid(){
var money = Number(document.getElementById("money").value);
var wallet = document.getElementById("name").value; 
if(money == "" && wallet == ""){
    alert("Enter Money And Wallet")
}
else if(money == ""){
    alert("Enter money")
}
else if(wallet == ""){
    alert("Enter Wallet")
}
else if(sendmoney >= money){
alert("Your widraw is send");
let result = sendmoney - money;
sendmoney= result;
document.getElementById("mon").innerText = result;
}
else{
    alert("You have "+sendmoney+" money")
}
}