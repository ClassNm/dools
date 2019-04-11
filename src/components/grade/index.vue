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
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
            // 科目 数学
            mathematics:"数学",
            mathematicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
            // 科目 外语
            languages:"外语",
            languagesL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
            // 科目 政治
            politics:"政治",
            politicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
            // 科目 历史
            history:"历史",
            historyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
            // 科目 地理
            geography:"地理",
            geographyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
            // 科目 物理
            physics:"物理",
            physicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
             // 科目 化学
            chemistry:"化学",
            chemistryL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
             // 科目 生物
            biology:"生物",
            biologyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
             // 科目 美术
            arts:"美术",
            artsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
             // 科目 体育
            sports:"体育",
            sportsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
             // 科目 音乐
            music:"音乐",
            musicL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
             // 科目 信息技术
            IT:"信息技术",
            ITL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
             // 科目 通用技术
            technique:"通用技术",
            techniqueL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 6
                }
            ],
            // 科目 文科综合
            comprehensive:"文科综合",
            comprehensiveL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
               { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
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
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                },
                {
                    value1:"无·",
                    value2:"无",
                    index : 6
                }
            ],
            // 科目 总分
            total:"总分",
            totalL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                    value1:"无",
                    value2:"无",
                    index : 1
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 2
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 3
                },
                { 
                    value1:"无",
                    value2:"无",
                    index : 4
                },
                {
                    value1:"无",
                    value2:"无",
                    index : 5 
                }
            ],
            // 科目 年级排名
            Grade:"年级排名",
            GradeL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                { 
                     value:"无",
                    index : 1
                },
                {
                     value:"无",
                    index : 2
                },
                {
                    value:"无",
                    index : 3
                },
                { 
                   value:"无",
                    index : 4
                },
                {
                    value:"无",
                    index : 5
                },
                {
                    value:"无",
                    index : 6
                }
            ],
            // 科目 年级人数
            numbergrade:"年级人数",
            numbergradeL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
                 { 
                     value:"无",
                    index : 1
                },
                {
                    value:"无",
                    index : 2
                },
                {
                    value:"无",
                    index : 3
                },
                { 
                   value:"无",
                    index : 4
                },
                {
                    value:"无",
                    index : 5
                },
                {
                    value:"无",
                    index : 6
                }
            ],
            item : { 
                language : [], 
            }
        }
    },
    methods:{
        submit(){
            // let aa = JSON.stringify(this.languageL)
            // let aa = this.languageL
            // let aal = aa.join("{}")
            // console.log(aa)
            let data = {
                academicLevelLower:JSON.stringify(this.languageL),
                test : JSON.stringify(this.mathematicsL),
                test1 : JSON.stringify(this.languagesL),
                test2 : JSON.stringify(this.politicsL),
                test3 : JSON.stringify(this.historyL),
                test4 : JSON.stringify(this.geographyL),
                test5 : JSON.stringify(this.physicsL),
                test6 : JSON.stringify(this.chemistryL),
                test7 : JSON.stringify(this.biologyL),
                test8 : JSON.stringify(this.artsL),
                test9 : JSON.stringify(this.sportsL),
                test10 : JSON.stringify(this.musicL),
                test11 : JSON.stringify(this.ITL),
                test12 : JSON.stringify(this.techniqueL),
                test13 : JSON.stringify(this.comprehensiveL),
                test14 : JSON.stringify(this.integratedL),
                test15 : JSON.stringify(this.totalL),
                test16 : JSON.stringify(this.GradeL),
                test17 : JSON.stringify(this.numbergradeL),
            }
            let dataL = JSON.stringify(data)
            console.log(dataL);
            // console.log(aa)
            // console.log(typeof(dataL))
            grade(dataL);
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