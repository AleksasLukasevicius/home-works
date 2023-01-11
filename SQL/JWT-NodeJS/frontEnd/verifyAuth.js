const token = localStorage.getItem("token");

console.info(token);

if (token) {
  alert("Welcome!");
}
