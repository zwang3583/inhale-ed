<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <Calendar />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Calendar from "../components/Calendar.vue";
export default {
  props: {
    source: String
  },
  components: {
    Calendar
  }
};
</script>
