<template>
  <v-app>
    <v-app-bar
      fixed
      color="white"
      elevation="0"
      class="top-bar"
      style="border-bottom: 1px solid #ddd !important;"
    >
      <v-app-bar-nav-icon color="primary"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <!-- <v-img src="./assets/logo.png" aspect-ratio="10.4"></v-img> -->
        <img src="./assets/logo.png" style="width:50%" alt />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn small color="primary" depressed>Table 2</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-bottom-navigation fixed v-model="bottomNav">
      <v-btn value="notification">
        <v-icon color="white">notifications_active</v-icon>
      </v-btn>

      <v-btn value="suuport">
        <v-icon color="white">support_agent</v-icon>
      </v-btn>

      <v-btn value="recent">
        <v-icon color="white">home</v-icon>
      </v-btn>
  
      <v-btn value="nearby">
        <v-icon color="white">shopping_cart</v-icon>
      </v-btn>
      
      <v-btn value="time">
        <v-icon color="white">query_builder</v-icon>
      </v-btn>
      
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    bottomNav: 5,
  }),
};
</script>
<style  scoped>
.v-item-group.v-bottom-navigation .v-btn {
  min-width: 50px !important;
}

.v-btn--active {
  border-radius: 50% !important;
  top: -10px !important;
  background-color: #F8B843 !important;
  /* box-shadow: 0px 0px 15px #e0e0e0 !important; */
  height: 75px !important;
}
.v-icon {
  font-size: 42px !important;
}
.v-btn:not(.v-btn--round).v-size--default {
  padding: 0px 20px !important;
}

.v-bottom-navigation > .v-btn:before {
  background-color: #F8B843 !important;
}

.v-application ul,
.v-application ol {
  padding-left: 13px !important;
}
.theme--light.v-bottom-navigation {
  background-color: #31314f;
  color: rgba(0, 0, 0, 0.87);
}
</style>