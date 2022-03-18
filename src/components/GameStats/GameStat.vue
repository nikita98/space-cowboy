<template>
  <div class="game-stat">
    <div class="game-stat__name">{{ name }}</div>
    <div class="game-stat__value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: Number,
  },
};
</script>

<style lang="scss" scoped>
.game-stat {
  color: #ecdd10;
  display: flex;
  width: 50%;
  justify-content: space-between;
}
</style>