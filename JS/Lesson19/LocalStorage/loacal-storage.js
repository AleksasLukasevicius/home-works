const userProfileInfo = {
    userFirstName: "",
    userSurName: "",
    userPhoto: "https://saldireklama.lt/upload/medialibrary/416/416ba733792970c865d5efd6c95d2a81.jpg",
    userDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi quos enim dolor, dolore aliquam inventore! Quasi voluptatem, nemo rem, ea nulla necessitatibus odio officia debitis laborum consequuntur totam iste?"
}

localeStorage.setItem("profile", JSON.stringify(userProfileInfo));

const creatUserProfileCard = (userProfileInfo) => {
    const userImage = document.createElement("user-photo");
    userImage.width = "200";
    userImage.src = userProfileInfo.userPhoto;
    userImage.alt = `${userProfileInfo.userFirstName} ${userProfileInfo.userSurName} profile picture`;

    const userFullName = document.createElement("h4");
    userFullName.innerText = `${userFirstName} ${userSurName}`;

    const userDescription = document.createElement("h5");
    userDescription.innerText = userProfileInfo.userDescription;

    const userCard = document.createElement("div");
    userCard.append(userImage, userFullName, userDescription);
    document.body.append(userCard);
}

const profileInfoFromLocalStorage = JSON.parse(localStorage.getItem("profile"));
creatUserProfileCard(profileInfoFromLocalStorage);