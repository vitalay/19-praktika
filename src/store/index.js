import { createStore, createLogger } from 'vuex'
import auth from './modules/auth_module'

  const plugins = []

 if (process.env.NODE_ENV !== 'production') {
    plugins.push(createLogger())

}

export default createStore({
    plugins,
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        auth
    }
})