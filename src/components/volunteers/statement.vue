

<!-- 个人陈述 3级路由 报考志愿-->
<template>
    <div>
        <headerT></headerT>
        <div class="ui-box-container ui-box-zhiy">
            <div class="ui-tiptext-container ui-tiptext-container-message m_bottom10">
                <p class="ui-tiptext ui-tiptext-message">
                    <i class="ui-tiptext-icon iconfont" title="提示" style="font-size: 18px;"></i>
                    来自于 <span style="color: #c30;font-weight: 700"> {{schoolName}}</span> 的个人陈述说明：<br>
                </p>
                <p class="ui-tiptext ui-tiptext-follow">
                    {{explain}}
                </p>
            </div>
            <form id="grcs" name="grcs" action="" method="">
                <div class="ui-form-item">
                    <label for="" class="ui-label"><strong>个人陈述：</strong></label>
                    <p class="ui-form-text">
                        <textarea name="grcs" v-model="arr"  class="ui-textarea" style="width:654px; height:200px"></textarea>
                    </p>
                    <div class="ui-tiptext-container ui-tiptext-container-wait" style="margin-top:6px;">
                        <div class="ui-tiptext-arrow ui-tiptext-arrowup" style="left:14px;">
                    </div>
                    <p class="ui-tiptext ui-tiptext-wait" style="text-align: left">
                        <i class="ui-tiptext-icon iconfont" title="提示"></i>
                        请不要输入“./”、“/.”等特殊字符。
                    </p>
                </div>
                    <p></p>
                        <Button type="primary" class="ui-button ui-button-lceladon m_top10" @click="heer">下一步</Button>
                </div>
            </form>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import axios from 'axios'
    import headerT from '../common/headerT'
    export default {
        components:{
            headerT
        },
        data(){
            return{
                arr : "",
                schoolName : '',
                obj : {},
                explain : "内容包括本人的申请理由、成长经历及体会、学科特长及取得的成果、进入大学后的努力方向及设想等，不超过1000字。",
                // bid 传参的值
                bid : ""
            }
        },
        mounted(){
            console.log(this.$route.query)
            this.schoolName = this.$route.query.schoolName
            this.obj.schoolName = this.$route.query.schoolName
            
            this.bid = this.$route.query.bid
            let data = this.bid
            // console.log(data)
            // console.log(typeof(data))
            // 获取bid发送陈述
            axios.post('http://192.168.0.130:8080/SchoolEntryType/findByBidAndCid1',data,{headers:{'Content-Type':"application/json;charset=UTF-8"}})
            .then((res)=>{
                console.log(res)
            }),(err)=>{
                console.log(err)
            }
        },
        methods:{
            heer(){
                let arrL = this.arr
                // console.log(arrL)
                let data = {
                    sid : 1,
                    txt : arrL
                }
                console.log(data)
                axios.post('http://192.168.0.130:8080/Txt/save',data)
                .then((res)=>{
                    console.log(res)
                }),(err)=>{
                    console.log(err)
                }
                let obj = this.obj;
                let a = obj.schoolName;
                // if(a == "西南大学"){
                //     this.$router.push({path:'/additional',query:obj})
                // }else{ 
                //     this.$router.push({path:'/mock',query:obj})
                // }
                this.$router.push({path:'/mock',query:obj})
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
    .ui-form-item {
        padding: 0 5px 6px 100px;
    }
    .ui-label {
        width: 100px;
        margin-left: -110px;
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
    }
    .ui-textarea {
        line-height: 15px;
        border: 1px #c1c1c1 solid;
        padding: 4px 3px 0 4px;
        overflow: auto;
        font-size: 12px;
        color: #595959;
    }
    .ui-tiptext-container-wait {
        border: 1px solid #fae3cc;
        background: #FFF9D9;
    }
    .ui-tiptext-arrowup {
        left: 32px;
        top: -7px;
    }
    .ui-form-item input {
        vertical-align: middle;
    }
    .ui-button-lceladon {
        height: 32px;
        margin-top: 10px;
        text-align: left;
        display: block;
    }






</style>