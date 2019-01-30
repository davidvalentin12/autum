<template>
<v-container grid-list-md fluid>
<v-layout row wrap  >
<v-flex pa-2 xs3>
        <v-btn fab dark color="indigo">
          <v-icon>add</v-icon>
        </v-btn>
        <strong class="title">New project</strong>
      </v-flex>
<v-flex v-for="i in 4" :key="`3${i}`" pa-2 xs3>
        <v-card dark color="secondary">
          <v-card-text class="px-2">3</v-card-text>
        </v-card>
      </v-flex>
</v-layout>
</v-container>
</template>

<style lang="scss" scoped>
</style>

<script>

export default {
  name: 'Client',
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
