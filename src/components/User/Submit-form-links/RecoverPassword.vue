<template>

  <div id="recover-password">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="recovery-text">
      <h3>We have send an email to you with the recovery link!</h3>
    </div>
    <links-bar></links-bar>
    <footer-section></footer-section>
  </div>

</template>

<script>

import LinksBar from "../../Home/LinksBar.vue";
import FooterSection from "../../Home/FooterSection.vue";

export default {

  name: "RecoveryPassword",
  components: {
    LinksBar,
    FooterSection,
  },
};

</script>

<style scoped>

.recovery-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: blue;
  background-color: lightgray;
  border: 1px solid black;
  width: 50%;
  margin: 20px auto 0px auto;
}

/* Media Query */

@media only screen and (max-width: 600px){
  .recovery-text{
    width: 80%;
    margin-top: 30px;
    text-align: center;
  }
}

</style>
