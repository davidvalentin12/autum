<template>
<v-card  class="py-3 px-3" color="">
     <v-card-title>
        <v-btn fab dark color="orange darken-1" @click="createClientDialog = true">
          <v-icon>add</v-icon>
        </v-btn>
        <strong class="title" >New client</strong>
      </v-card-title>

      <v-card-title>
      <strong class="title">Client List</strong>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
       <v-text-field
            label="Solo"
            placeholder="Search"
            v-model="clientFilter"
            solo
            single-line
            hide-details
            append-icon="search"
          ></v-text-field>
    </v-card-title>
     <v-list two-line subheader>
      <v-subheader inset>Clients</v-subheader>
      <v-list-tile
            v-for="client in filteredClients"
            :key="client.doc.id"
            @click="selectClient(client.doc.id)">
            <v-btn small fab>
              <v-icon>add</v-icon>
             </v-btn>
            <v-list-tile-content>
              <v-list-tile-title>{{ client.data.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{ client.data.description}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
    </v-list>
    <v-dialog v-model="createClientDialog" max-width="600px">
      <v-btn slot="activator" color="orange" dark>Open Dialog</v-btn>
       <v-form
          ref="newClientForm"
          v-model="newClient.validation.valid"
          lazy-validation>
      <v-card>
        <v-card-title>
          <span class="headline">New Client</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 >
                <v-text-field label="Client name" required v-model="newClient.name" :rules="newClient.validation.nameRules"></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <v-text-field label="Description" hint="Brief info about your client" v-model="newClient.description"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="createClientDialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="saveNewClient()" :disabled="!newClient.validation.valid">Save</v-btn>
        </v-card-actions>
      </v-card>
      </v-form>
    </v-dialog>
</v-card>

</template>

<style lang="scss" scoped>
</style>

<script>
import { ClientFactory } from '@/domain/client/factory.js'
import { Client } from '@/domain/client/entity.js'

export default {
  name: 'ClientList',
  data: () => {
    return {
      clients: [],
      createClientDialog: false,
      clientFilter: '',
      newClient: {
        name: '',
        description: '',
        validation: {
          valid: true,
          nameRules: [
            v => !!v || 'Name is required'
          ]
        }
      }
    }
  },
  computed: {
    filteredClients () {
      return this.clients.filter(client => {
        if (this.clientFilter === '') {
          return true
        }

        let clientName = client.data.name.toLowerCase() || ''
        let clientDescription = ''
        if (client.data.description) {
          clientDescription = client.data.description.toLowerCase()
        }

        return clientName.indexOf(this.clientFilter.toLowerCase()) > -1 || clientDescription.indexOf(this.clientFilter.toLowerCase()) > -1
      })
    }
  },
  created: function () {
    ClientFactory.getUserClients(this.updateClientList)
  },
  methods: {
    selectClient: function (id) {
      this.$router.push({ path: `/clients/${id}` })
    },
    saveNewClient: function () {
      if (this.$refs.newClientForm.validate()) {
        this.createClient()
        this.$refs.newClientForm.reset()
        this.createClientDialog = false
      }
    },
    createClient: function () {
      let client = new Client().create(this.newClient.name, this.newClient.description)
      console.log(client)
    },
    updateClientList (clients) {
      this.clients = clients
    }
  }
}
</script>
