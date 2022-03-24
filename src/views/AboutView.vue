<template>
  <div class="content">
    <LeaderBoard />
  </div>
</template>

<script>
import LeaderBoard from "@/components/Auth/LeaderBoard.vue";

export default {
  name: "HomeView",
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
</style>