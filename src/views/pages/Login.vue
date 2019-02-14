<template>

  <v-app id="inspire">
    <v-content>
      <v-container grid-list-md  fill-height>

      <v-layout row wrap align-center justify-center>

          <v-flex xs12 md6 class="px0">

              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="email" color="orange"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" color="orange" v-model="password" ></v-text-field>

                </v-form>
              </v-card-text>
              <v-card-actions class="pa-3">
                <span>Don't have an account?  <a class="orange--text" @click="signup" >Sign up</a></span>
                <v-spacer></v-spacer>
                <v-btn dark color="orange "  @click="login">Login</v-btn>
              </v-card-actions>
               <v-divider light></v-divider>

          </v-flex>
          <v-flex xs12 md6 px0>

              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="email" color="orange"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" color="orange" v-model="password" ></v-text-field>

                </v-form>
              </v-card-text>
              <v-card-actions class="pa-3">
                <span>Don't have an account?  <a class="orange--text" @click="signup" >Sign up</a></span>
                <v-spacer></v-spacer>
                <v-btn dark color="orange "  @click="login">Login</v-btn>
              </v-card-actions>
               <v-divider light></v-divider>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>

</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('overview')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    },
    signup: function () {
      this.$router.replace('sign-up')
    }
  }
}
</script>
