<template>
	<v-container justify="center">
		<v-row>
			<v-col class="sm-2"><span  id="city-aqi-container"></span></v-col>
			<v-col class="sm-10"><gmap /> </v-col>
		</v-row>

	
 </v-container>
</template>


<script>
import gmap from '../components/gmap'
	_aqiFeed({  
		display: '%details',
  container:"city-aqi-container",  
  city:"boston",  
});  

		export default{
		name: 'AirQuality',
		components: {
			gmap
		}
	}
</script>




<style scoped>
  #map {
    height: 100%;
  }
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .v-row, .container{
  	height: 100%;
  }
</style>
