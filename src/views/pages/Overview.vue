<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap >
    <v-flex xs12 >
    <h3 class="text-xs-center display-2
">{{welcome}}</h3>
    </v-flex>
      <v-flex xs12 >
        <v-card class="py-3 px-3"  color="">
          <CalendarSchedule/>
        </v-card>
      </v-flex>
      <v-flex  xs6>
        <ClientList/>
      </v-flex>
      <v-flex xs6>
      <v-card class="py-3 px-3"  color="">
      <ProjectList/>
      </v-card>
      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import CalendarSchedule from '@/views/components/CalendarSchedule.vue'
import ClientList from '@/views/components/ClientList.vue'
import ProjectList from '@/views/components/ProjectList.vue'
import firebase from 'firebase'
export default {
  name: 'overview',
  components: {
    CalendarSchedule,
    ClientList,
    ProjectList
  },
  data: () => {
    return {
      welcome: 'Welcome back!'
    }
  },
  created: function () {
    this.welcome = `Hello ${firebase.auth().currentUser.displayName || firebase.auth().currentUser.email}!`
  },
  methods: {
  }
}
</script>
