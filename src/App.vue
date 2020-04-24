<template>
  <div id="app">
    <headerComponent/>
    <router-view></router-view>
    <footerComponent/>
  </div>
</template>

<script>

import './assets/css/app.scss' //引入SCSS
import headerComponent from "./elements/header"
import footerComponent from "./elements/footer"

export default {
  name: 'App',
  components: {
    headerComponent,
    footerComponent
  }
}
</script>

<style>

</style>
