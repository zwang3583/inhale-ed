<template>
	<v-container>
		<v-row>
			<v-row><v-col class="sm-2"><span  id="city-aqi-container"></span></v-col></v-row>
			<v-row><v-col class="sm-2"><Weather /></v-col></v-row>
		</v-row>
		<v-row class="fill-height">	
			<v-col class="sm-10"> <gmap /> </v-col>
		</v-row>
 </v-container>
</template>


<script>
import Weather from '../components/Weather'
import gmap from '../components/gmap'
	_aqiFeed({  
		display: '%details',
  container:"city-aqi-container",  
  city:"boston",  
});  

		export default{
		name: 'AirQuality',
		components: {
			gmap,
			Weather
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

  *{
	overflow: hidden
  }
</style>
