let users = [];

const usersList = async () => {
  const users = await getUsers();

  const usersListElement = document.createElement("ul");

  users.forEach((user) => {
    const userListElement = document.createElement("li");

    userListElement.textContent = `${user.name} ${user.lastName}`;

    usersListElement.append(userListElement);
  });

  document.body.append(usersListElement);
};

const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:5000");
    const users = await response.json();

    return users;
  } catch (error) {
    console.error(error);
  }
};

await usersList();
