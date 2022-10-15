const createUserCard = (user) => {
    const img = document.createElement('img');
    img.src = user.picture.large;
    img.alt = `${user.name.first} profile picture`;

    const userFullName = document.createElement('h2');
    userFullName.innerText = `${user.name.first} ${user.name.last}`;

    const userAge = document.createElement('h4');
    userAge.innerText = `${user.dob.age} years old`;

    const contacts = document.createElement('h4');
    contacts.innerText = `E-mail: ${user.email}`;

    const card = document.createElement('div');
    card.prepend(img, userFullName, userAge, contacts);
    document.body.prepend(card);
};

const fetchRandomUser = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (response.ok) {
            const data = await response.json();
            createUserCard(data.results[0]);
        }
    } catch (error) {
        console.error(error);
    }
};

fetchRandomUser();