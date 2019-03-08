<template>
    <div>
        <div class="ui-box">
            <div v-if="free">
                <div class="ui-box-head">
                    <h3 class="ui-box-head-title">添加志愿</h3>
                    <span class="ui-box-head-text">（<span class="redstar">*</span> 为必填项）</span>
                </div>
                <div class="ui-box-container">
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><strong>招生类型：</strong></label>
                        <div class="ui-form-text" style="width: 50px;margin-right: 546px">
                            保送生
                        </div>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">
                                *
                            </span>
                            <strong>
                                选择填报学校：
                            </strong>
                        </label>
                        <div class="ui-form-text">
                            <input type="text"
                                   name=""
                                   v-model="SchoolName"
                                   readonly="readonly"
                                   id="orgName"
                                   class="ui-input"
                                   autocomplete="off"
                                   @click="modal10 = true">
                            <!-- 对话框 -->
                            <Modal
                                    title="请选择学校"
                                    v-model="modal10"
                                    class-name="vertical-center-modal"
                            >
                                <div class="school">中国人民大学</div>
                                <div class="school">北京航空航天大学</div>
                                <div class="school">北京化工大学</div>
                                <div class="school">北京师范大学</div>
                                <div class="school">北京语言大学</div>
                                <div
                                        class="school"
                                        style="color: orangered;cursor:pointer"
                                        @click="free1()"
                                >
                                    {{this.science}}
                                </div>
                                <div class="school">中央财经大学</div>
                                <div class="school">对外经济贸易大学</div>
                                <div class="school">天津大学</div>
                                <!--<div class="school" style="color: orangered;cursor:pointer" @click="modal10 = false">-->
                                <div class="school" style="color: orangered;cursor:pointer" @click="free2">
                                    {{this.Highdong}}
                                </div>
                                <div class="school">黑龙江大学</div>
                                <div class="school" style="color: orangered;cursor:pointer" @click="free3">
                                    {{this.project}}
                                </div>
                                <div class="school">复旦大学</div>
                                <div class="school">同济大学</div>
                                <div class="school">东华大学</div>
                                <div class="school">上海财经大学</div>
                                <div class="school">南京大学</div>
                                <div class="school">南京航空航天大学</div>
                                <div class="school">南京理工大学</div>
                                <div class="school">江南大学</div>
                                <div class="school">南京信息工程大学</div>
                                <div class="school">南京农业大学</div>
                                <div class="school">中国药科大学</div>
                                <div class="school">南京师范大学</div>
                                <div class="school">厦门大学</div>
                                <div class="school">山东大学</div>
                                <div class="school">武汉大学</div>
                                <div class="school">华中科技大学</div>
                                <div class="school">中国地质大学(武汉)</div>
                                <div class="school">武汉理工大学</div>
                                <div class="school" style="color: orangered;cursor:pointer" @click="free4">
                                    {{this.Hunan}}
                                </div>
                                <div class="school">中南大学</div>
                                <div class="school">湖南师范大学</div>
                                <div class="school">中山大学</div>
                                <div class="school" style="color: orangered;cursor:pointer" @click="free5">
                                    {{this.electricity}}
                                </div>
                                <div class="school">四川大学</div>
                                <div class="school">重庆大学</div>
                                <div class="school">西南交通大学</div>
                                <div class="school">电子科技大学</div>
                                <div class="school" style="color: orangered;cursor:pointer" @click="free6">
                                    {{this.southwest}}
                                </div>
                                <div class="school">西南财经大学</div>
                                <div class="school">兰州大学</div>
                                <div class="school">香港中文大学(深圳)</div>
                            </Modal>
                        </div>
                    </div>
                    <div v-if = "Show">
                        <div class="ui-form-item">
                            <div class="ui-form-text" style="margin-right: 310px">
                                <input type="hidden" name="org" value="476736792" id="lxdmform_org">
                                <div id="gkxxDiv">
                                    <ul class="orgInfos">
                                        <li>• <a href="javascript:;" target="_blank">北京师范大学2019年外语类专业保送生招生简章</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>选择报名类型：</strong></label>
                            <div class="ui-form-text">
                                <label style="margin-right: 463px">
                                    <input type="radio" name="lxdm" value="11">
                                    保送生&nbsp;&nbsp;<font color="red"></font>
                                    <a href="https://gaokao.chsi.com.cn/zzbm/stu/zhiy/tip.action?orgId=476736792&amp;lxdm=11" target="_blank">填报说明</a>
                                </label>
                                <ul class="orgInfos" style="margin-bottom:12px;width: 580px;text-align: left">
                                    <li>报名时间：2019-01-29 19:00:00 至 2019-02-26
                                        23:00:00；北京师范大学最多允许填报 10 个报名类型；“保送生”类型要求考生的报考学校总数不能超过50个；允许填报的专业类别总数至少 1
                                        个，最多 3 个；允许填报专业总数最少 1 个，最多 3 个；允许每个专业类别下可选专业数最少 1 个，最多 3 个。</li>
                                </ul>
                            </div>
                        </div>
                        <!--  报考志愿 button点击跳路由 -->
                        <div class="ui-form-item" style="width: 70px">
                            <!--<input type="submit" id="lxdmform_0" value="下一步" class="ui-button ui-button-lceladon m_top10" onclick="">-->
                            <router-link :to="{path:'/volunteerNew/applicationForm',query:obj}"   exact-active-class="router-volunteerNew-applicationForm">
                                <!--<router-link :to="{path:'/home111',query:obj}">首页</router-link>-->
                                <Button type="primary" id="lxdmform_0" class="ui-button ui-button-lceladon m_top10">下一步</Button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                modal10: false,
                Show:false,
                SchoolName:"",
                Highdong:"东北大学",
                science:"北京科技大学",
                project:"哈尔滨工程大学",
                Hunan:"湖南大学",
                electricity:"华北电力大学",
                southwest:"西南大学",
                /* 根据点击input框来浮现下一步跳的学校 query里的1-6代替query传的参*/
                obj:{
                    a:1
                }
            }
        },
        computed:{
          free(){
              let pa = this.$route.path;
              if (pa == '/volunteerNew/applicationForm' ||
                  pa=="/additional" ||
                  pa=="/messaged" ||
                  pa == "/applicationT" ||
                  pa=="/referrerT" ||
                  pa == "/statement" ||
                  pa == "/mock" ||
                  pa == "/obstetrics"
              ){
                  console.log('三级路由');
                  // debugger;
                  return false;
              } else {
                  return true
              }
            }
        },
        methods:{
            free1(){
                this.SchoolName = this.science;
                this.modal10 = false;
                this.Show = true;
                this.obj.a = 1;
            },
            free2(){
                this.SchoolName = this.Highdong;
                this.modal10 = false;
                this.Show = true;
                this.obj.a = 2;
            },
            free3(){
                this.SchoolName = this.project;
                this.modal10 = false;
                this.Show = true;
                this.obj.a = 3;
            },
            free4(){
                this.SchoolName = this.Hunan;
                this.modal10 = false;
                this.Show = true;
                this.obj.a = 4;
            },
            free5(){
                this.SchoolName = this.electricity;
                this.modal10 = false;
                this.Show = true;
                this.obj.a = 5;
            },
            free6(){
                this.SchoolName = this.southwest;
                this.modal10 = false;
                this.Show = true;
                this.obj.a = 6;
            },
        }
    }
</script>

<style scoped>
    .ui-box {
        zoom: 1;
        font-size: 12px;
        margin: 0;
        padding: 0;
        border-bottom: 0;
        /*box-shadow: 0 1px 2px #dadad8;*/
        /*background: white;*/
    }
    .ui-box-head {
        border-bottom: 1px solid #ccc;
        position: relative;
        padding-bottom: 5px;
        height: 26px;
        line-height: 26px;
        zoom: 1;
    }
    .ui-box-head .ui-box-head-title {
        color: #656565;
        font-size: 18px;
        font-weight: 700;
        float: left;
        display: inline;
        margin: 0;
        padding: 0;
    }
    .ui-box-head .ui-box-head-text {
        margin-left: 10px;
        color: gray;
        float: left;
    }
    .ui-box-head-text .redstar {
        color: #F00;
        font-size: 14px;
        font-family: SimSun;
    }
    .ui-box-container {
        background: #fff;
        padding: 10px 0;
    }
    .ui-label {
        float: left;
        width: 180px;
        margin-left: -190px;
        padding-top: 5px;
        text-align: right;
        font-size: 14px;
    }
    .ui-form-text {
        font-size: 14px;
        word-wrap: break-word;
        word-break: break-all;
        display: inline-block;
        margin-top: 5px;
        *display: inline;
        *zoom: 1;
        margin-right: 490px;
    }
    .ui-form-item {
        padding: 0 5px 6px 180px;
        zoom: 1;
    }
    .ui-form-required {
        color: red;
        font-family: SimSun;
        font-size: 14px;
        margin-right: 6px;
    }
    .ui-form-item .ui-input {
        color: #595959;
        width: 176px;
        margin-top: 4px;
        vertical-align: middle;
        *vertical-align: -5px;
    }
    .ui-form-text input {
        margin-right: 2px;
    }

    /*  对话框*/
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 800px;
    }
    .ivu-modal-content{
        width: 800px;
        background: red;
    }
    .ivu-modal{
        top: 0;
        width: 800px;
    }
    .school{
        display: inline-block;
        width: 150px;
        /*float: left;*/
        padding-right: 10px;
        line-height: 24px;
    }

    /*  确定 取消 按钮文字*/
    /*.ok-text{*/
        /*display: none;*/
        /*z-index: 100;*/
    /*}*/
    /*.cancel-text{*/
        /*display: none;*/
        /*z-index: 100;*/
    /*}*/
    /*.ivu-btn{*/
        /*display: none;*/
    /*}*/
    /*.ivu-btn-large{*/
        /*display: none;*/
    /*}*/
    /*.ivu-btn-text{*/
        /*display: none;*/
    /*}*/


    /*  隐藏的下边3部曲*/
    .ui-form-text input {
        margin-right: 2px;
    }
    .ui-form-item input {
        vertical-align: middle;
    }
    ul.orgInfos {
        border: 1px dashed #ccc;
        padding: 6px 10px;
        margin-top: 6px;
    }
    ul, li {
        list-style: none;
    }
    ul.orgInfos li {
        font-size: 12px;
        line-height: 24px;
    }
    .ui-form-item li {
        word-wrap: break-word;
        word-break: normal;
    }
    li {
        white-space: normal;
    }
    .ui-box a {
        color: #09f;
    }
    a {
        color: #333;
        text-decoration: none;
    }
    .ui-form-text label {
        margin-right: 6px;
    }
    .ui-form-text input {
        margin-right: 2px;
    }
    .ui-form-item input {
        vertical-align: middle;
    }
    ul.orgInfos {
        border: 1px dashed #ccc;
        padding: 6px 10px;
        margin-top: 6px;
    }
    ul, li {
        list-style: none;
    }
    ul.orgInfos li {
        font-size: 12px;
        line-height: 24px;
    }
    .ui-form-item li {
        word-wrap: break-word;
        word-break: normal;
    }
    li {
        white-space: normal;
    }
    .ui-button-lceladon {
        height: 32px;
    }








</style>

