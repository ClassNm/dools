

<!-- 单科排名 3级路由 报考志愿-->
<template>
    <div>
        <headerT></headerT>
        <div class="ui-box-container">
            <div class="ui-tiptext-container ui-tiptext-container-message m_bottom10">
                <p class="ui-tiptext ui-tiptext-message">
                    <i class="ui-tiptext-icon iconfont" title="提示"></i>
                    请按高校要求如实填写排名和人数，若没有排名，请在相应位置填写“无”；
                </p>
                <p class="ui-tiptext ui-tiptext-follow">
                    根据所报高校的要求：<span class="ui-tiptext" style="color: #c30">背景为浅红色的项为必填项。</span>
                </p>
            </div>
            <div class="ui-tiptext-container ui-tiptext-container-message m_bottom10">
                <p class="ui-tiptext ui-tiptext-message">
                    <i class="ui-tiptext-icon iconfont" title="提示" style="font-size: 18px;">
                        
                    </i>
                    来自于 
                    <span style="color: #c30;font-weight: 700">{{schoolName}}</span> 的说明：
                </p>
                <p class="ui-tiptext ui-tiptext-follow">
                    所有成绩及排名须经中学审核无误后，方可填写提交。如果某科目在某学期没有成绩或没有排名，请填“无”。
                </p>
            </div>
            <form id="dkpmnext" name="dkpmnext" action="https://gaokao.chsi.com.cn/zzbm/stu/zhiy/dkpmnext.action" method="post">
                <input type="hidden" name="zid" value="b8qrptta4dvwnxyy" id="dkpmnext_zid">
                <table class="ui-table cjxxtable" style="margin: 0 auto;">
                    <thead>
                        <tr>
                            <th>科目\<br>学期
                            </th>
                            <th>{{seniorOne}}<br> 排名/人数
                            </th>
                            <th>{{seniorOneL}}<br> 排名/人数
                            </th>
                            <th>{{SeniorTwo}}<br> 排名/人数
                            </th>
                            <th>{{SeniorTwoL}}<br> 排名/人数
                            </th>
                            <th>{{gradeThree}}<br> 排名/人数
                            </th>
                            <th>{{Once}}<br> 排名/人数
                            </th>
                            <th>{{Two}}<br> 排名/人数
                            </th>
                            <th>{{Three}}<br> 排名/人数
                            </th>
                        </tr>
                    </thead>·
                    <tbody>
                     <!-- 语文 -->       
                    <tr>
                        <td>{{language}}</td>
                        <td v-for="(item,index) in languageL" :key="index" style="background-color: rgb(255, 204, 204);">
                            <input type="text" maxlength="10" :value="item.value">/<input type="text" maxlength="10" :value="item.value1">  
                        </td>
                    </tr>
                    <!-- 数学 -->
                    <tr>
                        <td>{{mathematics}}</td>
                        <td v-for="(item,index) in mathematicsL" :key="index" style="background-color: rgb(255, 204, 204);">
                            <input type="text" maxlength="10" :value="item.value">/<input type="text" maxlength="10" :value="item.value1">  
                        </td>
                    </tr>
                     <!-- 外语 -->
                    <tr>
                        <td>{{languages}}</td>
                        <td v-for="(item,index) in languagesL" :key="index" style="background-color: rgb(255, 204, 204);">
                            <input type="text" maxlength="10" :value="item.value">/<input type="text" maxlength="10" :value="item.value1">  
                        </td>
                    </tr>
                    <!-- 政治 -->
                    <tr>
                        <td>{{politics}}</td>
                        <td v-for="(item,index) in politicsL" :key="index" style="background-color: rgb(255, 204, 204);">
                            <input type="text" maxlength="10" :value="item.value">/<input type="text" maxlength="10" :value="item.value1">  
                        </td>
                    </tr>
                    <!-- 历史 --> 
                    <tr>
                        <td>{{history}}</td>
                        <td v-for="(item,index) in historyL" :key="index" style="background-color: rgb(255, 204, 204);">
                            <input type="text" maxlength="10" :value="item.value">/<input type="text" maxlength="10" :value="item.value1">  
                        </td>
                    </tr>
                    <!--地理  -->
                    <tr>
                        <td>{{geography}}</td>
                        <td v-for="(item,index) in geographyL" :key="index" style="background-color: rgb(255, 204, 204);">
                            <input type="text" maxlength="10" :value="item.value">/<input type="text" maxlength="10" :value="item.value1">  
                        </td>
                    </tr>
                    <!-- 物理 -->
                    <tr>
                        <td>{{physics}}</td>
                        <td v-for="(item,index) in physicsL" :key="index" style="background-color: rgb(255, 204, 204);">
                            <input type="text" maxlength="10" :value="item.value">/<input type="text" maxlength="10" :value="item.value1">  
                        </td>
                    </tr>
                    <!-- 化学 -->
                    <tr>
                         <td>{{chemistry}}</td>
                        <td v-for="(item,index) in chemistryL" :key="index" style="background-color: rgb(255, 204, 204);">
                            <input type="text" maxlength="10" :value="item.value">/<input type="text" maxlength="10" :value="item.value1">  
                        </td>
                    </tr>
                    <!-- 生物 -->
                    <tr>
                        <td>{{biology}}</td>
                        <td v-for="(item,index) in biologyL" :key="index" style="background-color: rgb(255, 204, 204);">
                            <input type="text" maxlength="10" :value="item.value">/<input type="text" maxlength="10" :value="item.value1">  
                        </td>
                    </tr>
                    <!-- 文科综合 -->
                    <tr>
                        <td>{{comprehensive}}</td>
                        <td v-for="(item,index) in comprehensiveL" :key="index" style="background-color: rgb(255, 204, 204);">
                            <input type="text" maxlength="10" :value="item.value">/<input type="text" maxlength="10" :value="item.value1">  
                        </td>
                    </tr>
                    <!-- 理科综合 -->
                    <tr>
                        <td>{{integrated}}</td>
                        <td v-for="(item,index) in integratedL " :key="index" style="background-color: rgb(255, 204, 204);">
                            <input type="text" maxlength="10" :value="item.value">/<input type="text" maxlength="10" :value="item.value1">  
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p class="text_center m_top10" id="errortip"></p>
                <div class="text_center m_top10">
                    <!--<input type="submit" id="dkpmnext_0" value="下一步" class="ui-button ui-button-lceladon">-->
                    <Button type="primary" class="ui-button ui-button-lceladon" @click="fool">下一步</Button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import headerT from '../common/headerT'
    export default {
        components:{
            headerT
        },
         data(){
            return{
                schoolName:'',
                obj:{

                },
                // 高一成绩
                seniorOne:"高一（上）期末",
                seniorOneL:"高一（下）期末",
                // 高二成绩
                SeniorTwo:"高二（上）期末",
                SeniorTwoL:"高二（下）期末",
                //高三成绩
                 gradeThree:"高三（上）期末",
                // 高三第一次模考
                Once:"高三第一次模考",
                // 高三第二次模考
                Two:"高三第二次模考",
                // 高三第三次模考
                Three:"高三第三次模考",
                // 科目 语文
                language:"语文",
                languageL:[
                    // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"100",
                        value1:"1000"
                    },
                    {
                        value:"100",
                        value1:"1000" 
                    },
                    {
                        value:"100",
                        value1:"1000"
                    },
                    { 
                        value:"100",
                        value1:"1000"
                    },
                    {
                        value:"100",
                        value1:"1000" 
                    },
                    {
                        value:"无",
                        value1:"无"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                ],
                // 科目 数学
                mathematics:"数学",
                mathematicsL:[
                    // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"100",
                        value1:"1000"
                    },
                    {
                        value:"100",
                        value1:"1000" 
                    },
                    {
                        value:"100",
                        value1:"1000"
                    },
                    { 
                        value:"100",
                        value1:"1000"
                    },
                    {
                        value:"100",
                        value1:"1000" 
                    },
                    {
                        value:"无",
                        value1:"无"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                ],
                // 科目 外语
                languages:"外语",
                languagesL:[
                    // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"100",
                        value1:"1000"
                    },
                    {
                        value:"100",
                        value1:"1000" 
                    },
                    {
                        value:"100",
                        value1:"1000"
                    },
                    { 
                        value:"100",
                        value1:"1000"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                    {
                        value:"无",
                        value1:"无"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                ],
                // 科目 政治
                politics:"政治",
                politicsL:[
                    // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"100",
                        value1:"1000"
                    },
                    {
                        value:"100",
                        value1:"1000" 
                    },
                    {
                        value:"100",
                        value1:"1000"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                    {
                        value:"无",
                        value1:"无"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                ],
                // 科目 历史
                history:"历史",
                historyL:[
                    // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"100",
                        value1:"1000"
                    },
                    {
                        value:"100",
                        value1:"1000" 
                    },
                    {
                        value:"无",
                        value1:"无"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                    {
                        value:"无",
                        value1:"无"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                ],
                // 科目 地理
                geography:"地理",
                geographyL:[
                    // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"100",
                        value1:"1000"
                    },
                    {
                        value:"100",
                        value1:"1000" 
                    },
                    {
                        value:"100",
                        value1:"1000"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                    {
                        value:"无",
                        value1:"无"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                ],
                // 科目  物理
                physics:"物理",
                physicsL:[
                    // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"100",
                        value1:"1000"
                    },
                    {
                        value:"100",
                        value1:"1000" 
                    },
                    {
                        value:"100",
                        value1:"1000"
                    },
                    { 
                        value:"100",
                        value1:"1000"
                    },
                    {
                        value:"100",
                        value1:"1000" 
                    },
                    {
                        value:"100",
                        value1:"1000"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                ],
                // 科目 化学
                chemistry:"化学",
                chemistryL:[
                    // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                    {
                        value:"无",
                        value1:"无"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                    {
                        value:"无",
                        value1:"无"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                ],
                // 科目 生物
                biology:"生物",
                biologyL:[
                    // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"100",
                        value1:"1000"
                    },
                    {
                        value:"100",
                        value1:"1000" 
                    },
                    {
                        value:"100",
                        value1:"1000"
                    },
                    { 
                        value:"100",
                        value1:"1000"
                    },
                    {
                        value:"100",
                        value1:"1000" 
                    },
                    {
                        value:"无",
                        value1:"1000"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                ],
                // 科目 文科综合	
                comprehensive:"文科综合",
                comprehensiveL:[
                    // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                    {
                        value:"无",
                        value1:"无"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                    {
                        value:"无",
                        value1:"无"
                    },
                ],
                // 科目 理科综合	
                integrated:"理科综合",
                integratedL:[
                    // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                    {
                        value:"无",
                        value1:"无"
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                    { 
                        value:"无",
                        value1:"无"
                    },
                    {
                        value:"无",
                        value1:"无" 
                    },
                    {
                        value:"无",
                        value1:"无"
                    },
                ],
              }
        },
        mounted(){
            // console.log(this.$route.query,'obste')
            this.schoolName = this.$route.query.schoolName
            this.obj.schoolName = this.$route.query.schoolName
        },
        methods:{
            fool(){
                let obj = this.obj;
                this.$router.push({path:'/additional',query:obj})
            }
        }
    }
</script>

<style scoped>
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
        text-align: left;
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
    .ui-tiptext {
        margin: 0;
        color: #4D4D4D;
        position: relative;
        font-size: 12px;
        zoom: 1;
    }
    .ui-table {
        border-collapse: collapse;
        border: 1px solid #ccc;
        width: 100%;
        font-size: 12px;
        text-align: left;
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
    i-table thead tr {
        color: #666;
    }
    .ui-table tr {
        color: #666;
    }
    .cjxxtable th {
        padding: 7px 2px 7px 6px;
    }
    .ui-table th {
        padding: 7px 9px;
        border-bottom: 1px solid #d9d9d9;
        text-align: left;
    }
    .cjxxtable td {
        padding: 8px 2px 7px 6px;
    }
    .ui-table td {
        padding: 8px 2px 7px;
        border-bottom: 1px solid #d9d9d9;
    }
    table td, table th {
        word-wrap: break-word;
        word-break: break-all;
    }
    .cjxxtable input {
        width: 27px;
    }
    .cjxxtable input {
        width: 33px;
        padding: 3px 2px;
        margin: 0 1px;
        border: 1px solid #c1c1c1;
        color: #595959;
        font-size: 12px;
        line-height: 18px;
    }
    .m_top10 {
        margin-top: 10px;
    }
    .text_center {
        text-align: center;
        padding: 0;
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










</style>