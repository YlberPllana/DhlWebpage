<template>

  <div id="new-shipment">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="shipment-container">
      <sender-company></sender-company>
      <div class="receiver-infos">
        <h1>Receiver</h1>
        <form action="#" id="form" @submit.prevent="addNewShipment">
          <label for="name-surname"
            >Name and Surname
            <input
              type="text"
              name="name-surname"
              id="name-surname"
              v-model="nameandsurname"
              required
            />
          </label>
          <label for="address"
            >Address
            <input
              type="text"
              name="address"
              id="address"
              v-model="address"
              required
            />
          </label>
          <label for="phone"
            >Phone
            <input
              type="text"
              name="phone"
              id="phone"
              v-model="phone"
              required
            />
          </label>
          <label for="amount"
            >Amount in EURO(€)
            <input
              type="number"
              name="amount"
              id="amount"
              v-model="amount"
              required
            />
          </label>
          <label for="product"
            >Product
            <input
              type="text"
              name="product"
              id="product"
              v-model="product"
              required
            />
          </label>
          <label for="comment"
            >Comment
            <textarea id="comment" v-model="comment"></textarea>
          </label>
          <label for="add-shipment">
            <button
              name="add-shipment"
              id="add-shipment"
              @submit.prevent="addNewShipment"
              type="submit"
            >
              <i class="fa fa-paper-plane" aria-hidden="true"></i>Add Shipment
            </button>
          </label>
        </form>
      </div>
    </div>
    <div class="toggle-class">
      <button class="toggle-button" @click="toggleVisibility">
        {{ test }}
      </button>
    </div>
    <shipments-database
      v-if="shipmentsvisibility"
      :id="id"
      :nameandsurname="nameandsurname"
      :address="address"
      :phone="phone"
      :amount="amount"
      :product="product"
      :comment="comment"
      :shipments="shipments"
    ></shipments-database>

    <links-bar></links-bar>
    <footer-section></footer-section>
  </div>

</template>

<script>

import LinksBar from "../Home/LinksBar.vue";
import FooterSection from "../Home/FooterSection.vue";
import ShipmentsDatabase from "../Shipments/ShipmentsDatabase.vue";
import SenderCompany from "../Shipments/SenderCompany.vue";

export default {

  name: "NewShipment",
  components: {
    LinksBar,
    FooterSection,
    ShipmentsDatabase,
    SenderCompany,
  },

  data() {
    return {
      id: 0,
      nameandsurname: "",
      address: "",
      phone: "",
      amount: "",
      product: "",
      comment: "",
      shipmentsvisibility: false,

      shipments: [
        {
          id: 1,
          nameandsurname: "Ylber Pllana",
          address: "St.Rizah Pllana 23, Vushtrri 42000, Kosovo",
          phone: "+38349407216",
          amount: 250,
          product: "1 piece of Apple Watch",
          comment: "N/A",
          delivered: true,
        },
      ],
    };
  },
  computed: {
    test() {
      return this.shipmentsvisibility ? "Hide Shipments" : "Show Shipments";
    },
  },
  methods: {
    toggleVisibility() {
      this.shipmentsvisibility = !this.shipmentsvisibility;
    },
    addNewShipment() {
      if (
        this.nameandsurname.trim() == 0 ||
        this.address.trim() == 0 ||
        this.phone.trim() == 0 ||
        this.amount.trim() == 0 ||
        this.product.trim() == 0 ||
        this.comment.trim() == 0
      ) {
        return;
      }

      const newShipment = {
        id: this.id++,
        nameandsurname: this.nameandsurname,
        address: this.address,
        phone: this.phone,
        amount: this.amount,
        product: this.product,
        comment: this.comment,
      };
      this.shipments.push(newShipment);
      (this.nameandsurname = ""),
        (this.address = ""),
        (this.phone = ""),
        (this.amount = ""),
        (this.product = ""),
        (this.comment = ""),
        this.id++;
      localStorage.setItem("shipments", JSON.stringify(this.shipments));
    },
  },
  mounted() {
    const ls_shipments = localStorage.getItem("shipments");
    if (ls_shipments !== null) {
      this.shipments = JSON.parse(ls_shipments);
    }
  },
};

</script>

<style scoped>

.shipment-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
}
.receiver-infos {
  border: 3px solid #e5e4e2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 50px 0px 50px;
}
#form label {
  display: flex;
  flex-direction: column;
  margin: 10px;
}
.receiver-infos form label input {
  width: 300px;
  height: 30px;
  cursor: text;
  box-sizing: border-box;
  padding-left: 10px;
}
.receiver-infos form label select {
  box-sizing: border-box;
  padding-left: 10px;
  width: 300px;
  height: 30px;
}
textarea {
  height: 60px;
  padding: 10px 0px 0px 10px;
}
#form button {
  width: 300px;
  height: 50px;
  margin-bottom: 15px;
  background-color: #009900;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
}
#form button i {
  padding-right: 10px;
}

#form button:hover {
  background-color: #3cb371;
}
.toggle-class {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.toggle-button {
  width: 250px;
  height: 45px;
  background-color: rgb(255, 50, 45);
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
.toggle-button:hover {
  background-color: #d32f2f;
}

@media only screen and (max-width: 600px) {

  .shipment-container {
    display: flex;
    flex-direction: column;
  }
  .receiver-infos {
    width: 100%;
    margin: 20px 0px 0px 0px;
  }
  #form {
    margin-top: 20px;
  }
  #form input {
    height: 30px;
    margin: 20px 0px 20px 0px;
  }
  #form textarea {
    margin: 20px 0px 20px 0px;
    height: 100px;
  }
}

</style>
