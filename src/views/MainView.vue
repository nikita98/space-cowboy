<template>
  <div class="content">
    <MainGame />
  </div>
</template>

<script>
// @ is an alias to /src
import MainGame from "@/components/Game/MainGame.vue";

export default {
  name: "MainView",
  components: {
    MainGame,
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
