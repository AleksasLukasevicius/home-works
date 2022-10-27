const showPost = (post) => {
    const postTitle = document.querySelector("#postTitle");
    const postBody = document.querySelector("#postBody");
    const postContainer = document.body.querySelector("#postCntainer");
    const updatePostButton = document.body.querySelector("#updatePostButton");

    postTitle.innerText = post.title;
    postBody.innerText = post.body.replaceAll("\n", ". ");

    postContainer.style.visibility = "visible";
    updatePostButton.style.visibility = "visible";
}

export { showPost }
