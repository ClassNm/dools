<template>
    <div class="singleSub">
        <div class="ui-breadcrumbs">
            <ul class="ui-breadcrumb ">
                <li>
                    <router-link to="/home">
                        <a href="">首页</a>
                    </router-link>
                </li>
                <li><span class="icon"><i title="单箭头右" class="iconfont"></i></span></li>
                <li class="active">填报个人信息</li>
                <li><span class="icon"><i title="单箭头右" class="iconfont"></i></span></li>
                <li class="active">单科排名</li>
            </ul>
        </div>
        <div class="ui-box">
            <div class="ui-box-head">
                <h3 class="ui-box-head-title">单科排名</h3>
            </div>
            <div class="ui-box-container">
                <div class="txt-explain m_bottom10">不同高校对单科排名的要求不同，请如实尽量填写。</div>
                <form id="commitDkpm" name="commitDkpm" action="/zzbm/stu/info/commitDkpm.action" method="post">
                    <input name="zid" value="" id="commitDkpm_zid" type="hidden">
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
                        </thead>
                        <tbody>
                        <!-- 语文 -->
                        <tr>
                            <td>{{language}}</td>
                            <td v-for="(item,index) in languageL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 数学 -->
                        <tr>
                            <td>{{mathematics}}</td>
                            <td v-for="(item,index) in mathematicsL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 外语 -->
                        <tr>
                            <td>{{languages}}</td>
                            <td v-for="(item,index) in languagesL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 政治 -->
                        <tr>
                            <td>{{politics}}</td>
                            <td v-for="(item,index) in politicsL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 历史 -->  
                        <tr>
                            <td>{{history}}</td>
                            <td v-for="(item,index) in historyL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                         <!--地理  -->
                        <tr>
                            <td>{{geography}}</td>
                            <td v-for="(item,index) in geographyL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                         <!-- 物理 -->
                        <tr>
                            <td>{{physics}}</td>
                            <td v-for="(item,index) in physicsL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 化学 --> 
                        <tr>
                            <td>{{chemistry}}</td>
                            <td v-for="(item,index) in chemistryL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 生物 -->
                        <tr>
                            <td>{{biology}}</td>
                            <td v-for="(item,index) in biologyL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                         <!-- 文科综合 -->
                        <tr>
                            <td>{{comprehensive}}</td>
                            <td v-for="(item,index) in comprehensiveL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 理科综合 -->
                        <tr>
                            <td>{{integrated}}</td>
                            <td v-for="(item,index) in integratedL" :key="index">
                                <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">
                                </td>
                        </tr>
                        </tbody>
                    </table>
                    <p class="text_center m_top10" id="errortip"></p>
                    <div class="text_center m_top10">
                        <Button type="primary" @click="submit">保存</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
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
                    value:"无",
                    value1:"无",
                    index : 1
                },
                {
                    value:"无",
                    value1:"无",
                     index : 2
                },
                {
                    value:"无",
                    value1:"无",
                     index : 3
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 4
                },
                { 
                    value:"无",
                    value1:"无",
                    index : 5
                },
                {
                    value:"无",
                    value1:"无",
                     index : 6 
                },
                {
                    value:"无",
                    value1:"无",
                     index : 7
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 8
                },
            ],
            // 科目 数学
            mathematics:"数学",
            mathematicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                 { 
                    value:"无",
                    value1:"无",
                    index : 1
                },
                {
                    value:"无",
                    value1:"无",
                     index : 2
                },
                {
                    value:"无",
                    value1:"无",
                     index : 3
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 4
                },
                { 
                    value:"无",
                    value1:"无",
                    index : 5
                },
                {
                    value:"无",
                    value1:"无",
                     index : 6 
                },
                {
                    value:"无",
                    value1:"无",
                     index : 7
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 8
                },
            ],
            // 科目 外语
            languages:"外语",
            languagesL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                { 
                    value:"无",
                    value1:"无",
                    index : 1
                },
                {
                    value:"无",
                    value1:"无",
                     index : 2
                },
                {
                    value:"无",
                    value1:"无",
                     index : 3
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 4
                },
                { 
                    value:"无",
                    value1:"无",
                    index : 5
                },
                {
                    value:"无",
                    value1:"无",
                     index : 6 
                },
                {
                    value:"无",
                    value1:"无",
                     index : 7
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 8
                },
            ],
            // 科目 政治
            politics:"政治",
            politicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                 { 
                    value:"无",
                    value1:"无",
                    index : 1
                },
                {
                    value:"无",
                    value1:"无",
                     index : 2
                },
                {
                    value:"无",
                    value1:"无",
                     index : 3
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 4
                },
                { 
                    value:"无",
                    value1:"无",
                    index : 5
                },
                {
                    value:"无",
                    value1:"无",
                     index : 6 
                },
                {
                    value:"无",
                    value1:"无",
                     index : 7
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 8
                },
            ],
            // 科目 历史
            history:"历史",
            historyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                { 
                    value:"无",
                    value1:"无",
                    index : 1
                },
                {
                    value:"无",
                    value1:"无",
                     index : 2
                },
                {
                    value:"无",
                    value1:"无",
                     index : 3
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 4
                },
                { 
                    value:"无",
                    value1:"无",
                    index : 5
                },
                {
                    value:"无",
                    value1:"无",
                     index : 6 
                },
                {
                    value:"无",
                    value1:"无",
                     index : 7
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 8
                },
            ],
            // 科目 地理
            geography:"地理",
            geographyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                { 
                    value:"无",
                    value1:"无",
                    index : 1
                },
                {
                    value:"无",
                    value1:"无",
                     index : 2
                },
                {
                    value:"无",
                    value1:"无",
                     index : 3
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 4
                },
                { 
                    value:"无",
                    value1:"无",
                    index : 5
                },
                {
                    value:"无",
                    value1:"无",
                     index : 6 
                },
                {
                    value:"无",
                    value1:"无",
                     index : 7
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 8
                },
            ],
            // 科目  物理
            physics:"物理",
            physicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                { 
                    value:"无",
                    value1:"无",
                    index : 1
                },
                {
                    value:"无",
                    value1:"无",
                     index : 2
                },
                {
                    value:"无",
                    value1:"无",
                     index : 3
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 4
                },
                { 
                    value:"无",
                    value1:"无",
                    index : 5
                },
                {
                    value:"无",
                    value1:"无",
                     index : 6 
                },
                {
                    value:"无",
                    value1:"无",
                     index : 7
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 8
                },
            ],
            // 科目 化学
            chemistry:"化学",
            chemistryL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                { 
                    value:"无",
                    value1:"无",
                    index : 1
                },
                {
                    value:"无",
                    value1:"无",
                     index : 2
                },
                {
                    value:"无",
                    value1:"无",
                     index : 3
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 4
                },
                { 
                    value:"无",
                    value1:"无",
                    index : 5
                },
                {
                    value:"无",
                    value1:"无",
                     index : 6 
                },
                {
                    value:"无",
                    value1:"无",
                     index : 7
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 8
                },
            ],
            // 科目 生物
            biology:"生物",
            biologyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                 { 
                    value:"无",
                    value1:"无",
                    index : 1
                },
                {
                    value:"无",
                    value1:"无",
                     index : 2
                },
                {
                    value:"无",
                    value1:"无",
                     index : 3
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 4
                },
                { 
                    value:"无",
                    value1:"无",
                    index : 5
                },
                {
                    value:"无",
                    value1:"无",
                     index : 6 
                },
                {
                    value:"无",
                    value1:"无",
                     index : 7
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 8
                },
            ],
            // 科目 文科综合	
            comprehensive:"文科综合",
            comprehensiveL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                 { 
                    value:"无",
                    value1:"无",
                    index : 1
                },
                {
                    value:"无",
                    value1:"无",
                     index : 2
                },
                {
                    value:"无",
                    value1:"无",
                     index : 3
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 4
                },
                { 
                    value:"无",
                    value1:"无",
                    index : 5
                },
                {
                    value:"无",
                    value1:"无",
                     index : 6 
                },
                {
                    value:"无",
                    value1:"无",
                     index : 7
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 8
                },
            ],
            // 科目 理科综合	
            integrated:"理科综合",
            integratedL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                { 
                    value:"无",
                    value1:"无",
                    index : 1
                },
                {
                    value:"无",
                    value1:"无",
                     index : 2
                },
                {
                    value:"无",
                    value1:"无",
                     index : 3
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 4
                },
                { 
                    value:"无",
                    value1:"无",
                    index : 5
                },
                {
                    value:"无",
                    value1:"无",
                     index : 6 
                },
                {
                    value:"无",
                    value1:"无",
                     index : 7
                },
                { 
                    value:"无",
                    value1:"无",
                     index : 8
                },
            ],
        }
    },
     methods:{
        submit(){
            let data = {
                academicLevelLower:this.languageL,
                test : this.mathematicsL,
                test1 : this.languagesL,
                test2 : this.politicsL,
                test3 : this.historyL,
                test4 : this.geographyL,
                test5 : this.physicsL,
                test6 : this.chemistryL,
                test7 : this.biologyL,
                test8 : this.comprehensiveL,
                test9 : this.integratedL,
            }
            let dataL = JSON.stringify(data)
            console.log(dataL);
            // grade(data);
        }
    }
}
</script>


<style scoped>
    .singleSub{
        padding: 10px;
        width: 1000px;
        margin:0 auto;
        background: white;
    }
    .ui-breadcrumb {
        font-size: 0;
        padding: 0;
        width: 230px;
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
    li {
        white-space: normal;
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
    .ui-box-container {
        background: #fff;
        padding: 10px 0;
        width: 750px;
    }
    .txt-explain {
        font-size: 12px;
        color: #999;
    }
    .m_bottom10 {
        margin-bottom: 10px;
    }
    .ui-table {
        border-collapse: collapse;
        border: 1px solid #ccc;
        width: 100px;
        font-size: 12px;
        text-align: left;
    }
    table {
        display: table;
        border-collapse: separate;
        border-spacing: 2px;
        border-color: grey;
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
    thead {
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
    }
    .ui-table thead tr {
        color: #666;
    }
    .ui-table tr {
        color: #666;
    }
    tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }
    .cjxxtable th {
        padding: 7px 2px 7px 6px;
    }
    .ui-table th {
        padding: 7px 6px;
        border-bottom: 1px solid #d9d9d9;
        text-align: left;
    }
    .ui-table {
        border-collapse: collapse;
        border: 1px solid #ccc;
        width: 100%;
        font-size: 12px;
        text-align: left;
    }
    .cjxxtable td {
        padding: 8px 2px 7px 6px;
    }
    .ui-table td {
        padding: 8px 3px 7px;
        border-bottom: 1px solid #d9d9d9;
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
    .ui-table tr:nth-child(even), .ui-table-split, .ui-table-hover {
        background-color: #FBFBFB;
    }
    .ui-table tr {
        color: #666;
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
        width: 55px;
    }
    .ui-button-lceladon, .ui-button-mceladon, .ui-button-sceladon {
        color: #fff;
        text-shadow: 0 -1px 1px rgba(0,0,0,0.25);
        border: 1px solid #4498ae;
        background-color: #50aac2;
    }




</style>