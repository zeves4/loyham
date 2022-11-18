const input = document.getElementById("input");
const btn = document.getElementById("btn");
const font = document.getElementById("font");
const color = document.getElementById("color");
let currentId = null;
const todos = [];
btn.addEventListener("click", add);

function add() {
    let value = input.value, fontValue = font.value; colorValue = color.value;
    const tem = document.getElementById("input").value;
    const todo = {
        id: todos.length + 1,
        font: fontValue,
        color: colorValue,
        value: value,
    };

    if (currentId) {
        todos[currentId - 1] = {
            ...todo,
            id: currentId
        }
        currentId = null;
        btn.innerHTML = `<i class="fa-light fa-plus"></i>`;
    } else {
        todos.push(todo);``
    }
    if (tem != '') {
        draw();
        input.value = "";
    }
    else {
        container.innerHTML = "xato";
    }
 
}
function draw() {
    const container = document.getElementById("container");
    let boxes = "";
    for (let i = 0; i < todos.length; i++) {
        boxes += `<div class="box" style="color: ${todos[i].color}; font-family: ${todos[i].font}">
                <h1>${todos[i].value}</h1>
                <div>
                    <button class="action" onclick="edit(${todos[i].id})"><i class="fas fa-pen"></i></button>
                    <button class="action" onclick="deleteTodo(${i})"><i class="fas fa-trash"></i></button>
                </div>
            </div>`
    }
    container.innerHTML = boxes;
}
function edit(id) {
    const finded = todos.find((item) => item.id === id);
    currentId = id;
    input.value = finded.value;
    font.value = finded.font;
    color.value = finded.color;
    console.log(todos);
    btn.innerHTML = `<i class="fas fa-pen"></i>`;
}
function deleteTodo(id) {
    todos.splice(id, 1);
    draw();
}