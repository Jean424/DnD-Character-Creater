async function loginFormHandler(event){
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
<<<<<<< HEAD
      document.location.replace('/character-creator');
=======
      document.location.replace("/profile");
>>>>>>> Ivy2
    } else {
      alert(response.statusText);
    }
  }
};

document
<<<<<<< HEAD
  .querySelector('#form-login')
  .addEventListener('submit', loginFormHandler);
=======
  .querySelector("#btn-login")
  .addEventListener("submit", loginFormHandler);
>>>>>>> Ivy2

//Delete this
