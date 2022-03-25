// firebase imports
import { auth } from '../../firebase/config'

import {
    setPersistence,
    browserLocalPersistence,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'

export default {
    state: {
        user: null,
    },
    getters: {
        GETUSER: state => state.user,
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            console.log('user state changed:', state.user)
        },
    },
    actions: {
        async REGISTRATION(context, { email, password }) {
            setPersistence(auth, browserLocalPersistence)
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                context.commit('setUser', { email, password })
            } catch (e) {
                throw new Error(e)
            }

        },

        async LOGIN(context, { email, password }) {
            setPersistence(auth, browserLocalPersistence)
            try {
                await signInWithEmailAndPassword(auth, email, password)
                context.commit('setUser', { email, password })
            } catch (e) {
                throw new Error(e)
            }
        },

        async LOGOUT(context) {
            await signOut(auth)
            context.commit('setUser', null)
        }
    }
}
