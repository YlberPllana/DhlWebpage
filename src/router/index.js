import Vue from "vue";
import VueRouter from "vue-router";
import MainHome from "../components/Home/MainHome.vue"
import AboutUs from "../components/About/AboutUs.vue"
import ShippingDhl from "../components/Shipping/ShippingDhl.vue"
import ContactUs from "../components/ContactUs/ContactUs.vue"
import EmailForm from "../components/ContactUs/EmailForm.vue"
import SignIn from "../components/User/SignIn.vue"
import SignUp from "../components/User/SignUp.vue"
import ForgotPassword from "../components/User/ForgotPassword.vue"
import WelcomeComponent from "../components/User/Submit-form-links/WelcomeComponent.vue"
import RecoverPassword from "../components/User/Submit-form-links/RecoverPassword.vue"
import NewAccountCreated from "../components/User/Submit-form-links/NewAccountCreated.vue"
import MessageReceived from "../components/ContactUs/MessageReceived.vue"
import NewShipment from "../components/Shipments/NewShipment.vue"
import ShipmentsDatabase from "../components/Shipments/ShipmentsDatabase.vue"



Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "home",
    component: MainHome,
  },
  {
    path: "/about",
    name: "about",
    component: AboutUs,
    },
    {
      path: "/shipping",
      name: "shipping",
      component: ShippingDhl,
      },
      {
        path: "/contact",
        name: "contactus",
        component: ContactUs,
        },
      {
        path: "/contact/email",
        name: "contactus/email",
        component: EmailForm,
        },
     
      {
        path: "/signin",
        name: "signin",
        component: SignIn,
        },
      {
        path: "/signup",
        name: "signup",
        component: SignUp,
        },
      {
        path: "/forgot-password",
        name: "forgotpassword",
        component: ForgotPassword,
        },
      {
        path: "/welcome",
        name: "welcome",
        component: WelcomeComponent,
        },
      {
        path: "/forgot-password/recover-password",
        name: "recover-password",
        component: RecoverPassword,
        },
      {
        path: "/signup/new-account-created",
        name: "new-account-created",
        component: NewAccountCreated,
        },
      {
        path: "/contact/email/message-received",
        name: "message-received",
        component: MessageReceived
        },
     
      {
        path: "/new-shipment",
        name: "new-shipment",
        component: NewShipment
        },
      
      {
        path: "/shipments-database",
        name: "shipments-database",
        component: ShipmentsDatabase
        },
  
];

const router = new VueRouter({
  routes,
});

export default router;
