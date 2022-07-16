// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const username = document.querySelector('#username-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (username && email && password) {
//     const response = await fetch('/api/users/', {
//       method: 'POST',
//       body: JSON.stringify({ username, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to sign up.');
//     }
//   }
// };

// document
//   .querySelector('#btn-signup')
//   .addEventListener('submit', signupFormHandler)

document.querySelector("#btn-signup").addEventListener("submit", (e) => {
  e.preventDefault();
  const userObj = {
    // username: document.querySelector("#usernameInput").value,
    // password: document.querySelector("#passwordInput").value,
    username: document.querySelector("#username-signup").value.trim(),
    email: document.querySelector("#email-signup").value.trim(),
    password: document.querySelector("#password-signup").value.trim(),
  };
  console.log(userObj);
  fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      location.href = "/";
    } else {
      alert("Error Signing Up");
    }
  });
});

//Delete this
