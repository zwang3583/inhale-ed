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
        <v-list-item-title>John Doe</v-list-item-title>
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
            <v-list-item-title>Info</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to = "{ path: 'weather'}">
          <v-list-item-action>
            <v-icon>mdi-weather-cloudy</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Weather </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list-item dense>
          <v-list-item-title>Contact Information</v-list-item-title>
        </v-list-item>
        <v-divider/>
        <v-list two-line dense>
          <v-list-item >
            <v-list-item-icon>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>(650) 555-1234</v-list-item-title>
              <v-list-item-subtitle>Primary Care Physician</v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>

          <v-list-item>
            <v-list-item-action></v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>(323) 555-6789</v-list-item-title>
              <v-list-item-subtitle>Pulmonologist</v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>pcp@example.com</v-list-item-title>
              <v-list-item-subtitle>Primary Care Physician</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item >
            <v-list-item-action></v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>pulmo@example.com</v-list-item-title>
              <v-list-item-subtitle>Pulmonologist</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
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
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Rdb3p9RZoR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; BostonHacks 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
    }),

    components: {
      //
    }
  }
</script>