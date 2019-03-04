<template>
    <div class="box">
        <div class="ui-breadcrumbs">
            <ul class="ui-breadcrumb ">
                <li>
                    <router-link to="/home">
                        <a href="">首页</a>
                    </router-link>
                </li>
                <li><span class="icon"><i title="单箭头右" class="iconfont"></i></span></li>
                <li class="active">确认证件号码</li>
            </ul>
        </div>
        <div class="name">
            <p class="section">
                请确认以下信息是<b>考生本人</b>的真实证件号码和姓名,证件号码或姓名错误会导致<font color="red">报名无效</font>，请仔细核对。确认后证件号码将<font color="red">无法修改</font>。<br>
                如果姓名有误，请修改 <a href="" target="_blank">注册信息</a>中的姓名。<br>
                如果证件号码有误，请用正确的证件号码重新<a href="">注册账号</a>,注册成功后用新账号重新报名。
            </p>
            <div class="student">
                <div class="studentName">
                    <strong style="font-weight: bold; display: inline-block">
                        考生证件号码：
                    </strong>
                    <p
                            style="
                              font-size:20px;
                              font-weight:700;
                              color:#06c;
                              margin-top:0;
                              margin-bottom:6px;
                              display: inline-block;
                                "

                    >
                        123456789111111
                    </p>
                </div>
                <div class="resolve">
                    <p style="margin: 0;
                            color: #4D4D4D;
                             position: relative;
                            font-size: 12px;
                            zoom: 1;">
                        <i class="ui-tiptext-icon iconfont" title="提示">
                            
                        </i>
                        您的证件号码已确认无误。
                    </p>
                </div>
            </div>
            <div class="monicker">
                <strong class="title">
                    考生姓名：
                </strong>
                <p class="alias">
                    格学教育
                </p>
            </div>
        </div>
        <div class="verify">
            <input class="verifyOne" disabled="disabled" value="已确认" type="button">
        </div>
    </div>
</template>

<style scoped>
    .ui-breadcrumb {
        font-size: 0px;
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
    .iconfont {
        font-family: "iconfont";
        font-size: 16px;
        font-style: normal;
    }
    .ui-breadcrumb li.active {
        color: #999;
    }
    li {
        white-space: normal;
    }
    .box{
        padding: 8px;
        /*width: 790px;*/
        height: 424px;
        text-align: left;
        background: white;
    }
    ul li{
        list-style: none;
        white-space: normal;
        padding: 8px 4px;
    }
    .page{
        padding: 0;
        width: 790px;
        height: 40px;
    }
    .page .home{
        color: #333;
        display: inline-block;
        font-size: 14px;
        float: left;
    }
    .page .papers{
        color: #999;
        display: inline-block;
        font-size: 14px;
        float: left;
    }
    .page .arrows{
        display: inline-block;
        float: left;
    }
    .state .affirm{
        color: #656565;
        font-size: 18px;
        font-weight: 700;
        float: left;
        display: inline;
        margin-left: 4px;
        padding: 0;

    }
    .state .affirm .font{
        color: #656565;
        font-size: 18px;
        font-weight: 700;
        float: left;
        display: inline;
        margin: 0;
        padding: 0;
    }
    .state .affirm .underline{
        margin-left: 10px;
        color: gray;
        float: left;
    }
    .name{
        background: #fff;
        padding: 30px 0;
        width: 786px;
        /*height: 238px;*/
    }
    .name .section{
        display: block;
        padding:10px 0 0 78px;
        font-size:14px;
        line-height: 23px;
        color: #333;
        width: 718px;
        height: 98px;
        float: left;
    }
    .student{
        padding: 0 5px 6px 50px;
        zoom: 1;
        float: left;
        /*display: block;*/
        margin-right: 100px;
    }
    .student .studentName{
        display: block;
        /*float: left;*/
        /*width: 180px;*/
        padding-top: 5px;
        text-align: right;
        font-size: 14px;
        margin: 10px;
    }
    .student .resolve{
        margin-left:110px;
        word-wrap: break-word;
        word-break: break-all;
        border: 1px solid #b2e2ea;
        background: #e5f2f8;
        padding: 8px 12px;
        position: relative;
        zoom: 1
    }
    .monicker{
        /*display: block;*/
        /*margin-left: 200px;*/
        padding: 0 5px 6px 0;
        zoom: 1;
        width: 100px;
        height: 100px;
    }
    .monicker .title{
        display: inline-block;
        float: left;
        width: 124px;
        margin-left: 27px;
        padding-top: 15px;
        text-align: right;
        font-size: 14px;
    }
    .monicker .alias{
        font-size:20px;
        font-weight:700;
        color:#06c;
        margin:-25px 0 0 155px;
        float: left;
        width: 100px;
        height: 36px;
    }
    .verify{
        float: left;
        display: block;
        padding: 0 5px 6px 172px;
        zoom: 1;
        margin-top: 10px;
        width: 600px;
        height: 32px;
    }
    .verify .verifyOne{
        width: 81px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        font-weight: 700;
        border-radius: 2px;
        text-align: center;
        padding: 0 20px;
        color: #999;
        border: 0;
        background: #cacccd;
    }
</style>
