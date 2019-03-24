<template>
  <v-app id="white-background">
    <v-navigation-drawer  fixed v-model="drawerRight" right  clipped app>
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Openasdas Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      color="orange"
      dark
      fixed
      app
      clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer
    :mini-variant="drawer"
    permanent
    hide-overlay
    stateless
    fixed
    app
  >
  <MainMenu v-bind:drawer="drawer" />
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="drawer = !drawer"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>
    </v-list>
  </v-navigation-drawer>
    <v-content>
        <router-view></router-view>
    </v-content>
    <v-navigation-drawer right temporary v-model="right" fixed >
    </v-navigation-drawer>
  </v-app>
</template>

<style lang="scss">
  @import '../styles/main.scss';
</style>

<script>
import MainMenu from '@/views/components/MainMenu.vue'
export default {
  name: 'MainLayout',
  components: {
    MainMenu
  },
  data: () => {
    return {
      mini: false,
      drawer: false,
      drawerRight: false,
      right: null,
      left: null
    }
  },
  created: function () {

  },
  props: {
    source: String
  },
  methods: {
  }
}
</script>
