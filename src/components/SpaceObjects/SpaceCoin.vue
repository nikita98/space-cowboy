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
import { mapMutations } from "vuex";

export default {
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
          this.DELETEFIELDOBJECT(this.id);
          this.$emit("addCoin");
        }
      },
    },
  },
  methods: {
    ...mapMutations(["DELETEFIELDOBJECT", "TAKECOIN"]),
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