<template>

  <div id="shipments-database">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <table>
      <thead>
        <th>Name and Surname</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Amount(€)</th>
        <th>Product</th>
        <th>Comment</th>
        <th>Delivered</th>
        <th>Delete</th>
      </thead>
      <tbody>
        <tr v-for="(shipment, index) in shipments" :key="shipment.id">
          <td>
            <span :class="{ donetasks: shipment.delivered == true }">{{
              shipment.nameandsurname
            }}</span>
          </td>
          <td>
            <span :class="{ donetasks: shipment.delivered == true }">{{
              shipment.address
            }}</span>
          </td>
          <td>
            <span :class="{ donetasks: shipment.delivered == true }">{{
              shipment.phone
            }}</span>
          </td>
          <td>
            <span :class="{ donetasks: shipment.delivered == true }">{{
              shipment.amount
            }}</span>
          </td>
          <td>
            <span :class="{ donetasks: shipment.delivered == true }">{{
              shipment.product
            }}</span>
          </td>
          <td>
            <span :class="{ donetasks: shipment.delivered == true }">{{
              shipment.comment
            }}</span>
          </td>
          <td>
            <input type="checkbox" id="checkbox" v-model="shipment.delivered" />
          </td>
          <td>
            <button id="deleteButton" @click="deleteShipment(index)">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="emptyTask" v-if="shipments.length === 0">
      You don't have any shipment. Please add one!
    </p>
  </div>

</template>

<script>

export default {
  name: "ShipmentsDatabase",
  props: [
    "id",
    "nameandsurname",
    "address",
    "phone",
    "amount",
    "product",
    "comment",
    "shipments",
  ],
  methods: {
    deleteShipment(id) {
      this.$delete(this.shipments, id);
    },
  },
};

</script>

<style scoped>

#shipments-database {
  display: flex;
  flex-direction: column;
  margin: 20px;
}
table {
  margin-top: 25px;
  border-collapse: collapse;
}
thead,
tbody {
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid black;
}
td {
  height: 50px;
}
table,
th,
tr,
td {
  border: 1px solid black;
}
th {
  background-color: rgb(255, 204, 0);
}
tbody tr:hover {
  background-color: #e5e4e2;
}
#deleteButton {
  cursor: pointer;
  border: none;
  background: none;
}
.donetasks {
  background-color: green;
  text-decoration: line-through;
}
.emptyTask {
  color: red;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}
@media only screen and (max-width: 600px) {
  #shipments-database {
    margin: 0px;
  }
  table {
    table-layout: fixed;
    width: 100%;
    word-break: break-all;
    font-size: 8px;
  }
}

</style>
