<template>
  <v-row justify="center">
    <Hooper class="mhopper">
      <Slide>
        <v-col cols="12" class="px-3">
          <v-img
            src="https://s3.envato.com/files/180255636/jpg/720x300_Pop_Under.jpg"
            class="rounded-lg offer-banner"
          ></v-img>
        </v-col>
      </Slide>
      <Slide>
        <v-col cols="12" class="px-3">
          <v-img
            src="https://s3.envato.com/files/180255636/jpg/720x300_Pop_Under.jpg"
            class="rounded-lg offer-banner"
          ></v-img>
        </v-col>
      </Slide>
    </Hooper>
  </v-row>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
  },

  data: () => ({}),
  watch: {},
  methods: {},
};
</script>
<style  scoped>
.hooper{
  height: auto;
}
</style>
