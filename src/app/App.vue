<template>
  <div id="app">
    <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
      <router-link to="/admin"><span v-if="isLoggedIn">Administration</span></router-link>
      <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
    </div>
    <router-view/>
    </v-app>
  </div>
</template>

<script>
  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      },
      created: function(){
        this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        this.$store.dispatch(logout)
        }
        throw err;
        });
        });
      }
    },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>