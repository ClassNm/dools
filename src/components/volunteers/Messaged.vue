<template>
    <div>
        <headerT></headerT>
        <div class="ui-box-container ui-box-zhiy">
            <div class="ui-tiptext-container ui-tiptext-container-message m_bottom10">
                <p class="ui-tiptext ui-tiptext-message">
                    <i class="ui-tiptext-icon iconfont" title="提示"></i>
                    请为该志愿添加社会活动、获奖记录和专利的证明材料，只有在此处添加后志愿高校才能看到您的证明材料
                </p>
            </div>
            <div class="ui-tiptext-container ui-tiptext-container-message m_bottom10">
                <p class="ui-tiptext ui-tiptext-message">
                    <i class="ui-tiptext-icon iconfont" title="提示" style="font-size: 18px;"></i>来自于 <span style="color: #c30;font-weight: 700">{{schoolName}}</span> 的说明：
                </p>
                <p class="ui-tiptext ui-tiptext-follow">
                    高中阶段三项以内具有代表性的获奖记录，参与的三项以内具有代表性的社会活动，不可多填。
                </p>
            </div>
            <div class="jbxxhjtitle text_center">高中期间参与的社会活动</div>
            <div class="text_center color-999">尚未添加社会活动</div>
            <div class="text_center" style="margin: 15px 0;">
                <!--<a class="ui-button ui-button-lgreen select" href="javascript:;">+ 添加社会活动</a>-->
                <Button type="success" class="ui-button ui-button-lgreen select">+ 添加社会活动</Button>
            </div>
            <div class="jbxxhjtitle text_center">高中期间的获奖记录</div>
            <div class="text_center color-999">尚未添加获奖记录</div>
            <div class="text_center" style="margin: 15px 0;">
                <!--<a class="ui-button ui-button-lgreen select" href="javascript:;">+ 添加获奖记录</a>-->
                <Button type="success" class="ui-button ui-button-lgreen select">+ 添加获奖记录</Button>
            </div>
            <div class="jbxxhjtitle text_center">高中期间获得的专利</div>
            <div class="text_center color-999">尚未添加专利</div>
            <div class="text_center" style="margin: 15px 0;">
                <!--<a class="ui-button ui-button-lgreen select" href="javascript:;" style="width: 100px;">+ 添加专利</a>-->
                <Button type="success" class="ui-button ui-button-lgreen select">+ 添加专利</Button>
            </div>
            <div class="text_center" style="margin-top:15px;">
                <!--<a href="javascript:;" class="ui-button ui-button-lceladon">下一步</a>-->
                <!-- referrerT 推荐人-->
                <router-link :to="{path:'/referrerT',query:obj}">
                    <Button type="primary" class="ui-button ui-button-lceladon">下一步</Button>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import headerT from '../common/headerT'
    export default {
        data(){
            return {
                schoolName: '',
                obj:{

                }
            }
        },
        components:{
            headerT
        },
        mounted() {
            this.schoolName = this.$route.query.schoolName
            this.obj.schoolName = this.schoolName
        },
    }
</script>

<style scoped>
    .ui-box-zhiy {
        border: 1px solid #ddd;
        border-top-color: rgb(221, 221, 221);
        border-top-style: solid;
        border-top-width: 1px;
        border-top: none;
        padding: 15px 10px;
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
    }
    .ui-tiptext {
        margin: 0;
        color: #4D4D4D;
        position: relative;
        font-size: 12px;
        zoom: 1;
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
    .ui-tiptext-icon {
        display: inline-block;
        *display: inline;
        *zoom: 1;
    }
    .m_bottom10 {
        margin-bottom: 10px;
    }
    .ui-tiptext-message .ui-tiptext-icon {
        color: #68b5e2;
    }
    .ui-tiptext-follow {
        padding-left: 21px;
    }
    .jbxxhjtitle {
        font-weight: 700;
        line-height: 40px;
        font-size: 14px;
        clear: both;
    }
    .text_center {
        text-align: center;
        padding: 0;
    }
    .color-999 {
        color: #999;
    }
    .text_center {
        text-align: center;
        padding: 0;
    }
    a.ui-button-lgreen {
        line-height: 30px;
        height: 30px;
    }
    .color-999 {
        color: #999;
    }






</style>