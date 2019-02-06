<template>
    <div>
    <v-toolbar dark color="orange lighten-1" flat>
      <v-list class="pa-0">
        <v-list-tile>
          <v-list-tile-title  class="title">
            Autum
          </v-list-tile-title>
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
    <v-divider></v-divider>
      <v-list dense>
      <v-list-tile
       v-for="menuItem in menuItems"
        :key="menuItem.title"
        @click="menuItem.action()">
          <v-list-tile-action>
            <v-icon>{{menuItem.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{menuItem.display}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import firebase from 'firebase'

export default {
  name: 'MainMenu',
  props: ['drawer'],
  data: () => {
    return {
      menuItems: []
    }
  },
  created: function () {
    this.menuItems = [
      {
        display: 'Overview',
        action: () => {
          this.$router.push({ path: '/overview' })
        }
      },
      {
        display: 'Clients',
        action: () => {
          this.$router.push({ path: '/clients' })
        }
      },
      {
        display: 'Profile',
        action: () => {

        }
      },
      {
        display: 'Logout',
        action: () => {
          this.logout(this)
        },
        icon: 'exit_to_app'
      }]
  },
  methods: {
    logout: (self) => {
      firebase.auth().signOut().then(() => {
        self.$router.push('/login')
      })
    }
  }
}
</script>
