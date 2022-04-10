<template>

  <div id="contact-us">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="contact-platforms">
      <div class="phone">
        <a href="#">
          <img src="@/assets/Contact/phone.png" alt="Contact us by phone"/>
        </a>
      </div>
      <div class="email">
        <router-link to="/contact/email">
          <img src="@/assets/Contact/email.png" alt="Contact us by email" />
        </router-link>
      </div>
      <div class="chat">
        <a href="#">
          <img src="@/assets/Contact/chat.png" alt="Contact us by chat"/>
        </a>
      </div>
    </div>
    <div class="suggestions">
      <h3>
        When contacting us by phone, please keep your DHL account number or DHL
        shipment (waybill) number at hand.
      </h3>
      <p>
        DHL Express account numbers consists of 9 digits and start with 19, 95
        or 96.
      </p>
      <p>DHL Express shipment numbers consists of 10 digits.</p>
      <h4>Our Customer Service team will be happy to help.</h4>
    </div>
    <div class="border"></div>
    <links-bar></links-bar>
    <footer-section></footer-section>
  </div>

</template>

<script>

import LinksBar from "../Home/LinksBar.vue";
import FooterSection from "../Home/FooterSection.vue";

export default {
  name: "ContactUs",
  components: {
    LinksBar,
    FooterSection,
  },
};

</script>

<style scoped>

.contact-platforms {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
}
.contact-platforms div {
  border: 10px solid #ececec;
  margin: 0px 15px 0px 15px;
  width: 20%;
  border-radius: 10px;
}
img {
  width: 100%;
}
.suggestions {
  display: flex;
  flex-direction: column;
  width: 65%;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 20px auto 40px auto;
}
.suggestions h3 {
  margin-bottom: 15px;
}
.suggestions h4 {
  margin-top: 15px;
}
.suggestions p {
  font-style: italic;
}
.border {
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 30px solid rgb(255, 204, 0);
}

/* Media Query */

@media only screen and (max-width: 600px) {
  .contact-platforms {
    display: flex;
    flex-direction: column;
  }
  .contact-platforms div {
    width: 80%;
    margin-bottom: 20px;
  }
  .suggestions {
    text-align: left;
  }
}

</style>
