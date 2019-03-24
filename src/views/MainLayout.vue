<template>
  <v-app id="white-background">

    <v-navigation-drawer
    :mini-variant="mainMenu"
    permanent
    hide-overlay
    stateless
    floating
    app
   
  >
  <MainMenu v-bind:mainMenu.sync="mainMenu" />
 
  </v-navigation-drawer>
  
    <v-content>
        <router-view></router-view>
    </v-content>
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
      mainMenu: false,
      fab: true,
      right: null,
      left: null
    }
  },
  created: function () {
      this.mainMenu = false
  },
  props: {
    source: String
  },
  methods: {
  }
}
</script>
