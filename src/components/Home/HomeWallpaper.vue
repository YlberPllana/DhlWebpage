<template>

  <div id="home-wallpaper">
   <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="shipping-services">
      <h1>Shipping Services</h1>
    </div>
    <div class="methods">
      <fieldset>
        <legend style="color: black">
          Worldwide Shipping <i class="fa fa-globe" aria-hidden="true"></i>
        </legend>
        <div class="document-parcel">
          <span>
            <i class="fa fa-2x fa-envelope" aria-hidden="true"></i>
          </span>
          <h6>Document & Parcel</h6>
          <a href="#"
            >Domestic and International
            <i
              class="fa fa-chevron-right"
              aria-hidden="true"
              style="color: red; padding-left: 10px"
            ></i>
          </a>
        </div>
        <div class="air-freight">
          <span>
            <i class="fa fa-2x fa-plane" aria-hidden="true"></i>
          </span>
          <h6>Air Freight</h6>
          <a href="#"
            >International
            <i
              class="fa fa-chevron-right"
              aria-hidden="true"
              style="color: red; padding-left: 10px"
            ></i>
          </a>
          <a href="#"
            >Same Day
            <i
              class="fa fa-chevron-right"
              aria-hidden="true"
              style="color: red; padding-left: 10px"
            ></i>
          </a>
        </div>
        <div class="ocean-freight">
          <span>
            <i class="fa fa-2x fa-ship" aria-hidden="true"></i>
          </span>
          <h6>Ocean Freight</h6>
          <a href="#"
            >International
            <i
              class="fa fa-chevron-right"
              aria-hidden="true"
              style="color: red; padding-left: 10px"
            ></i>
          </a>
        </div>
        <div class="road-freight">
          <span>
            <i class="fa fa-2x fa-truck" aria-hidden="true"></i>
          </span>
          <h6>Road Freight</h6>
          <a href="#"
            >Pan European
            <i
              class="fa fa-chevron-right"
              aria-hidden="true"
              style="color: red; padding-left: 10px"
            ></i>
          </a>
          <a href="#"
            >Rest of the World
            <i
              class="fa fa-chevron-right"
              aria-hidden="true"
              style="color: red; padding-left: 10px"
            ></i>
          </a>
        </div>
        <div class="rail-freight">
          <span>
            <i class="fa fa-2x fa-train" aria-hidden="true"></i>
          </span>
          <h6>Rail Freight</h6>
          <a href="#"
            >Between Europe and Asia
            <i
              class="fa fa-chevron-right"
              aria-hidden="true"
              style="color: red; padding-left: 10px"
            ></i>
          </a>
          <a href="#"
            >Intra Europe
            <i
              class="fa fa-chevron-right"
              aria-hidden="true"
              style="color: red; padding-left: 10px"
            ></i>
          </a>
        </div>
      </fieldset>
    </div>
  </div>
  
</template>

<script>

export default {

  name: "HomeWallpaper",
};

</script>

<style scoped>

#home-wallpaper {
  display: flex;
  flex-direction: column;
  margin: 0px 0px 40px 0px;
}
.shipping-services h1 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
}
.methods {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  margin-top: 20px;
}
.methods div {
  text-align: center;
  margin-top: 10px;
  flex: 1;
}
.methods a {
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 14px;
  position: relative;
  display: block;
  margin-bottom: 20px;
}
.methods a:hover {
  color: rgb(255, 50, 45);
  cursor: pointer;
}
.methods h6 {
  font-size: 15px;
  margin-bottom: 20px;
}
.methods span i {
  color: rgb(255, 50, 45);
  margin-bottom: 20px;
  text-align: center;
}
fieldset {
  display: flex;
  flex-direction: row;
  flex: 1;
  text-align: center;
  padding: 30px 0 30px 0;
  border: 1px solid lightgrey;
  margin: 0 100px 0 100px;
}
legend {
  padding-right: 10px;
  padding-left: 10px;
}

/* Media Query */

@media only screen and (max-width: 600px) {
  #home-wallpaper {
    display: flex;
    flex-direction: column;
  }
   .shipping-services h1 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .methods {
    display: flex;
    flex-direction: column;
    margin: 0px 20px 0px 20px;
  }
  .methods div a {
    margin-bottom: 10px;
  }
  .methods div {
    margin: 30px 0px 30px 0px;
  }
  fieldset {
    text-align: center;
    padding-top: 30px;
    border: 1px solid lightgrey;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
}

</style>
