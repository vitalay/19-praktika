
import axios from 'axios'
const TOKEN_KEY = 'jwt-token'

export  default {
    namespaced: true,
    state() {
        return{
             token: localStorage.getItem(TOKEN_KEY)
        }
       
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem(TOKEN_KEY) 
        
        }
    },
    actions: {
        async login({commit}, payload) {
          await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=process.env.VUE_APP_FB_KEY
           `)
            
            console.log(payload) 
        //commit('setToken', 'TEST TOKEN')  
        }
        },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticated(_, getters) {
            return !!getters.token
        }
    },
    
}
