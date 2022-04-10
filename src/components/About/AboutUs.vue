<template>

  <div id="about-us">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="container">
      <div class="about-wallpaper">
        <img src="@/assets/About/about-wallpaper.jpg" alt="About Dhl" />
      </div>
      <div class="dhl-history">
        <div class="header">
          <h1>DHL. LOGISTICS FOR THE CONNECTED AGE.</h1>
        </div>
        <div class="paragraph">
          <p>
            When Adrian Dalsey, Larry Hillblom and Robert Lynn founded DHL in
            1969, they didn’t know they would revolutionize the world of
            logistics. Today, DHL is the world’s leading logistics company. Our
            400,000 people in over 220 countries and territories work every day
            to help you cross borders, reach new markets and grow your business.
            Or simply send a letter to your loved ones.
          </p>
        </div>
      </div>
      <div class="statistics">
        <div class="employed">
          <h1>400,000</h1>
          <p>PEOPLE WORKING AT DHL</p>
        </div>
        <div class="countries">
          <h1>OVER 220</h1>
          <p>COUNTRIES AND TERRITORIES SERVED</p>
        </div>
        <div class="delivered-parcels">
          <h1>1,614,000,000</h1>
          <p>PARCELS DELIVERED PER YEAR</p>
        </div>
      </div>
      <div class="life-dhl">
        <h1>Life Inside DHL</h1>
        <img class="dhl-life-photo" src="@/assets/About/dhl-life.jpg" alt="Dhl Life"/>
        <p>
          We are an international team of over 400,000 shipping professionals,
          united by a passion for logistics. And we work in a unique
          environment. DHL is as innovative as a start-up, with the power of an
          international organization.
        </p>
        <button>
          <a href="#">Learn More</a>
        </button>
      </div>
    </div>
    <links-bar></links-bar>
    <footer-section></footer-section>
  </div>

</template>

<script>

import LinksBar from "../Home/LinksBar.vue";
import FooterSection from "../Home/FooterSection.vue";

export default {
  name: "AboutUs",
  components: {
    LinksBar,
    FooterSection,
  },
};

</script>

<style scoped>

.about-wallpaper img {
  width: 100%;
}
.dhl-history {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.header {
  color: #d32f2f;
  font-size: 20px;
  width: 40%;
  margin: 30px 0px 30px 0px;
  line-height: 45px;
}
.paragraph {
  width: 60%;
}
.statistics {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px 0px 30px 0px;
}
.statistics div {
  height: 400px;
  width: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 10px 0px 10px;
}
.employed,
.delivered-parcels {
  background: linear-gradient(to bottom, #fdd835, #fff59d);
}
.countries {
  background: linear-gradient(to bottom, #e5e4e2, #f4f0ec);
}
.statistics div > h1 {
  color: #d32f2f;
  font-weight: bold;
}
.statistics div > p {
  color: black;
  font-weight: bold;
}
.life-dhl {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}
.life-dhl h1 {
  margin-bottom: 20px;
}
.life-dhl p {
  margin-top: 20px;
  width: 60%;
  text-align: center;
  font-size: 14px;
}
.life-dhl button {
  margin-top: 30px;
  width: 250px;
  height: 45px;
  background-color: #d32f2f;
  border: none;
  border-radius: 5px;
}
.life-dhl button:hover {
  background-color: rgb(255, 50, 45);
  cursor: pointer;
}
.life-dhl button a {
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
}

/* Media Query */

@media only screen and (max-width: 600px) {
  .container {
    margin: 0px 20px 0px 20px;
  }
  .dhl-history {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .header {
    width: 100%;
    text-align: center;
  }
  .header h1 {
    font-size: 30px;
    line-height: 35px;
  }
  .paragraph {
    width: 100%;
  }
  .about-wallpaper img {
    width: 100%;
    margin-top: 20px;
  }
  .statistics {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .statistics div {
    height: 200px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .life-dhl {
    display: flex;
    flex-direction: column;
  }
  .life-dhl img {
    width: 100%;
  }
  .life-dhl p {
    width: 100%;
    text-align: left;
    font-size: 14px;
  }
  .life-dhl button {
    width: 100%;
    margin-top: 30px;
  }
}

</style>
