<template>

  <div id="welcome">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="container">
      <div class="text">
        <h1>Welcome!</h1>
        <p>Now you can create and manage your own shipments.</p>
      </div>
      <div class="create-shippment">
        <router-link to="/new-shipment"
          ><i class="fa fa-plus" aria-hidden="true"></i>Create new
          Shippment</router-link
        >
      </div>
    </div>
    <links-bar></links-bar>
    <footer-section></footer-section>
  </div>

</template>

<script>

import LinksBar from "../../Home/LinksBar.vue";
import FooterSection from "../../Home/FooterSection.vue";

export default {

  name: "WelcomeComponent",
  components: {
    LinksBar,
    FooterSection,
  },
};

</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text {
  text-align: center;
}
.text h1 {
  text-transform: uppercase;
  color: rgb(212, 5, 17);
  margin-top: 10px;
}
.text p {
  margin-top: 10px;
}
.create-shippment {
  margin-top: 20px;
}
.create-shippment a {
  text-decoration: none;
  color: rgb(212, 5, 17);
}
.create-shippment a:hover {
  text-decoration: underline;
}
.create-shippment i {
  padding-right: 10px;
}

</style>
