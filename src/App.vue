<template>
  <div id="nav">
    <router-link to="/" class="main-link">
      <div class="neone-text">
        <span class="neone-text__txt">Space cowboy</span>
        <span class="neone-text__shadow">Space cowboy</span>
        <span class="neone-text__gradient"></span>
      </div>
      <div class="neone-text neone-text_addition">
        <span class="neone-text__txt">One leg edition</span>
        <span class="neone-text__shadow">One leg edition</span>
        <span class="neone-text__gradient"></span>
      </div>
    </router-link>
    <router-link to="/score" class="info-link">
      <div class="neone-text">
        <span class="neone-text__txt">Score</span>
        <span class="neone-text__shadow">Score</span>
        <span class="neone-text__gradient"></span>
      </div>
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#nav {
  padding: 10px;
  position: relative;
  display: flex;
  margin-bottom: 60px;

  a {
    text-decoration: none;
    color: #c91515;
  }
}
.info-link {
  position: absolute;
  top: 30px;
  right: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .neone-text {
    font-size: 40px;
  }
}

.main-link {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
