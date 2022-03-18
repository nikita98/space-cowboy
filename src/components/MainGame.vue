<template>
  <div class="game">
    <GameStats />
    <div class="game__wrapper">
      <SpaceStart v-if="!ISGAMESTART" />
      <SpaceField @addCoin="addFieldObject('coin')" />
    </div>
  </div>
</template>

<script>
import SpaceField from "@/components/SpaceField.vue";
import SpaceStart from "@/components/SpaceStart.vue";
import GameStats from "@/components/GameStats/GameStats.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    SpaceField,
    GameStats,
    SpaceStart,
  },
  computed: {
    ...mapGetters(["GETOBJECTS", "GETSHIP", "GETGAMESTATS", "ISGAMESTART"]),
  },
  methods: {
    ...mapMutations(["ADDFIELDOBJECT", "ADDCOMET"]),
    addFieldObject(type) {
      let objSetted = 0;
      let mainObjSize = this.GETGAMESTATS.sizes[type];
      while (objSetted < 10) {
        let freeSpace = true;
        let coordinates = [
          mainObjSize -
            10 +
            Math.random() *
              (this.GETGAMESTATS.field.width - mainObjSize * 2 + 20),
          mainObjSize -
            10 +
            Math.random() *
              (this.GETGAMESTATS.field.height - mainObjSize * 2 + 20),
        ];

        if (
          Math.abs(coordinates[0] - this.GETSHIP[0]) < mainObjSize + 10 &&
          Math.abs(coordinates[1] - this.GETSHIP[1]) < mainObjSize + 10
        ) {
          freeSpace = false;
        }
        for (const obj of this.GETOBJECTS) {
          if (
            Math.abs(coordinates[0] - obj.coordinates[0]) < obj.size &&
            Math.abs(coordinates[1] - obj.coordinates[1]) < obj.size
          ) {
            freeSpace = false;
          }
        }
        if (freeSpace) {
          let objStats = {
            type,
            coordinates,
            size: this.GETGAMESTATS.sizes[type],
          };
          this.ADDFIELDOBJECT(objStats);
          objSetted += 10;
        } else {
          objSetted += 1;
        }
      }
    },
    addComet() {
      this.ADDCOMET();
    },
  },
  mounted() {
    setInterval(this.addFieldObject, 1000, "trap");
    setInterval(this.addComet, 2000);
    setInterval(this.addComet, 300);
    setInterval(this.addComet, 700);
    // setInterval(this.addFieldObject, 900, "coin");
    // this.addFieldObject("trap");
  },
  watch: {
    ISGAMESTART: {
      handler(newValue) {
        if (newValue) {
          this.addFieldObject("coin");
          this.addFieldObject("coin");
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.game {
  &__wrapper {
    position: relative;
    padding: 1px;
    background: rgb(47, 250, 234);
    background: linear-gradient(
      60deg,
      rgba(47, 250, 234, 1) 0%,
      rgba(36, 36, 238, 1) 28%,
      rgba(255, 53, 53, 1) 66%,
      rgba(56, 255, 65, 1) 87%
    );
  }
}
</style>