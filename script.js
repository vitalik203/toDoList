const input = document.querySelector(".input__style");
const button = document.querySelector(".button__style");
const toDoList = document.querySelector(".todo__list")

button.addEventListener("click", () => {
    const li = document.createElement("li");
    if(input.value === ""){
        alert("Please write task!");
    }else{
        const  deleteBtn = document.createElement("X");
        deleteBtn.innerText = "X";
        deleteBtn.className = "toDo_DeleteBtn";
        li.innerText = input.value;
        toDoList.appendChild(li);  
        li.appendChild(deleteBtn);
        deleteBtn.innerText = "X";
        li.className = "toDo_ListItem";
        input.value = "";
        deleteBtn.addEventListener("click", () => {
            toDoList.removeChild(li);
        });
    }
    // li.forEach(element => {
    //     element.addEventListener("click", () => {
    //         element.classList.toggle("crossed");
    //     });
    // });
    li.addEventListener("click", () => {
        li.classList.toggle("crossed");
    });
});

