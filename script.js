let box = document.querySelectorAll(".in-btn")
let input = Array.from(box)
let flag = false
box.forEach((e) => {
    e.addEventListener("click", () => {
        if (!flag) {
            e.innerHTML = "❌"
            flag = true
            display("player o turn")
            e.style.pointerEvents = 'none'
            Result()
        }
        else {
            e.innerHTML = "⭕"
            flag = false
            display("player x turn")
            e.style.pointerEvents = 'none'
            Result()
        }
    })
})
function display(show) {
    let display = document.querySelector('#banner').firstElementChild
    display.innerHTML = `${show}`
}

function Restart() {
    for (const element of input) {
        element.style.pointerEvents=''
        element.disabled = false
        element.innerHTML = ""
    }
    flag = false
    display("player x turn")
}
function Result() {
    let drow=false
    for(const data of input){
        if(data.innerHTML!='') drow=true
        else {drow=false;
            break}
    }
    if(drow){
        display("match drow")
    }

    if ((input[0].innerHTML === "❌" && input[1].innerHTML === "❌" && input[2].innerHTML === "❌") || (input[3].innerHTML === "❌" && input[4].innerHTML === "❌" && input[5].innerHTML === "❌") || (input[6].innerHTML === "❌" && input[7].innerHTML === "❌" && input[8].innerHTML === "❌") || (input[0].innerHTML === "❌" && input[3].innerHTML === "❌" && input[6].innerHTML === "❌") || (input[1].innerHTML === "❌" && input[4].innerHTML === "❌" && input[7].innerHTML === "❌") || (input[2].innerHTML === "❌" && input[5].innerHTML === "❌" && input[8].innerHTML === "❌") || (input[0].innerHTML === "❌" && input[4].innerHTML === "❌" && input[8].innerHTML === "❌") || (input[2].innerHTML === "❌" && input[4].innerHTML === "❌" && input[6].innerHTML === "❌")) {
        display("player ❌ win")
        input.map((e) => {
            e.disabled = true
        })
    }

    else if ((input[0].innerHTML === "⭕" && input[1].innerHTML === "⭕" && input[2].innerHTML === "⭕") || (input[3].innerHTML === "⭕" && input[4].innerHTML === "⭕" && input[5].innerHTML === "⭕") || (input[6].innerHTML === "⭕" && input[7].innerHTML === "⭕" && input[8].innerHTML === "⭕") || (input[0].innerHTML === "⭕" && input[3].innerHTML === "⭕" && input[6].innerHTML === "⭕") || (input[1].innerHTML === "⭕" && input[4].innerHTML === "⭕" && input[7].innerHTML === "⭕") || (input[2].innerHTML === "⭕" && input[5].innerHTML === "⭕" && input[8].innerHTML === "⭕") || (input[0].innerHTML === "⭕" && input[4].innerHTML === "⭕" && input[8].innerHTML === "⭕") || (input[2].innerHTML === "⭕" && input[4].innerHTML === "⭕" && input[6].innerHTML === "⭕")) {
        display("player ⭕ win")
        input.map((e) => {
            e.disabled = true
        })
    }
}