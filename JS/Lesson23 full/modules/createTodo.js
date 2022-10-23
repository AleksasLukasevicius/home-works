const createTodoForm = document.body.querySelector("form#create-todo-form");

const showAdditionalStatus = (isSuccessfullyAdded) => {
    if (isSuccessfullyAdded) {
        const successefullTextParagraph = document.createElement("h3");

        successefullTextParagraph.textContent = `Congratulation! To-do has been added.`

        createTodoForm.prepend(successefullTextParagraph);

        return;
    }
    alert("Could't add to-do");
    throw Error("Don't added");
};

createTodoForm.addEventListener("submit", (event) => {
    const localStorageTodoName = "todos";
    event.preventDefault()

    const randomNumber = Math.random();
    const isSuccessfullyAdded = Math.round(randomNumber);
    const title = document.querySelector("#todo-title").value.trim();
    const completed = document.querySelector("#todo-completed").checked;
    const fakeBackendTodos = JSON.parse(localStorage.getItem(localStorageTodoName)) || [];

    const newTodo = {
        title,
        completed
    };

    showAdditionalStatus(isSuccessfullyAdded)

    localStorage.setItem(localStorageTodoName, JSON.stringify([newTodo, ...fakeBackendTodos]));
});


