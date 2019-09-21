<template>
  <v-container>
    <v-row>
      <v-col offset-md="3" md="6" xs="12">
        <h1>Administrator Login</h1>

        <div id="info">
          <v-text-field
            label="E-mail"
            v-model="email"
            required
          >
          </v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            required
          >
          </v-text-field>

          <v-btn
            color="complete"
            @click.prevent="signIn()"
          >
            Login
          </v-btn>
          <v-btn
            color="incomplete"
            @click.prevent="signOut()"
          >
            Sigin Out
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$router.replace('/admin')
      })
      .catch(error => {
        let errorCode = error.code
        let errorMessage = error.message

        if (errorCode === 'auth/wrong-password') {
          alert('Wrong Password')
        } else {
          alert(errorMessage)
        }
        
        console.log('signIn - error', error);
      })
    },
    signOut() {
      firebase.auth().signOut()
      .then(() => {
        alert('Logged Out')
        this.$router.replace('/')
      })
      .catch(error => {

      })
    }
  },
}
</script>

<style>
#info {
  padding: 20px;
}
</style>
