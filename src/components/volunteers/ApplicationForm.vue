<template>
    <div>
        <div class="ui-box">
            <headerT></headerT>
            <div class="ui-box-container ui-box-zhiy">
                <form id="add" name="add" method="POST">
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">
                                *
                            </span>
                            <strong>
                                招生类型：
                            </strong>
                        </label>
                        <p class="ui-form-text" style="margin-right: 345px">
                            {{autonomously}}
                        </p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">
                                *
                            </span>
                            <strong>
                                学校：
                            </strong>
                        </label>
                        <p class="ui-form-text" style="margin-right: 345px">
                            {{schoolName}}
                            <input type="hidden" name="zhiY.orgId" value="476734158">
                        </p>
                        <input type="hidden" name="org" value="476734158" id="add_org">
                        <div id="orgInfos"></div>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">
                                *
                            </span>
                            <strong>
                                报名类型：
                            </strong>
                        </label>
                        <p class="ui-form-text" style="margin-right: 372px">
                            {{autonomouslyL}}
                        </p>
                        <div class="ui-tiptext-container ui-tiptext-container-wait" style="margin-top:6px;">
                            <div class="ui-tiptext-arrow ui-tiptext-arrowup" style="left:14px;">
                                <em>
                                    ◆
                                </em>
                                <span>
                                    ◆
                                </span>
                            </div>
                            <p class="ui-tiptext ui-tiptext-wait" v-for="(item,i) in time" :key="i">
                                <i class="ui-tiptext-icon iconfont" title="提示">
                                    
                                </i>
                                {{item.type}}
                            </p>
                        </div>
                        <input type="hidden" name="zhiY.lxmc" value="自主招生">
                        <input type="hidden" name="zhiY.lxdm" value="01">
                        <input type="hidden" name="lxdm" value="01" id="add_lxdm">
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">
                                *
                            </span>
                            <strong>
                                您具备的报名条件：
                            </strong>
                        </label>
                        <ul class="ui-form-text">
                            <li style="color:#c06800;">
                                可填报专业依赖于报名条件，请先选择报名条件再选择报考专业
                            </li>
                            <li v-for="(item,index) in uitest" :key="index">
                                <label>
                                    <input type="checkbox" :value="{'value':item.cid }" name="bmtjs" onclick="">
                                    {{item.condition}}
                                </label>
                            </li>
                            <div class="ui-tiptext-container ui-tiptext-container-wait" 
                            style="margin-top:6px;"
                            >
                                <i class="ui-tiptext-icon iconfont" title="报名条件说明">
                                        
                                </i>
                                <p class="ui-tiptext ui-tiptext-wait" 
                                v-for="(item,index) in uitest" :key="index"                            
                                >
                                    {{item.explain1}}
                                </p>
                            </div>
                        </ul>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">
                                *
                            </span>
                            <strong>
                                专业：
                            </strong>
                        </label>
                        <p class="ui-form-text" style="margin-bottom:5px;color:#c06800;margin-right: 88px;">
                            选定报考专业之后，可通过右侧的箭头调整专业的次序。
                        </p>
                        <div id="zhiyzymlDIV" class="zhiyzyml">
                        </div>
                        <div id="allZymls">
                            <ul class="zhiyzy">
                                <!-- <li class="zhiyzyt">
                                    理工二类
                                </li> -->
                                <li v-for="(item,index) in second" :key="index">
                                    <label>
                                        <input type="checkbox" :id="{'id':item.id}" onclick="" bmtjs="">
                                        {{item.branchCampus}}
                                    </label>
                                </li>
                            </ul>
                            <!-- <ul class="zhiyzy">
                                <li class="zhiyzyt">理工一类</li>
                                <li v-for="(item,index) in category" :key="index">
                                    <label>
                                        <input type="checkbox" :id="{'id':item.id}" onclick="" bmtjs="">
                                        {{item.name}}
                                    </label>
                                </li>
                            </ul> -->
                        </div>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">
                                *
                            </span>
                            <strong>
                                是否服从调剂：
                            </strong>
                        </label>
                        <p class="ui-form-text" style="margin-right: 370px">
                            <label>
                                <input type="radio" name="zhiY.fctj" value="true">
                                是
                            </label>
                            <label>
                                <input type="radio" name="zhiY.fctj" value="false" checked="checked">
                                否
                            </label>
                        </p>
                    </div>
                    <div class="ui-form-item" id="errorMessageBox" style="display:none">
                    </div>
                    <!-- 点击跳转  附加材料页面 -->
                    <!-- <router-link :to="{path:'/additional',query:obj}"> -->
                        <div class="ui-form-item" style="width: 391px;padding:0 5px 6px 0">
                            <!--<input type="submit" id="add_0" value="下一步" class="ui-button ui-button-lceladon">-->
                            <Button type="primary" @click="hot">下一步</Button>
                        </div>
                    <!-- </router-link> -->
                </form>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import {ApplicationF} from '../../vuex/actions.js'
import axios from 'axios'
import headerT from '../common/headerT'
import Axios from 'axios';
    export default {
        data(){
            return {
                // 学校名字
                schoolName:'',
                // 传参
                obj:{

                },
                // 招生类型
                autonomously:'普通自主招生',
                // 报名类型
                autonomouslyL:"自主招生",
                // 报名时间
                time:"",
                // 报名条件
                uitest:[
                    
                ],
                // 选择几个条件
                explain1 : "",
                // 二类
                second:[
                   
                ],
                // 一类
                category:[
                    {
                        name:"材料科学与工程",
                        id:"zs6fuje1jtpw2nx4"
                    },
                    {
                        name:"机械类",
                        id:"5h49mm89x8blrx5d"
                    },
                    {
                        name:"计算机类",
                        id:"48xth0zyyo3cs5b7"
                    },
                    {
                        name:"通信工程",
                        id:"81z2o4t7dd5u5ojy"
                    },
                    {
                        name:"自动化类",
                        id:"xqom8mq1jpmorkmf"
                    },
                    {
                        name:"土木类",
                        id:"upu3e0p6nhn60c5y"
                    },
                    {
                        name:"能源动力类",
                        id:"whw9oavvcjiekdkc"
                    },
                    {
                        name:"环境科学与工程类",
                        id:"oqieo8c1v0ujx0x0"
                    },
                    {
                        name:"数学类",
                        id:"jxmg11fgbv8wmkgg"
                    },
                    {
                        name:"应用物理学",
                        id:"axni75f6ohywf19s"
                    },
                    {
                        name:"应用化学",
                        id:"hjduvhet4kuuf5ay"
                    },
                     {
                        name:"生物技术",
                        id:"0iox18182eybh1xs"
                    },
                     {
                        name:"管理科学与工程类",
                        id:"uc5axdlettrkwwmn"
                    },
                ],
                // 学校的 bid cid
                bid : "",
                cid : "",
                 // 学校的cod
                schoolCode:"",
            }
        },
        components:{
            headerT
        },
        mounted(){
            // console.log(this.$route)
            this.schoolName = this.$route.query.schoolName
            this.obj.schoolName = this.$route.query.schoolName
            this.schoolCode = this.$route.query.schoolCode
            
            let dataL = this.schoolCode
            // 报名时间
            axios.post('http://192.168.0.130:8080/SchoolEntryType/findByCid',dataL,{headers:{'Content-Type':"application/json; charset=UTF-8"}})
            .then((res)=>{
                console.log(res.data)
                this.time = res.data
            }),(err)=>{
                console.log(err)
            }

            this.bid = this.$route.query.bid
            let data = this.bid
            // 报名条件
            axios.post('http://192.168.0.130:8080/SchoolEntryType/fingByBid',data,{headers:{'Content-Type':"application/json;charset=UTF-8"}})
            .then((res) => {
                // console.log(res.data)
                this.uitest = res.data
            }),(err)=>{
                console.log(err)
            }
            // 报名专业
            axios.post('http://192.168.0.130:8080/SchoolEntryType/findByBidAndCid',data,{headers:{'Content-Type':"application/json;charset=UTF-8"}})
            .then((res)=>{
                // console.log(res.data)
                this.second = res.data
            }),(err)=>{
                console.log(err)
            }
        },
        computed:{
            // flag(){
            //     // console.log(this.$route.path);
            //     let pa = this.$route.path;
            //     // console.log('bb');
            //     if (pa == '/additional'){
            //         console.log('附加材料');
            //         return false
            //     }else {
            //         return true
            //     }
            // }
        },
        methods:{
            hot(){
                // console.log(this.$route)
                let a = this.$route.query.schoolName;
                let obj = this.obj;
                let bid = this.bid
                // console.log(obj)
                // 32 湖南大学  8 东北大学  21 华北电力大学  38 西南大学
                // if(a == 8 || a == 32 || a == 21 || a == 38){
                if(a == "苏州大学" || a == "湖南大学" || a == "华北电力大学" || a == "西南交通大学"){
                    this.$router.push({path:'/statement',query:{obj,bid}})
                }else{
                     this.$router.push({path:'/additional',query:{obj,bid}});
                }
            }
        }
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
    .ui-form-item {
        width: 605px;
        padding: 0 5px 6px 160px;
    }
    .ui-label {
        float: left;
        width: 180px;
        margin-left: -190px;
        padding-top: 5px;
        text-align: right;
        font-size: 14px;
    }
    .ui-form-required {
        color: red;
        font-family: SimSun;
        font-size: 14px;
        margin-right: 6px;
    }
    .ui-label {
        text-align: right;
        font-size: 14px;
    }
    .ui-form-text {
        list-style: none;
        font-size: 14px;
        word-wrap: break-word;
        word-break: break-all;
        display: inline-block;
        margin-top: 5px;
        text-align: left;
        width: 100%
    }
    .ui-tiptext-container-wait {
        border: 1px solid #fae3cc;
        background: #FFF9D9;
    }
    .ui-tiptext-container {
        padding: 8px 12px;
        position: relative;
        zoom: 1;
    }
    .ui-tiptext-arrowup {
        left: 32px;
        top: -7px;
    }
    .ui-tiptext-container-wait .ui-tiptext-arrow em {
        color: #fae3cc;
    }
    .ui-tiptext-arrowup em {
        top: -1px;
    }
    .ui-tiptext-container-wait .ui-tiptext-arrow span {
        color: #FFF9D9;
    }
    .ui-tiptext {
        margin: 0;
        color: #4D4D4D;
        position: relative;
        font-size: 12px;
        zoom: 1;
        display: inline
    }
    .ui-tiptext-wait .ui-tiptext-icon {
        color: #d1a066;
    }
    .ui-tiptext .iconfont {
        font-size: 1.33em;
        line-height: 1em;
        text-shadow: 0 1px 0 #fff;
        position: relative;
        top: 2px;
        margin-right: 2px;
    }
    .ui-form-item li {
        word-wrap: break-word;
        word-break: normal;
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
    .ui-tiptext-container-wait {
        border: 1px solid #fae3cc;
        background: #FFF9D9;
    }
    .ui-tiptext-container {
        padding: 8px 12px;
        position: relative;
        zoom: 1;
    }
    .ui-tiptext-arrowup {
        left: 32px;
        top: -7px;
    }
    .ui-tiptext {
        margin: 0;
        color: #4D4D4D;
        position: relative;
        font-size: 12px;
        zoom: 1;
    }
    .ui-tiptext-wait .ui-tiptext-icon {
        color: #d1a066;
    }
    .ui-tiptext .iconfont {
        font-size: 1.33em;
        line-height: 1em;
        text-shadow: 0 1px 0 #fff;
        position: relative;
        top: 2px;
        margin-right: 2px;
    }
    .zhiyzyml {
        padding: 0 0 10px 0;
    }
    .zhiyzyml {
        position: relative;
        padding: 0 20px 10px 0;
    }
    .zhiyzy {
        width: 608px;
        border: 1px solid #ccc;
        padding-bottom: 6px;
        margin-top: -1px;
        overflow: hidden;
        text-align: left;
    }
    .zhiyzy li.zhiyzyt {
        float: none;
        display: block;
        width: 596px;
        height: 32px;
        margin-bottom: 6px;
        line-height: 32px;
        font-weight: 700;
        background: #f9f9f9;
        border-bottom: 1px solid #ccc;
    }
    .ui-form-item li {
        word-wrap: break-word;
        word-break: normal;
    }
    .zhiyzy li {
        float: left;
        display: inline;
        width: 290px;
        padding: 2px 0 2px 12px;
    }
    .ui-form-required {
        color: red;
        font-family: SimSun;
        font-size: 14px;
        margin-right: 6px;
    }
    .ui-label {
        text-align: right;
        font-size: 14px;
    }
    .ui-form-item input {
        vertical-align: middle;
    }
    .ui-button-lceladon {
         height: 32px;
     }

    /* orange 字体颜色*/
    .zystep li.stepon {
        /*background: url(../../images/bm/icon-prog-on.png) no-repeat center 0;*/
        color: #f60;
        font-weight: 700;
    }
</style>