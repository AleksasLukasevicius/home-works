const userProfileInfo = {
    userFirstName: 'Aleksas',
    userLastName: 'Lukaševičius',
    userPicture: 'https://saldireklama.lt/upload/medialibrary/416/416ba733792970c865d5efd6c95d2a81.jpg',
    userDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi quos enim dolor, dolore aliquam inventore! Quasi voluptatem, nemo rem, ea nulla necessitatibus odio officia debitis laborum consequuntur totam iste?',
}
localStorage.setItem('profile', JSON.stringify(userProfileInfo));

const renderUserProfileCard = (profile) => {
    const userProfilePicture = document.createElement('img');
    userProfilePicture.width = '200';
    userProfilePicture.src = profile.userPicture;
    userProfilePicture.alt = `${profile.userFirstName} ${userProfileInfo.userLastName} profile picture`;

    const userFullName = document.createElement('h4');
    userFullName.innerText = `${profile.userFirstName} ${profile.userLastName}`;

    const userDescription = document.createElement('h5');
    userDescription.innerText = profile.userDescription;

    const userCard = document.createElement('div');
    userCard.append(userProfilePicture, userFullName, userDescription);
    document.body.append(userCard);
};

const profileInfoFromLocalStorage = JSON.parse(localStorage.getItem('profile'));
renderUserProfileCard(profileInfoFromLocalStorage);