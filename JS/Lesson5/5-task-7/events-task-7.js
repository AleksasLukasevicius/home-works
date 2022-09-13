// 7 pratymas

document.querySelector("button").addEventListener("click", showAdult );

function showAdult(){
    document.querySelector("h1").innerText = "Alus";
}

document.querySelector("button:nth-child(2)").addEventListener("click", showChild );

function showChild(){
alert("nepilnametis - nieko neturim");
}
