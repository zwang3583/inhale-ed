<template>
  <v-app>
    <v-content>
      <v-row>
        <v-container>
        <Calendar />
        </v-container>
      </v-row>
      <v-row>
        <AirQuality />
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import AirQuality from "../components/AirQuality";
import Calendar from "../components/Calendar";
export default {
  components: {
    AirQuality,
    Calendar
  }
};
</script>

<style scoped>
.row{
  height: 100vh;
}
</style>