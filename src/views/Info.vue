<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <Information />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Information from "../components/Information";
export default {
  props: {
    source: String
  },
  components: {
    Information
  }
};
</script>