// firebase imports
import { auth } from '../../firebase/config'

import {
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
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                context.commit('setUser', { email, password })
            } catch (e) {
                throw new Error(e)
            }

        },

        async LOGIN(context, { email, password }) {
            try {
                await signInWithEmailAndPassword(auth, email, password)
                context.commit('setUser', { email, password })
            } catch (e) {
                throw new Error(e)
            }
        },

        // async PERSISTENCE({ dispatch }) {
        //     setPersistence(auth, browserLocalPersistence)
        //         .then(function () { dispatch('LOGIN'); })
        //         .catch(function (e) {
        //             throw new Error(e)
        //         });
        // },

        async LOGOUT(context) {
            await signOut(auth)
            context.commit('setUser', null)
        }
    }
}
