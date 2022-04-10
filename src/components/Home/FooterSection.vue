<template>

  <div id="footer-section">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <div class="links">
      <div class="read-more">
        <h4>Deutsche Post DHL Group</h4>
        <section>
          <a href="#">Fraud Awareness</a>
          <a href="#">Legal Notice</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Dispute Resolution</a>
        </section>
      </div>
      <div class="follow-us">
        <h5>Follow Us</h5>
        <section>
          <a href="https://www.youtube.com/"
            ><i class="fa fa-2x fa-youtube-play" aria-hidden="true"></i
          ></a>
          <a href="https://www.facebook.com/"
            ><i class="fa fa-2x fa-facebook" aria-hidden="true"></i
          ></a>
          <a href="https://www.linkedin.com/"
            ><i class="fa fa-2x fa-linkedin-square" aria-hidden="true"></i
          ></a>
          <a href="https://www.instagram.com/"
            ><i class="fa fa-2x fa-instagram" aria-hidden="true"></i
          ></a>
        </section>
      </div>
    </div>
    <div class="copyright">
      <p>2022 © - all rights reserved</p>
    </div>
  </div>

</template>

<script>

export default{
  name: 'FooterSection'
}

</script>

<style scoped>

#footer-section {
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
}
.links {
  display: flex;
  flex-direction: row;
  margin: 40px 0px 40px 0px;
}
.links a {
  text-decoration: none;
  color: grey;
  margin-left: 40px;
  font-size: 13px;
}
.links a:hover {
  color: rgb(255, 50, 45);
}
section {
  margin-top: 20px;
}
.read-more {
  flex: 2;
}
.read-more h4 {
  margin-left: 40px;
}
.follow-us {
  flex: 1;
}
.follow-us h5 {
  margin-left: 40px;
}
.copyright {
  display: flex;
  justify-content: center;
  color: grey;
  font-size: 13px;
  margin: 20px 0px 40px 0px;
}

/* Media Query */

@media only screen and (max-width: 600px) {
  .links {
    display: flex;
    flex-direction: column;
  }
  .read-more {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .read-more a {
    display: block;
    margin-bottom: 15px;
    font-size: 15px;
  }
  .follow-us {
    font-size: 20px;
    margin-top: 10px;
  }
  .copyright {
    margin-top: 0px;
  }
}

</style>
