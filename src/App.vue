<template>
  <v-app id="app">
    <!-- Navigation -->
    <Navigation />
    <!-- Navigation -->

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style lang="scss">
main {
  background-image: url("./assets/bagels.jpg");
  background-size: cover;
}
</style>