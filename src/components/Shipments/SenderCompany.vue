<template>

  <div id="sender">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="title"><h1>Sender</h1></div>
    <div class="sender-infos">
      <h3>
        Name:
        <p>Online Store</p>
      </h3>
      <h3>
        Address:
        <p>St. Skenderbeu nn, <br />10000 Pristina, Kosovo</p>
      </h3>
      <h3>
        Phone:
        <p>0038344000111</p>
      </h3>
    </div>
  </div>

</template>

<script>
export default{
  name: 'SenderCompany'
}
</script>

<style scoped>
#sender{
  display: flex;
  flex-direction: column;
  border: 3px solid #e5e4e2;
  justify-content: center;
  align-items: center;
  margin: 0px 50px 0px 50px;
}
.sender-infos{
  margin: 20px;
}
.sender-infos p{
  font-weight: normal;
  border: 1px solid black;
  margin-bottom: 10px;
  padding: 0px 5px 0px 5px;
}

@media only screen and (max-width: 600px) {

  #sender{
    width: 100%;
    margin: 0px 0px 10px 0px;
  }
}

</style>
