// firebase imports
import { database } from '../../firebase/config'

import { ref, set, onValue } from 'firebase/database'

export default {
    state: {
        leaders: {},
    },
    getters: {
        GETLEADERS: state => state.leaders,
    },
    mutations: {
        SETLEADERS(state, data) {
            state.leaders = data
        },
    },
    actions: {
        async ADDLEADER(context, { gameId, email, coins }) {
            try {
                await set(ref(database, 'leaders/' + gameId), {
                    email: email,
                    coins: coins
                });
            } catch (e) {
                throw new Error(e)
            }
        },

        async FILLUSERS(context) {
            const starCountRef = ref(database, 'leaders/');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                context.commit('SETLEADERS', data)
            });
        },
    }
}
