<template>
  <v-app id="inspire">

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      <Doctor />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; BostonHacks 2019</span>
    </v-footer>
  </v-app>
</template>




<script>
	import Doctor from '../components/Doctor'
  export default {
    name: 'DoctorUI',
    props: {
      source: String,
    },
    components: {
    	Doctor
      //
    }
  }
</script>