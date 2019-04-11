<template>
    <div>
        <div class="ui-box">
            <div class="ui-box-head">
                <h3 class="ui-box-head-title">添加推荐专家</h3>
                <span class="ui-box-head-text">（<span class="redstar">*</span> 为必填项）
                </span>
            </div>
            <div class="ui-box-container">
                <form id="form_step" name="form_step" action="/zzbm/stu/tjr/savegr.action" method="post" novalidate="novalidate">
                    <input name="zid" value="" id="form_step_zid" type="hidden">
                    <input name="data.type" value="EXPERT" id="form_step_data_type" type="hidden">
                    <input name="data.id" value="" id="form_step_data_id" type="hidden">
                    <!--推荐人姓名：  -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>推荐人姓名：</strong></label>
                        <input name="data.xm" maxlength="30" 
                        id="form_step_data_xm" class="ui-input" type="text"
                        v-model="name"
                        >
                        <p class="ui-form-explain">添加后将不允许修改</p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">
                                *
                            </span>
                            <strong>
                                所在地：
                            </strong>
                        </label> 
                        <!-- 省 -->
                        <select id="slist" name="slist"
                         v-model="item.cityI"
                        @change= "aaa(item.cityI)"
                        >
                            <option 
                            :value="item.id" 
                            :selected="item.selected"
                            v-for="item in Bourn" 
                            :key="item.id"
                            >{{item.name}}</option>
                        </select>
                         <!--市  -->
                        <select id="clist" name="clist" 
                        v-model="item.cityIL"
                        @change= "bbb(item.cityIL)"    
                        >
                            <option 
                            :value="item.id" 
                            :selected="item.selected" 
                            v-for="item in CityLevel" 
                            :key="item.id">{{item.name}}</option>
                        </select>
                         <!--区  -->
                        <select id="xlist" name="data.szdm"
                        v-model="item.cityILL"
                        >
                            <option :value="item.name" 
                            :selected="item.selected"
                            v-for="item in County" 
                            :key="item.name"
                            >{{item.name}}</option>
                        </select>
                        <p class="ui-form-explain"></p>
                    </div>
                    <!-- 所在单位： -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>所在单位：</strong></label>
                        <input name="data.dwmc" maxlength="50" 
                        id="form_step_data_dwmc" class="ui-input" type="text"
                        v-model="unit"
                        >
                        <p class="ui-form-explain">添加后将不允许修改</p>
                    </div>
                    <!-- 职称： -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>职称：</strong></label>
                        <input name="data.zc" maxlength="30" id="form_step_data_zc" 
                        class="ui-input" type="text"
                        v-model="postL"
                        >
                        <p class="ui-form-explain"></p>
                    </div>
                    <!-- 职务： -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>职务：</strong></label>
                        <input name="data.zw" maxlength="30" 
                        id="form_step_data_zw" class="ui-input" type="text"
                        v-model="duty"
                        >
                        <p class="ui-form-explain"></p>
                    </div>
                    <!-- 手机号码： -->
                    <div class="ui-form-item" title="该手机号用于提醒推荐人填写推荐信，仅限一个，请如实填写">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>手机号码：</strong></label>
                        <input name="data.mobile" maxlength="30" 
                        id="form_step_data_mobile" class="ui-input" type="text"
                        v-model="number"
                        >
                        <p class="ui-form-explain">该手机号用于提醒推荐人填写推荐信，仅限一个，请如实填写</p>
                    </div>
                    <!-- 邮箱： -->
                    <div class="ui-form-item" title="该邮箱用于提醒推荐人填写推荐信，仅限一个，请如实填写">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>邮箱：</strong></label>
                        <input name="data.email" maxlength="50" 
                        id="form_step_data_email" class="ui-input" type="text"
                        v-model="eMail"
                        >
                        <p class="ui-form-explain">该邮箱用于提醒推荐人填写推荐信，仅限一个，请如实填写</p>
                    </div>
                    <div class="ui-form-item m_top10">
                        <!--<input id="form_step_0" value="保存" class="ui-button ui-button-lorange add" type="submit">-->
                        <Button type="warning" @click="submit">保存</Button>
                        &nbsp;&nbsp;
                        <Button type="primary" onclick="javascript:history.go(-1);" >取消</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { expert } from '../../vuex/actions.js'
export default {
    data(){
        return {
             // 高考报名所在地
            Bourn:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            // 市级
            CityLevel:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            // 区县级别
            County:[
                {
                    name:"请选择"
                },
            ],
            // 推荐人姓名
            name : "",
            // 所在单位
            unit : "",
            // 职称：
            postL : "",
            // 职务：
            duty : "",
            // 手机号码：
            number : "",
            // 邮箱：
            eMail : "",
            // post请求iD
            item : { cityI : "" },
            item : { cityIL : "" },
            item : { cityILL : "" }
        }
    },
    created(){
        // 省份数据
        axios.post('http://192.168.0.130:8080/City/findByCode')
        .then((res)=>{
            this.Bourn = res.data
        }),(err)=>{
            console.log(error)
        }
    },
    methods:{
         aaa(word){
            let data = word
            // console.log(data)
            axios.post('http://192.168.0.130:8080/City/findById',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res) => {
                // console.log(data)
                if(data ==  this.item.cityI){
                    this.CityLevel = res.data
                }else{

                }
            }),(err) => {
                console.log(err)
            }
        },
        // 区县
        bbb(word){
            let data = word
             axios.post('http://192.168.0.130:8080/City/findByCode2',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res) => {
                if(data ==  this.item.cityIL){
                    this.County = res.data
                }else{

                }
            }),
            (err) => {
                console.log(err)
            }
        },
        submit(){
             //学籍所在中学 
            let a = JSON.stringify(this.item.cityI)
            let b = JSON.stringify(this.item.cityIL)
            let c = this.item.cityILL
            let m = ","
            let e = a+m+b+m+c

            let data = {
                email : this.eMail,
                phone : this.number,
                post : this.postL,
                recommenderCompany : this.unit,
                recommenderName : this.name,
                title : this.duty,
                recommenderAddress : e
            }
            // let dataL = JSON.stringify(data)
            // console.log(typeof(dataL));
            expert(data);
        }
    }
}
</script>


<style scoped>
    .ui-breadcrumb {
        font-size: 0;
        padding: 0;
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
    .ui-form-item {
        padding: 0 5px 6px 150px;
        zoom: 1;
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
    .ui-form-item .ui-input {
        color: #595959;
        width: 176px;
        margin-top: 4px;
        vertical-align: middle;
        *vertical-align: -5px;
    }
    .ui-form-explain {
        margin: 0;
        padding: 8px 0 0;
        font-size: 12px;
        color: #999;
    }
    .ui-form-item select {
        vertical-align: middle;
        margin: 4px 0 0;
        border: 1px solid #c1c1c1;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        padding: 3px;
    }
    option {
        font-weight: normal;
        display: block;
        white-space: pre;
        min-height: 1.2em;
        padding: 0px 2px 1px;
    }
    .m_top10 {
        margin-top: 10px;
    }
    .ui-form-item input {
        vertical-align: middle;
        height: 32px;
        width: 38px;
    }
    .ui-button-lorange {
        height: 32px;
    }
    .ui-button-lorange, .ui-button-morange, .ui-button-sorange {
        color: #fff;
        border: 1px solid #d66500;
        background-color: #f57403;
    }
</style>