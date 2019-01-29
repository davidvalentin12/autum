<template>
  <div class="overview">
  <v-container grid-list-md>
    <v-layout row wrap >
      <v-flex xs12>
        <v-card dark color="secondary">
          <CalendarSchedule/>
        </v-card>
      </v-flex>
      <v-flex xs6>
      <v-card dark color="secondary">
      <ClientList/>
      </v-card>
      </v-flex>
      <v-flex xs6>
      <v-card dark color="secondary">
      <ProjectList/>
      </v-card>
      </v-flex>
    </v-layout>
</v-container>
  </div>
</template>

<script>
import CalendarSchedule from '@/views/components/CalendarSchedule.vue'
import ClientList from '@/views/components/ClientList.vue'
import ProjectList from '@/views/components/ProjectList.vue'
export default {
  name: 'overview',
  components: {
    CalendarSchedule,
    ClientList,
    ProjectList
  },
  methods: {
  }
}
</script>
