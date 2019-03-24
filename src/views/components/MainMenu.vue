<template>

    <!---->
 <v-layout @mouseover="toggleMenu(false)" @mouseleave="toggleMenu(true)" class="menu-fill-height" align-space-around justify-space-between column fill-height>
      <v-list class="" two-line >
        <v-list-tile @click="navigateTo('/overview')" > 
            <img v-show="mainMenu" class="menu-isotype" src="../../assets/img/isotipo.svg" >
            <img  v-show="!mainMenu" class="menu-logo" src="../../assets/img/logo.svg" >
        </v-list-tile>
      </v-list>
      <v-list  two-line >
        <v-list-tile

        v-for="menuItem in menuItems"
        
        :class="{ 'adm-orange white--text': isActive(menuItem.path) }"
        @click="navigateTo(menuItem.path)"

          >
          <v-list-tile-action>
            <v-icon  :class="{ 'theme--dark': isActive(menuItem.path) }" >{{menuItem.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{menuItem.display}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
        @click="logout()">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
      <v-speed-dial
      v-model="fab"
                    left
                    direction="top"
                    transition="scale-transition"
                    bottom
                    fixed
                    open-on-hover
                    class="">
      
        <v-btn slot="activator"
        
                        color="secondary"
                        fab
                        v-model="fab"
      >
      <v-icon v-if="!fab">add</v-icon>
          <v-icon v-if="fab">close</v-icon>
        </v-btn>
      
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>
      </v-list>

        </v-layout>
</template>

<style lang="scss" scoped>
.menu-isotype{
    transition-delay: 0s;
    width:100%;
    max-width:48px;
}
.menu-logo{
    transition-delay: 0s;
    margin:auto;
    width:160px;
}
.menu-fill-height{
    height:100vh;
}
</style>

<script>
import firebase from 'firebase'

export default {
  name: 'MainMenu',
  props: ['mainMenu'],
  data: () => {
    return {
      menuItems: [],
      fab: false
    }
  },
  created: function () {
    this.menuItems = [
      {
        display: 'Overview',
       path: '/overview',
        icon: 'bar_chart'
      },
      {
        display: 'Clients',
         path: '/clients',
        icon: 'description'
      },
      {
        display: 'Profile',
        path: '/profile',
        icon: 'person_outline'
      }]
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/login')
      })
    },
    navigateTo(path){
        this.$forceUpdate();
        this.$router.push({ path: path })
    },
    isActive(path){
        if (this.$router.currentRoute.fullPath.includes(path)){
            return true;
        }else{
            return false;
        }
        
    },
    toggleMenu(value) {
        if (value !== undefined){
            this.$emit('update:mainMenu', value)
        }
    }
  }
}
</script>
