<template>
  <v-app id="inspire">





   <AirQuality/>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; BostonHacks 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import AirQuality from '../components/AirQuality'
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
    }),

    components: {
      AirQuality
    }
  }
</script>