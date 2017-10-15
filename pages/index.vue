<template>
    <div class="app">
        <button type="button" v-on:click="logout">Logout</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    layout: 'master',

    middleware: [
        'authenticated'
    ],

    components: {

    },

    computed: mapGetters([
        'isAuthenticated',
        'loggedUser'
    ]),

    asyncData(){
        return {}
    },

    head: {
        title: 'Home',
        meta: [],
        link: []
    },
    
    methods: {
        async logout(){
            try{
                await this.$store.dispatch('logout')
                this.$router.push('/login')
            }catch(e){
                this.error = e.message
                console.log(e)
            }
        }
    }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>