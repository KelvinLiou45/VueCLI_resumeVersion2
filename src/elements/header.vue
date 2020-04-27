<template>
  <div id="app">
    <header>
      <div class="header_inner">
        <div class="header_logo">
          <div class="header_logo_1">
            <p>KELVIN</p>
          </div>
          <div class="header_logo_2">
            <p>Front</p>
            <p>End</p>
            <p>Engineer</p>
          </div>
        </div>
        <nav>
          <ul class="header_list">
            <li>
              <router-link to="/" exact-active-class="_active">首頁</router-link>
              <!--home-->
            </li>
            <li>
              <router-link to="/introduce" exact-active-class="_active">個人簡介</router-link>
              <!--introduce-->
            </li>
            <li>
              <router-link to="/experience" exact-active-class="_active">學歷及經驗</router-link>
              <!--experience-->
            </li>
            <li>
              <router-link to="/skill" exact-active-class="_active">技能</router-link>
              <!--skill-->
            </li>
            <li>
              <router-link to="/portfolio" exact-active-class="_active">作品集</router-link>
              <!--portfolio-->
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
</script>

<style lang="scss">
</style>
