let step1 = document.querySelector(".step1")
let step2 = document.querySelector(".step2")
let mainCc = document.querySelector(".mainC")

let inputLogin = document.getElementById("input-login")
let btnLogin = document.getElementById("btn-login")

let loginSec = document.querySelector(".login")
let music = document.getElementById("music")


btnLogin.addEventListener("click", () => {
    if (inputLogin.value == "2460506244") {
        res.innerHTML = "Awlliiee"
        setTimeout(() => {
            step1.style.transitionDuration = "1s";
            step1.style.opacity = "0";
            setTimeout(() => {
                step1.style.display = "none";
                step2.style.display = "flex";
                let ready = document.getElementById("ready")
                ready.addEventListener("click", () => {
                    step2.style.display = "none";
                    loginSec.style.display = "none";
                    mainCc.style.display = "flex";
                    mainC();
                })
            }, 2000)
        }, 1000)
    } else {
        res.innerHTML = "Eshtebahh"
    }
})


function mainC() {
    let musics = document.querySelectorAll(".music")
    musics.forEach((singleMusic) => {
        singleMusic.addEventListener("click", () => {
            music.setAttribute("src", singleMusic.attributes[1].value)
            music.play()
        })
    })
}
