<template>
    <div class="mockExam">
        <div class="ui-breadcrumbs">
            <ul class="ui-breadcrumb ">
                <li> <a href="https://gaokao.chsi.com.cn/zzbm/stu/">首页</a> </li>
                <li><span class="icon"><i title="单箭头右" class="iconfont"></i></span></li>
                <li class="active">填报个人信息</li>
                <li><span class="icon"><i title="单箭头右" class="iconfont"></i></span></li>
                <li class="active">模考成绩</li>
            </ul>
        </div>
        <div class="ui-box">
            <div class="ui-box-head">
                <h3 class="ui-box-head-title">模考成绩</h3>
            </div>
            <div class="ui-box-container">
                <div class="txt-explain m_bottom10">不同高校对模考成绩的要求不同，请如实尽量填写。</div>
                <form id="commitMkcjxx" name="commitMkcjxx" action="/zzbm/stu/info/commitMkcjxx.action" method="post">
                    <input name="zid" value="" id="commitMkcjxx_zid" type="hidden">
                    <table class="ui-table cjxxtable">
                        <thead>
                        <tr>
                            <th>科目\学期</th>
                            <th style="text-align:center;">高三第一次模考<br> 成绩/满分
                            </th>
                            <th style="text-align:center;">高三第二次模考<br> 成绩/满分
                            </th>
                            <th style="text-align:center;">高三第三次模考<br> 成绩/满分
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>语文</td>
                            <td style="text-align:center;" id="td00"><input name="xycjs[0].cj1" maxlength="10" value="110" id="commitMkcjxx_xycjs_0__cj1" type="text">/<input name="xycjs[0].mf1" maxlength="10" value="150" id="commitMkcjxx_xycjs_0__mf1" type="text"></td>
                            <td style="text-align:center;" id="td01"><input name="xycjs[1].cj1" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj1" type="text">/<input name="xycjs[1].mf1" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf1" type="text"></td>
                            <td style="text-align:center;" id="td02"><input name="xycjs[2].cj1" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj1" type="text">/<input name="xycjs[2].mf1" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf1" type="text"></td>
                        </tr>
                        <tr>
                            <td>数学</td>
                            <td style="text-align:center;" id="td10"><input name="xycjs[0].cj2" maxlength="10" value="130" id="commitMkcjxx_xycjs_0__cj2" type="text">/<input name="xycjs[0].mf2" maxlength="10" value="150" id="commitMkcjxx_xycjs_0__mf2" type="text"></td>
                            <td style="text-align:center;" id="td11"><input name="xycjs[1].cj2" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj2" type="text">/<input name="xycjs[1].mf2" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf2" type="text"></td>
                            <td style="text-align:center;" id="td12"><input name="xycjs[2].cj2" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj2" type="text">/<input name="xycjs[2].mf2" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf2" type="text"></td>
                        </tr>
                        <tr>
                            <td>外语</td>
                            <td style="text-align:center;" id="td20"><input name="xycjs[0].cj3" maxlength="10" value="112" id="commitMkcjxx_xycjs_0__cj3" type="text">/<input name="xycjs[0].mf3" maxlength="10" value="150" id="commitMkcjxx_xycjs_0__mf3" type="text"></td>
                            <td style="text-align:center;" id="td21"><input name="xycjs[1].cj3" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj3" type="text">/<input name="xycjs[1].mf3" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf3" type="text"></td>
                            <td style="text-align:center;" id="td22"><input name="xycjs[2].cj3" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj3" type="text">/<input name="xycjs[2].mf3" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf3" type="text"></td>
                        </tr>
                        <tr>
                            <td>政治</td>
                            <td style="text-align:center;" id="td30"><input name="xycjs[0].cj4" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__cj4" type="text">/<input name="xycjs[0].mf4" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__mf4" type="text"></td>
                            <td style="text-align:center;" id="td31"><input name="xycjs[1].cj4" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj4" type="text">/<input name="xycjs[1].mf4" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf4" type="text"></td>
                            <td style="text-align:center;" id="td32"><input name="xycjs[2].cj4" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj4" type="text">/<input name="xycjs[2].mf4" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf4" type="text"></td>
                        </tr>
                        <tr>
                            <td>历史</td>
                            <td style="text-align:center;" id="td40"><input name="xycjs[0].cj5" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__cj5" type="text">/<input name="xycjs[0].mf5" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__mf5" type="text"></td>
                            <td style="text-align:center;" id="td41"><input name="xycjs[1].cj5" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj5" type="text">/<input name="xycjs[1].mf5" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf5" type="text"></td>
                            <td style="text-align:center;" id="td42"><input name="xycjs[2].cj5" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj5" type="text">/<input name="xycjs[2].mf5" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf5" type="text"></td>
                        </tr>
                        <tr>
                            <td>地理</td>
                            <td style="text-align:center;" id="td50"><input name="xycjs[0].cj6" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__cj6" type="text">/<input name="xycjs[0].mf6" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__mf6" type="text"></td>
                            <td style="text-align:center;" id="td51"><input name="xycjs[1].cj6" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj6" type="text">/<input name="xycjs[1].mf6" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf6" type="text"></td>
                            <td style="text-align:center;" id="td52"><input name="xycjs[2].cj6" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj6" type="text">/<input name="xycjs[2].mf6" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf6" type="text"></td>
                        </tr>
                        <tr>
                            <td>物理</td>
                            <td style="text-align:center;" id="td60"><input name="xycjs[0].cj7" maxlength="10" value="90" id="commitMkcjxx_xycjs_0__cj7" type="text">/<input name="xycjs[0].mf7" maxlength="10" value="110" id="commitMkcjxx_xycjs_0__mf7" type="text"></td>
                            <td style="text-align:center;" id="td61"><input name="xycjs[1].cj7" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj7" type="text">/<input name="xycjs[1].mf7" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf7" type="text"></td>
                            <td style="text-align:center;" id="td62"><input name="xycjs[2].cj7" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj7" type="text">/<input name="xycjs[2].mf7" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf7" type="text"></td>
                        </tr>
                        <tr>
                            <td>化学</td>
                            <td style="text-align:center;" id="td70"><input name="xycjs[0].cj8" maxlength="10" value="90" id="commitMkcjxx_xycjs_0__cj8" type="text">/<input name="xycjs[0].mf8" maxlength="10" value="100" id="commitMkcjxx_xycjs_0__mf8" type="text"></td>
                            <td style="text-align:center;" id="td71"><input name="xycjs[1].cj8" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj8" type="text">/<input name="xycjs[1].mf8" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf8" type="text"></td>
                            <td style="text-align:center;" id="td72"><input name="xycjs[2].cj8" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj8" type="text">/<input name="xycjs[2].mf8" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf8" type="text"></td>
                        </tr>
                        <tr>
                            <td>生物</td>
                            <td style="text-align:center;" id="td80"><input name="xycjs[0].cj9" maxlength="10" value="80" id="commitMkcjxx_xycjs_0__cj9" type="text">/<input name="xycjs[0].mf9" maxlength="10" value="90" id="commitMkcjxx_xycjs_0__mf9" type="text"></td>
                            <td style="text-align:center;" id="td81"><input name="xycjs[1].cj9" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj9" type="text">/<input name="xycjs[1].mf9" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf9" type="text"></td>
                            <td style="text-align:center;" id="td82"><input name="xycjs[2].cj9" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj9" type="text">/<input name="xycjs[2].mf9" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf9" type="text"></td>
                        </tr>
                        <tr>
                            <td>美术</td>
                            <td style="text-align:center;" id="td90"><input name="xycjs[0].cj10" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__cj10" type="text">/<input name="xycjs[0].mf10" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__mf10" type="text"></td>
                            <td style="text-align:center;" id="td91"><input name="xycjs[1].cj10" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj10" type="text">/<input name="xycjs[1].mf10" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf10" type="text"></td>
                            <td style="text-align:center;" id="td92"><input name="xycjs[2].cj10" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj10" type="text">/<input name="xycjs[2].mf10" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf10" type="text"></td>
                        </tr>
                        <tr>
                            <td>体育</td>
                            <td style="text-align:center;" id="td100"><input name="xycjs[0].cj11" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__cj11" type="text">/<input name="xycjs[0].mf11" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__mf11" type="text"></td>
                            <td style="text-align:center;" id="td101"><input name="xycjs[1].cj11" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj11" type="text">/<input name="xycjs[1].mf11" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf11" type="text"></td>
                            <td style="text-align:center;" id="td102"><input name="xycjs[2].cj11" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj11" type="text">/<input name="xycjs[2].mf11" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf11" type="text"></td>
                        </tr>
                        <tr>
                            <td>音乐</td>
                            <td style="text-align:center;" id="td110"><input name="xycjs[0].cj12" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__cj12" type="text">/<input name="xycjs[0].mf12" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__mf12" type="text"></td>
                            <td style="text-align:center;" id="td111"><input name="xycjs[1].cj12" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj12" type="text">/<input name="xycjs[1].mf12" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf12" type="text"></td>
                            <td style="text-align:center;" id="td112"><input name="xycjs[2].cj12" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj12" type="text">/<input name="xycjs[2].mf12" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf12" type="text"></td>
                        </tr>
                        <tr>
                            <td>信息技术</td>
                            <td style="text-align:center;" id="td120"><input name="xycjs[0].cj13" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__cj13" type="text">/<input name="xycjs[0].mf13" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__mf13" type="text"></td>
                            <td style="text-align:center;" id="td121"><input name="xycjs[1].cj13" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj13" type="text">/<input name="xycjs[1].mf13" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf13" type="text"></td>
                            <td style="text-align:center;" id="td122"><input name="xycjs[2].cj13" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj13" type="text">/<input name="xycjs[2].mf13" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf13" type="text"></td>
                        </tr>
                        <tr>
                            <td>通用技术</td>
                            <td style="text-align:center;" id="td130"><input name="xycjs[0].cj16" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__cj16" type="text">/<input name="xycjs[0].mf16" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__mf16" type="text"></td>
                            <td style="text-align:center;" id="td131"><input name="xycjs[1].cj16" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj16" type="text">/<input name="xycjs[1].mf16" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf16" type="text"></td>
                            <td style="text-align:center;" id="td132"><input name="xycjs[2].cj16" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj16" type="text">/<input name="xycjs[2].mf16" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf16" type="text"></td>
                        </tr>
                        <tr>
                            <td>文科综合</td>
                            <td style="text-align:center;" id="td140"><input name="xycjs[0].cj14" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__cj14" type="text">/<input name="xycjs[0].mf14" maxlength="10" value="无" id="commitMkcjxx_xycjs_0__mf14" type="text"></td>
                            <td style="text-align:center;" id="td141"><input name="xycjs[1].cj14" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj14" type="text">/<input name="xycjs[1].mf14" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf14" type="text"></td>
                            <td style="text-align:center;" id="td142"><input name="xycjs[2].cj14" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj14" type="text">/<input name="xycjs[2].mf14" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf14" type="text"></td>
                        </tr>
                        <tr>
                            <td>理科综合</td>
                            <td style="text-align:center;" id="td150"><input name="xycjs[0].cj15" maxlength="10" value="200" id="commitMkcjxx_xycjs_0__cj15" type="text">/<input name="xycjs[0].mf15" maxlength="10" value="300" id="commitMkcjxx_xycjs_0__mf15" type="text"></td>
                            <td style="text-align:center;" id="td151"><input name="xycjs[1].cj15" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cj15" type="text">/<input name="xycjs[1].mf15" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mf15" type="text"></td>
                            <td style="text-align:center;" id="td152"><input name="xycjs[2].cj15" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cj15" type="text">/<input name="xycjs[2].mf15" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mf15" type="text"></td>
                        </tr>
                        <tr>
                            <td>总分</td>
                            <td id="tdzf0" style="text-align:center;"><input name="xycjs[0].cjzf" maxlength="10" value="612" id="commitMkcjxx_xycjs_0__cjzf" type="text">/<input name="xycjs[0].mfzf" maxlength="10" value="750" id="commitMkcjxx_xycjs_0__mfzf" type="text"></td>
                            <td id="tdzf1" style="text-align:center;"><input name="xycjs[1].cjzf" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__cjzf" type="text">/<input name="xycjs[1].mfzf" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__mfzf" type="text"></td>
                            <td id="tdzf2" style="text-align:center;"><input name="xycjs[2].cjzf" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__cjzf" type="text">/<input name="xycjs[2].mfzf" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__mfzf" type="text"></td>
                        </tr>
                        <tr>
                            <td>年级排名</td>
                            <td id="tdpm0" style="text-align:center;"><input name="xycjs[0].pm" maxlength="10" value="5" id="commitMkcjxx_xycjs_0__pm" class="big" type="text"></td>
                            <td id="tdpm1" style="text-align:center;"><input name="xycjs[1].pm" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__pm" class="big" type="text"></td>
                            <td id="tdpm2" style="text-align:center;"><input name="xycjs[2].pm" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__pm" class="big" type="text"></td>
                        </tr>
                        <tr>
                            <td>年级人数</td>
                            <td id="tdrs0" style="text-align:center;"><input name="xycjs[0].rs" maxlength="10" value="1000" id="commitMkcjxx_xycjs_0__rs" class="big" type="text"></td>
                            <td id="tdrs1" style="text-align:center;"><input name="xycjs[1].rs" maxlength="10" value="无" id="commitMkcjxx_xycjs_1__rs" class="big" type="text"></td>
                            <td id="tdrs2" style="text-align:center;"><input name="xycjs[2].rs" maxlength="10" value="无" id="commitMkcjxx_xycjs_2__rs" class="big" type="text"></td>
                        </tr>
                        </tbody>
                    </table>
                    <p class="text_center m_top10" id="errortip"></p>
                    <div class="text_center m_top10">
                        <input id="commitMkcjxx_0" value="保存" class="ui-button ui-button-lceladon" type="submit">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mockExam{
        padding: 10px;
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

    .ui-box {
        zoom: 1;
        font-size: 12px;
        margin: 0;
        padding-left: 5px;
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
        width: 100%;
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
    tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
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
        padding: 8px 9px 7px;
        border-bottom: 1px solid #d9d9d9;
    }
    table td, table th {
        word-wrap: break-word;
        word-break: break-all;
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
    tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }
    .cjxxtable input.big {
        width: 79px;
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