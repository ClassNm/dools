<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home"></router-link>
      <!--<router-link to="/home"></router-link>-->
      <!--<router-link to="/about">About</router-link>-->
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  /*padding: 30px;*/

}
.ivu-menu-submenu{

}
.ivu-menu-submenu-title{
  padding: 9px 24px;
  height: 48px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
