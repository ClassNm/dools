<template>
    <div>
        <headerT></headerT>
        <div class="ui-box-container zystepcnt">
            <div class="ui-tiptext-container ui-tiptext-container-message m_bottom10">
                <p class="ui-tiptext ui-tiptext-message">
                    <i class="ui-tiptext-icon iconfont" title="提示"></i> 推荐人是选填信息，请按学校要求填写。只有在此处添加后，志愿高校才能看到您填写的推荐人信息，并且推荐人才能为您填写推荐信。
                </p>
            </div>
            <div class="ui-tiptext-container ui-tiptext-container-message m_bottom10">
                <p class="ui-tiptext ui-tiptext-message">
                    <i class="ui-tiptext-icon iconfont" title="提示" style="font-size: 18px;"></i>来自于 <span style="color: #c30;font-weight: 700">{{schoolName}}</span> 推荐人填写说明：<br>
                </p>
                <p class="ui-tiptext ui-tiptext-follow">
                    考生需要在报名平台选择增加推荐人(中学校长、社会团体或专家)，由报名平台通知推荐人(中学校长、社会团体或专家)下载《2018年试点高校自主招生推荐表》，填写推荐人推荐意见，按要求签字并加盖公章，由推荐人上传到报名系统，并将纸质推荐材料单独密封，在密封处签字，随考生其它材料一同或推荐人单独邮寄到北京科技大学招生办公室。
                </p>
            </div>
            <div class="ui-box-container">
                <div class="color-999 text_center">该志愿未关联推荐人信息。</div>
            </div>
            <div class="text_center m_top10">
                <!--<a href="javascript:;" class="ui-button ui-button-lgreen select">+ 添加推荐人</a>-->
                <Button type="success" class="ui-button ui-button-lgreen select">+ 添加推荐人</Button>
                <br>
                <!--<a href="javascript:;" class="ui-button ui-button-lceladon" style="margin-top:20px;">下一步</a>-->
                <router-link :to="{path:'/applicationT',query:obj}">
                    <Button type="info" class="ui-button ui-button-lceladon" style="margin-top:20px;">下一步</Button>
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
                schoolName:'',
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
    .zystepcnt {
        margin-top: -1px;
        border: 1px solid #ddd;
        padding: 10px 10px 15px 10px;
        clear: both;
        zoom: 1;
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
    .m_bottom10 {
        margin-bottom: 10px;
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
    .ui-tiptext-follow {
        padding-left: 21px;
    }
    .color-999 {
        color: #999;
    }
    .text_center {
        text-align: center;
        padding: 0;
    }
    .m_top10 {
        margin-top: 10px;
    }
    a.ui-button-lgreen {
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
        color: #09f;
    }
    /*a.ui-button-lceladon {*/
        /*line-height: 30px;*/
        /*height: 30px;*/
    /*}*/













</style>