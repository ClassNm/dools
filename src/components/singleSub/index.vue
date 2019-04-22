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
import { singUb } from '../../vuex/actions.js'
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
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
            ],
            // 科目 数学
            mathematics:"数学",
            mathematicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                 { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
            ],
            // 科目 外语
            languages:"外语",
            languagesL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
            ],
            // 科目 政治
            politics:"政治",
            politicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                 { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
            ],
            // 科目 历史
            history:"历史",
            historyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
            ],
            // 科目 地理
            geography:"地理",
            geographyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
            ],
            // 科目  物理
            physics:"物理",
            physicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
            ],
            // 科目 化学
            chemistry:"化学",
            chemistryL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
            ],
            // 科目 生物
            biology:"生物",
            biologyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                 { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
            ],
            // 科目 文科综合	
            comprehensive:"文科综合",
            comprehensiveL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                 { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
            ],
            // 科目 理科综合	
            integrated:"理科综合",
            integratedL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                {
                    value:"无",
                    value1:"无",
                },
                { 
                    value:"无",
                    value1:"无",
                },
            ],
        }
    },
     methods:{
        submit(){
            // 语文
            let a = JSON.stringify(this.languageL[0])
            let b = JSON.stringify(this.languageL[1])
            let c = JSON.stringify(this.languageL[2]) 
            let d = JSON.stringify(this.languageL[3]) 
            let e = JSON.stringify(this.languageL[4])
            let f = JSON.stringify(this.languageL[5])
            let g = JSON.stringify(this.languageL[6])
            let h = JSON.stringify(this.languageL[7])
            // 数学
            let aM = JSON.stringify(this.mathematicsL[0])
            let bM = JSON.stringify(this.mathematicsL[1])
            let cM = JSON.stringify(this.mathematicsL[2]) 
            let dM = JSON.stringify(this.mathematicsL[3]) 
            let eM = JSON.stringify(this.mathematicsL[4])
            let fM = JSON.stringify(this.mathematicsL[5])
            let gM = JSON.stringify(this.mathematicsL[6])
            let hM = JSON.stringify(this.mathematicsL[7])
            // 外语
            let aP = JSON.stringify(this.languagesL[0])
            let bP = JSON.stringify(this.languagesL[1])
            let cP = JSON.stringify(this.languagesL[2])
            let dP = JSON.stringify(this.languagesL[3]) 
            let eP = JSON.stringify(this.languagesL[4])
            let fP = JSON.stringify(this.languagesL[5])
            let gP = JSON.stringify(this.languagesL[6])
            let hP = JSON.stringify(this.languagesL[7])
            // 政治
            let aPo = JSON.stringify(this.politicsL[0])
            let bPo = JSON.stringify(this.politicsL[1])
            let cPo = JSON.stringify(this.politicsL[2]) 
            let dPo = JSON.stringify(this.politicsL[3]) 
            let ePo = JSON.stringify(this.politicsL[4])
            let fPo = JSON.stringify(this.politicsL[5])
            let gPo = JSON.stringify(this.politicsL[6])
            let hPo = JSON.stringify(this.politicsL[7])
            // 历史
            let aH = JSON.stringify(this.historyL[0])
            let bH = JSON.stringify(this.historyL[1])
            let cH = JSON.stringify(this.historyL[2]) 
            let dH = JSON.stringify(this.historyL[3]) 
            let eH = JSON.stringify(this.historyL[4])
            let fH = JSON.stringify(this.historyL[5])
            let gH = JSON.stringify(this.historyL[6])
            let hH = JSON.stringify(this.historyL[7])
             // 地理
            let aG = JSON.stringify(this.geographyL[0])
            let bG = JSON.stringify(this.geographyL[1])
            let cG = JSON.stringify(this.geographyL[2]) 
            let dG = JSON.stringify(this.geographyL[3]) 
            let eG = JSON.stringify(this.geographyL[4])
            let fG = JSON.stringify(this.geographyL[5])
            let gG = JSON.stringify(this.geographyL[6])
            let hG = JSON.stringify(this.geographyL[7])
            // 物理
            let aPh = JSON.stringify(this.physicsL[0])
            let bPh = JSON.stringify(this.physicsL[1])
            let cPh = JSON.stringify(this.physicsL[2]) 
            let dPh = JSON.stringify(this.physicsL[3]) 
            let ePh = JSON.stringify(this.physicsL[4])
            let fPh = JSON.stringify(this.physicsL[5])
            let gPh = JSON.stringify(this.physicsL[6])
            let hPh = JSON.stringify(this.physicsL[7])
            // 化学
            let aC = JSON.stringify(this.chemistryL[0])
            let bC = JSON.stringify(this.chemistryL[1])
            let cC = JSON.stringify(this.chemistryL[2]) 
            let dC = JSON.stringify(this.chemistryL[3]) 
            let eC = JSON.stringify(this.chemistryL[4])
            let fC = JSON.stringify(this.chemistryL[5])
            let gC = JSON.stringify(this.chemistryL[6])
            let hC = JSON.stringify(this.chemistryL[7])
            // 生物
            let aB = JSON.stringify(this.biologyL[0])
            let bB = JSON.stringify(this.biologyL[1])
            let cB = JSON.stringify(this.biologyL[2]) 
            let dB = JSON.stringify(this.biologyL[3]) 
            let eB = JSON.stringify(this.biologyL[4])
            let fB = JSON.stringify(this.biologyL[5])
            let gB = JSON.stringify(this.biologyL[6])
            let hB = JSON.stringify(this.biologyL[7])
            // 文科综合
            let aCo = JSON.stringify(this.comprehensiveL[0])
            let bCo = JSON.stringify(this.comprehensiveL[1])
            let cCo = JSON.stringify(this.comprehensiveL[2]) 
            let dCo = JSON.stringify(this.comprehensiveL[3]) 
            let eCo = JSON.stringify(this.comprehensiveL[4])
            let fCo = JSON.stringify(this.comprehensiveL[5])
            let gCo = JSON.stringify(this.comprehensiveL[6])
            let hCo = JSON.stringify(this.comprehensiveL[7])
            // 理科综合
            let aIn = JSON.stringify(this.integratedL[0])
            let bIn = JSON.stringify(this.integratedL[1])
            let cIn = JSON.stringify(this.integratedL[2]) 
            let dIn = JSON.stringify(this.integratedL[3]) 
            let eIn = JSON.stringify(this.integratedL[4])
            let fIn = JSON.stringify(this.integratedL[5])
            let gIn = JSON.stringify(this.integratedL[6])
            let hIn = JSON.stringify(this.integratedL[7])

            let data = [
                 // 科目 语文
                {
                    // 高一上学期
                    seniorOneUp: a,
                     // 高一下学期
                    seniorOneLower:b,
                     // 高二上学期
                    seniorTwoUp: c,
                    // 高二下学期
                    seniorTwoLower: d,
                     // 高三上学期
                    seniorThreeUp: e,
                    // 高三第一次
                    seniorThreeOne:f,
                    // 高三第二次
                    seniorThreeTwo:g,
                    // 高三第三次
                    seniorThreeThree:h,
                    // 标注
                    code:"Chinese",
                },
                 // 科目 数学
                {
                    // 高一上学期
                    seniorOneUp: aM,
                     // 高一下学期
                    seniorOneLower:bM,
                     // 高二上学期
                    seniorTwoUp: cM,
                    // 高二下学期
                    seniorTwoLower: dM,
                     // 高三上学期
                    seniorThreeUp: eM,
                    // 高三第一次
                    seniorThreeOne:fM,
                    // 高三第二次
                    seniorThreeTwo:gM,
                    // 高三第三次
                    seniorThreeThree:hM,
                    // 标注
                    code:"Math",
                },
                 // 科目 外语
                {
                    // 高一上学期
                    seniorOneUp: aP,
                     // 高一下学期
                    seniorOneLower:bP,
                     // 高二上学期
                    seniorTwoUp: cP,
                    // 高二下学期
                    seniorTwoLower: dP,
                     // 高三上学期
                    seniorThreeUp: eP,
                    // 高三第一次
                    seniorThreeOne:fP,
                    // 高三第二次
                    seniorThreeTwo:gP,
                    // 高三第三次
                    seniorThreeThree:hP,
                    // 标注
                    code:"ForeignLanguage",
                },
                 // 科目 政治
                {
                    // 高一上学期
                    seniorOneUp: aPo,
                     // 高一下学期
                    seniorOneLower:bPo,
                     // 高二上学期
                    seniorTwoUp: cPo,
                    // 高二下学期
                    seniorTwoLower: dPo,
                     // 高三上学期
                    seniorThreeUp: ePo,
                    // 高三第一次
                    seniorThreeOne:fPo,
                    // 高三第二次
                    seniorThreeTwo:gPo,
                    // 高三第三次
                    seniorThreeThree:hPo,
                    // 标注
                    code:"Politics",
                },
                 // 科目 历史
                {
                    // 高一上学期
                    seniorOneUp: aH,
                     // 高一下学期
                    seniorOneLower:bH,
                     // 高二上学期
                    seniorTwoUp: cH,
                    // 高二下学期
                    seniorTwoLower: dH,
                     // 高三上学期
                    seniorThreeUp: eH,
                    // 高三第一次
                    seniorThreeOne:fH,
                    // 高三第二次
                    seniorThreeTwo:gH,
                    // 高三第三次
                    seniorThreeThree:hH,
                    // 标注
                    code:"History",
                },
                 // 科目 地理
                {
                    // 高一上学期
                    seniorOneUp: aG,
                     // 高一下学期
                    seniorOneLower:bG,
                     // 高二上学期
                    seniorTwoUp: cG,
                    // 高二下学期
                    seniorTwoLower: dG,
                     // 高三上学期
                    seniorThreeUp: eG,
                    // 高三第一次
                    seniorThreeOne:fG,
                    // 高三第二次
                    seniorThreeTwo:gG,
                    // 高三第三次
                    seniorThreeThree:hG,
                    // 标注
                    code:"Geography",
                },
                 // 科目 物理
                {
                    // 高一上学期
                    seniorOneUp: aPh,
                     // 高一下学期
                    seniorOneLower:bPh,
                     // 高二上学期
                    seniorTwoUp: cPh,
                    // 高二下学期
                    seniorTwoLower: dPh,
                     // 高三上学期
                    seniorThreeUp: ePh,
                    // 高三第一次
                    seniorThreeOne:fPh,
                    // 高三第二次
                    seniorThreeTwo:gPh,
                    // 高三第三次
                    seniorThreeThree:hPh,
                    // 标注
                    code:"Physics",
                },
                 // 科目 化学
                {
                    // 高一上学期
                    seniorOneUp: aC,
                     // 高一下学期
                    seniorOneLower:bC,
                     // 高二上学期
                    seniorTwoUp: cC,
                    // 高二下学期
                    seniorTwoLower: dC,
                     // 高三上学期
                    seniorThreeUp: eC,
                    // 高三第一次
                    seniorThreeOne:fC,
                    // 高三第二次
                    seniorThreeTwo:gC,
                    // 高三第三次
                    seniorThreeThree:hC,
                    // 标注
                    code:"Chem",
                },
                 // 科目 生物
                {
                    // 高一上学期
                    seniorOneUp: aB,
                     // 高一下学期
                    seniorOneLower:bB,
                     // 高二上学期
                    seniorTwoUp: cB,
                    // 高二下学期
                    seniorTwoLower: dB,
                     // 高三上学期
                    seniorThreeUp: eB,
                    // 高三第一次
                    seniorThreeOne:fB,
                    // 高三第二次
                    seniorThreeTwo:gB,
                    // 高三第三次
                    seniorThreeThree:hB,
                    // 标注
                    code:"Biology",
                },
                // 科目 文科综合
                {
                    // 高一上学期
                    seniorOneUp: aCo,
                     // 高一下学期
                    seniorOneLower:bCo,
                     // 高二上学期
                    seniorTwoUp: cCo,
                    // 高二下学期
                    seniorTwoLower: dCo,
                     // 高三上学期
                    seniorThreeUp: eCo,
                    // 高三第一次
                    seniorThreeOne:fCo,
                    // 高三第二次
                    seniorThreeTwo:gCo,
                    // 高三第三次
                    seniorThreeThree:hCo,
                    // 标注
                    code:"LiberalArts",
                },
                // 科目 文科综合
                {
                    // 高一上学期
                    seniorOneUp: aIn,
                     // 高一下学期
                    seniorOneLower:bIn,
                     // 高二上学期
                    seniorTwoUp: cIn,
                    // 高二下学期
                    seniorTwoLower: dIn,
                     // 高三上学期
                    seniorThreeUp: eIn,
                    // 高三第一次
                    seniorThreeOne:fIn,
                    // 高三第二次
                    seniorThreeTwo:gIn,
                    // 高三第三次
                    seniorThreeThree:hIn,
                    // 标注
                    code:"Science",
                },
                
                
            ]

            console.log(data);
            // singUb(data);
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