<template>
  <v-container>
    <v-row>
      <v-col>
        <AirQuality />
      </v-col>
      <v-col>
        Hello
      </v-col>
      
    </v-row>

    <v-row>
      <v-col class="sm-10">
        <gmap />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AirQuality from "../components/AirQuality";
import gmap from "../components/gmap";
export default {
  props: {
    source: String
  },

  data: () => ({
    drawer: null
  }),

  components: {
    AirQuality,
    gmap
  }
};
</script>

<style scoped>
.container {
  height: 100%;
}
.row {
  height: 50%;
}
</style>