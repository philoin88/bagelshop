<template>
  <v-container>
    <v-row>
      <v-col sm3 offset-md="1" md="5">
        <h1>Add New Item</h1>
        <div class="pa-2" id="info">
          <v-text-field
            label="Name of Bagel"
            required
            v-model="name"
          >
          </v-text-field>
          <v-text-field
            label="Description"
            required
            v-model="description"
          >
          </v-text-field>
          <v-text-field
            label="Price of Bagel"
            required
            v-model="price"
          >
          </v-text-field>

          <v-btn
            color="orange"
            text
            @click="addNewItem()"
          >
            Add Item
          </v-btn>
          <v-btn
            color="incomplete"
            text
          >
            cancel
          </v-btn>
        </div>
      </v-col>

      <v-col sm3 offset-md="1" md="4">
        <h1>Preivew</h1>
        <div class="pa-2" id="info">
          <v-simple-table id="menu-table">
            <thead>
              <tr>
                <th class="text-left" style="width: 70%;">Name</th>
                <th class="text-left" style="width: 100px;">Price DKK</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <span id="td_name">{{ name }}</span>
                  <span id="menu_item_description"> {{ description }}</span>
                </td>
                <td id="preview_menuitem_price">{{ price }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { dbMenuAdd } from '../../../firebase'

export default {
  name: "AddNewItems",
  data () {
    return {
      name: '',
      description: '',
      price: ''
    }
  },
  methods: {
    addNewItem () {
      dbMenuAdd.add({
        name: this.name,
        description: this.description,
        price: this.price
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.col h1 {
  @include infobox_mixin(5px, map-get($colorz, white), 10px, 5px, map-get($colorz, white));
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: right;
}
.col:last-child h1 {
  text-align: left;
}
#info {
  background-color: white;
}
tr th {
  font-weight: 300;
}
#td_name {
  font-weight: bold;
}
tr td {
  padding: 10px 10px 10px 16px;
}
#menu_item_description {
  font-style: italic;
  font-weight: 300;
  color: map-get($colorz, darkgrey);
  font-size: 13px;
}
#basket_checkout {
  font-size: 13px;
}
#basket_checkout p:first-child {
  line-height: 6px;
}
</style>
