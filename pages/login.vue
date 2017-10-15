<template>
    <div class="login-container">
        <div class="login">
            <h1>Please login</h1>
            <form @submit.prevent="login">
                <p class="error" v-if="error">{{ error }}</p>
                
                <p>Username: <input type="text" v-model="username" name="username" /></p>
                <p>Password: <input type="password" v-model="password" name="password" /></p>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
</template>

<script>


export default {

    middleware: [
        'anonymous'
    ],

    asyncData(){
        return {
            error: null,
            username: '',
            password: ''
        }
    },

    components: {},

    head: {
        title: 'Login'
    },

    methods: {
        async login(){
            try{
                await this.$store.dispatch('login', {
                    username: this.username,
                    password: this.password
                })

                this.$router.push('/');

                this.error = null
                this.username = ''
                this.password = ''
            }catch(e){
                this.error = e.message
            }
        }
    }

}
</script>