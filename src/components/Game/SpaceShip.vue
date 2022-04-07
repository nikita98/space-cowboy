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
      //расстояние между мышью и кораблём (катеты)
      let xLength = this.finishX - this.currentX;
      let yLength = this.finishY - this.currentY;
      if (Math.abs(xLength) > 2 || Math.abs(yLength) > 2) {
        //считаем гипотенузу без квадратов (я не знаю, почему это работает)
        let summLength = Math.abs(xLength) + Math.abs(yLength);
        //коэфицент, который тем больше, чем ближе угл к любой диагонали
        //нужен для ускорения, чтобы время пути по катетам было больше, чем время пути по гипотенузе
        let xDeg = 1 / (summLength / Math.abs(xLength));
        let yDeg = 1 - xDeg;
        //чем ближе мы к горизонтальному углу, тем больше скорость (от 1го до корня из 2х)
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
    //проверяем, врезались ли мы куда-то
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
  background-color: #fff;
  border-radius: 50%;
  pointer-events: none;
}
</style>