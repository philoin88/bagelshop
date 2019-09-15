<template>
  <v-container grid-list-xs>
    <v-layout align-center class="info_box">
      <v-flex xs12 sm4 offset-sm1>
        <h1>
          About<br>Bagel Shop
        </h1>
      </v-flex>
    </v-layout>

    <v-layout align-center class="info_box" row wrap>
      <v-flex xs12 sm2 offset-sm1>
        <h1>
          Our Bagels
        </h1>
        <div>
          <p>Buy our magnificient bagels so so super tasty & yummy</p>
        </div>
      </v-flex>

      <v-flex xs12 sm2>
        <h1>
          Our Bagels
        </h1>
        <div>
          <p>Buy our magnificient bagels so so super tasty & yummy</p>
        </div>
      </v-flex>

      <v-flex xs12 sm2>
        <h1>
          Our Bagels
        </h1>
        <div>
          <p>Buy our magnificient bagels so so super tasty & yummy</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
.info_box:first-child .flex h1 {
  font-size: 150%;
  padding: 50px;
}

</style>