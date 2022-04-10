<template>

  <div id="app">
    <meta
      name="viewport"
      content="height=device-height, 
      width=device-width, initial-scale=1.0, 
      minimum-scale=1.0, maximum-scale=1.0, 
      user-scalable=no"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
      rel="stylesheet"
    />

    <nav>
      <div class="logo-div">
        <router-link to="/"
          ><img
            class="logo"
            src="@/assets/Home/nav-bar-photos/dhl-logo.png"
            alt="Logo"
        /></router-link>
      </div>

      <div class="menu-div">
        <a href="javascript:void(0)" class="close-menu" @click="closeMenu"
            >&times;</a
          >
        <ul class="menu-ul">
          <li @click="closeMenu"><router-link to="/">Home</router-link></li>
          <li @click="closeMenu">
            <router-link to="/about">About</router-link>
          </li>
          <li @click="closeMenu">
            <router-link to="/shipping">Shipping</router-link>
          </li>
          <li @click="closeMenu">
            <router-link to="/contact">Contact</router-link>
          </li>
          <li @click="closeMenu">
            <router-link class="signin" to="/signin"
              >User<span><i class="fa fa-user" aria-hidden="true"></i></span
            ></router-link>
          </li>
        </ul>
      </div>
      <span class="open-menu" @click="openMenu">&#9776;</span>
    </nav>
    <router-view />
  </div>

</template>

<script>

export default {

  name: "App",
  methods: {
    openMenu() {
      const open = document.querySelector(".menu-div");
      const openOption = (open.style.width = "50%");
      openOption;
    },

    closeMenu() {
      const close = document.querySelector(".menu-div");
      const closeOption = (close.style.width = "0");
      closeOption;
    },
  },
};

</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
nav {
  background-color: rgb(255, 204, 0);
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
}
.logo-div {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.menu-div {
  display: flex;
  flex: 3;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.menu-ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-around;
  align-items: center;
  flex: 1;
}
.menu-ul a {
  color: black;
  display: flex;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
}
.menu-ul a:hover {
  color: rgb(212, 5, 17);
}
.menu-ul a.router-link-exact-active {
  color: grey;
}
.logo {
  height: 50px;
}
.signin i {
  padding-left: 5px;
}
.close-menu, .open-menu{
  display: none;
}


/* Media Query */

@media only screen and (max-width: 600px) {
  nav {
    position: sticky;
    top: 0;
    z-index: 11;
  }
  .menu-div {
    height: 100%;
    width: 0%;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #eeeeee;
    overflow-x: hidden;
    transition: 1s;
  }
  .open-menu {
    display: block;
    font-size: 30px;
    cursor: "pointer";
    margin-right: 20px;
  }
  .menu-ul {
    display: flex;
    flex-direction: column;
  }
  .menu-ul li a {
    text-decoration: none;
    font-size: 25px;
    color: black;
    transition: 0.3s;
    margin: 30px 0px 30px 0px;
  }
  .menu-ul a.router-link-exact-active {
  color: rgb(212, 5, 17);
}
  .close-menu {
    position: absolute;
    display: block;
    top: 0;
    right: 25px;
    font-size: 36px;
    text-decoration: none;
    color: #818181;
  }
}

</style>
