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
                        <div class="ui-form-text" style="width: 62px;margin-right: 546px">
                            {{form}}
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
                                   @click="foon"
                                   >
                            <!-- 对话框 -->
                            <Modal
                                    title="请选择学校"
                                    v-model="modal10"
                                    class-name="vertical-center-modal"
                            >
                                <div class="school" 
                                v-for="item in schoolArr" 
                                :key = "item.code"
                                :value = "item.code" 
                                :data-id="item.id"
                                @click="schoolSel(item)" 
                                :style="{'color':item.colour}">
                                    {{item.school}}
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <div v-if = "Show">
                        <div class="ui-form-item">
                            <div class="ui-form-text" style="margin-right: 310px">
                                <input type="hidden" name="org" value="476736792" id="lxdmform_org">
                                <div id="gkxxDiv">
                                    <ul class="orgInfos">
                                        <li>• <a href="javascript:;">{{SchoolName}}2019年外语类专业保送生招生简章</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>选择报名类型：</strong></label>
                            <div class="ui-form-text">
                                <label style="margin-right: 463px">
                                    <input type="radio" name="lxdm" value="11">
                                    {{form}}&nbsp;&nbsp;<font color="red"></font>
                                    <a href="javascript:;">填报说明</a>
                                </label>
                                <div>
                                    <ul 
                                    class="orgInfos" 
                                    style="margin-bottom:12px;width: 580px;text-align: left" 
                                    v-for = "(item,i) in timeL" 
                                    :key = "i" 
                                    :value = "item.bid">
                                        <input type="checkbox" name="bmtjs" class="inputL" @click="aaa(item)">
                                        <li style="display:inline">{{item.type}}</li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        <!--  报考志愿 button点击跳路由 -->
                        <div class="ui-form-item" style="width: 70px">
                            <router-link :to="{path:'/volunteerNew/applicationForm',query:obj}"   exact-active-class="router-volunteerNew-applicationForm">
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
import axios from 'axios'
export default {
    data () {
        return {
            modal10: false,
            Show:false,
            SchoolName:"",
            modal10:false,
            Show: false,
            // 招生类型
            form:"自主招生",
            // 报名时间
            timeL:[],
            // 报名时间条件
            /* 根据点击input框来浮现下一步跳的学校 query里的1-6代替query传的参*/
            obj:{
                a:1
            },
            // 学校名字
            schoolArr:[],
            // 学校的cod
            schoolCode:"",
            // 条件的  bid  cid
            bid:"",
            cid:"",
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
                //   console.log('三级路由');
                // debugger;
                return false;
            } else {
                return true
            }
        },
    },
    created(){
        axios.post('http://192.168.0.130:8080/School/findAll')
        .then((res)=>{
            this.schoolArr = res.data
        }),(err)=>{
            console.log(err)
        }
    },
    methods:{
        foon(){
            this.modal10 = true
        },
        schoolSel(a){
            this.SchoolName = a.school;
            this.modal10 = false;
            this.Show = true;
            this.obj.a = a.id;
            this.schoolCode = a.code
            let data = this.schoolCode
            axios.post('http://192.168.0.130:8080/SchoolEntryType/findByCid',data,{headers:{'Content-Type':"application/json; charset=UTF-8"}})
            .then((res)=>{
                this.timeL = res.data
            }),(err)=>{
                console.log(err)
            }
        },
       
        aaa(b){
            // console.log(b)
            this.bid = b.bid;
            this.cid = b.cid;
            // console.log(this.bid,"bid")
            // console.log(this.cid,"cid")
        }
        
    },
    mounted(){
        // let a  = this.schoolArr.index;
        // if(a == 1){
        //     return two;
        // }
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
        cursor: pointer;
    }


    .inputL{
        /* margin-top: 2px; */
        /* width: 10px; */
        display: inline
    }


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

