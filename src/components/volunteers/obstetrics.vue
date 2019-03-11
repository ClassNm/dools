

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
                    <i class="ui-tiptext-icon iconfont" title="提示" style="font-size: 18px;"></i>来自于 <span style="color: #c30;font-weight: 700">华北电力大学(北京)</span> 的说明：</p>
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
                        <th>高一(上)期末<br> 排名/人数
                        </th>
                        <th>高一(下)期末<br> 排名/人数
                        </th>
                        <th>高二(上)期末<br> 排名/人数
                        </th>
                        <th>高二(下)期末<br> 排名/人数
                        </th>
                        <th>高三(上)期末<br> 排名/人数
                        </th>
                        <th>高三第一次模考<br> 排名/人数
                        </th>
                        <th>高三第二次模考<br> 排名/人数
                        </th>
                        <th>高三第三次模考<br> 排名/人数
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>语文</td>
                        <td id="td00" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].cj1" maxlength="10" value="100" id="dkpmnext_xycjs_0__cj1">/<input type="text" name="xycjs[0].mf1" maxlength="10" value="1000" id="dkpmnext_xycjs_0__mf1"></td>
                        <td id="td01" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].cj1" maxlength="10" value="100" id="dkpmnext_xycjs_1__cj1">/<input type="text" name="xycjs[1].mf1" maxlength="10" value="1000" id="dkpmnext_xycjs_1__mf1"></td>
                        <td id="td02" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].cj1" maxlength="10" value="100" id="dkpmnext_xycjs_2__cj1">/<input type="text" name="xycjs[2].mf1" maxlength="10" value="1000" id="dkpmnext_xycjs_2__mf1"></td>
                        <td id="td03" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[3].cj1" maxlength="10" value="100" id="dkpmnext_xycjs_3__cj1">/<input type="text" name="xycjs[3].mf1" maxlength="10" value="1000" id="dkpmnext_xycjs_3__mf1"></td>
                        <td id="td04" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[4].cj1" maxlength="10" value="100" id="dkpmnext_xycjs_4__cj1">/<input type="text" name="xycjs[4].mf1" maxlength="10" value="1000" id="dkpmnext_xycjs_4__mf1"></td>
                        <td id="td05" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[5].cj1" maxlength="10" value="100" id="dkpmnext_xycjs_5__cj1">/<input type="text" name="xycjs[5].mf1" maxlength="10" value="1000" id="dkpmnext_xycjs_5__mf1"></td>
                        <td id="td06" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[6].cj1" maxlength="10" value="无" id="dkpmnext_xycjs_6__cj1">/<input type="text" name="xycjs[6].mf1" maxlength="10" value="无" id="dkpmnext_xycjs_6__mf1"></td>
                        <td id="td07" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[7].cj1" maxlength="10" value="无" id="dkpmnext_xycjs_7__cj1">/<input type="text" name="xycjs[7].mf1" maxlength="10" value="无" id="dkpmnext_xycjs_7__mf1"></td>
                    </tr>
                    <tr>
                        <td>数学</td>
                        <td id="td10" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].cj2" maxlength="10" value="100" id="dkpmnext_xycjs_0__cj2">/<input type="text" name="xycjs[0].mf2" maxlength="10" value="1000" id="dkpmnext_xycjs_0__mf2"></td>
                        <td id="td11" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].cj2" maxlength="10" value="100" id="dkpmnext_xycjs_1__cj2">/<input type="text" name="xycjs[1].mf2" maxlength="10" value="1000" id="dkpmnext_xycjs_1__mf2"></td>
                        <td id="td12" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].cj2" maxlength="10" value="100" id="dkpmnext_xycjs_2__cj2">/<input type="text" name="xycjs[2].mf2" maxlength="10" value="1000" id="dkpmnext_xycjs_2__mf2"></td>
                        <td id="td13" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[3].cj2" maxlength="10" value="100" id="dkpmnext_xycjs_3__cj2">/<input type="text" name="xycjs[3].mf2" maxlength="10" value="1000" id="dkpmnext_xycjs_3__mf2"></td>
                        <td id="td14" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[4].cj2" maxlength="10" value="100" id="dkpmnext_xycjs_4__cj2">/<input type="text" name="xycjs[4].mf2" maxlength="10" value="1000" id="dkpmnext_xycjs_4__mf2"></td>
                        <td id="td15" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[5].cj2" maxlength="10" value="100" id="dkpmnext_xycjs_5__cj2">/<input type="text" name="xycjs[5].mf2" maxlength="10" value="1000" id="dkpmnext_xycjs_5__mf2"></td>
                        <td id="td16" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[6].cj2" maxlength="10" value="无" id="dkpmnext_xycjs_6__cj2">/<input type="text" name="xycjs[6].mf2" maxlength="10" value="无" id="dkpmnext_xycjs_6__mf2"></td>
                        <td id="td17" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[7].cj2" maxlength="10" value="无" id="dkpmnext_xycjs_7__cj2">/<input type="text" name="xycjs[7].mf2" maxlength="10" value="无" id="dkpmnext_xycjs_7__mf2"></td>
                    </tr>
                    <tr>
                        <td>外语</td>
                        <td id="td20" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].cj3" maxlength="10" value="100" id="dkpmnext_xycjs_0__cj3">/<input type="text" name="xycjs[0].mf3" maxlength="10" value="1000" id="dkpmnext_xycjs_0__mf3"></td>
                        <td id="td21" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].cj3" maxlength="10" value="100" id="dkpmnext_xycjs_1__cj3">/<input type="text" name="xycjs[1].mf3" maxlength="10" value="1000" id="dkpmnext_xycjs_1__mf3"></td>
                        <td id="td22" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].cj3" maxlength="10" value="100" id="dkpmnext_xycjs_2__cj3">/<input type="text" name="xycjs[2].mf3" maxlength="10" value="1000" id="dkpmnext_xycjs_2__mf3"></td>
                        <td id="td23" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[3].cj3" maxlength="10" value="100" id="dkpmnext_xycjs_3__cj3">/<input type="text" name="xycjs[3].mf3" maxlength="10" value="1000" id="dkpmnext_xycjs_3__mf3"></td>
                        <td id="td24" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[4].cj3" maxlength="10" value="100" id="dkpmnext_xycjs_4__cj3">/<input type="text" name="xycjs[4].mf3" maxlength="10" value="1000" id="dkpmnext_xycjs_4__mf3"></td>
                        <td id="td25" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[5].cj3" maxlength="10" value="100" id="dkpmnext_xycjs_5__cj3">/<input type="text" name="xycjs[5].mf3" maxlength="10" value="1000" id="dkpmnext_xycjs_5__mf3"></td>
                        <td id="td26" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[6].cj3" maxlength="10" value="无" id="dkpmnext_xycjs_6__cj3">/<input type="text" name="xycjs[6].mf3" maxlength="10" value="无" id="dkpmnext_xycjs_6__mf3"></td>
                        <td id="td27" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[7].cj3" maxlength="10" value="无" id="dkpmnext_xycjs_7__cj3">/<input type="text" name="xycjs[7].mf3" maxlength="10" value="无" id="dkpmnext_xycjs_7__mf3"></td>
                    </tr>
                    <tr>
                        <td>政治</td>
                        <td id="td30" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].cj4" maxlength="10" value="100" id="dkpmnext_xycjs_0__cj4">/<input type="text" name="xycjs[0].mf4" maxlength="10" value="1000" id="dkpmnext_xycjs_0__mf4"></td>
                        <td id="td31" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].cj4" maxlength="10" value="100" id="dkpmnext_xycjs_1__cj4">/<input type="text" name="xycjs[1].mf4" maxlength="10" value="1000" id="dkpmnext_xycjs_1__mf4"></td>
                        <td id="td32" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].cj4" maxlength="10" value="无" id="dkpmnext_xycjs_2__cj4">/<input type="text" name="xycjs[2].mf4" maxlength="10" value="无" id="dkpmnext_xycjs_2__mf4"></td>
                        <td id="td33" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[3].cj4" maxlength="10" value="无" id="dkpmnext_xycjs_3__cj4">/<input type="text" name="xycjs[3].mf4" maxlength="10" value="无" id="dkpmnext_xycjs_3__mf4"></td>
                        <td id="td34" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[4].cj4" maxlength="10" value="无" id="dkpmnext_xycjs_4__cj4">/<input type="text" name="xycjs[4].mf4" maxlength="10" value="无" id="dkpmnext_xycjs_4__mf4"></td>
                        <td id="td35" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[5].cj4" maxlength="10" value="无" id="dkpmnext_xycjs_5__cj4">/<input type="text" name="xycjs[5].mf4" maxlength="10" value="无" id="dkpmnext_xycjs_5__mf4"></td>
                        <td id="td36" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[6].cj4" maxlength="10" value="无" id="dkpmnext_xycjs_6__cj4">/<input type="text" name="xycjs[6].mf4" maxlength="10" value="无" id="dkpmnext_xycjs_6__mf4"></td>
                        <td id="td37" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[7].cj4" maxlength="10" value="无" id="dkpmnext_xycjs_7__cj4">/<input type="text" name="xycjs[7].mf4" maxlength="10" value="无" id="dkpmnext_xycjs_7__mf4"></td>
                    </tr>
                    <tr>
                        <td>历史</td>
                        <td id="td40" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].cj5" maxlength="10" value="100" id="dkpmnext_xycjs_0__cj5">/<input type="text" name="xycjs[0].mf5" maxlength="10" value="1000" id="dkpmnext_xycjs_0__mf5"></td>
                        <td id="td41" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].cj5" maxlength="10" value="100" id="dkpmnext_xycjs_1__cj5">/<input type="text" name="xycjs[1].mf5" maxlength="10" value="1000" id="dkpmnext_xycjs_1__mf5"></td>
                        <td id="td42" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].cj5" maxlength="10" value="无" id="dkpmnext_xycjs_2__cj5">/<input type="text" name="xycjs[2].mf5" maxlength="10" value="无" id="dkpmnext_xycjs_2__mf5"></td>
                        <td id="td43" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[3].cj5" maxlength="10" value="无" id="dkpmnext_xycjs_3__cj5">/<input type="text" name="xycjs[3].mf5" maxlength="10" value="无" id="dkpmnext_xycjs_3__mf5"></td>
                        <td id="td44" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[4].cj5" maxlength="10" value="无" id="dkpmnext_xycjs_4__cj5">/<input type="text" name="xycjs[4].mf5" maxlength="10" value="无" id="dkpmnext_xycjs_4__mf5"></td>
                        <td id="td45" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[5].cj5" maxlength="10" value="无" id="dkpmnext_xycjs_5__cj5">/<input type="text" name="xycjs[5].mf5" maxlength="10" value="无" id="dkpmnext_xycjs_5__mf5"></td>
                        <td id="td46" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[6].cj5" maxlength="10" value="无" id="dkpmnext_xycjs_6__cj5">/<input type="text" name="xycjs[6].mf5" maxlength="10" value="无" id="dkpmnext_xycjs_6__mf5"></td>
                        <td id="td47" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[7].cj5" maxlength="10" value="无" id="dkpmnext_xycjs_7__cj5">/<input type="text" name="xycjs[7].mf5" maxlength="10" value="无" id="dkpmnext_xycjs_7__mf5"></td>
                    </tr>
                    <tr>
                        <td>地理</td>
                        <td id="td50" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].cj6" maxlength="10" value="100" id="dkpmnext_xycjs_0__cj6">/<input type="text" name="xycjs[0].mf6" maxlength="10" value="1000" id="dkpmnext_xycjs_0__mf6"></td>
                        <td id="td51" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].cj6" maxlength="10" value="100" id="dkpmnext_xycjs_1__cj6">/<input type="text" name="xycjs[1].mf6" maxlength="10" value="1000" id="dkpmnext_xycjs_1__mf6"></td>
                        <td id="td52" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].cj6" maxlength="10" value="无" id="dkpmnext_xycjs_2__cj6">/<input type="text" name="xycjs[2].mf6" maxlength="10" value="无" id="dkpmnext_xycjs_2__mf6"></td>
                        <td id="td53" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[3].cj6" maxlength="10" value="无" id="dkpmnext_xycjs_3__cj6">/<input type="text" name="xycjs[3].mf6" maxlength="10" value="无" id="dkpmnext_xycjs_3__mf6"></td>
                        <td id="td54" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[4].cj6" maxlength="10" value="无" id="dkpmnext_xycjs_4__cj6">/<input type="text" name="xycjs[4].mf6" maxlength="10" value="无" id="dkpmnext_xycjs_4__mf6"></td>
                        <td id="td55" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[5].cj6" maxlength="10" value="无" id="dkpmnext_xycjs_5__cj6">/<input type="text" name="xycjs[5].mf6" maxlength="10" value="无" id="dkpmnext_xycjs_5__mf6"></td>
                        <td id="td56" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[6].cj6" maxlength="10" value="无" id="dkpmnext_xycjs_6__cj6">/<input type="text" name="xycjs[6].mf6" maxlength="10" value="无" id="dkpmnext_xycjs_6__mf6"></td>
                        <td id="td57" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[7].cj6" maxlength="10" value="无" id="dkpmnext_xycjs_7__cj6">/<input type="text" name="xycjs[7].mf6" maxlength="10" value="无" id="dkpmnext_xycjs_7__mf6"></td>
                    </tr>
                    <tr>
                        <td>物理</td>
                        <td id="td60" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].cj7" maxlength="10" value="50" id="dkpmnext_xycjs_0__cj7">/<input type="text" name="xycjs[0].mf7" maxlength="10" value="501000" id="dkpmnext_xycjs_0__mf7"></td>
                        <td id="td61" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].cj7" maxlength="10" value="50" id="dkpmnext_xycjs_1__cj7">/<input type="text" name="xycjs[1].mf7" maxlength="10" value="1000" id="dkpmnext_xycjs_1__mf7"></td>
                        <td id="td62" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].cj7" maxlength="10" value="50" id="dkpmnext_xycjs_2__cj7">/<input type="text" name="xycjs[2].mf7" maxlength="10" value="1000" id="dkpmnext_xycjs_2__mf7"></td>
                        <td id="td63" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[3].cj7" maxlength="10" value="50" id="dkpmnext_xycjs_3__cj7">/<input type="text" name="xycjs[3].mf7" maxlength="10" value="1000" id="dkpmnext_xycjs_3__mf7"></td>
                        <td id="td64" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[4].cj7" maxlength="10" value="50" id="dkpmnext_xycjs_4__cj7">/<input type="text" name="xycjs[4].mf7" maxlength="10" value="1000" id="dkpmnext_xycjs_4__mf7"></td>
                        <td id="td65" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[5].cj7" maxlength="10" value="50" id="dkpmnext_xycjs_5__cj7">/<input type="text" name="xycjs[5].mf7" maxlength="10" value="1000" id="dkpmnext_xycjs_5__mf7"></td>
                        <td id="td66" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[6].cj7" maxlength="10" value="无" id="dkpmnext_xycjs_6__cj7">/<input type="text" name="xycjs[6].mf7" maxlength="10" value="无" id="dkpmnext_xycjs_6__mf7"></td>
                        <td id="td67" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[7].cj7" maxlength="10" value="无" id="dkpmnext_xycjs_7__cj7">/<input type="text" name="xycjs[7].mf7" maxlength="10" value="无" id="dkpmnext_xycjs_7__mf7"></td>
                    </tr>
                    <tr>
                        <td>化学</td>
                        <td id="td70" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].cj8" maxlength="10" value="50" id="dkpmnext_xycjs_0__cj8">/<input type="text" name="xycjs[0].mf8" maxlength="10" value="1000" id="dkpmnext_xycjs_0__mf8"></td>
                        <td id="td71" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].cj8" maxlength="10" value="50" id="dkpmnext_xycjs_1__cj8">/<input type="text" name="xycjs[1].mf8" maxlength="10" value="1000" id="dkpmnext_xycjs_1__mf8"></td>
                        <td id="td72" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].cj8" maxlength="10" value="50" id="dkpmnext_xycjs_2__cj8">/<input type="text" name="xycjs[2].mf8" maxlength="10" value="1000" id="dkpmnext_xycjs_2__mf8"></td>
                        <td id="td73" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[3].cj8" maxlength="10" value="50" id="dkpmnext_xycjs_3__cj8">/<input type="text" name="xycjs[3].mf8" maxlength="10" value="1000" id="dkpmnext_xycjs_3__mf8"></td>
                        <td id="td74" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[4].cj8" maxlength="10" value="50" id="dkpmnext_xycjs_4__cj8">/<input type="text" name="xycjs[4].mf8" maxlength="10" value="1000" id="dkpmnext_xycjs_4__mf8"></td>
                        <td id="td75" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[5].cj8" maxlength="10" value="50" id="dkpmnext_xycjs_5__cj8">/<input type="text" name="xycjs[5].mf8" maxlength="10" value="1000" id="dkpmnext_xycjs_5__mf8"></td>
                        <td id="td76" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[6].cj8" maxlength="10" value="无" id="dkpmnext_xycjs_6__cj8">/<input type="text" name="xycjs[6].mf8" maxlength="10" value="无" id="dkpmnext_xycjs_6__mf8"></td>
                        <td id="td77" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[7].cj8" maxlength="10" value="无" id="dkpmnext_xycjs_7__cj8">/<input type="text" name="xycjs[7].mf8" maxlength="10" value="无" id="dkpmnext_xycjs_7__mf8"></td>
                    </tr>
                    <tr>
                        <td>生物</td>
                        <td id="td80" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].cj9" maxlength="10" value="无" id="dkpmnext_xycjs_0__cj9">/<input type="text" name="xycjs[0].mf9" maxlength="10" value="无" id="dkpmnext_xycjs_0__mf9"></td>
                        <td id="td81" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].cj9" maxlength="10" value="无" id="dkpmnext_xycjs_1__cj9">/<input type="text" name="xycjs[1].mf9" maxlength="10" value="无" id="dkpmnext_xycjs_1__mf9"></td>
                        <td id="td82" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].cj9" maxlength="10" value="50" id="dkpmnext_xycjs_2__cj9">/<input type="text" name="xycjs[2].mf9" maxlength="10" value="1000" id="dkpmnext_xycjs_2__mf9"></td>
                        <td id="td83" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[3].cj9" maxlength="10" value="50" id="dkpmnext_xycjs_3__cj9">/<input type="text" name="xycjs[3].mf9" maxlength="10" value="1000" id="dkpmnext_xycjs_3__mf9"></td>
                        <td id="td84" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[4].cj9" maxlength="10" value="50" id="dkpmnext_xycjs_4__cj9">/<input type="text" name="xycjs[4].mf9" maxlength="10" value="1000" id="dkpmnext_xycjs_4__mf9"></td>
                        <td id="td85" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[5].cj9" maxlength="10" value="50" id="dkpmnext_xycjs_5__cj9">/<input type="text" name="xycjs[5].mf9" maxlength="10" value="1000" id="dkpmnext_xycjs_5__mf9"></td>
                        <td id="td86" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[6].cj9" maxlength="10" value="无" id="dkpmnext_xycjs_6__cj9">/<input type="text" name="xycjs[6].mf9" maxlength="10" value="无" id="dkpmnext_xycjs_6__mf9"></td>
                        <td id="td87" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[7].cj9" maxlength="10" value="无" id="dkpmnext_xycjs_7__cj9">/<input type="text" name="xycjs[7].mf9" maxlength="10" value="无" id="dkpmnext_xycjs_7__mf9"></td>
                    </tr>
                    <tr>
                        <td>文科综合</td>
                        <td id="td140" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].cj14" maxlength="10" value="无" id="dkpmnext_xycjs_0__cj14">/<input type="text" name="xycjs[0].mf14" maxlength="10" value="无" id="dkpmnext_xycjs_0__mf14"></td>
                        <td id="td141" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].cj14" maxlength="10" value="无" id="dkpmnext_xycjs_1__cj14">/<input type="text" name="xycjs[1].mf14" maxlength="10" value="无" id="dkpmnext_xycjs_1__mf14"></td>
                        <td id="td142" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].cj14" maxlength="10" value="无" id="dkpmnext_xycjs_2__cj14">/<input type="text" name="xycjs[2].mf14" maxlength="10" value="无" id="dkpmnext_xycjs_2__mf14"></td>
                        <td id="td143" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[3].cj14" maxlength="10" value="无" id="dkpmnext_xycjs_3__cj14">/<input type="text" name="xycjs[3].mf14" maxlength="10" value="无" id="dkpmnext_xycjs_3__mf14"></td>
                        <td id="td144" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[4].cj14" maxlength="10" value="无" id="dkpmnext_xycjs_4__cj14">/<input type="text" name="xycjs[4].mf14" maxlength="10" value="无" id="dkpmnext_xycjs_4__mf14"></td>
                        <td id="td145" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[5].cj14" maxlength="10" value="无" id="dkpmnext_xycjs_5__cj14">/<input type="text" name="xycjs[5].mf14" maxlength="10" value="无" id="dkpmnext_xycjs_5__mf14"></td>
                        <td id="td146" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[6].cj14" maxlength="10" value="无" id="dkpmnext_xycjs_6__cj14">/<input type="text" name="xycjs[6].mf14" maxlength="10" value="无" id="dkpmnext_xycjs_6__mf14"></td>
                        <td id="td147" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[7].cj14" maxlength="10" value="无" id="dkpmnext_xycjs_7__cj14">/<input type="text" name="xycjs[7].mf14" maxlength="10" value="无" id="dkpmnext_xycjs_7__mf14"></td>
                    </tr>
                    <tr>
                        <td>理科综合</td>
                        <td id="td150" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[0].cj15" maxlength="10" value="无" id="dkpmnext_xycjs_0__cj15">/<input type="text" name="xycjs[0].mf15" maxlength="10" value="无" id="dkpmnext_xycjs_0__mf15"></td>
                        <td id="td151" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[1].cj15" maxlength="10" value="无" id="dkpmnext_xycjs_1__cj15">/<input type="text" name="xycjs[1].mf15" maxlength="10" value="无" id="dkpmnext_xycjs_1__mf15"></td>
                        <td id="td152" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[2].cj15" maxlength="10" value="无" id="dkpmnext_xycjs_2__cj15">/<input type="text" name="xycjs[2].mf15" maxlength="10" value="无" id="dkpmnext_xycjs_2__mf15"></td>
                        <td id="td153" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[3].cj15" maxlength="10" value="无" id="dkpmnext_xycjs_3__cj15">/<input type="text" name="xycjs[3].mf15" maxlength="10" value="无" id="dkpmnext_xycjs_3__mf15"></td>
                        <td id="td154" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[4].cj15" maxlength="10" value="无" id="dkpmnext_xycjs_4__cj15">/<input type="text" name="xycjs[4].mf15" maxlength="10" value="无" id="dkpmnext_xycjs_4__mf15"></td>
                        <td id="td155" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[5].cj15" maxlength="10" value="200" id="dkpmnext_xycjs_5__cj15">/<input type="text" name="xycjs[5].mf15" maxlength="10" value="600" id="dkpmnext_xycjs_5__mf15"></td>
                        <td id="td156" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[6].cj15" maxlength="10" value="无" id="dkpmnext_xycjs_6__cj15">/<input type="text" name="xycjs[6].mf15" maxlength="10" value="无" id="dkpmnext_xycjs_6__mf15"></td>
                        <td id="td157" style="background-color: rgb(255, 204, 204);"><input type="text" name="xycjs[7].cj15" maxlength="10" value="无" id="dkpmnext_xycjs_7__cj15">/<input type="text" name="xycjs[7].mf15" maxlength="10" value="无" id="dkpmnext_xycjs_7__mf15"></td>
                    </tr>
                    </tbody>
                </table>
                <p class="text_center m_top10" id="errortip"></p>
                <div class="text_center m_top10">
                    <!--<input type="submit" id="dkpmnext_0" value="下一步" class="ui-button ui-button-lceladon">-->
                    <Button type="primary" class="ui-button ui-button-lceladon">下一步</Button>
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