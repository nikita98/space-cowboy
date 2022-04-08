<template>
  <div
    class="space-trap"
    :style="{
      left: coordinates[0] + 'px',
      top: coordinates[1] + 'px',
      width: size + 'px',
      height: size + 'px',
    }"
  ></div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    id: Number,
    coordinates: Array,
    size: Number,
    touched: Boolean,
  },
  computed: {
    ...mapGetters(["GETGAMESTATS", "GETOBJECTSBYID"]),
  },
  watch: {
    touched: {
      handler(newValue) {
        if (newValue) {
          this.TAKEDMG(2);
          this.SETTOUCHOBJECT({ id: this.id, value: false });
        }
      },
    },
  },
  methods: {
    ...mapMutations([
      "DELETEFIELDOBJECT",
      "CHANGEOBJECTSIZE",
      "TAKEDMG",
      "SETTOUCHOBJECT",
    ]),

    destroingObj: () => {}, // Мина сжимается и исчезает
    startDestroyObj() {
      this.destroingObj = setInterval(this.destroyObj, 200);
    },
    destroyObj() {
      let sizeNow = this.size;
      if (!this.GETOBJECTSBYID(this.id)) {
        clearInterval(this.startDestroyObj);
        return;
      }
      if (sizeNow < 5) {
        this.DELETEFIELDOBJECT(this.id);
        clearInterval(this.startDestroyObj);
        return;
      }

      sizeNow -= 1;
      this.CHANGEOBJECTSIZE({ id: this.id, size: sizeNow });
    },
  },

  mounted() {
    setTimeout(this.startDestroyObj, 4000); // Начинает сжиматься через 4 секунды после появления
  },
};
</script>

<style lang="scss" scoped>
.space-trap {
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  width: 25px;
  height: 25px;
  border: 1px solid #ec2a10;
  animation-name: reversRotation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &:before,
  &:after {
    content: "";
    border: 1px solid #ec2a10;
    height: 100%;
    width: 100%;
    background: inherit;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:before {
    animation-name: rotation;
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  &:after {
    animation-name: rotation;
    animation-duration: 1.7s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes reversRotation {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate(-180deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
</style>