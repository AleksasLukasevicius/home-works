document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = e.target.elements.userName.value.trim();

    alert("Name length is " + name.length)

})