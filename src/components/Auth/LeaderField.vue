<template>
  <div class="leader">
    <div class="leader__name">{{ name }}asdsadss@adsss/ru</div>
    <div class="leader__score">{{ score }}222</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    score: Number,
  },
};
</script>

<style lang="scss" scoped>
.leader {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  transform: perspective(200px) rotateX(40deg);
  font-size: 30px;
  &__name {
    margin-right: 20px;
  }
}
</style>