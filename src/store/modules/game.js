export default {
  state: {
    isGameStart: false,
    isDocVisible: true,
    ship: [0, 0],
    gameStats: {
      sizes: {
        ship: 10,
        trap: 35,
        comet: 35,
        coin: 20,
      },
      isGameStart: false,
      speed: 2,
      invnsibleTime: 100,
      field: { width: 400, height: 500 },
      trapDamage: 5,
      coinPrice: 10
    },
    userStats: {
      maxHp: 300,
      hp: 0,
      coins: 0,
    },
    fieldObjects: [],

  },
  getters: {
    ISGAMESTART: state => state.isGameStart,
    ISDOCVISIBLE: state => state.isGameStart,
    GETGAMESTATS: state => state.gameStats,
    GETUSERSTATS: state => state.userStats,
    GETSHIP: state => state.ship,
    GETOBJECTS: state => state.fieldObjects,
    GETOBJECTSBYID: state => id => {
      return state.fieldObjects.find(
        fieldObject => fieldObject.id === id
      );
    },
    GETOBJECTSBYTYPE: state => type => {
      return state.fieldObjects.filter(
        fieldObject => fieldObject.type === type
      );
    },
  },
  mutations: {
    MOVESHIP(state, ship) {
      state.ship = ship;
    },
    SETTOUCHOBJECT(state, { id, value }) {
      let obj = state.fieldObjects.find(
        fieldObject => fieldObject.id === id
      )
      obj.touched = value
    },
    CHANGEOBJECTSIZE(state, { id, size }) {
      let obj = state.fieldObjects.find(
        fieldObject => fieldObject.id === id
      )
      obj.size = size
    },
    MOVEOBJECT(state, { id, coordinates }) {
      let obj = state.fieldObjects.find(
        fieldObject => fieldObject.id === id
      )
      obj.coordinates = coordinates
    },
    ADDFIELDOBJECT(state, objStats) {
      let fieldObject = {
        type: objStats.type,
        coordinates: objStats.coordinates,
        size: objStats.size,
        touched: false,
        id: Math.random() * Math.pow(10, 16),
      };
      state.fieldObjects.push(fieldObject);
    },
    ADDCOMET(state) {
      let comet = {
        type: 'comet',
        touched: false,
        size: state.gameStats.sizes.comet,
        coordinates: [0, 0],
        id: Math.random() * Math.pow(10, 16),
      };
      state.fieldObjects.push(comet);
    },
    DELETEFIELDOBJECT(state, id) {
      let index = state.fieldObjects.findIndex(
        fieldObject => fieldObject.id === id
      )
      state.fieldObjects.splice(index, 1)
    },
    TAKEDMG(state, dmg) {
      state.userStats.hp -= dmg;
      if (state.userStats.hp <= 0) {
        state.isGameStart = false
      }
    },
    TAKECOIN(state, coins) {
      state.userStats.coins += coins;
    },
    STARTGAME(state) {
      state.isGameStart = true
    },
    STOPGAME(state) {
      state.isGameStart = false
    },
    SETDOCVISIBLE(state, value) {
      state.isDocVisible = value
    },
    CLEAROBJ(state) {
      state.fieldObjects = [];
    },
    REFRESH(state) {
      state.userStats.hp = state.userStats.maxHp;
      state.userStats.coins = 0;
      state.fieldObjects = [];
    },
  },
  actions: {
  },
}
