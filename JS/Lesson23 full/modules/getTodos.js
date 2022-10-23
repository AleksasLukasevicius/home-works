const getTodos = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await response.json();

        const fakeBackendTodos = JSON.parse(localStorage.getItem("todos")) || [];


        return [...fakeBackendTodos, ...todos];
    }
    catch (error) {
        console.error(error)
    }
};

export { getTodos };