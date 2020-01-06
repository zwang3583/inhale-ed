<template>

<v-container>
	<v-row class='sm-6'>
	<v-col>
	<h1>Patients</h1>
	  <div :v-for="patient in mainItems">
	  	<v-row  @click="changePatient(patient)">

	  		<v-col>{{patient.firstName}}</v-col>
	  		<v-col>{{patient.lastName}}</v-col>

	  	</v-row>
	  </div>

    </v-col>
    <v-col>

	<patientSummary class='summary' :patient="currentPatient"  />
</v-col>
</v-row>
</v-container>
</template>

<script>

import patientSummary from '../components/patientSummary';
import { db } from "@/main";

var d1 = { inhalerFreq: [0, 2, 5, 9, 5, 10, 3, 5, -4, 10000000, 1, 8, 2, 9, 0],
			condition: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
			smokeFreq: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0]
		};
var d2 = { inhalerFreq: [45,6,3,2,6,7,8,8,9,1,3,1,1,0,3],
			condition: [45,6,3,2,6,7,8,8,9,1,3,1,1,0,3],
			smokeFreq: [45,6,3,2,6,7,8,8,9,1,3,1,1,0,3]
		};
var d3 = { inhalerFreq: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
			condition: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
			smokeFreq: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0]
		};
export default{
	name: "Doctor",
	components: {
		patientSummary
	},
	data(){
		return {
		mainHeaders: [
          { text: 'First Name', value: 'firstName' },
          { text: 'Last Name', value: 'lastName' },
        ],
  
        mainItems: [
          { firstName: 'Marc ', lastName: 'Last name', patientId: '1234', data: d1},
          { firstName: 'Wallace  ', lastName: 'Last name', patientId: '1234',  data: d2},
          { firstName: 'Enrique ', lastName: 'Last name', patientId: '1234', data: d3},
         ],
         currentPatient: { firstName: 'Marc ', lastName: 'Last name', patientId: '1234', data: d3},

		}
	},
	methods: {
		changePatient(patientId) {
			this.currentPatient = patientId;
		}
	}
}
</script>

<style scoped>


.v-col{
	width: 50%;
}
</style>