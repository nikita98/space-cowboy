<template>
  <div class="HP">
    <div class="HP__name">HP</div>
    <div class="HP__value">
      <div
        class="HP__value-shadow"
        :style="{ width: 100 - (hp / maxHp) * 100 + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hp: Number,
    maxHp: Number,
  },
};
</script>

<style lang="scss" scoped>
.HP {
  display: flex;
  width: 50%;
  margin-right: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
  &__name {
    color: #ec2a10;
  }
  &__value {
    width: 100%;
    margin-left: 10px;
    background: linear-gradient(
      90deg,
      rgba(228, 1, 1, 1),
      rgba(255, 150, 30, 1) 33%,
      rgba(235, 255, 40, 1) 66%,
      rgba(24, 228, 0, 1) 87%
    );
    position: relative;
    overflow: hidden;
  }
  &__value-shadow {
    background: #000;
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
  }
}
</style>