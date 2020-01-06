<template>
<div>

	<h1>{{patient.firstName + ' ' + patient.lastName}}</h1>
	<h3>Inhaler Frequency</h3>
	<Chart class="graph" :d="patient.data.inhalerFreq" />
	<h4>Condition</h4>
	<Chart class="graph" :d="patient.data.condition" />
	<h4>Smoking Frequency</h4>
	<Chart class="graph" :d="patient.data.smokeFreq" />
	
</div>
</template>

<script>

import Chart from '../components/Chart'
export default{
	name: "Doctor",
	components: {
		Chart
	},
	props: {
		patient: Object
	},
	
}
</script>

<style scoped>

	h1{
		margin-bottom: 10%;
	}
	.graph{
		margin: 30px;
	}
</style>