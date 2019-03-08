<template>
    <div class="volunteer">
        <div class="ui-breadcrumbs">
            <ul class="ui-breadcrumb ">
                <li>
                    <router-link to="/home">
                        <a href="">首页</a>
                    </router-link>
                </li>
                <li><span class="icon"><i title="单箭头右" class="iconfont"></i></span></li>
                <li class="active">志愿管理</li>
            </ul>
        </div>
        <div class="ui-box" v-if="flag">
            <div class="ui-box-container">
                <div class="ui-tiptext-container ui-tiptext-container-message" style="margin-bottom:10px; background:#eef6fa;">
                    <p class="ui-tiptext ui-tiptext-message" style="font-size:14px; width: 78px;margin: 0"  align="left">
                        <i title="提示" class="ui-tiptext-icon iconfont"></i>
                        <strong>说明</strong>
                    </p>
                    <p class="ui-tiptext ui-tiptext-follow" style="font-size:14px;float: left "  align="left">
                        1. 请注意各高校各报名类型的报名时间，您需要在志愿高校的报名时间内填报、确认志愿并上传签字盖章后的申请表。
                    </p>
                    <p class="ui-tiptext ui-tiptext-follow" style="font-size:14px; float: left"  align="left">
                        2. 对于“待补充材料”的志愿，您需要在高校指定的截止时间前重新确认志愿并重新完成上传签字盖章后的申请表。
                    </p>
                    <p class="ui-tiptext ui-tiptext-follow" style="font-size:14px; float: left;margin-left: 18px;"  align="left">
                        3. 您可以随时取消“待确认”、“待补充材料”和“报名未成功”的志愿，但对于已确认且未被审核的志愿，只能在高校的规定时间内取消志愿。不能取消已审核的志愿。
                    </p>
                </div>
                <div class="ui-tipbox ui-tipbox-stop m_bottom10">
                    <div class="ui-tipbox-icon">
                        <i class="iconfont" title="提示"></i>
                    </div>
                    <div class="ui-tipbox-content-simple">
                        <h3 class="ui-tipbox-title" style="color: #f00; width: 86px">暂无志愿信息</h3>
                    </div>
                </div>
                <router-link to="/volunteerNew">
                    <div class="text_center">
                        <!--<a href="https://gaokao.chsi.com.cn/zzbm/stu/zhiy/toselorg.action" class="ui-button ui-button-lceladon">添加志愿</a>-->
                        <!--<Button type="primary" @click="btn">添加志愿</Button>-->
                        <Button type="primary" @click="btn">添加志愿</Button>
                    </div>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods:{
            btn() {
                // router.push('/volunteer/volunteerNew')
                // router.push({path:'/volunteer/volunteerNew'})
                // console.log(1111)
            }
        },
        computed:{
            flag(){
                let pa = this.$route.path;
                if (
                    pa == '/volunteerNew' ||
                    pa == "/volunteerNew/applicationForm" ||
                    pa == "/additional" ||
                    pa == "/messaged" ||
                    pa == "/referrerT" ||
                    pa == "/applicationT" ||
                    pa == "/statement" ||
                    pa == "/mock" ||
                    pa == "/obstetrics"
                ){
                    console.log('2级路由');
                    return false;
                } else {
                    return true
                }
            }
        }
    }
</script>

<style scoped>
    .volunteer{
        padding: 10px;
        background: white;
    }
    .ui-breadcrumb {
        font-size: 0;
        padding: 0;
        width: 150px;
    }
    ul, li {
        list-style: none;
    }
    .ui-breadcrumb li {
        padding: 8px 4px;
    }
    .ui-breadcrumb li {
        color: #333;
        font-size: 14px;
        display: inline-block;
        *display: inline;
        *zoom: 1;
        vertical-align: top;
    }
    .ui-breadcrumb a {
        color: #333;
    }
    a {
        color: #333;
        text-decoration: none;
    }
    .ui-breadcrumb .icon .iconfont {
        font-size: 12px;
    }
    .iconfont {
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
    }
    .ui-breadcrumb li.active {
        color: #999;
    }

    .ui-box {
        zoom: 1;
        font-size: 12px;
        margin: 0;
        padding: 0;
        border-bottom: 0;
        /* box-shadow: 0px 1px 2px #dadad8; */
    }
    .ui-box-container {
        background: #fff;
        padding: 10px 0;
    }
    .ui-tiptext-container-message {
        word-wrap: break-word;
        word-break: break-all;
        border: 1px solid #b2e2ea;
        background: #e5f2f8;
    }
    .ui-tiptext-container {
        padding: 8px 12px;
        position: relative;
        zoom: 1;
        height: 100%;
        overflow: hidden;
        /*width: 500px;*/
    }
    .ui-tiptext-message .ui-tiptext-icon {
        color: #68b5e2;
    }
    .ui-tiptext .iconfont {
        font-size: 1.33em;
        line-height: 1em;
        text-shadow: 0 1px 0 #fff;
        position: relative;
        top: 2px;
        margin-right: 2px;
    }
    strong, b {
        font-weight: bold;
    }
    .ui-tiptext-follow {
        /*padding-left: 21px;*/
        display: block;
        /*margin-left: 20px;*/
        /*float: left;*/
    }
    .ui-tiptext {
        margin-left: 20px;
        color: #4D4D4D;
        position: relative;
        font-size: 12px;
        zoom: 1;
    }
    .ui-tipbox-stop {
        background: #FDEEE9;
        border: 1px solid #fadcd3;
    }
    .ui-tipbox {
        position: relative;
        zoom: 1;
        font-size: 12px;
        line-height: 22px;
    }
    .m_bottom10 {
        margin-bottom: 10px;
    }
    .ui-tipbox .ui-tipbox-icon {
        background: #fff;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 22px;
        left: 48px;
    }
    .ui-tipbox-stop .ui-tipbox-icon .iconfont {
        color: #f17975;
    }
    .ui-tipbox-icon .iconfont {
        font-size: 36px;
        position: absolute;
        top: -7px;
        left: -7px;
        width: 32px;
        height: 32px;
        line-height: 36px;
        text-shadow: 0 1px 0 #fff;
    }
    .iconfont {
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
    }
    .ui-tipbox-content-simple {
        margin: 22px 0 22px 88px;
    }
    .text_center {
        text-align: center;
        padding: 0;
    }
    a.ui-button-lceladon {
        line-height: 30px;
        height: 30px;
    }
    .ui-button, a.ui-button {
        display: inline-block;
        *display: inline;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        font-size: 14px;
        font-family: inherit;
        font-weight: 700;
        border-radius: 2px;
        padding: 0 20px;
        *zoom: 1;
        *overflow: visible;
        background-image: none;
    }
    .ui-box a {
        color: white;
    }
    .ui-button-lceladon {
        height: 32px;
    }
    .ui-button-lceladon, .ui-button-mceladon, .ui-button-sceladon {
        color: #fff;
        text-shadow: 0 -1px 1px rgba(0,0,0,0.25);
        border: 1px solid #4498ae;
        background-color: #50aac2;
    }
    a {
        color: #333;
        text-decoration: none;
    }


</style>