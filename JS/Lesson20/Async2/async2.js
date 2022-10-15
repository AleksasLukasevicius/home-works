const sayHello = new Promise((resolve, reject) => {
    const randomNumber = Math.round(Math.random() * 5);

    setTimeout(() => {
        if (randomNumber === 1) {
            reject();
        }
        else {
            resolve();
        }
    }, 5000)
})

sayHello
    .then(() => alert("Labas"))
    .catch(() => alert("Nenori sveikintis"))


