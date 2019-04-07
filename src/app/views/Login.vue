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
class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
}
export default {
    data(){
        return {
            username : '',
            password : '',
            user : new User()
        }
    },
    methods: {
        login(){
            this.user.username = this.username;
            this.user.password = this.password;
            fetch('/login',{
                method: 'POST',
                body: JSON.stringify(this.user),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
            .then(res => console.log(res))
        }
    }
}
</script>
