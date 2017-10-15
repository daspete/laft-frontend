import axios from 'axios'
import { setToken, unsetToken } from '~/utils/auth'

export const state = () => ({
    user: null
})

export const mutations = {
    SET_USER: function(state, user){
        state.user = user || null

        if(typeof user !== 'undefined' && user !== null && typeof user.token !== 'undefined'){
            setToken(user.token);
        }   
    }
}

export const getters = {
    isAuthenticated(state){
        return !!state.user
    },

    loggedUser(state){
        return state.user
    }
}

export const actions = {

    async login({commit}, {username, password}){
        try{
            const {data} = await axios.post('http://api.nuxt.dev/authenticate', { username, password })
            commit('SET_USER', data)
        }catch(e){
            if(e.response && e.response.status === 401){
                throw new Error('bad credentials')
            }

            throw e
        }
    },

    async logout({commit}){
        await axios.post('http://api.nuxt.dev/logout')
        commit('SET_USER', null)
        unsetToken()
    }
}


