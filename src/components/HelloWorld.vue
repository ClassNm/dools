<template>
  <div class="hello">
    <Button type="primary" @click="modal6 = true" style="display:none;"></Button>
    <Modal
            v-model="modal6"
            title="免责说明书"
            :loading="loading"
            @on-ok="asyncOK">
      <div class="app">
        阿达哇大大大从妹妹打我么
      </div>
      <p>以毛泽东为代表的中国共产党人致力于解决党的思想路线问题。在抗日战争前期，
        毛泽东系统总结了中国革命实践中错误思想路线导致革命失败的经验教训，
        并向全党提出解决思想路线、思想方法、学习方法的任务。在《改造我们的学习》中，
        毛泽东把党的思想路线概括为“实事求是”，并解释说：“‘实事’就是客观存在着的一切事物，
        ‘是’就是客观事物的内部联系，即规律性，‘求’就是我们去研究”。从而确立了正确的党的思想路线。
        《党的若干历史问题的决议》和党的七大召开，标志着全党确立了正确的思想路线。
        但是，正确的思想路线的确立不是一劳永逸的，如1958年“大跃进”的失误就因为违背了正确的思想路线，
        而十年“文化大革命”则极大地破坏了正确的思想路线。粉碎“四人帮”以后，以邓小平为核心的第二代中央领导集体，
        旗帜鲜明地反对“两个凡是”，在全党开展真理标准问题大讨论，深刻阐述了坚持解放思想、
        在全党确立了解放思想、实事求是的思想路线。</p>
      <p>十三届四中全会以来，
        以江泽民为核心的第三代中央领导集体，坚持解放思想、实事求是，
        勇于和善于根据实践的要求进行理论创新，确立了解放思想、实事求是、与时俱进的思想路线，
        推动中国特色社会主义事业不断向前发展。2004年1月，胡锦涛同志在中央纪律检查委员会第三次全体会议上发表重要讲话，
        这对于我们在新形势下毫不动摇地坚持党的基本路线，具有重要的理论价值和指导意义</p>
      <h1>哦啊们我都按我才能哇哦弄那我们</h1>
      <h1 style="color: red">点击确定后，对话框将在 2秒 后关闭.</h1>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    // msg: String
  },
    data () {
        return {
            modal6: true,
            loading: true
        }
    },
    methods: {
        asyncOK () {
            setTimeout(() => {
                this.modal6 = false;
            }, 2000);
            // console.log('(#^.^#)')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
