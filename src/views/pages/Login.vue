<template>
    <v-app id="white-background" >
        <v-content>
            <v-container fill-height>
                <v-layout row wrap align-center justify-center>
                    <v-flex xs12 md10 lg8>
                     <v-layout row wrap >
                        <v-flex  d-flex  xs12>
                            <img class="login-logo" src="../../assets/img/LOGOTIPO.svg">
                            </v-flex>
                        <v-flex  d-flex  xs12>
                        <v-card class="elevation-18">
                            <v-layout row wrap justify-center>
                                <v-flex  d-flex  xs12 md6 lg6 >
                                    <v-card flat class="pa-3">
                                    <v-card-title
                                    class=" lighten-2"
                                    >
                                            <div>
                                    <h2 class="headline">Login</h2>
                                    <span class="grey--text  font-weight-light" >Sign in to your account</span></div>
                                    </v-card-title>
                                        <v-card-text>
                                            <v-form>
                                            <v-text-field solo class="adm-login-input" name="login" label="Email ID" type="text" v-model="email" color="secondary" ></v-text-field>
                                            <v-text-field solo class="adm-login-input" id="password"  name="password" label="Password" type="password" color="secondary" v-model="password" ></v-text-field>
                                            <v-btn class="adm-login-button font-weight-light" dark large color="secondary "  @click="login">Log in</v-btn>
                                            </v-form>
                                             <p class="text-md-center mb-0"><a class="alert--text" @click="signup" >Forgot password?</a></p>
                                        </v-card-text>
                                        </v-card>
                                </v-flex>
                                <v-flex    d-flex  xs12 md6 lg6 px0 >
                                <v-card flat color="secondary" class="white--text pa-3" >
                                <v-layout row wrap align-center fill-height>
                                <div>
                                <v-card-title
                                    class=" lighten-2 text-md-center ">
                                            <div><h2 class="headline">Sign Up</h2>
                                    <span class="font-weight-thin" >qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem</span></div>
                                    </v-card-title>
                                    <v-card-text>
                                     <v-btn class="adm-login-button font-weight-light secondary--text"  large   @click="signup">Register now!</v-btn>
                                    </v-card-text>
                                    </div>
                                    </v-layout>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            </v-card>
                        </v-flex>
                        <v-flex  d-flex  xs12>
                            <p class="login-logo"></p>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
<style lang="scss">
@import '../../styles/login';
</style>

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
