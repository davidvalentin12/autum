<template>
<v-card>
     <v-card-title>
        <v-btn fab dark color="adm-orange"  small @click="newClient.show = true">
          <v-icon>add</v-icon>
        </v-btn>
        <strong class="title">New client</strong>
      </v-card-title>
    </v-card-title>
    <v-list two-line subheader>
        <v-subheader inset>
            <v-list-tile-content>
              <v-list-tile-title><strong class="title">Client List</strong></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-text-field
              class="adm-input-txt"
            label="Solo"
            placeholder="Search"
            v-model="clientFilter"
            solo
            single-line
            hide-details
            prepend-inner-icon="search"
            ></v-text-field>

            </v-list-tile-action>
        </v-subheader>
            
        <div  v-for="client in filteredClients">
            <v-divider></v-divider>
            <v-list-tile
            :key="client.doc.id"
            @click="selectClient(client.doc.id)"
            avatar
            inset>
                <v-list-tile-avatar>
                </v-list-tile-avatar>
                <v-list-tile-avatar>
                    <img v-bind:src="randomUser(client.data)">
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title>{{ client.data.name}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ client.data.description}}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                <v-btn icon ripple>
                    <v-icon color="grey lighten-1">more_horiz</v-icon>
                </v-btn>
                <v-list-tile-action-text><v-icon color="grey lighten-1" >access_time</v-icon>{{client.data.timeSpent}}</v-list-tile-action-text>
                </v-list-tile-action>
            </v-list-tile>
        </div>
        <div v-if="filteredClients.length == 0" class="text-md-center">
           <v-list-tile > <v-card-text class="text-md-center " xs12> no clients found</v-card-text></v-list-tile >
        </div>
    </v-list>
    <v-dialog v-model="newClient.show" max-width="400px">
      <v-card class=" pa-3">
          <v-card-title class="headline">New client</v-card-title>
          <v-card-text>
        <v-form
          ref="newClientForm"
          v-model="newClient.validation.valid"
          lazy-validation>
                <v-text-field solo class="adm-login-input" color="orange" name="Client name"  label="Client name" type="text"  required v-model="newClient.name" :rules="newClient.validation.nameRules"></v-text-field>
                <v-text-field solo class="adm-login-input" color="orange"  name="Description" label="Description" hint="Brief info about your client" v-model="newClient.description"></v-text-field>
          <v-btn color="" large class="adm-login-button font-weight-light white--text adm-orange" flat @click="saveNewClient()" :disabled="!newClient.validation.valid">Save</v-btn>
        </v-form>
        </v-card-text>
      </v-card>
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
      clientFilter: '',
      newClient: {
        show: false,
        name: '',
        description: '',
        validation: {
          valid: true,
          nameRules: [
            v => !!v || 'Name is required'
          ]
        }
      },
      removeClient: {
        show: false,
        name: ''
      }
    }
  },
  computed: {
    filteredClients () {
      return this.clients.filter(client => {
          console.log(client)
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
        this.newClient.show = false
      }
    },
    createClient: function () {
      let client = new Client().create(this.newClient.name, this.newClient.description)
      console.log(client)
    },
    updateClientList (clients) {
      this.clients = clients
    },
    randomUser (data) {
      return 'https://randomuser.me/api/portraits/men/' + data.createdAt.toString().split('').pop() + '.jpg'
    }
  }
}
</script>
