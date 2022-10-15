const sayHello = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 5000);
})

sayHello.then(() => alert("Yes, veikia"));

console.info("5 ses laukiam kol issoks alert");

