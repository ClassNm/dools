<template>
    <div>
        <headerT></headerT>
        <div class="ui-box-container ui-box-zhiy">
            <div class="ui-tiptext-container ui-tiptext-container-message m_bottom10">
                <p class="ui-tiptext ui-tiptext-message">
                    <i class="ui-tiptext-icon iconfont" title="提示"></i>
                    {{schoolName}}(自主招生）
                    需要您提供以下附加材料
                </p>
            </div>
            <table class="ui-table m_top10">
                <thead>
                <tr>
                    <th>名称</th>
                    <th width="320">说明</th>
                    <th width="55">是否必填</th>
                    <th width="85">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style="width: 218px">个人陈述</td>
                    <td>
                        {{explain}}。
                    </td>
                    <td>{{required}}</td>
                    <td>
                        <a href="javascript:;">添加</a>
                        <br><font color="red">{{incompletely}}</font>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="text_center m_top10">
                <strong>
                    <font color="red">
                        {{write}}。
                    </font>
                </strong>
                <br>
                <!-- messaged  综合信息-->
                <router-link :to="{path:'/messaged',query:obj}">
                    <a href="javascript:;" class="ui-button ui-button-ldisable" style="background: #cacccd;color: #999999">下一步</a>
                </router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import headerT from '../common/headerT';
    export default {
        data(){
            return {
                schoolName:'',
                obj:{

                },
                // 说明
                explain:"须考生用A4纸本人手写，字数限1000字以内，落款处考生本人签字，扫描或拍照上传至报名系统，内容必须包含以下4个方面：①人生观和价值观；②主要参与的实践活动（学生干部、公益活动等）及感悟；③对申报专业的认知以及大学学业规划；④学生自己做过的最有成就感的一件事情；以上作为四部分的标题",
                // 是否必填
                required:"是",
                // 必填项未填写
                incompletely:"必填项未填写",
                // 未填写完整
                write:"附加材料未填写完整，请填写完整"
            
            }
        },
        components:{
            headerT
        },
        mounted(){
            // alert(1);
            this.schoolName = this.$route.query.schoolName
            this.obj.schoolName = this.schoolName
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
    .ui-table {
        border-collapse: collapse;
        border: 1px solid #ccc;
        width: 100%;
        font-size: 12px;
        text-align: left;
    }
    .m_top10 {
        margin-top: 10px;
    }
    .ui-table thead {
        color: #666;
        background-color: #F6F6F6;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#F8F8F8', endColorstr='#F2F2F2');
        background: -webkit-gradient(linear, left top, left bottom, from(#F8F8F8), to(#F2F2F2));
        background: -moz-linear-gradient(top, #F8F8F8, #F2F2F2);
        background: -o-linear-gradient(top, #F8F8F8, #F2F2F2);
        background: linear-gradient(top, #F8F8F8, #F2F2F2);
    }
    .ui-table thead tr {
        color: #666;
    }
    .ui-table th {
        padding: 7px 9px;
        border-bottom: 1px solid #d9d9d9;
        text-align: left;
    }
    .ui-table {
        border-collapse: collapse;
        font-size: 12px;
        text-align: left;
    }
    .ui-table tr {
        color: #666;
    }
    .ui-table td {
        padding: 8px 9px 7px;
        border-bottom: 1px solid #d9d9d9;
    }
    .ui-box a {
        color: #09f;
    }
    .m_top10 {
        margin-top: 10px;
    }
    .text_center {
        text-align: center;
        padding: 0;
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
    .ui-button-ldisable {
        line-height: 32px;
        height: 32px;
    }

    /*.zystep li.stepon {*/
        /*color: #ccc;*/
        /*font-weight: 700;*/
    /*}*/
    .zystep li .step-spanTwo{
        color: #f60;
    }

</style>