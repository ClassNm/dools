<template>
    <div>
        <div class="ui-box">
            <div class="ui-box-head">
                <h3 class="ui-box-head-title">新增专利</h3>
                <span class="ui-box-head-text">（<span class="redstar">*</span> 为必填项，<span class="redstar" style="font-size:12px">注意：请填写高中期间获得的专利</span>）</span>
            </div>
            <div class="ui-tiptext-container ui-tiptext-container-message" style="margin-top:10px;">
                <p class="ui-tiptext ui-tiptext-message">
                    <i title="提示" class="ui-tiptext-icon iconfont"></i>
                    <span style="color:#c30;">注意：</span>本页面对于证明材料的删除，上传操作，均在点击“新增”或“保存”按钮之后才会生效。
                </p>
            </div>
            <div class="ui-box-container">
                <input name="gzStartTime" value="20150901" id="gzStartTime" type="hidden">
                <form id="commitEditForm"
                      name="commitEditForm"
                      action="/zzbm/stu/info/commitFmzl.action"
                      method="post" enctype="multipart/form-data" novalidate="novalidate">
                    <input name="zid" value="" id="commitEditForm_zid" type="hidden">
                    <input name="xxId" value="" id="commitEditForm_xxId" type="hidden">
                    <input id="UpToken" name="upToken" style="display: none;" value="34c59e6a186461e45d49d1f036712641">
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>专利名称：</strong></label>
                        <input name="zhxxVO.name" id="zhxx_zlmc" maxlength="50" class="ui-input" type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>专利类型：</strong></label>
                        <select name="zhxxVO.info" id="zhxx_zllx">
                            <option value="" selected="selected">请选择</option>
                            <option value="01">发明</option>
                            <option value="02">实用新型</option>
                            <option value="03">外观设计</option>
                        </select>
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item" title="多人用逗号隔开，如：张三,李四,王五">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>发明人/设计人：</strong></label>
                        <input name="zhxxVO.role" id="zhxx_fmr" maxlength="60" class="ui-input" type="text">
                        <p class="ui-form-explain">多人用逗号隔开，如：张三,李四,王五</p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>专利申请日：</strong></label>
                        <input name="zhxxVO.time" id="zhxx_zlsqr" maxlength="10" onfocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',maxDate:'#F{$dp.$D(\'zhxx_sqggr\')||\'%y-%M-%d\'}'})" class="ui-input date_time" type="text">
                        <div class="td_title" style="display:none;position: absolute;z-index: 10000;border-radius: 2px;opacity: 0.9;background: #000;padding:5px 10px;color:#fff;">
                            <span style="border-color: transparent transparent #000;border-style: dashed dashed solid;border-width: 6px;font-size: 0;height: 0;left: 14px;position: absolute;top: -12px;width: 0;"></span>
                            <p style="color:#fff;"><i class="ui-tiptext-icon iconfont" style="color:#fff;padding-right: 5px"></i>当前专利申请日不在高中时期</p>
                            <p style="color:#97DCFC;padding-left: 20px;cursor: pointer;" class="closetag">继续使用该时间</p>
                        </div>
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>授权公告日：</strong></label>
                        <input name="zhxxVO.endTime" id="zhxx_sqggr" maxlength="10" onfocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'zhxx_zlsqr\')}'})" class="ui-input date_time" type="text">
                        <div class="td_title" style="display:none;position: absolute;z-index: 10000;border-radius: 2px;opacity: 0.9;background: #000;padding:5px 10px;color:#fff;">
                            <span style="border-color: transparent transparent #000;border-style: dashed dashed solid;border-width: 6px;font-size: 0;height: 0;left: 14px;position: absolute;top: -12px;width: 0;"></span>
                            <p style="color:#fff;"><i class="ui-tiptext-icon iconfont" style="color:#fff;padding-right: 5px"></i>当前授权公告日不在高中时期</p>
                            <p style="color:#97DCFC;padding-left: 20px;cursor: pointer;" class="closetag">继续使用该时间</p>
                        </div>
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>专利权人：</strong></label>
                        <input name="zhxxVO.org" id="zhxx_zlqr" maxlength="50" class="ui-input" type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>专利号：</strong></label>
                        <input name="zhxxVO.level" id="zhxx_zlh" maxlength="30" class="ui-input" type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>证明材料：</strong></label>
                        <div id="showBox" class="ui-form-text" style="width:610px;">
                            <div class="uploadnullbox" id="uploadnullbox"><i class="iconfont" title="添加-方"></i><br>添加图片<input class="file" id="upZmcl" value="" name="zmcl" type="file"></div>
                        </div>
                        <p class="ui-form-explain uploadeddel" style="padding-top:0;">上传图片格式为 jpg 或 jpeg；大小为20K-1M</p>
                    </div>
                    <div class="ui-form-item m_top10">
                        <Button type="warning">新增</Button>
                        &nbsp;&nbsp;
                        <Button type="primary" onclick="javascript:history.go(-1);">取消</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    .ui-box-container {
        background: #fff;
        padding: 10px 0;
    }
    .ui-form-item {
        padding: 0 5px 6px 180px;
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
    .ui-form-explain {
        margin: 0;
        padding: 8px 0 0;
        font-size: 12px;
        color: #999;
    }
    element.style {
        display: none;
        position: absolute;
        z-index: 10000;
        border-radius: 2px;
        opacity: 0.9;
        background: #000;
        padding: 5px 10px;
        color: #fff;
    }
    element.style {
        border-color: transparent transparent #000;
        border-style: dashed dashed solid;
        border-width: 6px;
        font-size: 0;
        height: 0;
        left: 14px;
        position: absolute;
        top: -12px;
        width: 0;
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
    .iconfont {
        font-family: "iconfont";
        font-size: 16px;
        font-style: normal;
    }
    .ui-form-text {
        font-size: 14px;
        margin-left: 222px;
        word-wrap: break-word;
        word-break: break-all;
        display: inline-block;
        margin-top: 5px;
        *display: inline;
        *zoom: 1;
    }
    .uploadnullbox {
        position: relative;
        float: left;
        display: inline;
        margin-right: 10px;
        margin-bottom: 10px;
        width: 104px;
        height: 130px;
        padding-top: 30px;
        border: 1px dashed #ccc;
        background: #f9f9f9;
        text-align: center;
        color: #aaa;
        line-height: 24px;
        font-size: 14px;
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
    .uploadnullbox .file {
        position: absolute;
        top: 0;
        left: 0px;
        height: 120px;
        filter: alpha(opacity:0);
        opacity: 0;
        width: 90px;
        cursor: pointer;
    }
    .ui-form-text input {
        margin-right: 2px;
    }
    .ui-form-item input {
        vertical-align: middle;
    }
    .m_top10 {
        margin-top: 10px;
    }
    .ui-form-item input {
        vertical-align: middle;
        width: 50px;
        height: 30px;
    }
    .ui-button-lorange {
        height: 32px;
    }
    .ui-button-lorange, .ui-button-morange, .ui-button-sorange {
        color: #fff;
        border: 1px solid #d66500;
        background-color: #f57403;
    }
    .ui-button-lceladon, .ui-button-mceladon, .ui-button-sceladon {
        color: #fff;
        text-shadow: 0 -1px 1px rgba(0,0,0,0.25);
        border: 1px solid #4498ae;
        background-color: #50aac2;
    }



</style>