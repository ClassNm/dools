<template>
    <div class="referrer">
        <div class="ui-breadcrumbs">
            <ul class="ui-breadcrumb ">
                <li><a href="https://gaokao.chsi.com.cn/zzbm/stu/">首页</a></li>
                <li><span class="icon"><i title="单箭头右" class="iconfont"></i></span></li>
                <li class="active">填报个人信息</li>
                <li><span class="icon"><i title="单箭头右" class="iconfont"></i></span></li>
                <li class="active">推荐人/推荐单位</li>
            </ul>
        </div>
        <div class="ui-box">
            <div class="ui-box-head">
                <h3 class="ui-box-head-title">推荐人/推荐单位</h3>
            </div>
            <div class="ui-box-container">
                <div class="jbxxadd m_top10 m_bottom10">
                    <router-link to="/expert">
                        <a href="javascript" class="tjr" for="tjr">+ 添加推荐专家</a>
                    </router-link>
                    &nbsp;或者&nbsp;
                    <router-link to="/secondarySchool">
                        <a href="javascript" class="tjr" for="tjdw">+ 添加推荐中学</a>
                    </router-link>
                    &nbsp;或者&nbsp;
                    <router-link to="/organization">
                        <a href="javascript" class="tjr" for="tjdw">+ 添加推荐社会团体</a>
                    </router-link>
                </div>
                尚未添加推荐人信息。
            </div>
        </div>
        <!--<keep-alive>-->
            <router-view></router-view>
        <!--</keep-alive>-->
    </div>
</template>

<style scoped>
    .referrer{
        padding: 10px;
        background: white;
    }
    .ui-breadcrumb {
        font-size: 0;
        padding: 0;
        width: 280px;
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
         /*box-shadow: 0 1px 2px #dadad8;*/
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




</style>