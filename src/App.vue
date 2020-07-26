<template>
  <v-app>
    <v-app-bar fixed color="white" elevation="0" class="top-bar" style="border-bottom: 1px solid #ddd !important;">
      <v-app-bar-nav-icon color="warning"></v-app-bar-nav-icon>

      <v-toolbar-title>Momo's Cafe</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn small color="warning" depressed>Table 2</v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>

    <v-bottom-navigation fixed v-model="bottomNav">
      <v-btn value="recent">
        <v-icon color="warning">home</v-icon>
      </v-btn>
      <v-btn value="favorites">
        <v-icon color="warning">favorite</v-icon>
      </v-btn>
      <v-btn value="nearby">
        <v-icon color="warning">shopping_cart</v-icon>
      </v-btn>
      <v-btn value="suuport">
        <v-icon color="warning">support_agent</v-icon>
      </v-btn>
      <v-btn value="time">
        <v-icon color="warning">query_builder</v-icon>
      </v-btn>
      <v-btn value="notification">
        <v-icon color="warning">notifications_active</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    bottomNav: 3,
  }),
};
</script>
<style  scoped>
.v-item-group.v-bottom-navigation .v-btn {
  min-width: 58px !important;
}

.v-btn--active {
  border-radius: 50% !important;
  top: -10px !important;
  background-color: #fff !important;
  box-shadow: 0px 0px 15px #e0e0e0 !important;
  height: 58px !important;
}
.v-icon {
  font-size: 35px !important;
}
.v-btn:not(.v-btn--round).v-size--default {
  padding: 0 12px !important;
}

.v-bottom-navigation > .v-btn:before {
  background-color: #fff !important;
}

</style>