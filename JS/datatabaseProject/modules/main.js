import { getPost } from "./getPost.js";
import { showPost } from "./showPost.js";

const formElement = document.body.querySelector("form#getPostNumberForm");

formElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const postNumber = +document.querySelector("#postNumberInput").value;

    if (typeof postNumber === "number" && !Number.isNaN(postNumber)) {
        const post = await getPost(postNumber);

        showPost(post)
    }
})

