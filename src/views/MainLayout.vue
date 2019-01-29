<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawerRight" right  clipped app>
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
      color="blue-grey"
      dark
      fixed
      app
      clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer fixed v-model="drawer" app>
      <MainMenu/>
    </v-navigation-drawer>
    <v-navigation-drawer temporary v-model="left" fixed>

    </v-navigation-drawer>
    <v-content>
        <router-view></router-view>
    </v-content>
    <v-navigation-drawer right temporary v-model="right" fixed >
    </v-navigation-drawer>
    <v-footer color="blue-grey" class="white--text" app>
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
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
      drawer: true,
      drawerRight: true,
      right: null,
      left: null,
      menuItems: []
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
