<template>
  <v-app>
    <router-view />
    <v-content>
      <Calendar />
    </v-content>
  </v-app>
</template>

<script>
import Calendar from "./components/Calendar";

// import navigationBar from "@/components/NavigationBar.vue";
export default {
  name: "App",
  components: {
    Calendar
  },
  data: () => ({
    //
  })
};

// import HelloWorld from './components/HelloWorld';

// export default {
//   name: 'App',

//   components: {
//     HelloWorld,
//   },

//   data: () => ({
//     //
//   }),
// };
</script>