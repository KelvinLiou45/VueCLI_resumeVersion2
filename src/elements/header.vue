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
        <div class="header_bumger" v-on:click='showBumgerList'>&#9776;</div>
        <div id="header_bumgerList">
          <nav>
            <ul>
              <li>
                <router-link to="/" exact-active-class="_active" v-on:click.native='closeList'>首頁</router-link>
              </li>
              <li>
                <router-link to="/introduce" exact-active-class="_active" v-on:click.native='closeList'>個人簡介</router-link>
              </li>
              <li>
                <router-link to="/experience" exact-active-class="_active" v-on:click.native='closeList'>學歷及經驗</router-link>
              </li>
              <li>
                <router-link to="/skill" exact-active-class="_active" v-on:click.native='closeList'>技能</router-link>
              </li>
              <li>
                <router-link to="/portfolio" exact-active-class="_active" v-on:click.native='closeList'>作品集</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  methods:{
    showBumgerList:function(){
      let bumgerList = document.getElementById("header_bumgerList");
      // alert(bumgerList.style.height);
      if(bumgerList.style.height != '0vh'){
        bumgerList.style.opacity = "0";
        bumgerList.style.height = "0vh";
      }
      else if(bumgerList.style.height == '0vh'){
        bumgerList.style.opacity = "1";
        bumgerList.style.height = "calc(100% - 80px)";
      }
    },
    closeList:function(){
      let bumgerList = document.getElementById("header_bumgerList");
      bumgerList.style.opacity = "0";
      bumgerList.style.height = "0vh";
    }
  }
}
</script>

<style lang="scss">
</style>
