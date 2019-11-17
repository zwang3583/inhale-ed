<template>
	<v-container justify="center">
	<span  id="city-aqi-container"></span>
	<div  id='map'  style='height:380px;'  /> 
 </v-container>
</template>


<script>

	_aqiFeed({  
		display: '%details',
  container:"city-aqi-container",  
  city:"boston",  
});  


// var  map  =  new  google.maps.Map(document.getElementById('map'),  {  
//         center:  new  google.maps.LatLng(51.505,  -0.09),  
//         mapTypeId:  google.maps.MapTypeId.ROADMAP,  
//         zoom:  11  
//     });  

//                     var  t  =  new  Date().getTime();  
// var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
//         getTileUrl:  function(coord,  zoom)  {  
//                   return  'https://tiles.waqi.info/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  "993cbc0bff55dface07dadaa1178f83f0463d501";  
//         },  
//         name:  "Air  Quality",  
// });  

// map.overlayMapTypes.insertAt(0,waqiMapOverlay);  

	export default{
		name: 'AirQuality',
	}
</script>

<style scoped>
.body{

}
	</style>}
