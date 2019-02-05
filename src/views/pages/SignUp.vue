<template>

<v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="orange">
                <v-toolbar-title>Sign up Form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="email" color="orange"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" color="orange" v-model="password" ></v-text-field>

                </v-form>
              </v-card-text>
              <v-card-actions class="pa-3">
                <span>Already have an account?  <a class="orange--text" @click="login"> Login</a></span>
                <v-spacer></v-spacer>
                <v-btn dark color="orange" @click="signUp">Sign up</v-btn>
              </v-card-actions>
               <v-divider light></v-divider>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('overview')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    },
    login: function () {
      this.$router.replace('login')
    }
  }
}
</script>

 <style scoped>

</style>
