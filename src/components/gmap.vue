<template>
  <div class="googleMap"/>
</template>

<script>
import gmapsInit from '../gmaps';

export default {
  name: 'gmap',
  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      geocoder.geocode({ address: 'Boston' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
        var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
            getTileUrl:  function(coord,  zoom)  {  
                      return  'https://tiles.waqi.info/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=_TOKEN_ID_";  
            },  
            name:  "Air  Quality",  
        });  
  
      map.overlayMapTypes.insertAt(0,waqiMapOverlay);
      });
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.googleMap {
  width: 100%;
  height: 100%;
}
</style>