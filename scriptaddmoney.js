var market = localStorage.getItem("Market")
if(market != 1){ 
    window.location.replace("index.html")
}
function pay(){
    var moneyadd = document.getElementById("moneyadd");
    var email = document.getElementById("email");
    var user = document.getElementById("username");
    var password = document.getElementById("pas");
    if(moneyadd.value == 0 || moneyadd.value == ""){
    alert("Write Money!!!")
    }
    else if(email.value == 0 || email.value == ""){
        alert("Write Email!!!")
        }
        else if(user.value == 0 || user.value == ""){
            alert("Write User!!!")
            }
            else if(password.value == 0 || password.value == ""){
                alert("Write Password!!!")
                }
    else{
    var mon = Number(localStorage.getItem("Money")) + Number(moneyadd.value);
    localStorage.setItem("Money", mon);
    alert("You Have: "+localStorage.getItem("Money")+" Money");
    }
}