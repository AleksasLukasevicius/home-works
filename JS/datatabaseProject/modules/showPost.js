const postElement = document.createElement("h4");

const showPost = (post) => {
    postElement.innerText = JSON.stringify(post);

    document.body.append(postElement)
}

export { showPost }