const main = document.getElementById("counter-grids")

document.getElementById("add-counter").addEventListener("click", addCounter)
let divCount = 0;

function addCounter(){
    divCount++;
    const counterContainer = document.createElement("div")
    counterContainer.id = `div${divCount}`
    counterContainer.innerHTML = `<div class="counter-container">
                    <div class="container-actions">
                        <img onclick=remove(this) src="https://img.icons8.com/?size=100&id=11705&format=png&color=FFFFFF" class="icon"/>
                    </div>
                    <h3>Counter 1</h3>
                    <h1 class="count">0</h1>
                    <button onClick=incrementCount(this)>Click</button>
                </div>`

    main.appendChild(counterContainer)
}

function remove(img){
    const parentDiv = img.closest('.counter-container');
    const grandparentDiv = parentDiv.parentElement;
    grandparentDiv.remove();

}

function incrementCount(button){
    const counter = button.closest('.counter-container').querySelector('.count')
    let currentCount = parseInt(counter.innerText)
    currentCount++
    counter.innerText=currentCount
}