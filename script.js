const main = document.getElementById("counter-grids")

document.getElementById("add-counter").addEventListener("click", addCounter)
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
    number = number - 5
    if(number < 10){
        number = 0
        const parentDiv = block.parentElement
        const grandparentDiv = parentDiv.parentElement
        grandparentDiv.remove()
        
    }
    block.style.height=number + "%";
    block.style.width=number + "%";
}

function startTimer(button){

    const display = button.closest("header").querySelector(".timer")
    var timer = 60 , minutes, seconds
     setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 60;
        }
    }, 1000);
}