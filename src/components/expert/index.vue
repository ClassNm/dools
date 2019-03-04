<template>
    <div>
        <div class="ui-box">
            <div class="ui-box-head">
                <h3 class="ui-box-head-title">添加推荐专家</h3>
                <span class="ui-box-head-text">（<span class="redstar">*</span> 为必填项）
                </span>
            </div>
            <div class="ui-box-container">
                <form id="form_step" name="form_step" action="/zzbm/stu/tjr/savegr.action" method="post" novalidate="novalidate">
                    <input name="zid" value="" id="form_step_zid" type="hidden">
                    <input name="data.type" value="EXPERT" id="form_step_data_type" type="hidden">
                    <input name="data.id" value="" id="form_step_data_id" type="hidden">
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>推荐人姓名：</strong></label>
                        <input name="data.xm" maxlength="30" id="form_step_data_xm" class="ui-input" type="text">
                        <p class="ui-form-explain">添加后将不允许修改</p>
                    </div>
                    <div class="ui-form-item">
                        <!--<label for="" class="ui-label"><span class="ui-form-required">*</span><strong>所在地：</strong></label> <select id="slist" name="slist" onchange="initXjsList('slist', 'clist', 'xlist');">-->
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>所在地：</strong></label> <select id="slist" name="slist">
                        <option value="" selected="selected">请选择</option>
                        <option value="110000">北京市</option><option value="120000">天津市</option><option value="130000">河北省</option><option value="140000">山西省</option><option value="150000">内蒙古自治区</option><option value="210000">辽宁省</option><option value="220000">吉林省</option><option value="230000">黑龙江省</option><option value="310000">上海市</option><option value="320000">江苏省</option><option value="330000">浙江省</option><option value="340000">安徽省</option><option value="350000">福建省</option><option value="360000">江西省</option><option value="370000">山东省</option><option value="410000">河南省</option><option value="420000">湖北省</option><option value="430000">湖南省</option><option value="440000">广东省</option><option value="450000">广西壮族自治区</option><option value="460000">海南省</option><option value="500000">重庆市</option><option value="510000">四川省</option><option value="520000">贵州省</option><option value="530000">云南省</option><option value="540000">西藏自治区</option><option value="610000">陕西省</option><option value="620000">甘肃省</option><option value="630000">青海省</option><option value="640000">宁夏回族自治区</option><option value="650000">新疆维吾尔自治区</option><option value="710000">台湾省</option><option value="810000">香港特别行政区</option><option value="820000">澳门特别行政区</option><option value="990000">其他</option></select> <select id="clist" name="clist" onchange="initDqList('slist', 'clist', 'xlist');">
                        <option value="" selected="selected">请选择</option>
                    </select> <select id="xlist" name="data.szdm">
                        <option value="" selected="selected">请选择</option>
                    </select>
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>所在单位：</strong></label>
                        <input name="data.dwmc" maxlength="50" id="form_step_data_dwmc" class="ui-input" type="text">
                        <p class="ui-form-explain">添加后将不允许修改</p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>职称：</strong></label>
                        <input name="data.zc" maxlength="30" id="form_step_data_zc" class="ui-input" type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>职务：</strong></label>
                        <input name="data.zw" maxlength="30" id="form_step_data_zw" class="ui-input" type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item" title="该手机号用于提醒推荐人填写推荐信，仅限一个，请如实填写">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>手机号码：</strong></label>
                        <input name="data.mobile" maxlength="30" id="form_step_data_mobile" class="ui-input" type="text">
                        <p class="ui-form-explain">该手机号用于提醒推荐人填写推荐信，仅限一个，请如实填写</p>
                    </div>
                    <div class="ui-form-item" title="该邮箱用于提醒推荐人填写推荐信，仅限一个，请如实填写">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>邮箱：</strong></label>
                        <input name="data.email" maxlength="50" id="form_step_data_email" class="ui-input" type="text">
                        <p class="ui-form-explain">该邮箱用于提醒推荐人填写推荐信，仅限一个，请如实填写</p>
                    </div>
                    <div class="ui-form-item m_top10">
                        <!--<input id="form_step_0" value="保存" class="ui-button ui-button-lorange add" type="submit">-->
                        <Button type="warning">保存</Button>
                        &nbsp;&nbsp;
                        <!--<input class="ui-button ui-button-lceladon" value="取消" onclick="javascript:history.go(-1);" type="button">-->
                        <Button type="primary" onclick="javascript:history.go(-1);" >取消</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .ui-breadcrumb {
        font-size: 0;
        padding: 0;
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
    .ui-box-head .ui-box-head-text {
        margin-left: 10px;
        color: gray;
        float: left;
    }
    .ui-box-head-text .redstar {
        color: #F00;
        font-size: 14px;
        font-family: SimSun;
    }
    .ui-box-container {
        background: #fff;
        padding: 10px 0;
    }
    .ui-form-item {
        padding: 0 5px 6px 150px;
        zoom: 1;
    }
    .ui-label {
        float: left;
        width: 180px;
        margin-left: -190px;
        padding-top: 5px;
        text-align: right;
        font-size: 14px;
    }
    .ui-form-required {
        color: red;
        font-family: SimSun;
        font-size: 14px;
        margin-right: 6px;
    }
    .ui-form-item .ui-input {
        color: #595959;
        width: 176px;
        margin-top: 4px;
        vertical-align: middle;
        *vertical-align: -5px;
    }
    .ui-form-explain {
        margin: 0;
        padding: 8px 0 0;
        font-size: 12px;
        color: #999;
    }
    .ui-form-item select {
        vertical-align: middle;
        margin: 4px 0 0;
        border: 1px solid #c1c1c1;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        padding: 3px;
    }
    option {
        font-weight: normal;
        display: block;
        white-space: pre;
        min-height: 1.2em;
        padding: 0px 2px 1px;
    }
    .m_top10 {
        margin-top: 10px;
    }
    .ui-form-item input {
        vertical-align: middle;
        height: 32px;
        width: 38px;
    }
    .ui-button-lorange {
        height: 32px;
    }
    .ui-button-lorange, .ui-button-morange, .ui-button-sorange {
        color: #fff;
        border: 1px solid #d66500;
        background-color: #f57403;
    }
</style>