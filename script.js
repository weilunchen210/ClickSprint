const main = document.getElementById("counter-grids")

document.getElementById("add-counter").addEventListener("click", addCounter)
const score = document.getElementById("score")
let totalScore = parseInt(score.innerText)
let divCount = 0;

function addCounter(){
    divCount++;
    const counterContainer = document.createElement("div")
    counterContainer.id = `div${divCount}`
    // counterContainer.innerHTML = `<div class="counter-container-grid"> 
    //     <div class="counter-container">
    //                 <div class="container-actions">
    //                     <img onclick=remove(this) src="https://img.icons8.com/?size=100&id=11705&format=png&color=FFFFFF" class="icon"/>
    //                 </div>
    //                 <h3>Counter 1</h3>
    //                 <h1 class="count">0</h1>
    //                 <button onClick=incrementCount(this)>Click</button>
    //             </div>
    // </div>`

    counterContainer.innerHTML = `
        <div class="counter-container-grid">
            <div class ="counter-container"  onClick="handleClick(this)">

            </div>
        </div>
    `
    const rand = Math.floor(Math.random(100)*100) + 5;
    const height= rand + "%"
    const width = rand +"%"
    //counterContainer.querySelector('.count').innerText = rand
    const parentDiv = counterContainer.querySelector('.counter-container')
    parentDiv.style.height = height
    parentDiv.style.width = width


    main.appendChild(counterContainer)
}

function remove(img){
    const parentDiv = img.closest('.counter-container');
    const grandparentDiv = parentDiv.parentElement;
    grandparentDiv.remove();

}

function handleClick(block){
    let number = parseInt(block.style.height);
    console.log(number)
    const rand = Math.floor(Math.random() * 35) + 10;
    number = number - rand
    if(number < 10){
        number = 0
        const parentDiv = block.parentElement
        const grandparentDiv = parentDiv.parentElement
        grandparentDiv.remove()
        totalScore++
        score.innerText = totalScore
    }
    block.style.height=number + "%";
    block.style.width=number + "%";
}

function startTimer(button){
    const header = button.closest("header")
    const loading = document.createElement("div")
    totalScore = 0
    score.innerText = totalScore
    loading.innerHTML = `
        <div class="loader"></div>
    `
    header.replaceChild(loading,button)

    const display = header.querySelector(".timer")
    let firstTick = true;

    var timer = 60 , minutes, seconds
    const intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if(firstTick){
            firstTick = false;
            loading.remove();
        }

        if (--timer < 0) {
            header.appendChild(button);
            display.textContent = "01:00"
            clearInterval(intervalId)
        }
    }, 1000);
}

const wrapper = document.getElementById("wrapper")
const Modal = document.getElementById("modal")


function openModal(){
    Modal.style.display = "flex";
}

function closeModal(){
    Modal.style.display= "none";
}