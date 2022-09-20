const userName = prompt("Koks Jūsų vardas?");

function alertName(userName) {
    alert(userName)
}

function consoleName(userName) {
    console.info(userName)
}

function coreFunction(userName, callBack) {
    const capName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
    callBack(capName)
};

coreFunction(userName, alertName)