<template>

  <div id="new-account-created">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="new-account-created-text">
      <h3>
        <i class="fa fa-check" aria-hidden="true"></i>Congratulations! You have
        created your new account.
      </h3>
    </div>
    <div class="return">
      <router-link to="/signin">Click here to Sign In</router-link>
    </div>
    <links-bar></links-bar>
    <footer-section></footer-section>
  </div>

</template>

<script>

import LinksBar from "../../Home/LinksBar.vue";
import FooterSection from "../../Home/FooterSection.vue";

export default {

  name: "NewAccountCreated",
  components: {
    LinksBar,
    FooterSection,
  },
};

</script>

<style scoped>

.new-account-created-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: green;
  font-size: 20px;
}
.new-account-created-text i {
  padding-right: 15px;
}
.return {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.return a {
  color: black;
}
.return a:hover {
  color: red;
}

/* Media Query */

@media only screen and (max-width: 600px){
 .new-account-created-text {
   width: 100%;
   text-align: center;
   margin: 30px 0px 20px 0px;
 } 
}
</style>
