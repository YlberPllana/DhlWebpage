<template>

  <div id="sign-up">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <form id="form">
      <h1>Sign Up</h1>
      <div class="input-control">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username*"
        />
        <div class="error"></div>
      </div>
      <div class="input-control">
        <input type="email" name="email" id="email" placeholder="Email*" />
        <div class="error"></div>
      </div>
      <div class="input-control">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password*"
        />
        <div class="error"></div>
      </div>
      <div class="input-control">
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirm Password*"
        />
        <div class="error"></div>
      </div>
      <button type="submit" id="signup">Sign Up</button>

      <div class="link-control">
        <p>
          Already have an account?
          <router-link to="/signin" id="signin">Sign In</router-link>
        </p>
      </div>
    </form>
    <links-bar></links-bar>
    <footer-section></footer-section>
  </div>

</template>

<script>

import LinksBar from "../Home/LinksBar.vue";
import FooterSection from "../Home/FooterSection.vue";
import router from "@/router";

export default {

  name: "SignUp",
  components: {
    LinksBar,
    FooterSection,
  },
  mounted() {
    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    form.addEventListener("submit", (el) => {
      el.preventDefault();
      validateInputs();
    });

    const setError = (element, message) => {
      const inputControl = element.parentElement;
      const displayError = inputControl.querySelector(".error");

      displayError.innerText = message;
      inputControl.classList.add("error");
      inputControl.classList.remove("success");
    };

    const setSuccess = (element) => {
      const inputControl = element.parentElement;
      const displayError = inputControl.querySelector(".error");

      displayError.innerText = "";
      inputControl.classList.add("success");
      inputControl.classList.remove("error");
    };
    const validateInputs = () => {
      const usernameValue = username.value.trim();
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();
      const confirmPasswordValue = confirmPassword.value.trim();

      if (usernameValue === "") {
        setError(username, "Username is required!");
      } else {
        setSuccess(username);
      }

      if (emailValue === "") {
        setError(email, "Email is required!");
      } else {
        setSuccess(email);
      }

      if (passwordValue === "") {
        setError(password, "Password is required!");
      } else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 character!");
      } else {
        setSuccess(password);
      }

      if (confirmPasswordValue === "") {
        setError(confirmPassword, "Please confirm your password!");
      } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Passwords doesn't match!");
      } else {
        setSuccess(confirmPassword);
        router.push("/signup/new-account-created");
      }
    };
  },
};

</script>

<style scoped>

#form {
  width: 300px;
  margin: 20px auto 0 auto;
  padding: 20px;
  background-color: #e5e4e2;
  border-radius: 4px;
  font-size: 12px;
}
#form h1 {
  text-align: center;
  color: #0f2027;
}
#form button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  color: white;
  background-color: rgb(255, 50, 45);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
#form button:hover {
  background-color: #d32f2f;
}
#form button:active {
  background-color: darkgreen;
}
.input-control {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.input-control input {
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  display: block;
  font-size: 12px;
}
.link-control {
  width: 100%;
  margin-top: 20px;
  text-align: center;
}
.link-control p {
  color: black;
}
#forgotten-password {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
#forgotten-password:hover {
  text-decoration: underline;
}
#signin {
  color: black;
  font-weight: bold;
  text-decoration: none;
}
#signin:hover {
  text-decoration: underline;
}
.input-control.success input {
  border-color: #09c372;
}
.input-control.error input {
  border-color: #ff3860;
}
.input-control .error {
  color: #ff3860;
  font-size: 10px;
  height: 13px;
}

</style>
