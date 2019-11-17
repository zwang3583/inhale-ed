<template>
  <v-container fluid>
    <v-sparkline
      height="30%"

      :value="d"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="lineWidth"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      auto-draw
      :show-labels="showLabels"
      :label-size="labelSize"
    ></v-sparkline>

    <v-divider></v-divider>

  </v-container>
</template>


<script>
  const gradients = [
    ['white'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    props: {
      d: Array,
    },
    data: () => ({
      showLabels: true,
      lineWidth: 2,
      labelSize: 7,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
  }
</script>
<style scoped>
  
</style>