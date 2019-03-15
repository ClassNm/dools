

<!-- 模考成绩 3级路由 报考志愿-->
<template>
    <div>
        <headerT></headerT>
        <div class="ui-box-container">
            <div class="ui-tiptext-container ui-tiptext-container-message m_bottom10">
                <p class="ui-tiptext ui-tiptext-message">
                    <i class="ui-tiptext-icon iconfont" title="提示"></i>
                    {{requireOne}}
                </p>
                <p class="ui-tiptext ui-tiptext-follow">
                    根据所报高校的要求：<span class="ui-tiptext" style="color: #c30">{{requireL}}。</span>
                </p>
            </div>
            <div class="ui-tiptext-container ui-tiptext-container-message m_bottom10">
                <p class="ui-tiptext ui-tiptext-message">
                    <i class="ui-tiptext-icon iconfont" title="提示" style="font-size: 18px;"></i>来自于 <span style="color: #c30;font-weight: 700">{{schoolName}}</span> 的填写说明：</p>
                <p class="ui-tiptext ui-tiptext-follow">
                    <span class="chsi-pot">·</span>单科模考成绩：</p>
                <p class="ui-tiptext ui-tiptext-follow">
                    &nbsp;&nbsp;&nbsp;&nbsp;{{requireK}}。
                </p>
                <p class="ui-tiptext ui-tiptext-follow">
                    <span class="chsi-pot">·</span>总分、年级排名和年级人数：</p>
                <p class="ui-tiptext ui-tiptext-follow">
                    &nbsp;&nbsp;&nbsp;&nbsp;{{requireJ}}。
                </p>
            </div>
            <form id="mkcjnext" name="mkcjnext" action="javascript:;" method="post">
                <input type="hidden" name="zid" value="fpyycvh79dv8tyyt" id="mkcjnext_zid">
                <table class="ui-table cjxxtable">
                    <thead>
                    <tr>
                        <th>科目\学期</th>
                        <th style="text-align:center;">{{Once}}<br> 成绩/满分
                        </th>
                        <th style="text-align:center;">{{Two}}<br> 成绩/满分
                        </th>
                        <th style="text-align:center;">{{Three}}<br> 成绩/满分
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- 语文 -->
                    <tr>
                        <td>{{language}}</td>
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td00"><input type="text" name="xycjs[0].cj1" maxlength="10" value="120" id="mkcjnext_xycjs_0__cj1">/<input type="text" name="xycjs[0].mf1" maxlength="10" value="150" id="mkcjnext_xycjs_0__mf1"></td>
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td01"><input type="text" name="xycjs[1].cj1" maxlength="10" value="120" id="mkcjnext_xycjs_1__cj1">/<input type="text" name="xycjs[1].mf1" maxlength="10" value="150" id="mkcjnext_xycjs_1__mf1"></td>
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02"><input type="text" name="xycjs[2].cj1" maxlength="10" value="120" id="mkcjnext_xycjs_2__cj1">/<input type="text" name="xycjs[2].mf1" maxlength="10" value="150" id="mkcjnext_xycjs_2__mf1"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in languageL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                    <!-- 数学 -->
                    <tr>
                        <td>{{mathematics}}</td>
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td10"><input type="text" name="xycjs[0].cj2" maxlength="10" value="120" id="mkcjnext_xycjs_0__cj2">/<input type="text" name="xycjs[0].mf2" maxlength="10" value="150" id="mkcjnext_xycjs_0__mf2"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td11"><input type="text" name="xycjs[1].cj2" maxlength="10" value="120" id="mkcjnext_xycjs_1__cj2">/<input type="text" name="xycjs[1].mf2" maxlength="10" value="150" id="mkcjnext_xycjs_1__mf2"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td12"><input type="text" name="xycjs[2].cj2" maxlength="10" value="120" id="mkcjnext_xycjs_2__cj2">/<input type="text" name="xycjs[2].mf2" maxlength="10" value="150" id="mkcjnext_xycjs_2__mf2"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in mathematicsL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                     <!-- 外语 -->
                    <tr>
                        <td>{{languages}}</td>
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td20"><input type="text" name="xycjs[0].cj3" maxlength="10" value="120" id="mkcjnext_xycjs_0__cj3">/<input type="text" name="xycjs[0].mf3" maxlength="10" value="150" id="mkcjnext_xycjs_0__mf3"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td21"><input type="text" name="xycjs[1].cj3" maxlength="10" value="120" id="mkcjnext_xycjs_1__cj3">/<input type="text" name="xycjs[1].mf3" maxlength="10" value="150" id="mkcjnext_xycjs_1__mf3"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td22"><input type="text" name="xycjs[2].cj3" maxlength="10" value="120" id="mkcjnext_xycjs_2__cj3">/<input type="text" name="xycjs[2].mf3" maxlength="10" value="150" id="mkcjnext_xycjs_2__mf3"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in languagesL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                     <!-- 政治 -->
                    <tr>
                        <td>{{politics}}</td>
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td30"><input type="text" name="xycjs[0].cj4" maxlength="10" value="无" id="mkcjnext_xycjs_0__cj4">/<input type="text" name="xycjs[0].mf4" maxlength="10" value="无" id="mkcjnext_xycjs_0__mf4"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td31"><input type="text" name="xycjs[1].cj4" maxlength="10" value="无" id="mkcjnext_xycjs_1__cj4">/<input type="text" name="xycjs[1].mf4" maxlength="10" value="无" id="mkcjnext_xycjs_1__mf4"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td32"><input type="text" name="xycjs[2].cj4" maxlength="10" value="无" id="mkcjnext_xycjs_2__cj4">/<input type="text" name="xycjs[2].mf4" maxlength="10" value="无" id="mkcjnext_xycjs_2__mf4"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in politicsL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                    <!-- 历史 -->                    
                    <tr>
                        <td>{{history}}</td>
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td40"><input type="text" name="xycjs[0].cj5" maxlength="10" value="无" id="mkcjnext_xycjs_0__cj5">/<input type="text" name="xycjs[0].mf5" maxlength="10" value="无" id="mkcjnext_xycjs_0__mf5"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td41"><input type="text" name="xycjs[1].cj5" maxlength="10" value="无" id="mkcjnext_xycjs_1__cj5">/<input type="text" name="xycjs[1].mf5" maxlength="10" value="无" id="mkcjnext_xycjs_1__mf5"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td42"><input type="text" name="xycjs[2].cj5" maxlength="10" value="无" id="mkcjnext_xycjs_2__cj5">/<input type="text" name="xycjs[2].mf5" maxlength="10" value="无" id="mkcjnext_xycjs_2__mf5"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in historyL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                     <!--地理  -->
                    <tr>
                        <td>{{geography}}</td>
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td50"><input type="text" name="xycjs[0].cj6" maxlength="10" value="无" id="mkcjnext_xycjs_0__cj6">/<input type="text" name="xycjs[0].mf6" maxlength="10" value="无" id="mkcjnext_xycjs_0__mf6"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td51"><input type="text" name="xycjs[1].cj6" maxlength="10" value="无" id="mkcjnext_xycjs_1__cj6">/<input type="text" name="xycjs[1].mf6" maxlength="10" value="无" id="mkcjnext_xycjs_1__mf6"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td52"><input type="text" name="xycjs[2].cj6" maxlength="10" value="无" id="mkcjnext_xycjs_2__cj6">/<input type="text" name="xycjs[2].mf6" maxlength="10" value="无" id="mkcjnext_xycjs_2__mf6"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in geographyL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                     <!-- 物理 -->  
                    <tr>
                        <td>{{physics}}</td>
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td60"><input type="text" name="xycjs[0].cj7" maxlength="10" value="100" id="mkcjnext_xycjs_0__cj7">/<input type="text" name="xycjs[0].mf7" maxlength="10" value="110" id="mkcjnext_xycjs_0__mf7"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td61"><input type="text" name="xycjs[1].cj7" maxlength="10" value="无" id="mkcjnext_xycjs_1__cj7">/<input type="text" name="xycjs[1].mf7" maxlength="10" value="无" id="mkcjnext_xycjs_1__mf7"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td62"><input type="text" name="xycjs[2].cj7" maxlength="10" value="无" id="mkcjnext_xycjs_2__cj7">/<input type="text" name="xycjs[2].mf7" maxlength="10" value="无" id="mkcjnext_xycjs_2__mf7"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in physicsL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                     <!-- 化学 -->  
                    <tr>
                        <td>{{chemistry}}</td>
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td70"><input type="text" name="xycjs[0].cj8" maxlength="10" value="90" id="mkcjnext_xycjs_0__cj8">/<input type="text" name="xycjs[0].mf8" maxlength="10" value="100" id="mkcjnext_xycjs_0__mf8"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td71"><input type="text" name="xycjs[1].cj8" maxlength="10" value="无" id="mkcjnext_xycjs_1__cj8">/<input type="text" name="xycjs[1].mf8" maxlength="10" value="无" id="mkcjnext_xycjs_1__mf8"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td72"><input type="text" name="xycjs[2].cj8" maxlength="10" value="无" id="mkcjnext_xycjs_2__cj8">/<input type="text" name="xycjs[2].mf8" maxlength="10" value="无" id="mkcjnext_xycjs_2__mf8"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in chemistryL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                     <!-- 生物 -->
                    <tr>
                        <td>{{biology}}</td>
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td80"><input type="text" name="xycjs[0].cj9" maxlength="10" value="86" id="mkcjnext_xycjs_0__cj9">/<input type="text" name="xycjs[0].mf9" maxlength="10" value="90" id="mkcjnext_xycjs_0__mf9"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td81"><input type="text" name="xycjs[1].cj9" maxlength="10" value="无" id="mkcjnext_xycjs_1__cj9">/<input type="text" name="xycjs[1].mf9" maxlength="10" value="无" id="mkcjnext_xycjs_1__mf9"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td82"><input type="text" name="xycjs[2].cj9" maxlength="10" value="无" id="mkcjnext_xycjs_2__cj9">/<input type="text" name="xycjs[2].mf9" maxlength="10" value="无" id="mkcjnext_xycjs_2__mf9"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in biologyL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                    <!-- 美术 -->  
                    <tr>
                        <td>{{arts}}</td>
                        <!-- <td style="text-align:center;" id="td90"><input type="text" name="xycjs[0].cj10" maxlength="10" value="无" id="mkcjnext_xycjs_0__cj10">/<input type="text" name="xycjs[0].mf10" maxlength="10" value="无" id="mkcjnext_xycjs_0__mf10"></td>
                        <td style="text-align:center;" id="td91"><input type="text" name="xycjs[1].cj10" maxlength="10" value="无" id="mkcjnext_xycjs_1__cj10">/<input type="text" name="xycjs[1].mf10" maxlength="10" value="无" id="mkcjnext_xycjs_1__mf10"></td>
                        <td style="text-align:center;" id="td92"><input type="text" name="xycjs[2].cj10" maxlength="10" value="无" id="mkcjnext_xycjs_2__cj10">/<input type="text" name="xycjs[2].mf10" maxlength="10" value="无" id="mkcjnext_xycjs_2__mf10"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in artsL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                    <!-- 体育 -->  
                    <tr>
                        <td>{{sports}}</td>
                        <!-- <td style="text-align:center;" id="td100"><input type="text" name="xycjs[0].cj11" maxlength="10" value="无" id="mkcjnext_xycjs_0__cj11">/<input type="text" name="xycjs[0].mf11" maxlength="10" value="无" id="mkcjnext_xycjs_0__mf11"></td> -->
                        <!-- <td style="text-align:center;" id="td101"><input type="text" name="xycjs[1].cj11" maxlength="10" value="无" id="mkcjnext_xycjs_1__cj11">/<input type="text" name="xycjs[1].mf11" maxlength="10" value="无" id="mkcjnext_xycjs_1__mf11"></td> -->
                        <!-- <td style="text-align:center;" id="td102"><input type="text" name="xycjs[2].cj11" maxlength="10" value="无" id="mkcjnext_xycjs_2__cj11">/<input type="text" name="xycjs[2].mf11" maxlength="10" value="无" id="mkcjnext_xycjs_2__mf11"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in sportsL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                    <!-- 音乐 -->  
                    <tr>
                        <td>{{music}}</td>
                        <!-- <td style="text-align:center;" id="td110"><input type="text" name="xycjs[0].cj12" maxlength="10" value="无" id="mkcjnext_xycjs_0__cj12">/<input type="text" name="xycjs[0].mf12" maxlength="10" value="无" id="mkcjnext_xycjs_0__mf12"></td> -->
                        <!-- <td style="text-align:center;" id="td111"><input type="text" name="xycjs[1].cj12" maxlength="10" value="无" id="mkcjnext_xycjs_1__cj12">/<input type="text" name="xycjs[1].mf12" maxlength="10" value="无" id="mkcjnext_xycjs_1__mf12"></td> -->
                        <!-- <td style="text-align:center;" id="td112"><input type="text" name="xycjs[2].cj12" maxlength="10" value="无" id="mkcjnext_xycjs_2__cj12">/<input type="text" name="xycjs[2].mf12" maxlength="10" value="无" id="mkcjnext_xycjs_2__mf12"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in musicL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                    <!-- 信息技术 -->  
                    <tr>
                        <td>{{IT}}</td>
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td120"><input type="text" name="xycjs[0].cj13" maxlength="10" value="无" id="mkcjnext_xycjs_0__cj13">/<input type="text" name="xycjs[0].mf13" maxlength="10" value="无" id="mkcjnext_xycjs_0__mf13"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td121"><input type="text" name="xycjs[1].cj13" maxlength="10" value="无" id="mkcjnext_xycjs_1__cj13">/<input type="text" name="xycjs[1].mf13" maxlength="10" value="无" id="mkcjnext_xycjs_1__mf13"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td122"><input type="text" name="xycjs[2].cj13" maxlength="10" value="无" id="mkcjnext_xycjs_2__cj13">/<input type="text" name="xycjs[2].mf13" maxlength="10" value="无" id="mkcjnext_xycjs_2__mf13"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in ITL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                    <!-- 通用技术 -->  
                    <tr>
                        <td>{{technique}}</td>
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td130"><input type="text" name="xycjs[0].cj16" maxlength="10" value="无" id="mkcjnext_xycjs_0__cj16">/<input type="text" name="xycjs[0].mf16" maxlength="10" value="无" id="mkcjnext_xycjs_0__mf16"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td131"><input type="text" name="xycjs[1].cj16" maxlength="10" value="无" id="mkcjnext_xycjs_1__cj16">/<input type="text" name="xycjs[1].mf16" maxlength="10" value="无" id="mkcjnext_xycjs_1__mf16"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td132"><input type="text" name="xycjs[2].cj16" maxlength="10" value="无" id="mkcjnext_xycjs_2__cj16">/<input type="text" name="xycjs[2].mf16" maxlength="10" value="无" id="mkcjnext_xycjs_2__mf16"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in techniqueL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                    <!-- 文科综合 -->  
                    <tr>
                        <td>{{comprehensive}}</td>
                        <!-- <td style="text-align:center;" id="td140"><input type="text" name="xycjs[0].cj14" maxlength="10" value="240" id="mkcjnext_xycjs_0__cj14">/<input type="text" name="xycjs[0].mf14" maxlength="10" value="300" id="mkcjnext_xycjs_0__mf14"></td> -->
                        <!-- <td style="text-align:center;" id="td141"><input type="text" name="xycjs[1].cj14" maxlength="10" value="无" id="mkcjnext_xycjs_1__cj14">/<input type="text" name="xycjs[1].mf14" maxlength="10" value="无" id="mkcjnext_xycjs_1__mf14"></td> -->
                        <!-- <td style="text-align:center;" id="td142"><input type="text" name="xycjs[2].cj14" maxlength="10" value="无" id="mkcjnext_xycjs_2__cj14">/<input type="text" name="xycjs[2].mf14" maxlength="10" value="无" id="mkcjnext_xycjs_2__mf14"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in comprehensiveL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                    <!-- 理科综合 -->  
                    <tr>
                        <td>{{integrated}}</td>
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td150"><input type="text" name="xycjs[0].cj15" maxlength="10" value="240" id="mkcjnext_xycjs_0__cj15">/<input type="text" name="xycjs[0].mf15" maxlength="10" value="300" id="mkcjnext_xycjs_0__mf15"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td151"><input type="text" name="xycjs[1].cj15" maxlength="10" value="无" id="mkcjnext_xycjs_1__cj15">/<input type="text" name="xycjs[1].mf15" maxlength="10" value="无" id="mkcjnext_xycjs_1__mf15"></td> -->
                        <!-- <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td152"><input type="text" name="xycjs[2].cj15" maxlength="10" value="无" id="mkcjnext_xycjs_2__cj15">/<input type="text" name="xycjs[2].mf15" maxlength="10" value="无" id="mkcjnext_xycjs_2__mf15"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in integratedL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                    <!-- 总分 -->  
                    <tr>
                        <td>{{total}}</td>
                        <!-- <td id="tdzf0" style="text-align: center; background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].cjzf" maxlength="10" value="无" id="mkcjnext_xycjs_0__cjzf">/<input type="text" name="xycjs[0].mfzf" maxlength="10" value="无" id="mkcjnext_xycjs_0__mfzf"></td> -->
                        <!-- <td id="tdzf1" style="text-align: center; background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].cjzf" maxlength="10" value="无" id="mkcjnext_xycjs_1__cjzf">/<input type="text" name="xycjs[1].mfzf" maxlength="10" value="无" id="mkcjnext_xycjs_1__mfzf"></td> -->
                        <!-- <td id="tdzf2" style="text-align: center; background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].cjzf" maxlength="10" value="无" id="mkcjnext_xycjs_2__cjzf">/<input type="text" name="xycjs[2].mfzf" maxlength="10" value="无" id="mkcjnext_xycjs_2__mfzf"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in totalL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                    <!-- 年级排名 -->  
                    <tr>
                        <td>{{Grade}}</td>
                        <!-- <td id="tdpm0" style="text-align: center; background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].pm" maxlength="10" value="30" id="mkcjnext_xycjs_0__pm" class="big"></td> -->
                        <!-- <td id="tdpm1" style="text-align: center; background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].pm" maxlength="10" value="无" id="mkcjnext_xycjs_1__pm" class="big"></td> -->
                        <!-- <td id="tdpm2" style="text-align: center; background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].pm" maxlength="10" value="无" id="mkcjnext_xycjs_2__pm" class="big"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in GradeL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                    <!-- 年级人数 -->  
                    <tr>
                        <td>{{numbergrade}}</td>
                        <!-- <td id="tdrs0" style="text-align: center; background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].rs" maxlength="10" value="1000" id="mkcjnext_xycjs_0__rs" class="big"></td> -->
                        <!-- <td id="tdrs1" style="text-align: center; background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].rs" maxlength="10" value="无" id="mkcjnext_xycjs_1__rs" class="big"></td> -->
                        <!-- <td id="tdrs2" style="text-align: center; background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].rs" maxlength="10" value="无" id="mkcjnext_xycjs_2__rs" class="big"></td> -->
                        <td style="text-align: center; background-color: rgb(255, 204, 204);" id="td02" v-for="(item,index) in numbergradeL" :key="index">
                            <input type="text" name="xycjs[2].cj1" maxlength="10" :value="item.value" id="mkcjnext_xycjs_2__cj1">
                            /
                            <input type="text" name="xycjs[2].mf1" maxlength="10" :value="item.value1" id="mkcjnext_xycjs_2__mf1">
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p class="text_center m_top10" id="errortip"></p>
                <div class="text_center m_top10">
                    <!--<input type="submit" id="mkcjnext_0" value="下一步" class="ui-button ui-button-lceladon">-->
                    <!-- <router-link :to="{path:'/obstetrics',query:obj}"> -->
                        <Button type="primary" class="ui-button ui-button-lceladon" @click="fool">下一步</Button>
                    <!-- </router-link> -->
                </div>
            </form>
        </div>
        <router-view></router-view>
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
                // 要求
                requireOne:"请按高校要求如实填写模考成绩，若没有成绩，请在相应位置填写“无”",
                // 要求2
                requireL:"背景为浅红色的项为必填项",
                // 单科模考成绩 要求
                requireK:"高考相关科目成绩必须填写完整，如尚未进行模考，请填写最近的一次全校性考试的成绩",
                // 总分、年级排名和年级人数 要求
                requireJ:"高考相关科目成绩必须填写完整，如尚未进行模考，请填写最近的一次全校性考试的成绩",
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
                        value:"120",
                        value1:"150"
                    },
                    {
                        value:"130",
                        value1:"150" 
                    },
                    {
                        value:"140",
                        value1:"150"
                    },
                ],
                // 科目 数学
                mathematics:"数学",
                mathematicsL:[
                     // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"120",
                        value1:"150"
                    },
                    {
                        value:"130",
                        value1:"150" 
                    },
                    {
                        value:"140",
                        value1:"150"
                    },
                ],
                // 科目 外语
                languages:"外语",
                languagesL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"120",
                        value1:"150"
                    },
                    {
                        value:"130",
                        value1:"150" 
                    },
                    {
                        value:"140",
                        value1:"150"
                    },
                ],
                // 科目 政治
                politics:"政治",
                politicsL:[
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
                ],
                // 科目 历史
                history:"历史",
                historyL:[
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
                ],
                // 科目 地理
                geography:"地理",
                geographyL:[
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
                ],
                // 科目  物理
                physics:"物理",
                physicsL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"100",
                        value1:"110"
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
                ],
                // 科目 生物
                biology:"生物",
                biologyL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"86",
                        value1:"90"
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
                // 科目 美术
                arts:"美术",
                artsL:[
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
                ],
                // 科目 体育
                sports:"体育",
                sportsL:[
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
                ],
                // 科目 音乐
                music:"音乐",
                musicL:[
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
                ],
                 // 科目 信息技术
                IT:"信息技术",
                ITL:[
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
                ],
                 // 科目 通用技术
                technique:"通用技术",
                techniqueL:[
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
                ],
                // 科目 文科综合	
                comprehensive:"文科综合",
                comprehensiveL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"240",
                        value1:"300"
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
                        value:"240",
                        value1:"300"
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
                // 科目 总分	
                total:"理科综合",
                totalL:[
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
                ],
                // 科目 年级排名		
                Grade:"年级排名",
                GradeL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"240",
                        value1:"300"
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
                // 科目 年级人数			
                numbergrade:"年级人数",
                numbergradeL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"240",
                        value1:"300"
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
        created(){
            // console.log(this.obj)
        },
          mounted(){
            this.schoolName = this.$route.query.schoolName
            this.obj.schoolName = this.$route.query.schoolName
        },
        methods:{
            fool(){
                let obj = this.obj;
                let a = obj.schoolName;
                if(a == "西南大学" || a == "东北大学" || a == "湖南大学"){
                    this.$router.push({path:'/additional',query:obj})
                }else{
                    this.$router.push({path:'/obstetrics',query:obj})
                }
                // this.$router.push({path:'/obstetrics',query:obj})
            }
        }
    }
</script>

<style scoped>
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
    .iconfont {
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
    }
    .ui-tiptext-follow {
        padding-left: 21px;
    }
    .chsi-pot {
        font-size: 18px;
        font-weight: 700;
        margin-right: 5px;
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