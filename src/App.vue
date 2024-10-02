<template>
  <Header />
  <router-view />
  <Footer />
</template>
<script>
import Header from "./components/UI/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
button {
  font-family: "Poppins", sans-serif;
}
input {
  font-family: "Poppins", sans-serif;
  ::placeholder {
    font-family: "Poppins", sans-serif;
  }
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: calc(100% - 100px);
  margin: 0 auto;
}
@media (max-width: 800px) {
  .container {
    width: calc(100% - 50px);
  }
}
</style>
