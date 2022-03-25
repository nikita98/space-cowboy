import auth from './modules/auth'
import database from './modules/database'
import game from './modules/game'
import { createStore } from 'vuex'

export default createStore({
  modules: {
    auth, game, database
  }
})


