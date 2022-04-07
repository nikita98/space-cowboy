<template>
  <div class="space-start">
    <div class="btn" @click="startGame()">Start</div>
    <div
      class="space-start__score-link btn"
      @click="goToAuth"
      v-if="GETUSERSTATS.coins > 0"
    >
      Save score
    </div>
    <div class="space-start__countdown"></div>
    <div class="space-start__top">
      <div class="space-start__score" v-if="GETUSERSTATS.coins > 0">
        Coins: {{ GETUSERSTATS.coins }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["REFRESH", "STARTGAME"]),
    startGame() {
      this.STARTGAME();
      this.REFRESH();
    },
    goToAuth() {
      this.$router.push({ name: "score", params: { startAuth: "auth" } });
    },
  },
  computed: {
    ...mapGetters(["GETUSERSTATS"]),
  },
};
</script>

<style lang="scss" scoped>
.space-start {
  z-index: 1;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__top {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translate(-50%);
  }

  &__score-link {
    margin-top: 20px;
  }
}
</style>