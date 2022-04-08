<template>
  <div
    class="space-coin"
    :style="{
      left: coordinates[0] + 'px',
      top: coordinates[1] + 'px',
      width: size + 'px',
      height: size + 'px',
    }"
  ></div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return { startSize: Number, startDecreasing: false };
  },
  props: {
    id: Number,
    coordinates: Array,
    size: Number,
    touched: Boolean,
  },
  watch: {
    touched: {
      handler(newValue) {
        if (newValue) {
          this.TAKECOIN(1);
          this.startDestroyObj();
          this.$emit("addCoin");
        }
      },
    },
  },
  mounted() {
    this.startSize = this.size;
  },
  computed: {
    ...mapGetters(["GETOBJECTSBYID"]),
  },
  methods: {
    ...mapMutations(["CHANGEOBJECTSIZE", "DELETEFIELDOBJECT", "TAKECOIN"]),

    destroingObj: () => {},
    startDestroyObj() {
      this.destroingObj = setInterval(this.destroyObj, 10);
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

      if (!this.startDecreasing) {
        if (sizeNow - this.startSize < 5) {
          sizeNow += 1;
        } else {
          this.startDecreasing = true;
        }
      } else {
        sizeNow -= 1;
      }

      this.CHANGEOBJECTSIZE({ id: this.id, size: sizeNow });
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
  border: 1px solid #ecdd10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 0.5px 0 0;
  font-weight: bold;
}
</style>