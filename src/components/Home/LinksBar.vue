<template>

  <div id="links-bar">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="help-center" style="color: rgb(255, 50, 45)">
      <h3>Help Center</h3>
      <a href="#">Customer Service</a>
      <a href="#">Customer Portal Logins</a>
      <a href="#">Digital Partners and Integrations</a>
      <a href="#">Developer Portal</a>
    </div>
    <div class="our-divisions">
      <h3>Our Divisions</h3>
      <a href="#">Post and Paket Deutschland</a>
      <a href="#">DHL Express</a>
      <a href="#">DHL Global Forwarding</a>
      <a href="#">DHL Freight</a>
      <a href="#">DHL Supply Chain</a>
      <a href="#">DHL eCommerce Solutions</a>
    </div>
    <div class="industry-sectors">
      <h3>Industry Sectors</h3>
      <a href="#">Auto-Mobility</a>
      <a href="#">Chemicals</a>
      <a href="#">Consumer</a>
      <a href="#">Energy</a>
      <a href="#">Engineering and Manufacturing</a>
      <a href="#">Life Sciences and Healthcare</a>
      <a href="#">Public Sector</a>
      <a href="#">Retail</a>
      <a href="#">Technology</a>
    </div>
    <div class="company-information">
      <h3>Company Information</h3>
      <a href="#">About DHL</a>
      <a href="#">Delivered</a>
      <a href="#">Careers</a>
      <a href="#">Press Center</a>
      <a href="#">Sustainability</a>
      <a href="#">Insights and Innovation</a>
      <a href="#">Official Logistics Partners</a>
    </div>
  </div>

</template>

<script>

export default {

  name: "LinksBar",
};

</script>

<style scoped>

#links-bar {
  display: flex;
  flex-direction: row;
  margin: 80px 0px 80px 0px;
}
#links-bar div {
  flex: 1;
}
#links-bar div h3 {
  padding-left: 30px;
  margin-bottom: 15px;
}
#links-bar div a {
  display: block;
  text-decoration: none;
  color: grey;
  padding-left: 30px;
  margin-bottom: 10px;
  font-size: 15px;
}
#links-bar div a:hover {
  color: rgb(255, 50, 45);
}

/* Media Query */

@media only screen and (max-width: 600px) {
  #links-bar {
    display: flex;
    flex-direction: column;
    margin: 20px 0px 20px 0px;
  }

  #links-bar div {
    width: 100%;
    margin-top: 20px;
  }
}

</style>
