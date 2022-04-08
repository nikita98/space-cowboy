<template>
  <div
    class="space-field"
    @mousemove="mousemove"
    :style="{
      width: this.GETGAMESTATS.field.width + 'px',
      height: this.GETGAMESTATS.field.height + 'px',
    }"
  >
    <SpaceShip :finishX="x" :finishY="y" />
    <SpaceTrap
      v-for="obj in GETOBJECTSBYTYPE('trap')"
      :key="obj.id"
      :id="obj.id"
      :size="obj.size"
      :touched="obj.touched"
      :coordinates="obj.coordinates"
    />
    <SpaceCoin
      v-for="obj in GETOBJECTSBYTYPE('coin')"
      :key="obj.id"
      :id="obj.id"
      :size="obj.size"
      :touched="obj.touched"
      :coordinates="obj.coordinates"
      @addCoin="addCoin"
    />
    <SpaceComet
      v-for="obj in GETOBJECTSBYTYPE('comet')"
      :key="obj.id"
      :id="obj.id"
      :size="obj.size"
      :touched="obj.touched"
    />
  </div>
</template>

<script>
import SpaceShip from "@/components/Game/SpaceShip.vue";
import SpaceTrap from "@/components/SpaceObjects/SpaceTrap.vue";
import SpaceCoin from "@/components/SpaceObjects/SpaceCoin.vue";
import SpaceComet from "@/components/SpaceObjects/SpaceComet.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SpaceShip,
    SpaceTrap,
    SpaceCoin,
    SpaceComet,
  },
  data() {
    return {
      x: 200,
      y: 200,
    };
  },
  computed: {
    ...mapGetters(["GETOBJECTS", "GETGAMESTATS", "GETOBJECTSBYTYPE"]),
  },
  methods: {
    mousemove(e) {
      this.x = e.clientX - this.$el.getBoundingClientRect().left;
      this.y = e.clientY - this.$el.getBoundingClientRect().top;
    },
    addCoin() {
      this.$emit("addCoin");
    },
  },
  mounted() {
    this.x = this.GETGAMESTATS.field.width / 2;
    this.y = this.GETGAMESTATS.field.height / 2;
  },
};
</script>

<style lang="scss" scoped>
.space-field {
  // кастомный курсор
  cursor: url("@/assets/c3.cur") 11 11, pointer;
  position: relative;
  background-color: #000;
  overflow: hidden;
}
</style>