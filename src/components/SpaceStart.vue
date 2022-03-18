<template>
  <div class="space-start">
    <div class="space-start__btn" @click="startGame()">Start</div>
    <div class="space-start__countdown"></div>
    <div class="space-start__score" v-if="GETUSERSTATS.coins > 0">
      Coins: {{ GETUSERSTATS.coins }}
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
  &__btn {
    color: rgb(218, 218, 218);
    font-weight: 16;
    cursor: pointer;
    padding: 10px;
    border: 1px solid #fff;
  }

  &__score {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>