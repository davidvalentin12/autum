<template>
<v-container grid-list-md fluid>
<v-layout row wrap  >
<v-flex pa-2 xs3>
        <v-btn fab dark color="orange darken-1">
          <v-icon>add</v-icon>
        </v-btn>
        <strong class="title">New project</strong>
      </v-flex>
        <v-flex v-for="i in 4" :key="`3${i}`" pa-2 xs3>
        <Project/>
      </v-flex>
</v-layout>
</v-container>
</template>

<style lang="scss" scoped>
</style>

<script>

import Project from '@/views/components/Project.vue'

export default {
  name: 'Client',
  components: {
    Project
  },
  data: () => {
    return {
    }
  },
  created: function () {
  },
  methods: {
    placeholder: () => {

    }
  }
}
</script>
