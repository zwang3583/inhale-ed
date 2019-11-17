<template>
  <weather/>
</template>

<script>
import VueWeatherWidget from 'vue-weather-widget'
import 'vue-weather-widget/dist/css/vue-weather-widget.css'
export default {
  components: {
    'weather': VueWeatherWidget
  }
}
</script>