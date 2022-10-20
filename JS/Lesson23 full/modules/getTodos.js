const getTodos = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await response.json();

        return todos;
    }
    catch (error) {
        console.error(error)
    }
};

export { getTodos };