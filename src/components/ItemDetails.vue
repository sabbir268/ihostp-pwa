<template>
  <v-container class="bg-white" style="background-color:#fff">
    <Hooper ref="carousel" @slide="updateCarousel" class="mhopper" :settings="hooperSettings">
      <Slide v-for="(item,i) in items" :key="i">
        <span>{{i}}</span>
        <v-row>
          <v-col cols="12">
            <img :src="item.img" style="width:100%" alt />
          </v-col>
        </v-row>
      </Slide>
      <Navigation slot="hooper-addons"></Navigation>
    </Hooper>

    <v-row>
      <v-col cols="2" v-for="(item,i) in items" :key="i" @click="carouselData = i" class="p-0 m-0">
        <v-img :src="item.img"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Hooper, Slide, Navigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
    Navigation,
  },

  data: () => ({
    carouselData: 0,
    items: [
      { img: "https://picsum.photos/600/400?random" },
      { img: "https://picsum.photos/600/400?random" },
      { img: "https://picsum.photos/600/400?random" },
    ],
    hooperSettings: {
      breakpoints: {
        400: {
          centerMode: true,
          // itemsToShow: 0,
        },
      },
    },
  }),
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    },
  },
  methods: {
    updateSlide() {
      Hooper.slideTo(3);
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    },
  },
};
</script>
<style  scoped>
.hooper-list,
.hooper-track,
.hooper-slide {
  width: 100% !important;
}
</style>
