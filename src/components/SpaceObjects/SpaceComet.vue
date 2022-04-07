<template>
  <div
    class="space-coin"
    :style="{
      left: xPos + 'px',
      top: y + 'px',
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
    size: Number,
    touched: Boolean,
  },
  data() {
    return {
      x: -200,
      Yfactor: 50,
      Xfactor: 200,
      side: true, //отражение траектории по оси X
      center: [200, 200], //центр пораболы, по которой летит комета
    };
  },
  mounted() {
    this.center = [
      Math.random() * this.GETGAMESTATS.field.width,
      Math.random() * this.GETGAMESTATS.field.height,
    ];
    this.Yfactor = Math.random() * 300 + 50;
    this.Xfactor = Math.random() * this.GETGAMESTATS.field.width;
    this.center[1] *= Math.random();
    this.x = -this.Xfactor;
    this.side = Math.random() > 0.5 ? true : false;
    this.startMoving = setInterval(this.move, 20);
  },
  computed: {
    ...mapGetters(["GETGAMESTATS", "GETOBJECTSBYID"]),
    y: function () {
      return (
        ((this.x + this.center[0]) * (this.x + this.center[0])) / this.Yfactor +
        this.center[1]
      );
    },
    xPos: function () {
      if (this.side) {
        return this.GETGAMESTATS.field.width - this.x - this.Xfactor;
      } else {
        return this.x + this.Xfactor;
      }
    },
  },
  watch: {
    touched: {
      handler(newValue) {
        if (newValue) {
          this.TAKEDMG(1);
          this.SETTOUCHOBJECT({ id: this.id, value: false });
        }
      },
    },
  },
  methods: {
    ...mapMutations([
      "DELETEFIELDOBJECT",
      "TAKEDMG",
      "MOVEOBJECT",
      "SETTOUCHOBJECT",
    ]),
    startMoving: () => {},

    move() {
      if (!this.GETOBJECTSBYID(this.id)) {
        clearInterval(this.startMoving);
        return;
      }
      if (this.x > this.GETGAMESTATS.field.width) {
        this.DELETEFIELDOBJECT(this.id);
        clearInterval(this.startMoving);
        return;
      }
      this.x += 2;
      let coordinates = [this.xPos, this.y];
      this.MOVEOBJECT({ id: this.id, coordinates: coordinates });
    },
  },
};
</script>

<style lang="scss" scoped>
.space-coin {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border: 1px solid #10ec6c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 0.5px 0 0;
  font-weight: bold;
}
</style>