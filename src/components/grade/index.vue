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
                            <th>{{SeniorTwo}}<br>成绩/满分
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
                            <!-- <td><input name="xycjs[0].cj1" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj1" type="text">/<input name="xycjs[0].mf1" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf1" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj1" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj1" type="text">/<input name="xycjs[1].mf1" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf1" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj1" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj1" type="text">/<input name="xycjs[2].mf1" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf1" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj1" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj1" type="text">/<input name="xycjs[3].mf1" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf1" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj1" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj1" type="text">/<input name="xycjs[4].mf1" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf1" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj1" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj1" type="text">/<input name="xycjs[5].mf1" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf1" type="text"></td> -->
                            <td  v-for="(item,index) in languageL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                         <!-- // 科目 数学 -->
                        <tr>
                            <td>{{mathematics}}</td>
                            <!-- <td><input name="xycjs[0].cj2" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj2" type="text">/<input name="xycjs[0].mf2" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf2" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj2" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj2" type="text">/<input name="xycjs[1].mf2" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf2" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj2" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj2" type="text">/<input name="xycjs[2].mf2" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf2" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj2" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj2" type="text">/<input name="xycjs[3].mf2" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf2" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj2" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj2" type="text">/<input name="xycjs[4].mf2" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf2" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj2" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj2" type="text">/<input name="xycjs[5].mf2" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf2" type="text"></td> -->
                            <td  v-for="(item,index) in mathematicsL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                         <!-- //科目 外语 -->
                        <tr>
                            <td>{{languages}}</td>
                            <!-- <td><input name="xycjs[0].cj3" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj3" type="text">/<input name="xycjs[0].mf3" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf3" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj3" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj3" type="text">/<input name="xycjs[1].mf3" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf3" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj3" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj3" type="text">/<input name="xycjs[2].mf3" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf3" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj3" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj3" type="text">/<input name="xycjs[3].mf3" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf3" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj3" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj3" type="text">/<input name="xycjs[4].mf3" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf3" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj3" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj3" type="text">/<input name="xycjs[5].mf3" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf3" type="text"></td> -->
                            <td  v-for="(item,index) in languagesL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- // 科目 政治 -->
                        <tr>
                            <td>{{politics}}</td>                           
                            <!-- <td><input name="xycjs[0].cj4" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj4" type="text">/<input name="xycjs[0].mf4" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf4" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj4" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj4" type="text">/<input name="xycjs[1].mf4" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf4" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj4" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj4" type="text">/<input name="xycjs[2].mf4" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf4" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj4" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj4" type="text">/<input name="xycjs[3].mf4" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf4" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj4" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj4" type="text">/<input name="xycjs[4].mf4" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf4" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj4" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj4" type="text">/<input name="xycjs[5].mf4" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf4" type="text"></td> -->
                            <td  v-for="(item,index) in politicsL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 历史 -->
                        <tr>
                            <td>{{history}}</td>
                            <!-- <td><input name="xycjs[0].cj5" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj5" type="text">/<input name="xycjs[0].mf5" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf5" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj5" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj5" type="text">/<input name="xycjs[1].mf5" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf5" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj5" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj5" type="text">/<input name="xycjs[2].mf5" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf5" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj5" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj5" type="text">/<input name="xycjs[3].mf5" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf5" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj5" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj5" type="text">/<input name="xycjs[4].mf5" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf5" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj5" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj5" type="text">/<input name="xycjs[5].mf5" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf5" type="text"></td> -->
                            <td  v-for="(item,index) in historyL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 地理 -->
                        <tr>
                            <td>{{geography}}</td>
                            <!-- <td><input name="xycjs[0].cj6" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj6" type="text">/<input name="xycjs[0].mf6" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf6" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj6" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj6" type="text">/<input name="xycjs[1].mf6" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf6" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj6" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj6" type="text">/<input name="xycjs[2].mf6" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf6" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj6" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj6" type="text">/<input name="xycjs[3].mf6" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf6" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj6" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj6" type="text">/<input name="xycjs[4].mf6" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf6" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj6" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj6" type="text">/<input name="xycjs[5].mf6" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf6" type="text"></td> -->
                            <td  v-for="(item,index) in geographyL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目  物理 -->
                        <tr>
                            <td>{{physics}}</td>
                            <!-- <td><input name="xycjs[0].cj7" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj7" type="text">/<input name="xycjs[0].mf7" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf7" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj7" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj7" type="text">/<input name="xycjs[1].mf7" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf7" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj7" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj7" type="text">/<input name="xycjs[2].mf7" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf7" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj7" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj7" type="text">/<input name="xycjs[3].mf7" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf7" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj7" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj7" type="text">/<input name="xycjs[4].mf7" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf7" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj7" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj7" type="text">/<input name="xycjs[5].mf7" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf7" type="text"></td> -->
                            <td  v-for="(item,index) in physicsL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 化学 -->
                        <tr>
                            <td>{{chemistry}}</td>
                            <!-- <td><input name="xycjs[0].cj8" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj8" type="text">/<input name="xycjs[0].mf8" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf8" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj8" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj8" type="text">/<input name="xycjs[1].mf8" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf8" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj8" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj8" type="text">/<input name="xycjs[2].mf8" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf8" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj8" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj8" type="text">/<input name="xycjs[3].mf8" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf8" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj8" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj8" type="text">/<input name="xycjs[4].mf8" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf8" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj8" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj8" type="text">/<input name="xycjs[5].mf8" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf8" type="text"></td> -->
                            <td  v-for="(item,index) in chemistryL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 生物 -->
                        <tr>
                            <td>{{biology}}</td>
                            <!-- <td><input name="xycjs[0].cj9" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj9" type="text">/<input name="xycjs[0].mf9" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf9" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj9" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj9" type="text">/<input name="xycjs[1].mf9" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf9" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj9" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj9" type="text">/<input name="xycjs[2].mf9" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf9" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj9" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj9" type="text">/<input name="xycjs[3].mf9" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf9" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj9" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj9" type="text">/<input name="xycjs[4].mf9" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf9" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj9" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj9" type="text">/<input name="xycjs[5].mf9" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf9" type="text"></td> -->
                            <td  v-for="(item,index) in biologyL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 美术 -->
                        <tr>
                            <td>{{arts}}</td>
                            <!-- <td><input name="xycjs[0].cj10" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj10" type="text">/<input name="xycjs[0].mf10" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf10" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj10" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj10" type="text">/<input name="xycjs[1].mf10" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf10" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj10" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj10" type="text">/<input name="xycjs[2].mf10" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf10" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj10" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj10" type="text">/<input name="xycjs[3].mf10" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf10" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj10" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj10" type="text">/<input name="xycjs[4].mf10" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf10" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj10" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj10" type="text">/<input name="xycjs[5].mf10" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf10" type="text"></td> -->
                            <td  v-for="(item,index) in artsL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 体育 -->
                        <tr>
                            <td>{{sports}}</td>
                            <!-- <td><input name="xycjs[0].cj11" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj11" type="text">/<input name="xycjs[0].mf11" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf11" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj11" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj11" type="text">/<input name="xycjs[1].mf11" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf11" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj11" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj11" type="text">/<input name="xycjs[2].mf11" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf11" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj11" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj11" type="text">/<input name="xycjs[3].mf11" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf11" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj11" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj11" type="text">/<input name="xycjs[4].mf11" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf11" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj11" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj11" type="text">/<input name="xycjs[5].mf11" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf11" type="text"></td> -->
                            <td  v-for="(item,index) in sportsL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 音乐 -->
                        <tr>
                            <td>{{music}}</td>
                            <!-- <td><input name="xycjs[0].cj12" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj12" type="text">/<input name="xycjs[0].mf12" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf12" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj12" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj12" type="text">/<input name="xycjs[1].mf12" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf12" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj12" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj12" type="text">/<input name="xycjs[2].mf12" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf12" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj12" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj12" type="text">/<input name="xycjs[3].mf12" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf12" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj12" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj12" type="text">/<input name="xycjs[4].mf12" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf12" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj12" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj12" type="text">/<input name="xycjs[5].mf12" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf12" type="text"></td> -->
                            <td  v-for="(item,index) in musicL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 信息技术 -->
                        <tr>
                            <td>{{IT}}</td>
                            <!-- <td><input name="xycjs[0].cj13" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj13" type="text">/<input name="xycjs[0].mf13" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf13" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj13" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj13" type="text">/<input name="xycjs[1].mf13" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf13" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj13" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj13" type="text">/<input name="xycjs[2].mf13" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf13" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj13" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj13" type="text">/<input name="xycjs[3].mf13" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf13" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj13" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj13" type="text">/<input name="xycjs[4].mf13" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf13" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj13" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj13" type="text">/<input name="xycjs[5].mf13" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf13" type="text"></td> -->
                            <td  v-for="(item,index) in ITL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 通用技术 -->
                        <tr>
                            <td>{{technique}}</td>
                            <!-- <td><input name="xycjs[0].cj16" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj16" type="text">/<input name="xycjs[0].mf16" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf16" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj16" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj16" type="text">/<input name="xycjs[1].mf16" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf16" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj16" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj16" type="text">/<input name="xycjs[2].mf16" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf16" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj16" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj16" type="text">/<input name="xycjs[3].mf16" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf16" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj16" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj16" type="text">/<input name="xycjs[4].mf16" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf16" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj16" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj16" type="text">/<input name="xycjs[5].mf16" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf16" type="text"></td> -->
                            <td  v-for="(item,index) in techniqueL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 文科综合 -->
                        <tr>
                            <td>{{comprehensive}}</td>
                            <!-- <td><input name="xycjs[0].cj14" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj14" type="text">/<input name="xycjs[0].mf14" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf14" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj14" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj14" type="text">/<input name="xycjs[1].mf14" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf14" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj14" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj14" type="text">/<input name="xycjs[2].mf14" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf14" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj14" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj14" type="text">/<input name="xycjs[3].mf14" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf14" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj14" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj14" type="text">/<input name="xycjs[4].mf14" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf14" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj14" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj14" type="text">/<input name="xycjs[5].mf14" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf14" type="text"></td> -->
                            <td  v-for="(item,index) in comprehensiveL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 理科综合 -->
                        <tr>
                            <td>{{integrated}}</td>
                            <!-- <td><input name="xycjs[0].cj15" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cj15" type="text">/<input name="xycjs[0].mf15" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mf15" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cj15" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cj15" type="text">/<input name="xycjs[1].mf15" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mf15" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cj15" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cj15" type="text">/<input name="xycjs[2].mf15" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mf15" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cj15" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cj15" type="text">/<input name="xycjs[3].mf15" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mf15" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cj15" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cj15" type="text">/<input name="xycjs[4].mf15" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mf15" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].cj15" maxlength="10" value="A" id="updateXycjxx_xycjs_5__cj15" type="text">/<input name="xycjs[5].mf15" maxlength="10" value="A" id="updateXycjxx_xycjs_5__mf15" type="text"></td> -->
                            <td  v-for="(item,index) in integratedL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                        </tr>
                        <!-- 科目 总分 -->
                        <tr>
                            <td>{{total}}</td>
                            <!-- <td><input name="xycjs[0].cjzf" maxlength="10" value="无" id="updateXycjxx_xycjs_0__cjzf" type="text">/<input name="xycjs[0].mfzf" maxlength="10" value="无" id="updateXycjxx_xycjs_0__mfzf" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].cjzf" maxlength="10" value="无" id="updateXycjxx_xycjs_1__cjzf" type="text">/<input name="xycjs[1].mfzf" maxlength="10" value="无" id="updateXycjxx_xycjs_1__mfzf" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].cjzf" maxlength="10" value="无" id="updateXycjxx_xycjs_2__cjzf" type="text">/<input name="xycjs[2].mfzf" maxlength="10" value="无" id="updateXycjxx_xycjs_2__mfzf" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].cjzf" maxlength="10" value="无" id="updateXycjxx_xycjs_3__cjzf" type="text">/<input name="xycjs[3].mfzf" maxlength="10" value="无" id="updateXycjxx_xycjs_3__mfzf" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].cjzf" maxlength="10" value="无" id="updateXycjxx_xycjs_4__cjzf" type="text">/<input name="xycjs[4].mfzf" maxlength="10" value="无" id="updateXycjxx_xycjs_4__mfzf" type="text"></td> -->
                            <td  v-for="(item,index) in totalL" :key="index">
                                <input name="xycjs[0].cj1" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__cj1">
                                /
                                <input name="xycjs[0].mf1" maxlength="10" :value="item.value1" id="updateXycjxx_xycjs_0__mf1" type="text">
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <!-- 科目 年级排名 -->
                        <tr>
                            <td>{{Grade}}</td>
                            <!-- <td><input name="xycjs[0].pm" maxlength="10" value="无" id="updateXycjxx_xycjs_0__pm" class="big" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].pm" maxlength="10" value="无" id="updateXycjxx_xycjs_1__pm" class="big" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].pm" maxlength="10" value="无" id="updateXycjxx_xycjs_2__pm" class="big" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].pm" maxlength="10" value="无" id="updateXycjxx_xycjs_3__pm" class="big" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].pm" maxlength="10" value="无" id="updateXycjxx_xycjs_4__pm" class="big" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].pm" maxlength="10" id="updateXycjxx_xycjs_5__pm" class="big" type="text"></td> -->
                            <td  v-for="(item,index) in GradeL" :key="index">
                                <input name="xycjs[0].pm" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__pm" class="big" type="text">
                            </td>
                        </tr>
                        <!-- 科目 年级人数 -->
                        <tr>
                            <td>{{numbergrade}}</td>
                            <!-- <td><input name="xycjs[0].rs" maxlength="10" value="无" id="updateXycjxx_xycjs_0__rs" class="big" type="text"></td> -->
                            <!-- <td><input name="xycjs[1].rs" maxlength="10" value="无" id="updateXycjxx_xycjs_1__rs" class="big" type="text"></td> -->
                            <!-- <td><input name="xycjs[2].rs" maxlength="10" value="无" id="updateXycjxx_xycjs_2__rs" class="big" type="text"></td> -->
                            <!-- <td><input name="xycjs[3].rs" maxlength="10" value="无" id="updateXycjxx_xycjs_3__rs" class="big" type="text"></td> -->
                            <!-- <td><input name="xycjs[4].rs" maxlength="10" value="无" id="updateXycjxx_xycjs_4__rs" class="big" type="text"></td> -->
                            <!-- <td><input name="xycjs[5].rs" maxlength="10" id="updateXycjxx_xycjs_5__rs" class="big" type="text"></td> -->
                            <td  v-for="(item,index) in numbergradeL" :key="index">
                                <input name="xycjs[0].rs" maxlength="10" :value="item.value" id="updateXycjxx_xycjs_0__rs" class="big" type="text">
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <p class="text_center m_top10" id="errortip"></p>
                    <div class="text_center m_top10">
                        <Button type="warning">保存</Button>
                        &nbsp;&nbsp;
                        <Button type="primary" onclick="javascript:history.go(-1);">取消</Button>
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
            // 注意事宜
            notice:"请如实尽量填写各学期期末考试成绩，如果某科目在某学期没有成绩或没有排名，可以不填",
            noticeL:"学业水平考试（会考）成绩请根据所在省市情况，如实填写A+、A、B+、B、B-、C+、C、C-、D+、D、E、合格、不合格或者分数",
            noticeLL:"某些高校的志愿可能需要会考成绩。您可先将学业水平（会考）成绩填写完整，对学业水平（会考）没有的科目可以填“无”",
            // 高一成绩
            seniorOne:"高一（上）期末",
            seniorOneL:"高一（下）期末",
            // 高二成绩
            SeniorTwo:"高二（上）期末",
            SeniorTwo:"高二（下）期末",
           //高三成绩
           gradeThree:"高三（上）期末",
           // 学业水平（会考）   
            examinationL:"学业水平（会考）",
           // 科目 语文
            language:"语文",
            languageL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
            // 科目 数学
            mathematics:"数学",
            mathematicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
            // 科目 外语
            languages:"外语",
            languagesL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
            // 科目 政治
            politics:"政治",
            politicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
            // 科目 历史
            history:"历史",
            historyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
            // 科目 地理
            geography:"地理",
            geographyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
            // 科目 物理
            physics:"物理",
            physicsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
             // 科目 化学
            chemistry:"化学",
            chemistryL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
             // 科目 生物
            biology:"生物",
            biologyL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
             // 科目 美术
            arts:"美术",
            artsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
             // 科目 体育
            sports:"体育",
            sportsL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
             // 科目 音乐
            music:"音乐",
            musicL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
             // 科目 信息技术
            IT:"信息技术",
            ITL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
             // 科目 通用技术
            technique:"通用技术",
            techniqueL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
            // 科目 文科综合
            comprehensive:"文科综合",
            comprehensiveL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
            // 科目 理科综合
            integrated:"理科综合",
            integratedL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"A",
                    value1:"A"
                }
            ],
            // 科目 总分
            total:"总分",
            totalL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                }
            ],
            // 科目 年级排名
            Grade:"年级排名",
            GradeL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"",
                    value1:""
                }
            ],
            // 科目 年级人数
            numbergrade:"年级人数",
            numbergradeL:[
                // 分别对应第一次成绩 第二次成绩 第三次成绩 第四次成绩 第五次成绩 第六次成绩
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
                    value:"",
                    value1:""
                }
            ],
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