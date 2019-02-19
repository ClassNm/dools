<template>
  <div class="home">
      <div class="store">
          <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
          <Header></Header>
          <box></box>
          <Title></Title>
          <p>appName:{{appName}}</p>
          <button @click="handleChangeAppName">修改appName</button>
      </div>
      <!--<router-view></router-view>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

/*头部 固定*/
import Header from '../components/common/header'
/*底部 固定*/
import Title from '../components/common/title'


/* 中间  内容*/
import Box from '../components/link/box'

export default {
  name: 'home',
  components: {
      // HelloWorld,
      Header,
      Title,
      Box
  },
    computed:{
        appName(){
            return this.$store.state.appName
        }
    },
    methods:{
        handleChangeAppName(){
            this.$store.commit('SET_APP_NAME','NEW_APPNAME')
        }
    }
}
</script>
<style scoped>
    .store{
        margin: 0 auto;
        overflow: hidden;
    }
</style>
