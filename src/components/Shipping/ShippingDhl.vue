<template>

  <div id="shipping">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="shipping-user">
      <div class="consumer">
        <div class="consumer-photo">
          <img src="@/assets/Shipping/consumer.png" alt="Consumer" />
        </div>
        <section>
          <h2>Consumer</h2>
          <p>
            SEND YOUR PARCEL WORLDWIDE. EASY AND FAST WITHOUT ANY ACCOUNTNUMBER.
          </p>
          <ul>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>Pick your option
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>Worldwide services
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>Track your parcel
            </li>
          </ul>
          <button>
            <a href="#"
              >Start now<i class="fa fa-chevron-right" aria-hidden="true"></i
            ></a>
          </button>
        </section>
      </div>
      <div class="business">
        <div class="business-photo">
          <img src="@/assets/Shipping/business.jpg" alt="Business" />
        </div>
        <section>
          <h2>Business</h2>
          <p>
            FROM SME TO MULTINATIONAL AND FROM WEBSHOP TO FACTORY. BENEFIT NOW.
          </p>
          <ul>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>Preferential
              business rate
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>Exclusive Tools
            </li>
            <li>
              <i class="fa fa-check" aria-hidden="true"></i>Trusted network
            </li>
          </ul>
          <button>
            <a href="#"
              >Business<i class="fa fa-chevron-right" aria-hidden="true"></i
            ></a>
          </button>
        </section>
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
  name: "ShippingDhl",
  components: {
    LinksBar,
    FooterSection,
  },
};

</script>

<style scoped>

.shipping-user {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
}
.shipping-user section {
  padding-left: 20px;
}
.shipping-user section h2 {
  margin-top: 10px;
}
.shipping-user section p {
  margin: 10px 0px 30px 0px;
}
.shipping-user ul {
  list-style-type: none;
}
.shipping-user button {
  margin-top: 30px;
  width: 130px;
  height: 45px;
  background-color: #d32f2f;
  border: none;
}
.shipping-user button:hover {
  background-color: rgb(255, 50, 45);
  cursor: pointer;
}
.shipping-user button a {
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
}
.shipping-user button a i {
  padding-left: 10px;
}
img {
  width: 100%;
  height: 100%;
}
.consumer,
.business {
  width: 30%;
  margin: 0px 30px 0px 30px;
}
.consumer-photo,
.business-photo {
  width: 100%;
  height: 200px;
}
ul li i {
  padding-right: 10px;
}

/* Media Query */

@media only screen and (max-width: 600px) {

  .shipping-user {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
  .consumer,
  .business {
    width: 100%;
    margin: 0px 0px 30px 0px;
  }
}

</style>
