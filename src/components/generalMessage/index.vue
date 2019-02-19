<template>
    <div class="generalMessage">
        <div class="ui-breadcrumbs">
            <ul class="ui-breadcrumb ">
                <li> <a href="https://gaokao.chsi.com.cn/zzbm/stu/">首页</a> </li>
                <li><span class="icon"><i title="单箭头右" class="iconfont"></i></span></li>
                <li class="active">填报个人信息</li>
                <li><span class="icon"><i title="单箭头右" class="iconfont"></i></span></li>
                <li class="active">综合信息</li>
            </ul>
        </div>
        <div class="ui-box">
            <div class="ui-box-head">
                <h3 class="ui-box-head-title">综合信息</h3>
            </div>
            <div class="ui-box-container">
                <div class="txt-explain m_bottom10">
                    1、请如实填写在高中期间参与过的社会活动、获奖记录或专利，如果无任何社会活动、获奖记录或专利请跳过此步。<br>
                    2、“高中期间参与过的社会活动”可填写高中阶段参与的科学研究、创新实践、文学创作、志愿服务、社团活动、学校或班团学生工作等。<br>
                    3、“高中期间的获奖记录”可填写高中阶段获得的省级（含）以上学科竞赛奖励、校级（含）以上个人荣誉、本人所具备的文艺或体育特长等。<br>
                    4、“高中期间获得的专利”可填写高中阶段获得的由国家颁发的专利证书信息。<br>
                </div>
                <div class="jbxxadd m_bottom10">
                    <router-link to="/newly">
                        <a href="javascript">+ 新增高中期间参与过的社会活动</a>
                    </router-link>
                    &nbsp;或者&nbsp;
                    <router-link to="/publicActivity">
                        <a href="javascript">+ 新增高中期间的获奖记录</a>
                    </router-link>
                    &nbsp;或者&nbsp;
                    <router-link to="/patent">
                        <a href="javascript">+ 新增高中期间获得的专利</a>
                    </router-link>
                </div>
                <div class="text_center">
                    <form action="ignoreZhxx.action" method="post">
                        <input value="下一步" class="ui-button ui-button-lceladon" type="submit">
                    </form>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>



<style scoped>
    .generalMessage{
        padding: 10px;
        background: white;
    }
    .ui-breadcrumb {
        font-size: 0;
        padding: 0;
        width: 250px;
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
        /*padding: 0;*/
        padding-left: 10px;
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
    .jbxxadd {
        display: block;
        padding: 0 20px;
        text-align: center;
        border: 1px dashed #CCC;
        background: #F6F6F6;
        color: #888;
        font-size: 12px;
        line-height: 40px;
        cursor: pointer;
    }
    .m_bottom10 {
        margin-bottom: 10px;
    }
    .jbxxadd a, .jbxxadd a:link, .jbxxadd a:visited {
        color: #09f;
    }
    .ui-box a {
        color: #09f;
    }
    a {
        color: #333;
        text-decoration: none;
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