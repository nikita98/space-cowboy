<template>
  <div class="game-stats">
    <StatHP :hp="GETUSERSTATS.hp" :maxHp="GETUSERSTATS.maxHp" />
    <GameStat :name="'Coins'" :value="GETUSERSTATS.coins" />
  </div>
</template>

<script>
import GameStat from "@/components/GameStats/GameStat.vue";
import StatHP from "@/components/GameStats/StatHP.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    StatHP,
    GameStat,
  },
  computed: {
    ...mapGetters(["GETGAMESTATS", "GETUSERSTATS"]),
  },
};
</script>

<style lang="scss" scoped>
.game-stats {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>