<template>
  <div
    class="spaceship"
    :style="{
      left: currentX + 'px',
      top: currentY + 'px',
      width: shipSize + 'px',
      height: shipSize + 'px',
    }"
  ></div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  props: {
    finishX: Number,
    finishY: Number,
  },
  data() {
    return {
      currentX: 200,
      currentY: 200,
    };
  },
  methods: {
    ...mapMutations(["MOVESHIP", "SETTOUCHOBJECT"]),
    move() {
      let xLength = this.finishX - this.currentX;
      let yLength = this.finishY - this.currentY;
      if (Math.abs(xLength) > 2 || Math.abs(yLength) > 2) {
        let summLength = Math.abs(xLength) + Math.abs(yLength);
        let xDeg = 1 / (summLength / Math.abs(xLength));
        let yDeg = 1 - xDeg;
        let factor = Math.sqrt(2) - (Math.sqrt(2) - 1) * Math.abs(xDeg - 0.5);
        xDeg *= factor;
        yDeg *= factor;
        if (xLength > 0) {
          this.currentX += this.GETGAMESTATS.speed * xDeg;
        } else {
          this.currentX -= this.GETGAMESTATS.speed * xDeg;
        }
        if (yLength > 0) {
          this.currentY += this.GETGAMESTATS.speed * yDeg;
        } else {
          this.currentY -= this.GETGAMESTATS.speed * yDeg;
        }
        this.MOVESHIP([this.currentX, this.currentY]);
      }

      this.checkObjTouch();
    },
    checkObjTouch() {
      for (const obj of this.GETOBJECTS) {
        if (
          Math.abs(this.currentX - obj.coordinates[0]) <
            obj.size / 2 + this.shipSize / 2 - 1 &&
          Math.abs(this.currentY - obj.coordinates[1]) <
            obj.size / 2 + this.shipSize / 2 - 1
        ) {
          this.SETTOUCHOBJECT({ id: obj.id, value: true });
        }
      }
    },
  },
  computed: {
    ...mapGetters(["GETGAMESTATS", "GETOBJECTS"]),
    shipSize: function () {
      return this.GETGAMESTATS.sizes.ship;
    },
  },
  mounted() {
    this.currentX = this.GETGAMESTATS.field.width / 2;
    this.currentY = this.GETGAMESTATS.field.height / 2;
    setInterval(this.move, 10);
  },
};
</script>

<style lang="scss" scoped>
.spaceship {
  position: absolute;
  transform: translate(-50%, -50%);
  border: 1px solid #fff;
  border-radius: 50%;
  pointer-events: none;
}
</style>