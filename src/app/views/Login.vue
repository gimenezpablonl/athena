<template>  
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="login()">
                    <v-text-field v-model="username" prepend-icon="person" name="username" label="Username" type="text"></v-text-field>
                    <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                    <v-btn type="submit" color="primary">Login</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
export default {
    data(){
        return {
            username : '',
            password : '',
        }
    },
    methods: {
        login(){
            const { username, password } = this
            this.$store.dispatch('login', { username, password })
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        }
    }
}
</script>
