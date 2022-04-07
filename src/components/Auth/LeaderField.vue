<template>
  <div class="leader">
    <div class="leader__name">{{ email }}</div>
    <div class="leader__score">{{ coins }}</div>
  </div>
</template>

<script>
export default {
  props: {
    email: String,
    coins: Number,
  },
};
</script>

<style lang="scss" scoped>
.leader {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  transform: perspective(200px) rotateX(30deg);
  font-size: 30px;
  &__name {
    margin-right: 20px;
  }
}
</style>