document.body.style.background = "lightblue";

//Main block
const main = document.createElement("main");
main.textContent = "";
main.style.background = "white";
main.style.width = "50%";
main.style.margin = "5rem auto";
main.style.padding = "1rem";
main.style.borderRadius = "1rem"
main.style.textAlign = "center"
document.body.prepend(main);

//Image
const img = document.createElement("img");
img.src = "https://saldireklama.lt/upload/medialibrary/416/416ba733792970c865d5efd6c95d2a81.jpg";
img.style.width = "10rem";
img.style.height = "10rem";
img.style.objectFit = "cover";
img.style.borderRadius = "50%";
img.style.padding = "0.5rem";
img.style.border = "1px solid #eee";
img.style.marginTop = "-5rem"
main.prepend(img);

//Text
const userName = document.createElement("h1");
userName.textContent = "Alex";
main.append(userName);
const paragrapText = document.createElement("p");
paragrapText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda consequatur a maxime facilis adipisci earum delectus nesciunt dolores voluptate, ad in enim fugiat harum quasi asperiores! Porro, reprehenderit facere!";
main.append(paragrapText);
