const accessToken = localStorage.getItem("accessToken");

try {
  const response = await fetch("http://localhost:5001/user-settings", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const authorizationData = await response.json();

  if (!response.ok || response.status >= 400) {
    alert(authorizationData?.error || response.statusText);
  }
} catch (error) {
  alert(error.authorizationData);
  console.error(error);
}
