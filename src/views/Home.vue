<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      <h1>Hi! Welcome to Inhale-ED!</h1>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; BostonHacks 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    components: {
      //
    }
  }
</script>