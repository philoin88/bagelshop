<template>
  <v-container>
    <v-row>
      <v-col sm3 offset-md="1" md="5">
        <h1>Current Bagels in Menu Items</h1>
        <div class="pa-2" id="info">
          <v-simple-table id="menu-table">
            <thead>
              <tr>
                <th class="text-left" style="width: 70%;">Name of item
                  <v-btn color="orange" small text to="/addNew">
                    <v-icon>add</v-icon><span>New</span>
                  </v-btn>
                </th>
                <th class="text-left" style="width: 100px;">Price</th>
                <th class="text-left" style="width: 100px;">Edit</th>
                <th class="text-left" style="width: 100px;">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in menuItems" :key="item.name">
                <td>
                  <span id="td_name">{{ item.name }}</span><br>
                  <span id="menu_item_description">{{ item.description }}</span>
                </td>
                <td>{{ item.price }}</td>
                <td>
                  <v-btn small text>
                    <v-icon color="orange">
                      edit
                    </v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn small text @click="deleteItem(item.id)">
                    <v-icon color="orange">
                      delete
                    </v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </v-col>

      <v-col sm3 offset-md="1" md="4">
        <h1>Preivew</h1>
        <div class="pa-2" id="info">
          Right
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { dbMenuAdd } from '../../firebase'

export default {
  name: "Menu",
  data () {
    return {
      menuItems: [
        
      ],
      basket: []
    };
  },
  computed: {
    subTotal () {
      var subCost = 0

      for (var items in this.basket) {
        var individualItem = this.basket[items]
        subCost += individualItem.quantity * individualItem.price
      }

      return subCost
    },
    total () {
      var deliveryPrice = 10;
      var totalCost = this.subTotal + deliveryPrice
      return totalCost
    }
  },
  created () {
    dbMenuAdd.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        var menuItemData = doc.data()
        this.menuItems.push({
          id: doc.id,
          name: menuItemData.name,
          description: menuItemData.description,
          price: menuItemData.price
        })
      })
    })
  },
  methods: {
    deleteItem (id) {
      dbMenuAdd.doc(id).delete().then(function() {
        console.log('delete success')
      })
      .catch(function(err) {
        console.log('deleteItem - err', err);
      })
    },
    addToBasket (item) {
      if (this.basket.find(itemInArray => item.name === itemInArray.name)) {
        item = this.basket.find(itemInArray => item.name === itemInArray.name)
        this.increaseQnt(item)
      }
      else {
        this.basket.push({
          name: item.name,
          price: item.price,
          quantity: 1
        })
      }
    },
    increaseQnt (item) {
      item.quantity++
    },
    decreaseQnt (item) {
      item.quantity--

      if (item.quantity === 0) {
        this.basket.splice(this.basket.indexOf(item), 1)
      }
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
