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
import SpaceField from "@/components/Game/SpaceField.vue";
import SpaceStart from "@/components/Game/SpaceStart.vue";
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
    ...mapMutations(["ADDFIELDOBJECT", "ADDCOMET", "CLEAROBJECTS", "STOPGAME"]),
    addFieldObject1000: () => {},
    addComet2000: () => {},
    addComet300: () => {},
    addComet700: () => {},
    addFieldObject(type) {
      let objSetted = 0;
      let mainObjSize = this.GETGAMESTATS.sizes[type];
      //10 раз пытаемся найти свободное место для объекта, если не получается, не ставим его
      while (objSetted < 10) {
        let freeSpace = true;
        //тыкаем в небо (космос)
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

        //проверяем, есть ли место
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

        //ставим объект на поле
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
    //начинаем спавн объектов
    this.addFieldObject1000 = setInterval(this.addFieldObject, 1000, "trap");
    this.addComet2000 = setInterval(this.addComet, 2000);
    this.addComet300 = setInterval(this.addComet, 300);
    this.addComet700 = setInterval(this.addComet, 700);
    //при смене окна браузера останавливаем игру
    document.addEventListener(
      "visibilitychange",
      () => {
        if (!document.hidden) {
          this.STOPGAME();
          this.CLEAROBJECTS();
        }
      },
      false
    );
  },
  unmounted() {
    this.STOPGAME();
    //прекращаем спавн объектов
    clearInterval(this.addFieldObject1000);
    clearInterval(this.addComet2000);
    clearInterval(this.addComet300);
    clearInterval(this.addComet700);
  },
  watch: {
    ISGAMESTART: {
      //в начале игры спавним две монетки, новые спавнятся при подборе
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