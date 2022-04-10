<template>

  <div id="main-home">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <img src="@/assets/Home/main-home-photos/dhl.jpg" alt="Dhl" />
    <home-wallpaper></home-wallpaper>
    <logistics-solutions></logistics-solutions>
    <links-bar></links-bar>
    <footer-section></footer-section>
  </div>

</template>

<script>

import HomeWallpaper from "../Home/HomeWallpaper.vue";
import LogisticsSolutions from "../Home/LogisticsSolutions.vue";
import LinksBar from "../Home/LinksBar.vue";
import FooterSection from "../Home/FooterSection.vue";

export default {

  name: "MainHome",
  components: {
    HomeWallpaper,
    LogisticsSolutions,
    LinksBar,
    FooterSection,
  },
};

</script>

<style scoped>

img {
  width: 100%;
}

</style>
