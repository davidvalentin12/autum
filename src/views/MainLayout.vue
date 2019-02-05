<template>
  <v-app id="inspire">
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
    <v-navigation-drawer :mini-variant.sync="mini" hide-overlay
    stateless fixed v-model="drawer" app>
      <MainMenu/>
    </v-navigation-drawer>
    <v-content>
        <router-view></router-view>
    </v-content>
    <v-navigation-drawer right temporary v-model="right" fixed >
    </v-navigation-drawer>
    <v-footer dark color="orange" class="white--text" app>
      <span class="text-md-center">Autum App &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
//   .orange {
//     background: rgba(255,10,108,1) ;
// background: -moz-linear-gradient(left, rgba(255,10,108,1) 0%, rgba(251,149,17,1) 100%);
// background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,10,108,1)), color-stop(100%, rgba(251,149,17,1)));
// background: -webkit-linear-gradient(left, rgba(255,10,108,1) 0%, rgba(251,149,17,1) 100%);
// background: -o-linear-gradient(left, rgba(255,10,108,1) 0%, rgba(251,149,17,1) 100%);
// background: -ms-linear-gradient(left, rgba(255,10,108,1) 0%, rgba(251,149,17,1) 100%);
// background: linear-gradient(to right, rgba(255,10,108,1) 0%, rgba(251,149,17,1) 100%);
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff0a6c', endColorstr='#fb9511', GradientType=1 );
//   }
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
