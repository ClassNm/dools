<template>
    <div class="grade">
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
                <li class="active">成绩信息</li>
            </ul>
        </div>
        <div class="ui-box">
            <div class="ui-box-head">
                <h3 class="ui-box-head-title">成绩信息</h3>
            </div>
            <div class="ui-box-container">
                <div class="ui-tiptext-container ui-tiptext-container-message" style="margin-top:10px;">
                    <p class="ui-tiptext ui-tiptext-message" style="font-size:12px" align="left">
                        <i title="提示" class="ui-tiptext-icon iconfont"></i>
                        <span style="color:#c30;">注意：</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、{{notice}}。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、{{noticeL}}。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、<span style="color:#c30;">{{noticeLL}}</span>。
                    </p>
                </div>
                <br>
                <form id="updateXycjxx"
                      name="updateXycjxx"
                      action="/zzbm/stu/info/updateXycjxx.action" method="post">
                    <table class="ui-table cjxxtable">
                        <thead>
                        <tr>
                            <th>科目\学期</th>
                            <th>{{seniorOne}}<br>成绩/满分
                            </th>
                            <th>{{seniorOneL}}<br>成绩/满分
                            </th>
                            <th>{{SeniorTwo}}<br>成绩/满分
                            </th>
                            <th>{{SeniorTwoL}}<br>成绩/满分
                            </th>
                            <th>{{gradeThree}}<br>成绩/满分
                            </th>
                            <th>{{examinationL}}<br>等级/最高等级
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <!-- // 科目 语文 -->
                        <tr>
                            <td>{{language}}</td>
                            <td  v-for="item in languageL" :key="item.index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1" id="updateXycjxx_xycjs_0__cj1" 
                                >
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2" 
                                id="updateXycjxx_xycjs_0__mf1" type="text"
                                >
                            </td>
                            
                            <!-- 实验 -->
                            <!-- <td>
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="academicLevelLower" id="updateXycjxx_xycjs_0__cj1" 
                                >
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="academicLevelUp" 
                                id="updateXycjxx_xycjs_0__mf1" type="text"
                                >
                            </td>
                             <td>
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="seniorOneLower" id="updateXycjxx_xycjs_0__cj1" 
                                >
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="seniorOneUp" 
                                id="updateXycjxx_xycjs_0__mf1" type="text"
                                >
                            </td>
                            <td>
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="seniorThreeUp" id="updateXycjxx_xycjs_0__cj1" 
                                >
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="seniorTwoLower" 
                                id="updateXycjxx_xycjs_0__mf1" type="text"
                                >
                            </td>
                            <td>
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="seniorTwoUp" id="updateXycjxx_xycjs_0__cj1" 
                                >
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="totalPoints1" 
                                id="updateXycjxx_xycjs_0__mf1" type="text"
                                >
                            </td>
                            <td>
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="totalPoints2" id="updateXycjxx_xycjs_0__cj1" 
                                >
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="totalPoints3" 
                                id="updateXycjxx_xycjs_0__mf1" type="text"
                                >
                            </td>
                            <td>
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="totalPoints4" id="updateXycjxx_xycjs_0__cj1" 
                                >
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="totalPoints5" 
                                id="updateXycjxx_xycjs_0__mf1" type="text"
                                >
                            </td> -->

                        </tr>
                         <!-- // 科目 数学 -->
                        <tr>
                            <td>{{mathematics}}</td>
                            <td  v-for="(item,index) in mathematicsL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1"  
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2"  
                                id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                         <!-- //科目 外语 -->
                        <tr>
                            <td>{{languages}}</td>
                            <td  v-for="(item,index) in languagesL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1" 
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2"
                                id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- // 科目 政治 -->
                        <tr>
                            <td>{{politics}}</td>                           
                            <td  v-for="(item,index) in politicsL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1" 
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2"
                                id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 历史 -->
                        <tr>
                            <td>{{history}}</td>
                            <td  v-for="(item,index) in historyL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1"
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2"
                                id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 地理 -->
                        <tr>
                            <td>{{geography}}</td>
                            <td  v-for="(item,index) in geographyL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1" 
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2" 
                                id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目  物理 -->
                        <tr>
                            <td>{{physics}}</td>
                            <td  v-for="(item,index) in physicsL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1"
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2" 
                                id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 化学 -->
                        <tr>
                            <td>{{chemistry}}</td>
                            <td  v-for="(item,index) in chemistryL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1" 
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2"
                                id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 生物 -->
                        <tr>
                            <td>{{biology}}</td>
                            <td  v-for="(item,index) in biologyL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1" 
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2" 
                                id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 美术 -->
                        <tr>
                            <td>{{arts}}</td>
                            <td  v-for="(item,index) in artsL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1" 
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2" 
                                id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 体育 -->
                        <tr>
                            <td>{{sports}}</td>
                            <td  v-for="(item,index) in sportsL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1"
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2" 
                                id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 音乐 -->
                        <tr>
                            <td>{{music}}</td>
                            <td  v-for="(item,index) in musicL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1" 
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2"
                                id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 信息技术 -->
                        <tr>
                            <td>{{IT}}</td>
                            <td  v-for="(item,index) in ITL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1" 
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2"
                                id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 通用技术 -->
                        <tr>
                            <td>{{technique}}</td>
                            <td  v-for="(item,index) in techniqueL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1" 
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2" 
                                id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 文科综合 -->
                        <tr>
                            <td>{{comprehensive}}</td>
                            <td  v-for="(item,index) in comprehensiveL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1"
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2"
                                 id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 理科综合 -->
                        <tr>
                            <td>{{integrated}}</td>
                            <td  v-for="(item,index) in integratedL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1"
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2"
                                 id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 总分 -->
                        <tr>
                            <td>{{total}}</td>
                            <td  v-for="(item,index) in totalL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" 
                                v-model="item.value1" 
                                id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" 
                                v-model="item.value2"
                                 id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <!-- 科目 年级排名 -->
                        <tr>
                            <td>{{Grade}}</td>
                            <td  v-for="(item,index) in GradeL" :key="index">
                                <input name="xycjs[0].pm" maxlength="10" 
                                v-model="item.value" 
                                id="updateXycjxx_xycjs_0__pm" class="big" type="text">
                            </td>
                        </tr>
                        <!-- 科目 年级人数 -->
                        <tr>
                            <td>{{numbergrade}}</td>
                            <td  v-for="(item,index) in numbergradeL" :key="index">
                                <input name="xycjs[0].rs" maxlength="10" 
                                v-model="item.value"
                                id="updateXycjxx_xycjs_0__rs" class="big" type="text">
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <p class="text_center m_top10" id="errortip"></p>
                    <div class="text_center m_top10">
                        <Button type="warning" @click="submit">保存</Button>
                        &nbsp;&nbsp;
                        <Button type="primary" onclick="javascript:history.go(-1);">取消</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { grade } from '../../vuex/actions.js'
export default {
    data(){
        return{
            // 注意事宜
            notice:"请如实尽量填写各学期期末考试成绩，如果某科目在某学期没有成绩或没有排名，可以不填",
            noticeL:"学业水平考试（会考）成绩请根据所在省市情况，如实填写A+、A、B+、B、B-、C+、C、C-、D+、D、E、合格、不合格或者分数",
            noticeLL:"某些高校的志愿可能需要会考成绩。您可先将学业水平（会考）成绩填写完整，对学业水平（会考）没有的科目可以填“无”",
            // 高一成绩
            seniorOne:"高一（上）期末",
            seniorOneL:"高一（下）期末",
            // 高二成绩
            SeniorTwo:"高二（上）期末",
            SeniorTwoL:"高二（下）期末",
           //高三成绩
           gradeThree:"高三（上）期末",
           // 学业水平（会考）   
            examinationL:"学业水平（会考）",
           // 科目 语文
            language:"语文",
            languageL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
            // 科目 数学
            mathematics:"数学",
            mathematicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
            // 科目 外语
            languages:"外语",
            languagesL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
            // 科目 政治
            politics:"政治",
            politicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
            // 科目 历史
            history:"历史",
            historyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
            // 科目 地理
            geography:"地理",
            geographyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
            // 科目 物理
            physics:"物理",
            physicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
             // 科目 化学
            chemistry:"化学",
            chemistryL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
             // 科目 生物
            biology:"生物",
            biologyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
             // 科目 美术
            arts:"美术",
            artsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
             // 科目 体育
            sports:"体育",
            sportsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
             // 科目 音乐
            music:"音乐",
            musicL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
             // 科目 信息技术
            IT:"信息技术",
            ITL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
             // 科目 通用技术
            technique:"通用技术",
            techniqueL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
            // 科目 文科综合
            comprehensive:"文科综合",
            comprehensiveL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
            // 科目 理科综合
            integrated:"理科综合",
            integratedL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无·",
                    value2:"无",
                }
            ],
            // 科目 总分
            total:"总分",
            totalL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                },
                { 
                    value1:"无",
                    value2:"无",
                },
                {
                    value1:"无",
                    value2:"无",
                }
            ],
            // 科目 年级排名
            Grade:"年级排名",
            GradeL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                     value:"无",
                },
                {
                     value:"无",
                },
                {
                    value:"无",
                },
                { 
                   value:"无",
                },
                {
                    value:"无",
                },
                {
                    value:"无",
                }
            ],
            // 科目 年级人数
            numbergrade:"年级人数",
            numbergradeL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                 { 
                     value:"无",
                },
                {
                    value:"无",
                },
                {
                    value:"无",
                },
                { 
                   value:"无",
                },
                {
                    value:"无",
                },
                {
                    value:"无",
                }
            ],
            item : { 
                language : [], 
            },
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
            // 数学
            let aM = JSON.stringify(this.mathematicsL[0])
            let bM = JSON.stringify(this.mathematicsL[1])
            let cM = JSON.stringify(this.mathematicsL[2]) 
            let dM = JSON.stringify(this.mathematicsL[3]) 
            let eM = JSON.stringify(this.mathematicsL[4])
            let fM = JSON.stringify(this.mathematicsL[5])
            // 外语
            let aP = JSON.stringify(this.languagesL[0])
            let bP = JSON.stringify(this.languagesL[1])
            let cP = JSON.stringify(this.languagesL[2]) 
            let dP = JSON.stringify(this.languagesL[3]) 
            let eP = JSON.stringify(this.languagesL[4])
            let fP = JSON.stringify(this.languagesL[5])
            // 政治
            let aPo = JSON.stringify(this.politicsL[0])
            let bPo = JSON.stringify(this.politicsL[1])
            let cPo = JSON.stringify(this.politicsL[2]) 
            let dPo = JSON.stringify(this.politicsL[3]) 
            let ePo = JSON.stringify(this.politicsL[4])
            let fPo = JSON.stringify(this.politicsL[5])
            // 历史
            let aH = JSON.stringify(this.historyL[0])
            let bH = JSON.stringify(this.historyL[1])
            let cH = JSON.stringify(this.historyL[2]) 
            let dH = JSON.stringify(this.historyL[3]) 
            let eH = JSON.stringify(this.historyL[4])
            let fH = JSON.stringify(this.historyL[5])
             // 地理
            let aG = JSON.stringify(this.geographyL[0])
            let bG = JSON.stringify(this.geographyL[1])
            let cG = JSON.stringify(this.geographyL[2]) 
            let dG = JSON.stringify(this.geographyL[3]) 
            let eG = JSON.stringify(this.geographyL[4])
            let fG = JSON.stringify(this.geographyL[5])
            // 物理
            let aPh = JSON.stringify(this.physicsL[0])
            let bPh = JSON.stringify(this.physicsL[1])
            let cPh = JSON.stringify(this.physicsL[2]) 
            let dPh = JSON.stringify(this.physicsL[3]) 
            let ePh = JSON.stringify(this.physicsL[4])
            let fPh = JSON.stringify(this.physicsL[5])
            // 化学
            let aC = JSON.stringify(this.chemistryL[0])
            let bC = JSON.stringify(this.chemistryL[1])
            let cC = JSON.stringify(this.chemistryL[2]) 
            let dC = JSON.stringify(this.chemistryL[3]) 
            let eC = JSON.stringify(this.chemistryL[4])
            let fC = JSON.stringify(this.chemistryL[5])
            // 生物
            let aB = JSON.stringify(this.biologyL[0])
            let bB = JSON.stringify(this.biologyL[1])
            let cB = JSON.stringify(this.biologyL[2]) 
            let dB = JSON.stringify(this.biologyL[3]) 
            let eB = JSON.stringify(this.biologyL[4])
            let fB = JSON.stringify(this.biologyL[5])
            // 美术
            let aA = JSON.stringify(this.artsL[0])
            let bA = JSON.stringify(this.artsL[1])
            let cA = JSON.stringify(this.artsL[2]) 
            let dA = JSON.stringify(this.artsL[3]) 
            let eA = JSON.stringify(this.artsL[4])
            let fA = JSON.stringify(this.artsL[5])
            // 体育
            let aS = JSON.stringify(this.sportsL[0])
            let bS = JSON.stringify(this.sportsL[1])
            let cS = JSON.stringify(this.sportsL[2]) 
            let dS = JSON.stringify(this.sportsL[3]) 
            let eS = JSON.stringify(this.sportsL[4])
            let fS = JSON.stringify(this.sportsL[5])
            // 音乐
            let aMu = JSON.stringify(this.musicL[0])
            let bMu = JSON.stringify(this.musicL[1])
            let cMu = JSON.stringify(this.musicL[2]) 
            let dMu = JSON.stringify(this.musicL[3]) 
            let eMu = JSON.stringify(this.musicL[4])
            let fMu = JSON.stringify(this.musicL[5])
            // 信息技术
            let aIT = JSON.stringify(this.ITL[0])
            let bIT = JSON.stringify(this.ITL[1])
            let cIT = JSON.stringify(this.ITL[2]) 
            let dIT = JSON.stringify(this.ITL[3]) 
            let eIT = JSON.stringify(this.ITL[4])
            let fIT = JSON.stringify(this.ITL[5])
            // 通用技术
            let aTe = JSON.stringify(this.techniqueL[0])
            let bTe = JSON.stringify(this.techniqueL[1])
            let cTe = JSON.stringify(this.techniqueL[2]) 
            let dTe = JSON.stringify(this.techniqueL[3]) 
            let eTe = JSON.stringify(this.techniqueL[4])
            let fTe = JSON.stringify(this.techniqueL[5])
            // 文科综合
            let aCo = JSON.stringify(this.comprehensiveL[0])
            let bCo = JSON.stringify(this.comprehensiveL[1])
            let cCo = JSON.stringify(this.comprehensiveL[2]) 
            let dCo = JSON.stringify(this.comprehensiveL[3]) 
            let eCo = JSON.stringify(this.comprehensiveL[4])
            let fCo = JSON.stringify(this.comprehensiveL[5])
            // 理科综合
            let aIn = JSON.stringify(this.integratedL[0])
            let bIn = JSON.stringify(this.integratedL[1])
            let cIn = JSON.stringify(this.integratedL[2]) 
            let dIn = JSON.stringify(this.integratedL[3]) 
            let eIn = JSON.stringify(this.integratedL[4])
            let fIn = JSON.stringify(this.integratedL[5])
            // 总分
            let aTo = JSON.stringify(this.totalL[0])
            let bTo = JSON.stringify(this.totalL[1])
            let cTo = JSON.stringify(this.totalL[2]) 
            let dTo = JSON.stringify(this.totalL[3]) 
            let eTo = JSON.stringify(this.totalL[4])
             // 年级排名
            let aGr = JSON.stringify(this.GradeL[0])
            let bGr = JSON.stringify(this.GradeL[1])
            let cGr = JSON.stringify(this.GradeL[2]) 
            let dGr = JSON.stringify(this.GradeL[3]) 
            let eGr = JSON.stringify(this.GradeL[4])
            let fGr = JSON.stringify(this.GradeL[5])
            // 年级人数
            let aNu = JSON.stringify(this.numbergradeL[0])
            let bNu = JSON.stringify(this.numbergradeL[1])
            let cNu = JSON.stringify(this.numbergradeL[2]) 
            let dNu = JSON.stringify(this.numbergradeL[3]) 
            let eNu = JSON.stringify(this.numbergradeL[4])
            let fNu = JSON.stringify(this.numbergradeL[5])

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
                    // 学籍水平会考等级
                    academicLevel:f,
                    // 标注
                    code:"Chinese",
                },
                 // 数学
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
                    // 学籍水平会考等级
                    academicLevel:fM,
                    // 标注
                    code:"Math",
                },
                // 外语
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
                    // 学籍水平会考等级
                    academicLevel:fP,
                    // 标注
                    code:"ForeignLanguage",
                },
                // 政治
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
                    // 学籍水平会考等级
                    academicLevel:fPo,
                    // 标注
                    code:"Politics",
                },
                // 历史
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
                    // 学籍水平会考等级
                    academicLevel:fH,
                    // 标注
                    code:"History",
                },
                // 地理
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
                    // 学籍水平会考等级
                    academicLevel:fG,
                    // 标注
                    code:"Geography",
                },
                // 物理
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
                    // 学籍水平会考等级
                    academicLevel:fPh,
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
                    // 学籍水平会考等级
                    academicLevel:fC,
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
                    // 学籍水平会考等级
                    academicLevel:fB,
                    // 标注
                    code:"Biology",
                },
                 // 科目 美术
                {
                    // 高一上学期
                    seniorOneUp: aA,
                     // 高一下学期
                    seniorOneLower:bA,
                     // 高二上学期
                    seniorTwoUp: cA,
                    // 高二下学期
                    seniorTwoLower: dA,
                     // 高三上学期
                    seniorThreeUp: eA,
                    // 学籍水平会考等级
                    academicLevel:fA,
                    // 标注
                    code:"FineArts",
                },
                 // 科目 体育
                {
                    // 高一上学期
                    seniorOneUp: aS,
                     // 高一下学期
                    seniorOneLower:bS,
                     // 高二上学期
                    seniorTwoUp: cS,
                    // 高二下学期
                    seniorTwoLower: dS,
                     // 高三上学期
                    seniorThreeUp: eS,
                    // 学籍水平会考等级
                    academicLevel:fS,
                    // 标注
                    code:"Sports",
                },
                // 科目 音乐
                {
                    // 高一上学期
                    seniorOneUp: aMu,
                     // 高一下学期
                    seniorOneLower:bMu,
                     // 高二上学期
                    seniorTwoUp: cMu,
                    // 高二下学期
                    seniorTwoLower: dMu,
                     // 高三上学期
                    seniorThreeUp: eMu,
                    // 学籍水平会考等级
                    academicLevel:fMu,
                    // 标注
                    code:"Music",
                },
                // 科目 信息技术
                {
                    // 高一上学期
                    seniorOneUp: aIT,
                     // 高一下学期
                    seniorOneLower:bIT,
                     // 高二上学期
                    seniorTwoUp: cIT,
                    // 高二下学期
                    seniorTwoLower: dIT,
                     // 高三上学期
                    seniorThreeUp: eIT,
                    // 学籍水平会考等级
                    academicLevel:fIT,
                    // 标注
                    code:"InformationTechnology",
                },
                // 科目 通用技术
                {
                    // 高一上学期
                    seniorOneUp: aTe,
                     // 高一下学期
                    seniorOneLower:bTe,
                     // 高二上学期
                    seniorTwoUp: cTe,
                    // 高二下学期
                    seniorTwoLower: dTe,
                     // 高三上学期
                    seniorThreeUp: eTe,
                    // 学籍水平会考等级
                    academicLevel:fTe,
                    // 标注
                    code:"CommunicationTechnology",
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
                    // 学籍水平会考等级
                    academicLevel:fCo,
                    // 标注
                    code:"LiberalArts",
                },
                // 科目 理科综合
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
                    // 学籍水平会考等级
                    academicLevel:fIn,
                    // 标注
                    code:"Science",
                },
                // 科目 总分
                 {
                    // 高一上学期
                    seniorOneUp: aTo,
                     // 高一下学期
                    seniorOneLower:bTo,
                     // 高二上学期
                    seniorTwoUp: cTo,
                    // 高二下学期
                    seniorTwoLower: dTo,
                     // 高三上学期
                    seniorThreeUp: eTo,
                    // 标注
                    code:"Score",
                },
                // 科目 年级排名
                {
                    // 高一上学期
                    seniorOneUp: aGr,
                     // 高一下学期
                    seniorOneLower:bGr,
                     // 高二上学期
                    seniorTwoUp: cGr,
                    // 高二下学期
                    seniorTwoLower: dGr,
                     // 高三上学期
                    seniorThreeUp: eGr,
                    // 学籍水平会考等级
                    academicLevel:fGr,
                    // 标注
                    code:"GradeRanking",
                },
                // 科目 年级人数
                {
                    // 高一上学期
                    seniorOneUp: aNu,
                     // 高一下学期
                    seniorOneLower:bNu,
                     // 高二上学期
                    seniorTwoUp: cNu,
                    // 高二下学期
                    seniorTwoLower: dNu,
                     // 高三上学期
                    seniorThreeUp: eNu,
                    // 学籍水平会考等级
                    academicLevel:fNu,
                    // 标注
                    code:"GradeNumber",
                },
            ]

            console.log(data)
            grade(data);
        }
    }
}
</script>

 
<style scoped>
    .grade{
        /*width: 900px;*/
        background: white;
        padding: 10px;
    }
    .ui-breadcrumb {
        font-size: 0;
        padding: 0;
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
        /* display: inline; */
        margin: 0;
        padding: 0;
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
    .ui-table thead tr {
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
    tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
    .ui-table tr {
        color: #666;
    }
    tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }
    .cjxxtable td {
        padding: 8px 2px 7px 6px;
    }
    .ui-table td {
        padding: 8px 9px 7px;
        border-bottom: 1px solid #d9d9d9;
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
    .ui-button-lorange {
        height: 32px;
    }
    .ui-button-lorange, .ui-button-morange, .ui-button-sorange {
        color: #fff;
        border: 1px solid #d66500;
        background-color: #f57403;
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
    .ui-button-lceladon {
        height: 32px;
    }
    .ui-button-lceladon, .ui-button-mceladon, .ui-button-sceladon {
        color: #fff;
        text-shadow: 0 -1px 1px rgba(0,0,0,0.25);
        border: 1px solid #4498ae;
        background-color: #50aac2;
    }
</style>