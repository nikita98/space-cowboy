<template>
  <div class="content">
    <div class="abot-bg"></div>
    <LeaderBoard />
  </div>
</template>

<script>
import LeaderBoard from "@/components/Auth/LeaderBoard.vue";

export default {
  name: "ScoreView",
  components: {
    LeaderBoard,
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.abot-bg {
  position: fixed;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(28, 0, 94, 1) 0%,
    rgba(28, 0, 94, 1) 50%,
    rgba(0, 1, 1, 0) 100%
  );

  height: 60vh;
  width: 100%;
  z-index: 2;
}
</style>