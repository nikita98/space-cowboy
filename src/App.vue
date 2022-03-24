<template>
  <div id="app">
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
      <router-link to="/about" class="info-link">
        <div class="neone-text">
          <span class="neone-text__txt">Score</span>
          <span class="neone-text__shadow">Score</span>
          <span class="neone-text__gradient"></span>
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
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

.neone-text {
  font-family: "Permanent Marker";
  font-size: 60px;
  position: relative;
  margin: auto;
  display: inline-flex;

  &__txt {
    color: #fff;
    padding: 10px;
    // text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #5271ff,
    //   0 0 82px #5271ff, 0 0 92px #5271ff, 0 0 102px #5271ff, 0 0 151px #5271ff;
  }

  &__shadow {
    color: #fff;
    position: absolute;
    top: 10px;
    left: 10px;
    mix-blend-mode: difference;
    filter: blur(1px);
  }

  &__gradient {
    background: linear-gradient(
      90deg,
      rgba(201, 21, 173, 1) 0%,
      rgba(15, 1, 171, 1) 60%,
      rgba(30, 155, 185, 1) 100%
    );
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    mix-blend-mode: color;
  }
}

.neone-text_addition {
  position: absolute;
  left: 71%;
  top: 74%;
  transform: rotate(-16deg);
  font-size: 25px;
  white-space: nowrap;
  background-color: #000;
  border: 1px solid #000;
  // text-shadow: 0 0 7px #c91515, 0 0 10px #c91515, 0 0 21px #c91515, 0 0 42px;
}
</style>
