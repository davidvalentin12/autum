<template>

<v-app id="white-background">
    <v-content>
      <v-container fill-height>
                <v-layout row wrap align-center justify-center>
                    <v-flex xs12 sm8 md6 lg4>
                     <v-layout row wrap >
                            <v-flex  d-flex  xs12>
                            <img class="login-logo signup" src="../../assets/img/LOGOTIPO.svg">
                            </v-flex>
                            <v-flex xs12>
                                <v-card class="elevation-12 white--text pa-3"  flat color="secondary" >
                                    <v-card-title
                                        class=" lighten-2"
                                        >
                                                <div>
                                        <h2 class="headline">Sign up</h2>
                                        <span class="font-weight-light" >Sign up to Autumn</span></div>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-form>
                                        <v-text-field solo class="adm-login-input" name="username" label="Username" type="text" v-model="username" color="orange"></v-text-field>
                                        <v-text-field solo class="adm-login-input" name="login" label="Email ID" type="text" v-model="email" color="orange"></v-text-field>
                                        <v-text-field solo class="adm-login-input" id="password" name="password" label="Password" type="password" color="orange" v-model="password" ></v-text-field>
                                        <v-btn class="adm-login-button font-weight-light white--text adm-orange"  large   @click="signUp">Register now!</v-btn>
                                        </v-form>
                                        <span>Already have an account?  <a class="orange--text" @click="login"> Login</a></span>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex  d-flex  xs12>
                             <p class="login-logo signup"></p>
                            </v-flex>
        </v-layout>
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
      password: '',
      username: ''
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
