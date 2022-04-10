<template>

  <div id="logistics-solutions">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="title">
    <h1>Logistics Solutions</h1>
    </div>
<div class="logistics-solutions-services">
<div class="warehouse-solutions">
<img src="@/assets/Home/logistics-solutions-photos/warehouse-solutions.jpg" alt="Warehouse Solutions">
<h3>Warehouse Solutions</h3>
<section>
<a href="#"
          >Warehousing for Small and Medium Businesses 
          <i
            class="fa fa-chevron-right"
            aria-hidden="true"
            style="color: red; padding-left: 10px"
            
          ></i>
        </a>
<a href="#"
          >Warehousing for Enterprises
          <i
            class="fa fa-chevron-right"
            aria-hidden="true"
            style="color: red; padding-left: 10px"
          ></i>
        </a>
</section>
</div>
<div class="transport-distribution">
<img src="@/assets/Home/logistics-solutions-photos/transport-distribution.jpg" alt="Transport Distribution">
<h3>Transport and Distribution</h3>
<section>
<a href="#" 
          >Transportation Management for Small and Medium Businesses
          <i
            class="fa fa-chevron-right"
            aria-hidden="true"
            style="color: red; padding-left: 10px"
          ></i>
        </a>
<a href="#"
          >Transporting Management for Enterprises 
          <i
            class="fa fa-chevron-right"
            aria-hidden="true"
            style="color: red; padding-left: 10px"
          ></i>
        </a>
        </section>
</div>
<div class="contract-logistics">
<img src="@/assets/Home/logistics-solutions-photos/contract-logistics.jpg" alt="Contract Logistics">
<h3>Contract Logistics</h3>
<section>
<a href="#"
          >Find Out More About Contract Logistics 
          <i
            class="fa fa-chevron-right"
            aria-hidden="true"
            style="color: red; padding-left: 10px"
          ></i>
        </a>
        </section>
</div>
    </div>
  </div>

</template>

<script>

export default {

name: 'LogisticsSolutions'
};

</script>

<style scoped>

#logistics-solutions{
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
}
.title h1 {
  text-align: center;
}
.logistics-solutions-services{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
 margin: 40px 30px 0px 30px;
}
 .logistics-solutions-services div{
   flex: 1;
    border: 1px solid lightgrey;
    border-radius: 5px; 
}
.logistics-solutions-services h3{
    padding: 20px 0 0 20px;
}
.logistics-solutions-services a{
  text-align: left;
  text-decoration: none;
  color:rgb(255, 50, 45);
  font-weight: bold;
  font-size: 14px;
  display: block;
  position: relative;
  margin: 20px 0 0 20px;
}
.logistics-solutions-services a:hover {
  color: #d32f2f;
  cursor: pointer;
  text-decoration: underline;
}
.transport-distribution, .contract-logistics{
  margin-left: 20px;
}
section{
    margin-top: 40px;
    margin-bottom: 40px;
}
img{
    width: 100%;
}

/* Media Query */

@media only screen and (max-width: 600px){
 .title h1{
    font-size: 20px;
    text-align: center;
  }
.logistics-solutions-services{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px 0px 20px;
}
.logistics-solutions-services div{
  margin-bottom: 20px;
  width: 100%;
  margin-left: 0px;
}
.logistics-solutions-services h3{
  text-align: left;
  font-size: 15px;
}
.logistics-solutions-services a{
  font-size: 13px;
}
section{
  margin-top: 0px;
  margin-bottom: 40px;
}
}

</style>
