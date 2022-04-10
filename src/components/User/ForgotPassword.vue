<template>

  <div id="forgotten-password">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <form id="form" @submit.prevent="sendForm">
      <h1>Forgot your password?</h1>
      <p>
        Please enter the email address you'd like your password reset
        information sent to:
      </p>
      <div class="input-control">
        <label for="email">Enter email address:</label>
        <input type="email" name="email" id="email" required />
      </div>
      <button type="submit" id="reset-link">Request reset link</button>

      <div class="link-control">
        <router-link to="/signin" id="signin"> Back to Login</router-link>
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

  name: "ForgotPassword",
  components: {
    LinksBar,
    FooterSection,
  },
  methods: {
    sendForm() {
      router.push("/forgot-password/recover-password");
    },
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
#form p {
  margin-top: 20px;
  margin-bottom: 20px;
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
  margin-bottom: 10px;
  display: block;
  font-size: 12px;
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
.link-control {
  width: 100%;
  margin-top: 20px;
  text-align: center;
}
.link-control a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
.link-control a:hover {
  text-decoration: underline;
}

</style>
