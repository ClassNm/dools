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
                            <!-- <td id="td00"><input name="xycjs[0].cj1" maxlength="10" value="无" id="commitDkpm_xycjs_0__cj1" type="text">/<input name="xycjs[0].mf1" maxlength="10" value="无" id="commitDkpm_xycjs_0__mf1" type="text"></td> -->
                            <!-- <td id="td01"><input name="xycjs[1].cj1" maxlength="10" value="无" id="commitDkpm_xycjs_1__cj1" type="text">/<input name="xycjs[1].mf1" maxlength="10" value="无" id="commitDkpm_xycjs_1__mf1" type="text"></td> -->
                            <!-- <td id="td02"><input name="xycjs[2].cj1" maxlength="10" value="无" id="commitDkpm_xycjs_2__cj1" type="text">/<input name="xycjs[2].mf1" maxlength="10" value="无" id="commitDkpm_xycjs_2__mf1" type="text"></td> -->
                            <!-- <td id="td03"><input name="xycjs[3].cj1" maxlength="10" value="无" id="commitDkpm_xycjs_3__cj1" type="text">/<input name="xycjs[3].mf1" maxlength="10" value="无" id="commitDkpm_xycjs_3__mf1" type="text"></td> -->
                            <!-- <td id="td04"><input name="xycjs[4].cj1" maxlength="10" value="无" id="commitDkpm_xycjs_4__cj1" type="text">/<input name="xycjs[4].mf1" maxlength="10" value="无" id="commitDkpm_xycjs_4__mf1" type="text"></td> -->
                            <!-- <td id="td05"><input name="xycjs[5].cj1" maxlength="10" value="无" id="commitDkpm_xycjs_5__cj1" type="text">/<input name="xycjs[5].mf1" maxlength="10" value="无" id="commitDkpm_xycjs_5__mf1" type="text"></td> -->
                            <!-- <td id="td06"><input name="xycjs[6].cj1" maxlength="10" value="无" id="commitDkpm_xycjs_6__cj1" type="text">/<input name="xycjs[6].mf1" maxlength="10" value="无" id="commitDkpm_xycjs_6__mf1" type="text"></td> -->
                            <!-- <td id="td07"><input name="xycjs[7].cj1" maxlength="10" value="无" id="commitDkpm_xycjs_7__cj1" type="text">/<input name="xycjs[7].mf1" maxlength="10" value="无" id="commitDkpm_xycjs_7__mf1" type="text"></td> -->
                            <td v-for="(item,index) in languageL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 数学 -->
                        <tr>
                            <td>{{mathematics}}</td>
                            <!-- <td id="td10"><input name="xycjs[0].cj2" maxlength="10" value="无" id="commitDkpm_xycjs_0__cj2" type="text">/<input name="xycjs[0].mf2" maxlength="10" value="无" id="commitDkpm_xycjs_0__mf2" type="text"></td> -->
                            <!-- <td id="td11"><input name="xycjs[1].cj2" maxlength="10" value="无" id="commitDkpm_xycjs_1__cj2" type="text">/<input name="xycjs[1].mf2" maxlength="10" value="无" id="commitDkpm_xycjs_1__mf2" type="text"></td> -->
                            <!-- <td id="td12"><input name="xycjs[2].cj2" maxlength="10" value="无" id="commitDkpm_xycjs_2__cj2" type="text">/<input name="xycjs[2].mf2" maxlength="10" value="无" id="commitDkpm_xycjs_2__mf2" type="text"></td> -->
                            <!-- <td id="td13"><input name="xycjs[3].cj2" maxlength="10" value="无" id="commitDkpm_xycjs_3__cj2" type="text">/<input name="xycjs[3].mf2" maxlength="10" value="无" id="commitDkpm_xycjs_3__mf2" type="text"></td> -->
                            <!-- <td id="td14"><input name="xycjs[4].cj2" maxlength="10" value="无" id="commitDkpm_xycjs_4__cj2" type="text">/<input name="xycjs[4].mf2" maxlength="10" value="无" id="commitDkpm_xycjs_4__mf2" type="text"></td> -->
                            <!-- <td id="td15"><input name="xycjs[5].cj2" maxlength="10" value="无" id="commitDkpm_xycjs_5__cj2" type="text">/<input name="xycjs[5].mf2" maxlength="10" value="无" id="commitDkpm_xycjs_5__mf2" type="text"></td> -->
                            <!-- <td id="td16"><input name="xycjs[6].cj2" maxlength="10" value="无" id="commitDkpm_xycjs_6__cj2" type="text">/<input name="xycjs[6].mf2" maxlength="10" value="无" id="commitDkpm_xycjs_6__mf2" type="text"></td> -->
                            <!-- <td id="td17"><input name="xycjs[7].cj2" maxlength="10" value="无" id="commitDkpm_xycjs_7__cj2" type="text">/<input name="xycjs[7].mf2" maxlength="10" value="无" id="commitDkpm_xycjs_7__mf2" type="text"></td> -->
                            <td v-for="(item,index) in mathematicsL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 外语 -->
                        <tr>
                            <td>{{languages}}</td>
                            <!-- <td id="td20"><input name="xycjs[0].cj3" maxlength="10" value="无" id="commitDkpm_xycjs_0__cj3" type="text">/<input name="xycjs[0].mf3" maxlength="10" value="无" id="commitDkpm_xycjs_0__mf3" type="text"></td> -->
                            <!-- <td id="td21"><input name="xycjs[1].cj3" maxlength="10" value="无" id="commitDkpm_xycjs_1__cj3" type="text">/<input name="xycjs[1].mf3" maxlength="10" value="无" id="commitDkpm_xycjs_1__mf3" type="text"></td> -->
                            <!-- <td id="td22"><input name="xycjs[2].cj3" maxlength="10" value="无" id="commitDkpm_xycjs_2__cj3" type="text">/<input name="xycjs[2].mf3" maxlength="10" value="无" id="commitDkpm_xycjs_2__mf3" type="text"></td> -->
                            <!-- <td id="td23"><input name="xycjs[3].cj3" maxlength="10" value="无" id="commitDkpm_xycjs_3__cj3" type="text">/<input name="xycjs[3].mf3" maxlength="10" value="无" id="commitDkpm_xycjs_3__mf3" type="text"></td> -->
                            <!-- <td id="td24"><input name="xycjs[4].cj3" maxlength="10" value="无" id="commitDkpm_xycjs_4__cj3" type="text">/<input name="xycjs[4].mf3" maxlength="10" value="无" id="commitDkpm_xycjs_4__mf3" type="text"></td> -->
                            <!-- <td id="td25"><input name="xycjs[5].cj3" maxlength="10" value="无" id="commitDkpm_xycjs_5__cj3" type="text">/<input name="xycjs[5].mf3" maxlength="10" value="无" id="commitDkpm_xycjs_5__mf3" type="text"></td> -->
                            <!-- <td id="td26"><input name="xycjs[6].cj3" maxlength="10" value="无" id="commitDkpm_xycjs_6__cj3" type="text">/<input name="xycjs[6].mf3" maxlength="10" value="无" id="commitDkpm_xycjs_6__mf3" type="text"></td> -->
                            <!-- <td id="td27"><input name="xycjs[7].cj3" maxlength="10" value="无" id="commitDkpm_xycjs_7__cj3" type="text">/<input name="xycjs[7].mf3" maxlength="10" value="无" id="commitDkpm_xycjs_7__mf3" type="text"></td> -->
                            <td v-for="(item,index) in languagesL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 政治 -->
                        <tr>
                            <td>{{politics}}</td>
                            <!-- <td id="td30"><input name="xycjs[0].cj4" maxlength="10" value="无" id="commitDkpm_xycjs_0__cj4" type="text">/<input name="xycjs[0].mf4" maxlength="10" value="无" id="commitDkpm_xycjs_0__mf4" type="text"></td> -->
                            <!-- <td id="td31"><input name="xycjs[1].cj4" maxlength="10" value="无" id="commitDkpm_xycjs_1__cj4" type="text">/<input name="xycjs[1].mf4" maxlength="10" value="无" id="commitDkpm_xycjs_1__mf4" type="text"></td> -->
                            <!-- <td id="td32"><input name="xycjs[2].cj4" maxlength="10" value="无" id="commitDkpm_xycjs_2__cj4" type="text">/<input name="xycjs[2].mf4" maxlength="10" value="无" id="commitDkpm_xycjs_2__mf4" type="text"></td> -->
                            <!-- <td id="td33"><input name="xycjs[3].cj4" maxlength="10" value="无" id="commitDkpm_xycjs_3__cj4" type="text">/<input name="xycjs[3].mf4" maxlength="10" value="无" id="commitDkpm_xycjs_3__mf4" type="text"></td> -->
                            <!-- <td id="td34"><input name="xycjs[4].cj4" maxlength="10" value="无" id="commitDkpm_xycjs_4__cj4" type="text">/<input name="xycjs[4].mf4" maxlength="10" value="无" id="commitDkpm_xycjs_4__mf4" type="text"></td> -->
                            <!-- <td id="td35"><input name="xycjs[5].cj4" maxlength="10" value="无" id="commitDkpm_xycjs_5__cj4" type="text">/<input name="xycjs[5].mf4" maxlength="10" value="无" id="commitDkpm_xycjs_5__mf4" type="text"></td> -->
                            <!-- <td id="td36"><input name="xycjs[6].cj4" maxlength="10" value="无" id="commitDkpm_xycjs_6__cj4" type="text">/<input name="xycjs[6].mf4" maxlength="10" value="无" id="commitDkpm_xycjs_6__mf4" type="text"></td> -->
                            <!-- <td id="td37"><input name="xycjs[7].cj4" maxlength="10" value="无" id="commitDkpm_xycjs_7__cj4" type="text">/<input name="xycjs[7].mf4" maxlength="10" value="无" id="commitDkpm_xycjs_7__mf4" type="text"></td> -->
                            <td v-for="(item,index) in politicsL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 历史 -->  
                        <tr>
                            <td>{{history}}</td>
                            <!-- <td id="td40"><input name="xycjs[0].cj5" maxlength="10" value="无" id="commitDkpm_xycjs_0__cj5" type="text">/<input name="xycjs[0].mf5" maxlength="10" value="无" id="commitDkpm_xycjs_0__mf5" type="text"></td> -->
                            <!-- <td id="td41"><input name="xycjs[1].cj5" maxlength="10" value="无" id="commitDkpm_xycjs_1__cj5" type="text">/<input name="xycjs[1].mf5" maxlength="10" value="无" id="commitDkpm_xycjs_1__mf5" type="text"></td> -->
                            <!-- <td id="td42"><input name="xycjs[2].cj5" maxlength="10" value="无" id="commitDkpm_xycjs_2__cj5" type="text">/<input name="xycjs[2].mf5" maxlength="10" value="无" id="commitDkpm_xycjs_2__mf5" type="text"></td> -->
                            <!-- <td id="td43"><input name="xycjs[3].cj5" maxlength="10" value="无" id="commitDkpm_xycjs_3__cj5" type="text">/<input name="xycjs[3].mf5" maxlength="10" value="无" id="commitDkpm_xycjs_3__mf5" type="text"></td> -->
                            <!-- <td id="td44"><input name="xycjs[4].cj5" maxlength="10" value="无" id="commitDkpm_xycjs_4__cj5" type="text">/<input name="xycjs[4].mf5" maxlength="10" value="无" id="commitDkpm_xycjs_4__mf5" type="text"></td> -->
                            <!-- <td id="td45"><input name="xycjs[5].cj5" maxlength="10" value="无" id="commitDkpm_xycjs_5__cj5" type="text">/<input name="xycjs[5].mf5" maxlength="10" value="无" id="commitDkpm_xycjs_5__mf5" type="text"></td> -->
                            <!-- <td id="td46"><input name="xycjs[6].cj5" maxlength="10" value="无" id="commitDkpm_xycjs_6__cj5" type="text">/<input name="xycjs[6].mf5" maxlength="10" value="无" id="commitDkpm_xycjs_6__mf5" type="text"></td> -->
                            <!-- <td id="td47"><input name="xycjs[7].cj5" maxlength="10" value="无" id="commitDkpm_xycjs_7__cj5" type="text">/<input name="xycjs[7].mf5" maxlength="10" value="无" id="commitDkpm_xycjs_7__mf5" type="text"></td> -->
                            <td v-for="(item,index) in historyL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                         <!--地理  -->
                        <tr>
                            <td>{{geography}}</td>
                            <!-- <td id="td50"><input name="xycjs[0].cj6" maxlength="10" value="无" id="commitDkpm_xycjs_0__cj6" type="text">/<input name="xycjs[0].mf6" maxlength="10" value="无" id="commitDkpm_xycjs_0__mf6" type="text"></td> -->
                            <!-- <td id="td51"><input name="xycjs[1].cj6" maxlength="10" value="无" id="commitDkpm_xycjs_1__cj6" type="text">/<input name="xycjs[1].mf6" maxlength="10" value="无" id="commitDkpm_xycjs_1__mf6" type="text"></td> -->
                            <!-- <td id="td52"><input name="xycjs[2].cj6" maxlength="10" value="无" id="commitDkpm_xycjs_2__cj6" type="text">/<input name="xycjs[2].mf6" maxlength="10" value="无" id="commitDkpm_xycjs_2__mf6" type="text"></td> -->
                            <!-- <td id="td53"><input name="xycjs[3].cj6" maxlength="10" value="无" id="commitDkpm_xycjs_3__cj6" type="text">/<input name="xycjs[3].mf6" maxlength="10" value="无" id="commitDkpm_xycjs_3__mf6" type="text"></td> -->
                            <!-- <td id="td54"><input name="xycjs[4].cj6" maxlength="10" value="无" id="commitDkpm_xycjs_4__cj6" type="text">/<input name="xycjs[4].mf6" maxlength="10" value="无" id="commitDkpm_xycjs_4__mf6" type="text"></td> -->
                            <!-- <td id="td55"><input name="xycjs[5].cj6" maxlength="10" value="无" id="commitDkpm_xycjs_5__cj6" type="text">/<input name="xycjs[5].mf6" maxlength="10" value="无" id="commitDkpm_xycjs_5__mf6" type="text"></td> -->
                            <!-- <td id="td56"><input name="xycjs[6].cj6" maxlength="10" value="无" id="commitDkpm_xycjs_6__cj6" type="text">/<input name="xycjs[6].mf6" maxlength="10" value="无" id="commitDkpm_xycjs_6__mf6" type="text"></td> -->
                            <!-- <td id="td57"><input name="xycjs[7].cj6" maxlength="10" value="无" id="commitDkpm_xycjs_7__cj6" type="text">/<input name="xycjs[7].mf6" maxlength="10" value="无" id="commitDkpm_xycjs_7__mf6" type="text"></td> -->
                            <td v-for="(item,index) in geographyL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                         <!-- 物理 -->
                        <tr>
                            <td>{{physics}}</td>
                            <!-- <td id="td60"><input name="xycjs[0].cj7" maxlength="10" value="无" id="commitDkpm_xycjs_0__cj7" type="text">/<input name="xycjs[0].mf7" maxlength="10" value="无" id="commitDkpm_xycjs_0__mf7" type="text"></td> -->
                            <!-- <td id="td61"><input name="xycjs[1].cj7" maxlength="10" value="无" id="commitDkpm_xycjs_1__cj7" type="text">/<input name="xycjs[1].mf7" maxlength="10" value="无" id="commitDkpm_xycjs_1__mf7" type="text"></td> -->
                            <!-- <td id="td62"><input name="xycjs[2].cj7" maxlength="10" value="无" id="commitDkpm_xycjs_2__cj7" type="text">/<input name="xycjs[2].mf7" maxlength="10" value="无" id="commitDkpm_xycjs_2__mf7" type="text"></td> -->
                            <!-- <td id="td63"><input name="xycjs[3].cj7" maxlength="10" value="无" id="commitDkpm_xycjs_3__cj7" type="text">/<input name="xycjs[3].mf7" maxlength="10" value="无" id="commitDkpm_xycjs_3__mf7" type="text"></td> -->
                            <!-- <td id="td64"><input name="xycjs[4].cj7" maxlength="10" value="无" id="commitDkpm_xycjs_4__cj7" type="text">/<input name="xycjs[4].mf7" maxlength="10" value="无" id="commitDkpm_xycjs_4__mf7" type="text"></td> -->
                            <!-- <td id="td65"><input name="xycjs[5].cj7" maxlength="10" value="无" id="commitDkpm_xycjs_5__cj7" type="text">/<input name="xycjs[5].mf7" maxlength="10" value="无" id="commitDkpm_xycjs_5__mf7" type="text"></td> -->
                            <!-- <td id="td66"><input name="xycjs[6].cj7" maxlength="10" value="无" id="commitDkpm_xycjs_6__cj7" type="text">/<input name="xycjs[6].mf7" maxlength="10" value="无" id="commitDkpm_xycjs_6__mf7" type="text"></td> -->
                            <!-- <td id="td67"><input name="xycjs[7].cj7" maxlength="10" value="无" id="commitDkpm_xycjs_7__cj7" type="text">/<input name="xycjs[7].mf7" maxlength="10" value="无" id="commitDkpm_xycjs_7__mf7" type="text"></td> -->
                            <td v-for="(item,index) in physicsL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 化学 --> 
                        <tr>
                            <td>{{chemistry}}</td>
                            <!-- <td id="td70"><input name="xycjs[0].cj8" maxlength="10" value="无" id="commitDkpm_xycjs_0__cj8" type="text">/<input name="xycjs[0].mf8" maxlength="10" value="无" id="commitDkpm_xycjs_0__mf8" type="text"></td> -->
                            <!-- <td id="td71"><input name="xycjs[1].cj8" maxlength="10" value="无" id="commitDkpm_xycjs_1__cj8" type="text">/<input name="xycjs[1].mf8" maxlength="10" value="无" id="commitDkpm_xycjs_1__mf8" type="text"></td> -->
                            <!-- <td id="td72"><input name="xycjs[2].cj8" maxlength="10" value="无" id="commitDkpm_xycjs_2__cj8" type="text">/<input name="xycjs[2].mf8" maxlength="10" value="无" id="commitDkpm_xycjs_2__mf8" type="text"></td> -->
                            <!-- <td id="td73"><input name="xycjs[3].cj8" maxlength="10" value="无" id="commitDkpm_xycjs_3__cj8" type="text">/<input name="xycjs[3].mf8" maxlength="10" value="无" id="commitDkpm_xycjs_3__mf8" type="text"></td> -->
                            <!-- <td id="td74"><input name="xycjs[4].cj8" maxlength="10" value="无" id="commitDkpm_xycjs_4__cj8" type="text">/<input name="xycjs[4].mf8" maxlength="10" value="无" id="commitDkpm_xycjs_4__mf8" type="text"></td> -->
                            <!-- <td id="td75"><input name="xycjs[5].cj8" maxlength="10" value="无" id="commitDkpm_xycjs_5__cj8" type="text">/<input name="xycjs[5].mf8" maxlength="10" value="无" id="commitDkpm_xycjs_5__mf8" type="text"></td> -->
                            <!-- <td id="td76"><input name="xycjs[6].cj8" maxlength="10" value="无" id="commitDkpm_xycjs_6__cj8" type="text">/<input name="xycjs[6].mf8" maxlength="10" value="无" id="commitDkpm_xycjs_6__mf8" type="text"></td> -->
                            <!-- <td id="td77"><input name="xycjs[7].cj8" maxlength="10" value="无" id="commitDkpm_xycjs_7__cj8" type="text">/<input name="xycjs[7].mf8" maxlength="10" value="无" id="commitDkpm_xycjs_7__mf8" type="text"></td> -->
                            <td v-for="(item,index) in chemistryL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 生物 -->
                        <tr>
                            <td>{{biology}}</td>
                            <!-- <td id="td80"><input name="xycjs[0].cj9" maxlength="10" value="无" id="commitDkpm_xycjs_0__cj9" type="text">/<input name="xycjs[0].mf9" maxlength="10" value="无  " id="commitDkpm_xycjs_0__mf9" type="text"></td> -->
                            <!-- <td id="td81"><input name="xycjs[1].cj9" maxlength="10" value="无" id="commitDkpm_xycjs_1__cj9" type="text">/<input name="xycjs[1].mf9" maxlength="10" value="无" id="commitDkpm_xycjs_1__mf9" type="text"></td> -->
                            <!-- <td id="td82"><input name="xycjs[2].cj9" maxlength="10" value="无" id="commitDkpm_xycjs_2__cj9" type="text">/<input name="xycjs[2].mf9" maxlength="10" value="无" id="commitDkpm_xycjs_2__mf9" type="text"></td> -->
                            <!-- <td id="td83"><input name="xycjs[3].cj9" maxlength="10" value="无" id="commitDkpm_xycjs_3__cj9" type="text">/<input name="xycjs[3].mf9" maxlength="10" value="无" id="commitDkpm_xycjs_3__mf9" type="text"></td> -->
                            <!-- <td id="td84"><input name="xycjs[4].cj9" maxlength="10" value="无" id="commitDkpm_xycjs_4__cj9" type="text">/<input name="xycjs[4].mf9" maxlength="10" value="无" id="commitDkpm_xycjs_4__mf9" type="text"></td> -->
                            <!-- <td id="td85"><input name="xycjs[5].cj9" maxlength="10" value="无" id="commitDkpm_xycjs_5__cj9" type="text">/<input name="xycjs[5].mf9" maxlength="10" value="无" id="commitDkpm_xycjs_5__mf9" type="text"></td> -->
                            <!-- <td id="td86"><input name="xycjs[6].cj9" maxlength="10" value="无" id="commitDkpm_xycjs_6__cj9" type="text">/<input name="xycjs[6].mf9" maxlength="10" value="无" id="commitDkpm_xycjs_6__mf9" type="text"></td> -->
                            <!-- <td id="td87"><input name="xycjs[7].cj9" maxlength="10" value="无" id="commitDkpm_xycjs_7__cj9" type="text">/<input name="xycjs[7].mf9" maxlength="10" value="无" id="commitDkpm_xycjs_7__mf9" type="text"></td> -->
                            <td v-for="(item,index) in biologyL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                         <!-- 文科综合 -->
                        <tr>
                            <td>{{comprehensive}}</td>
                            <!-- <td id="td140"><input name="xycjs[0].cj14" maxlength="10" value="无" id="commitDkpm_xycjs_0__cj14" type="text">/<input name="xycjs[0].mf14" maxlength="10" value="无" id="commitDkpm_xycjs_0__mf14" type="text"></td> -->
                            <!-- <td id="td141"><input name="xycjs[1].cj14" maxlength="10" value="无" id="commitDkpm_xycjs_1__cj14" type="text">/<input name="xycjs[1].mf14" maxlength="10" value="无" id="commitDkpm_xycjs_1__mf14" type="text"></td> -->
                            <!-- <td id="td142"><input name="xycjs[2].cj14" maxlength="10" value="无" id="commitDkpm_xycjs_2__cj14" type="text">/<input name="xycjs[2].mf14" maxlength="10" value="无" id="commitDkpm_xycjs_2__mf14" type="text"></td> -->
                            <!-- <td id="td143"><input name="xycjs[3].cj14" maxlength="10" value="无" id="commitDkpm_xycjs_3__cj14" type="text">/<input name="xycjs[3].mf14" maxlength="10" value="无" id="commitDkpm_xycjs_3__mf14" type="text"></td> -->
                            <!-- <td id="td144"><input name="xycjs[4].cj14" maxlength="10" value="无" id="commitDkpm_xycjs_4__cj14" type="text">/<input name="xycjs[4].mf14" maxlength="10" value="无" id="commitDkpm_xycjs_4__mf14" type="text"></td> -->
                            <!-- <td id="td145"><input name="xycjs[5].cj14" maxlength="10" value="无" id="commitDkpm_xycjs_5__cj14" type="text">/<input name="xycjs[5].mf14" maxlength="10" value="无" id="commitDkpm_xycjs_5__mf14" type="text"></td> -->
                            <!-- <td id="td146"><input name="xycjs[6].cj14" maxlength="10" value="无" id="commitDkpm_xycjs_6__cj14" type="text">/<input name="xycjs[6].mf14" maxlength="10" value="无" id="commitDkpm_xycjs_6__mf14" type="text"></td> -->
                            <!-- <td id="td147"><input name="xycjs[7].cj14" maxlength="10" value="无" id="commitDkpm_xycjs_7__cj14" type="text">/<input name="xycjs[7].mf14" maxlength="10" value="无" id="commitDkpm_xycjs_7__mf14" type="text"></td> -->
                            <td v-for="(item,index) in comprehensiveL" :key="index">
                                 <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">  
                            </td>
                        </tr>
                        <!-- 理科综合 -->
                        <tr>
                            <td>{{integrated}}</td>
                            <!-- <td id="td150"><input name="xycjs[0].cj15" maxlength="10" value="无" id="commitDkpm_xycjs_0__cj15" type="text">/<input name="xycjs[0].mf15" maxlength="10" value="无" id="commitDkpm_xycjs_0__mf15" type="text"></td> -->
                            <!-- <td id="td151"><input name="xycjs[1].cj15" maxlength="10" value="无" id="commitDkpm_xycjs_1__cj15" type="text">/<input name="xycjs[1].mf15" maxlength="10" value="无" id="commitDkpm_xycjs_1__mf15" type="text"></td> -->
                            <!-- <td id="td152"><input name="xycjs[2].cj15" maxlength="10" value="无" id="commitDkpm_xycjs_2__cj15" type="text">/<input name="xycjs[2].mf15" maxlength="10" value="无" id="commitDkpm_xycjs_2__mf15" type="text"></td> -->
                            <!-- <td id="td153"><input name="xycjs[3].cj15" maxlength="10" value="无" id="commitDkpm_xycjs_3__cj15" type="text">/<input name="xycjs[3].mf15" maxlength="10" value="无" id="commitDkpm_xycjs_3__mf15" type="text"></td> -->
                            <!-- <td id="td154"><input name="xycjs[4].cj15" maxlength="10" value="无" id="commitDkpm_xycjs_4__cj15" type="text">/<input name="xycjs[4].mf15" maxlength="10" value="无" id="commitDkpm_xycjs_4__mf15" type="text"></td> -->
                            <!-- <td id="td155"><input name="xycjs[5].cj15" maxlength="10" value="无" id="commitDkpm_xycjs_5__cj15" type="text">/<input name="xycjs[5].mf15" maxlength="10" value="无" id="commitDkpm_xycjs_5__mf15" type="text"></td> -->
                            <!-- <td id="td156"><input name="xycjs[6].cj15" maxlength="10" value="无" id="commitDkpm_xycjs_6__cj15" type="text">/<input name="xycjs[6].mf15" maxlength="10" value="无" id="commitDkpm_xycjs_6__mf15" type="text"></td> -->
                            <!-- <td id="td157"><input name="xycjs[7].cj15" maxlength="10" value="无" id="commitDkpm_xycjs_7__cj15" type="text">/<input name="xycjs[7].mf15" maxlength="10" value="无" id="commitDkpm_xycjs_7__mf15" type="text"></td> -->
                            <td v-for="(item,index) in integratedL" :key="index">
                                <input type="text" maxlength="10" v-model="item.value">/<input type="text" maxlength="10" v-model="item.value1">
                                </td>
                        </tr>
                        </tbody>
                    </table>
                    <p class="text_center m_top10" id="errortip"></p>
                    <div class="text_center m_top10">
                        <!--<input id="commitDkpm_0" value="保存" class="ui-button ui-button-lceladon" type="submit">-->
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