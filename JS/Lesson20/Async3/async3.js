const sayHello = new Promise((resolve, reject) => {
    const randomNumber = Math.round(Math.random() * 5);

    setTimeout(() => {
        if (randomNumber === 1) {
            reject();
        }
        else {
            resolve();
        }
    }, 2000)
})

sayHello
    .then(() => "Labas")
    .then((msg) => alert(msg))
    .catch(() => alert("Nenori sveikintis"))
