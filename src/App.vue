<template>
  <v-app id="app">
    <Navigation />
    <v-content>
      <v-container class="fill-height" fluid>
        <h1>Test</h1>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'

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
  background-image: url('./assets/bagels.jpg');
  background-size: cover;
}
</style>