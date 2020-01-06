<template>
  <v-row>
    <v-col class="sm-2">
      <span id="city-aqi-container"></span>
    </v-col>
  </v-row>
</template>


<script>
_aqiFeed({
  display: "%details",
  container: "city-aqi-container",
  city: "boston"
});

export default {
  name: "AirQuality"
};
</script>


<style scoped>
.v-row,
.container {
  height: 100%;
}
</style>
