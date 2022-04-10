<template>

  <div id="email-us">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="email-form">
      <div class="header">
        <h2>Contact Form</h2>
        <h4>Email</h4>
      </div>
      <div class="contact-field">
        <form id="form" @submit.prevent="sendForm">
          <label for="name">
            <input
              type="text"
              class="name"
              placeholder="Name"
              name="name"
              required
            />
          </label>
          <div id="error"></div>
          <label for="surname">
            <input
              type="text"
              class="surname"
              placeholder="Surname"
              name="surname"
              required
            />
          </label>
          <div id="error"></div>
          <label for="street">
            <input
              type="text"
              class="street"
              placeholder="Street"
              name="street"
              required
            />
          </label>
          <label for="postal-code">
            <input
              type="text"
              class="postal-code"
              placeholder="Postal Code"
              name="postal-code"
              required
            />
          </label>
          <label for="city">
            <input
              type="text"
              class="city"
              placeholder="City"
              name="city"
              required
            />
          </label>
          <label for="email">
            <input
              type="email"
              class="email"
              placeholder="Email"
              name="email"
              required
            />
          </label>
          <label for="phone-number">
            <input
              type="number"
              class="phone-number"
              placeholder="Phone Number"
              name="phone-number"
              required
            />
          </label>
          <label for="subject">
            <input
              type="text"
              class="subject"
              placeholder="Subject"
              name="subject"
              required
            />
          </label>
          <label for="message">
            <textarea
              class="message"
              placeholder="Message..."
              name="message"
              required
            ></textarea>
          </label>
          <p>
            By submitting the form, I agree with the
            <a href="#">Privacy Policy</a>.
          </p>
          <label for="send">
            <button type="submit" class="send">
              Send<i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </label>
        </form>
      </div>
    </div>
    <links-bar></links-bar>
    <footer-section></footer-section>
  </div>

</template>

<script>

import LinksBar from "../Home/LinksBar.vue";
import FooterSection from "../Home/FooterSection.vue";
import router from "@/router";

export default {
  name: "EmailForm",
  components: {
    LinksBar,
    FooterSection,
  },
  methods: {
    sendForm() {
      router.push("/contact/email/message-received");
    },
  },
};

</script>

<style scoped>

.email-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header {
  width: 400px;
  margin: 20px 0px 20px 0px;
  color: #d32f2f;
  text-transform: uppercase;
}
.contact-field {
  background-color: #e5e4e2;
  width: 400px;
  display: flex;
  justify-content: center;
}
.contact-field form {
  display: flex;
  flex-direction: column;
}
.contact-field form label {
  margin-top: 15px;
}
.contact-field form label input {
  width: 300px;
  height: 50px;
  border-radius: 0px;
  border: 0px white;
  cursor: text;
  box-sizing: border-box;
  padding-left: 20px;
}
.contact-field label textarea {
  width: 300px;
  height: 100px;
}
textarea {
  border-radius: 0px;
  border: 0px white;
  box-sizing: border-box;
  padding: 20px 0px 0px 20px;
}
.contact-field button {
  width: 300px;
  height: 50px;
  margin-bottom: 15px;
  background-color: rgb(255, 50, 45);
  color: white;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
}
.contact-field button i {
  padding-left: 5px;
}
.contact-field button:hover {
  background-color: #d32f2f;
}
.contact-field p {
  width: 300px;
  margin-top: 10px;
  font-size: 15px;
}
.contact-field p a {
  color: rgb(255, 50, 45);
}
.contact-field p a:hover {
  color: #d32f2f;
}
/* Media Query */

@media only screen and (max-width: 600px) {
  .email-form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .header {
    width: 250px;
    margin: 20px 0px 20px 0px;
    color: #d32f2f;
    text-transform: uppercase;
  }
  .contact-field {
    display: flex;
    justify-content: center;
    width: 250px;
  }
  .contact-field form label input {
    width: 150px;
    height: 25px;
    border-radius: 0px;
    border: 0px white;
    cursor: text;
    box-sizing: border-box;
    padding-left: 20px;
  }
  .contact-field label textarea {
    width: 150px;
    height: 80px;
  }
  textarea {
    border-radius: 0px;
    border: 0px white;
    box-sizing: border-box;
    padding: 20px 0px 0px 20px;
  }
  .contact-field button {
    width: 150px;
    height: 50px;
    margin-bottom: 15px;
    background-color: rgb(255, 50, 45);
    color: white;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
  }
  .contact-field p {
    width: 150px;
    margin-top: 10px;
    font-size: 15px;
  }
}

</style>
