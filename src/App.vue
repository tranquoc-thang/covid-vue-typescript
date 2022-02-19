<template>
  <header-template />
  <router-view />
  <footer-template />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Organisms/Header.vue";
import Footer from "./components/Organisms/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderTemplate: Header,
    FooterTemplate: Footer,
  },
};

// @Options({
//   components: {
//     HeaderTemplate: Header,
//     FooterTemplate: Footer,
//   },
// })
// export default class App extends Vue {}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

// <div id="nav">
//     <router-link to="/">Home</router-link> |
//     <router-link to="/about">About</router-link>
//   </div>
//   <router-view />

// <script lang="ts">
// import Header from "./components/Organisms/Header.vue";
// export default {
//   name: "App",
//   components: {
//     HeaderTemplate: Header,
//   },
// };
// </script>
</style>
