<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4 mt-11 top-menu">
        <!-- <ul>
          <li>Offer</li>
          <li>Recomended</li>
        </ul>-->
        <Hooper :itemsToShow="6.2" class="mhopper">
          <Slide>
            <v-btn @click="$vuetify.goTo('#dinner')" class="cat-btn">Recomended</v-btn>
          </Slide>
          <Slide>
            <v-btn @click="$vuetify.goTo('#Breakfast',options)" class="cat-btn">Food</v-btn>
          </Slide>
          <Slide>
            <v-btn @click="$vuetify.goTo('#dinner')" class="cat-btn">Drink</v-btn>
          </Slide>
          <Slide>
            <v-btn @click="$vuetify.goTo('#dinner')" class="cat-btn">Desert</v-btn>
          </Slide>
          <Slide>
            <v-btn @click="$vuetify.goTo('#dinner')" class="cat-btn">Breakfast</v-btn>
          </Slide>
          <Slide>
            <v-btn @click="$vuetify.goTo('#dinner')" class="cat-btn">Snacks</v-btn>
          </Slide>
          <Slide>
            <v-btn @click="$vuetify.goTo('#dinner')" class="cat-btn">Others</v-btn>
          </Slide>
        </Hooper>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <!-- <v-col v-for="i in 6" :key="i" cols="6" elevation="2"> -->
          <Hooper :itemsToShow="2">
            <Slide
              v-for="i in 6"
              :key="i"
              class="px-3 rounded-lg"
              style=" padding-left: 0px !important;"
            >
              <span class="item-price">150TK</span>
              <v-img
                src="https://picsum.photos/180/110?random"
                class="rounded-lg"
                @click="dialog = true"
              ></v-img>
              <span class="float-left item-name">Special Burger</span>
              <span class="float-right item-make-time">
                <v-btn depressed small style="background-color: #fff !importnat">
                  <v-icon color="primary" style="font-size: 18px">alarm</v-icon>5 min
                </v-btn>
              </span>
            </Slide>
          </Hooper>
          <!-- </v-col> -->
        </v-row>

        <Promotion></Promotion>

        <v-row class="mb-2">
          <h4
            style="border-top: 1px solid rgb(247 247 247);width: 100%;font-weight: 400;font-size: 15px;"
            class="text-left mx-4 py-1"
            color="primary"
          >Lunch</h4>
          <Hooper :itemsToShow="2">
            <Slide
              v-for="i in 6"
              :key="i"
              class="px-3 rounded-lg"
              style=" padding-left: 0px !important;"
            >
              <span class="item-price">150TK</span>
              <v-img src="https://picsum.photos/180/110?random" class="rounded-lg"></v-img>
              <span class="float-left item-name">Special Burger</span>
              <span class="float-right item-make-time">
                <v-btn depressed small style="background-color: #fff !importnat">
                  <v-icon color="primary" style="font-size: 18px">alarm</v-icon>5 min
                </v-btn>
              </span>
            </Slide>
          </Hooper>
          <!-- </v-col> -->
        </v-row>
        <v-row class="mb-2" id="Breakfast">
          <h4
            style="border-top: 1px solid rgb(247 247 247);width: 100%;font-weight: 400;font-size: 15px;"
            class="text-left mx-4 py-1"
            color="primary"
          >Breakfast</h4>
          <Hooper :itemsToShow="2">
            <Slide
              v-for="i in 6"
              :key="i"
              class="px-3 rounded-lg"
              style=" padding-left: 0px !important;"
            >
              <span class="item-price">150TK</span>
              <v-img src="https://picsum.photos/180/110?random" class="rounded-lg"></v-img>
              <span class="float-left item-name">Special Burger</span>
              <span class="float-right item-make-time">
                <v-btn depressed small style="background-color: #fff !importnat">
                  <v-icon color="primary" style="font-size: 18px">alarm</v-icon>5 min
                </v-btn>
              </span>
            </Slide>
          </Hooper>
          <!-- </v-col> -->
        </v-row>
        <v-row class="mb-6" id="dinner">
          <h4
            style="border-top: 1px solid rgb(247 247 247);width: 100%;font-weight: 400;font-size: 15px;"
            class="text-left mx-4 py-1"
            color="primary"
          >Dinner</h4>
          <Hooper :itemsToShow="2">
            <Slide
              v-for="i in 6"
              :key="i"
              class="px-3 rounded-lg"
              style=" padding-left: 0px !important;"
            >
              <span class="item-price">150TK</span>
              <v-img src="https://picsum.photos/180/110?random" class="rounded-lg"></v-img>
              <span class="float-left item-name">Special Burger</span>
              <span class="float-right item-make-time">
                <v-btn depressed small style="background-color: #fff !importnat">
                  <v-icon color="primary" style="font-size: 18px">alarm</v-icon>5 min
                </v-btn>
              </span>
            </Slide>
          </Hooper>
          <!-- </v-col> -->
        </v-row>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="500">
      <ItemDetails></ItemDetails>
    </v-dialog>
  </v-container>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import ItemDetails from "./ItemDetails";
import Promotion from "./Promotion";
export default {
  name: "HelloWorld",
  components: {
    Hooper,
    Slide,
    ItemDetails,
    Promotion,
  },
  data: () => ({
    dialog: false,
  }),
  computed: {
    options() {
      return {
        duration: 300,
        offset: 10,
        easing: "easeInQuart",
      };
    },
  },
};
</script>

<style scoped>
.top-menu {
  /* border-bottom: 1px solid #dadada; */
  border-top: 1px solid #ffffff;
  box-shadow: 0px 1px 8px #ddd;
}
.top-menu ul li {
  list-style: none;
  float: left;
  padding: 0 10px;
}
.hooper {
  height: auto !important;
}
.hooper-slide {
  width: auto !important;
}
.hooper-list > ul {
  padding-left: 0px !important;
}
.hooper:focus,
.hooper-list:focus,
li.hooper-slide:focus {
  outline: none !important;
}

.item-price {
  position: absolute;
  z-index: 99;
  background-color: #f8b843;
  text-align: center;
  margin-left: 22px;
  padding: 0px 4px;
  border-radius: 0px 0px 5px 5px;
  color: #fff;
  font-size: 14px;
}
.item-name {
  font-size: 14px;
  margin-left: 10px;
}
.item-make-time {
  font-size: 14px;
  margin-right: 10px;
}
.item-make-time
  > .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: transparent !important;
}
.item-make-time > .v-btn:not(.v-btn--round).v-size--small {
  height: 20px !important;
}

.offer-banner {
  border: 1px solid #ddd;
}
.iteam-details-carousel {
  height: auto !important;
}
.cat-btn {
  background-color: transparent !important;
  height: 0 !important;
  padding: 0 !important;
}
</style>
