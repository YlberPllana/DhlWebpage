<template>

  <div id="message-received">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="message-text">
      <h3>We have received your message and will respond as soon as we can.</h3>
    </div>
    <links-bar></links-bar>
    <footer-section></footer-section>
  </div>

</template>

<script>

import LinksBar from "../Home/LinksBar.vue";
import FooterSection from "../Home/FooterSection.vue";

export default {

  name: "MessageReceived",
  components: {
    LinksBar,
    FooterSection,
  },
};

</script>

<style scoped>

.message-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 50%;
  margin: 20px auto 0px auto;
}

/* Media Query */

@media only screen and (max-width: 600px) {
  .message-text {
    width: 80%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

</style>
