<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="@/assets/profile_placeholder.png"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
        <v-list-item-title>Doctor</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list dense>
        <v-list-item :to="{ path: 'calendar' }">
          <v-list-item-action>
            <v-icon>mdi-calendar-month-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Calendar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ path: 'howto' }">
          <v-list-item-action>
            <v-icon>mdi-comment-question-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>How To</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ path: 'info' }">
          <v-list-item-action>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About Asthma</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item :to ="{ path: 'weather'}">
          <v-list-item-action>
            <v-icon>mdi-weather-cloudy</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Weather </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Inhale-ED</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      <Doctor />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; BostonHacks 2019</span>
    </v-footer>
  </v-app>
</template>




<script>
	import Doctor from '../components/Doctor'
  export default {
    name: 'DoctorUI',
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
    }),

    components: {
    	Doctor
      //
    }
  }
</script>