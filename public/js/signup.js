async function signupFormHandler(event) {
  event.preventDefault();
  // getting data from the form
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  if (username && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // check the response status
    if (response.ok) {
      console.log("success");
      document.location.replace("/user/login");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#form-signup")
  .addEventListener("submit", signupFormHandler);
