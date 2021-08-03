let inputLogin = document.getElementById("input-login")
let btnLogin = document.getElementById("btn-login")
let loginSec = document.querySelector(".login")
let res = document.querySelector(".res")

btnLogin.addEventListener("click",()=>{
    if(inputLogin.value == "5"){
        res.innerHTML = "Awlliiee"
        res.classList.remove("err")
        res.classList.add("suc")
    }else{
        res.innerHTML = "Eshtebahh"
        res.classList.remove("err")
        res.classList.add("err")
    }
})