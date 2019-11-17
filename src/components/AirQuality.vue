<template>
	<span  id="city-aqi-container"></span>
</template>


<script>

	_aqiFeed({  container:"city-aqi-container",  city:"beijing"  });

	export default{
		name: 'AirQuality',
	}
</script>