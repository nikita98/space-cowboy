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
    actions: {
        async ADDLEADER({ userId, email, coins }) {
            try {
                await set(ref(database, 'leaders/' + userId), {
                    email: email,
                    coins: coins
                });
            } catch (e) {
                throw new Error(e)
            }
        },

        async FILLUSERS() {
            const starCountRef = ref(database, 'posts/' + postId + '/starCount');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                updateStarCount(postElement, data);
            });
        },
    }
}
