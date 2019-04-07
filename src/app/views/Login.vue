<template>  
    <div>    
        <h2>Login</h2>    
        <form @submit.prevent="login">    
            <input required v-model="username" type="text" name="username" /><br>    
            <input required v-model="password" type="password" name="password" /><br>    
            <input type="submit" value="Login" />    
        </form>    
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
