<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form v-on:submit="login">
                  <v-text-field v-model="username" prepend-icon="person" name="username" label="Username" type="text"></v-text-field>
                  <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                  <v-btn type="submit" value="Login" olor="primary">Login</v-btn>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>  
    import router from "../router"    
    import axios from "axios"    
    export default {    
        name: "Login",    
        methods: {    
            login: (e) => {    
                e.preventDefault()    
                let username = ''   
                let password = ''  
                let login = () => {    
                    let data = {    
                        username: username,    
                        password: password    
                    }    
                    axios.post("/login", data)    
                        .then((response) => {
                          console.log(data);
                          console.log(response);
                            console.log("Logged in")    
                            router.push("/")    
                        })    
                        .catch((errors) => {    
                          console.log(data);
                            console.log("Cannot log in")    
                        })    
                }    
                login()    
            }    
        }    
    }
</script>