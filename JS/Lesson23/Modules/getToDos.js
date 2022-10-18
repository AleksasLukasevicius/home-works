const getToDos = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const toDos = await response.json();

        return toDos;

    }
    catch (error) {
        console.error(error)
    }
};

getToDos();

export { getToDos };