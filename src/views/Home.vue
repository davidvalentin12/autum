<template>
  <div class="home">
    <MainLayout />
  </div>
</template>

<script>
import firebase from 'firebase'
// @ is an alias to /src
import MainLayout from '@/components/MainLayout.vue'

export default {
  name: 'home',
  components: {
    MainLayout
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
