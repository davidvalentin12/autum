<template>
<v-card  class="py-3 px-3" color="">
     <v-card-title>
        <v-btn fab dark color="orange darken-1">
          <v-icon>add</v-icon>
        </v-btn>
        <strong class="title">New client</strong>
      </v-card-title>

      <v-card-title>
      <strong class="title">Client List</strong>
      <v-spacer></v-spacer>
       <v-text-field
            label="Solo"
            placeholder="Placeholder"
            solo
            single-line
            hide-details
            append-icon="search"
          ></v-text-field>
    </v-card-title>
     <v-list two-line subheader>
      <v-subheader inset>Clients</v-subheader>
      <v-list-tile
            v-for="client in clients"
            :key="client.id"
            @click="client.select(client.id)">
            <v-btn small fab>
              <v-icon>add</v-icon>
             </v-btn>
            <v-list-tile-content>
              <v-list-tile-title>Cliente 1</v-list-tile-title>
              <v-list-tile-sub-title>Audiovisuales</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
</v-list>
</v-card>
</template>

<style lang="scss" scoped>
</style>

<script>

export default {
  name: 'ClientList',
  data: () => {
    return {
    }
  },
  created: function () {
    this.clients = [
      {
        id: '7HS6WD',
        name: 'Cliente 1',
        desc: 'El mejor cliente',
        select: (id) => {
          this.selectClient(this, id)
        }
      },
      {
        id: '7HS6WH',
        name: 'Cliente 2',
        desc: 'Ojala no me vuelvan a llamar',
        select: (id) => {
          this.selectClient(this, id)
        }
      },
      {
        id: '7HS6WS',
        name: 'Cliente 3',
        desc: 'Un buen cliente',
        select: (id) => {
          this.selectClient(this, id)
        }
      }]
  },
  methods: {
    selectClient: (self, id) => {
      self.$router.replace({ path: `/clients/${id}` })
    }
  }
}
</script>
