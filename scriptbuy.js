if(localStorage.getItem("Money") == null){
localStorage.setItem("Money", 50)
}
let total = 0
function clearbasket(){
    total=0
    var totalc = document.getElementById("prie")
    totalc.innerText = total;
}
var market = localStorage.getItem("Market")
if(market != 1){ 
    window.location.replace("index.html")
} 
else{
let money = localStorage.getItem("Money")
function blue() {
    let buy = 350
    var result = localStorage.getItem("Money") - buy
    if (localStorage.getItem("Money") >= buy) {
        prompt("Enter your address")
        alert("Blue God is Buy")
        alert("You Have " + result + " Money")
        localStorage.setItem("Money", localStorage.getItem("Money") - buy)
    }
    else {
        alert("You can not buy Blue God")
    }
}
function TechnoBoots() {
    let buy = 500
    var result = localStorage.getItem("Money") - buy
    if (localStorage.getItem("Money") >= buy) {
        prompt("Enter your address")
        alert("TechnoBoots is Buy")
        alert("You Have " + result + " Money")
        localStorage.setItem("Money", localStorage.getItem("Money") - buy)
    }
    else {
        alert("You can not buy TechnoBoots")
    }
}
function White_God() {
    let buy = 700
    var result = localStorage.getItem("Money") - buy
    if (localStorage.getItem("Money") >= buy) {
        prompt("Enter your address")
        alert("White_God is Buy")
        alert("You Have " + result + " Money")
        localStorage.setItem("Money", localStorage.getItem("Money") - buy)
    }
    else {
        alert("You can not buy White_God")
    }
}    
function WildWiler() {
    let buy = 888
    var result = localStorage.getItem("Money") - buy
    if (localStorage.getItem("Money") >= buy) {
        prompt("Enter your address")
        alert("WildWiler is Buy")
        alert("You Have " + result + " Money")
        localStorage.setItem("Money", localStorage.getItem("Money") - buy)
    }
    else {
        alert("You can not buy WildWiler")
    }
}    
function model() {
    let buy = 1200
    var result = localStorage.getItem("Money") - buy
    if (localStorage.getItem("Money") >= buy) {
        prompt("Enter your address")
        alert("AhilesBoots is Buy")
        alert("You Have " + result + " Money")
        localStorage.setItem("Money", localStorage.getItem("Money") - buy)
    }
    else {
        alert("You can not buy AhilesBoots")
    }
}    
function basket(name, price){
    total+=price
    var totalc = document.getElementById("prie")
    totalc.innerText = total;

}
function buy(){
    var totalc = document.getElementById("prie")
    if(localStorage.getItem("Money") >= parseInt(total)){
        localStorage.setItem("Money", localStorage.getItem("Money")-total)
        total=0
        totalc.innerText = total;
        alert("you buy")
        alert("your money is "+localStorage.getItem("Money"))
    }
    else{
        alert("You can't buy")
    }
}
}