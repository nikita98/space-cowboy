<template>
  <div class="leader">
    <div class="leader__name">{{ name }}asd</div>
    <div class="leader__score">{{ score }}123</div>
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
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>