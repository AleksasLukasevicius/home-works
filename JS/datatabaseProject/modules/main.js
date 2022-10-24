import { getPost } from "./getPost.js";
import { showPost } from "./showPost.js";
import { updatePost } from "./updatePost.js";

const formElement = document.body.querySelector("form#getPostNumberForm");

const updatePostButton = document.querySelector("#updatePostButton")

updatePostButton.addEventListener("click", updatePost)

formElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const postNumber = +document.querySelector("#postNumberInput").value;

    if (typeof postNumber === "number" && !Number.isNaN(postNumber)) {
        const post = await getPost(postNumber);

        showPost(post)
    }
})