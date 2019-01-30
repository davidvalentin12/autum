<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap >
      <v-flex xs12 >
        <ClientList/>
      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import ClientList from '@/views/components/ClientList.vue'
export default {
  name: 'overview',
  components: {
    ClientList
  },
  methods: {
  }
}
</script>
