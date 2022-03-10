let textInput = document.querySelector(`form input[type="text"]`);
let timeInput = document.querySelector(`form input[type="date"]`);


function createTheElement() {

    let ele = `
        <div class="task">
            ${textInput.value}
            <li><span>${timeInput.value}</span></li>
            <buttom class="btn">Delete</buttom>
        </div>
    `  
    return ele
}


let submitB = document.querySelector(`form input[type="submit"]`);
let taskesD = document.querySelector(".taskes");

submitB.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(textInput.value);

    if (textInput.value !== "") {
        taskesD.innerHTML += createTheElement();
    }

    textInput.value = "";
    textInput.focus();

    deleteB();

    // theStorage();
});

function deleteB() {
    let btn = document.querySelectorAll(".btn");

    btn.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            e.target.parentElement.remove();
        });
    });
};