<template>
    <div>
        <div class="ui-box">
            <div class="ui-box-head">
                <h3 class="ui-box-head-title">新增社会活动</h3>
                <span class="ui-box-head-text">（<span class="redstar">*</span> 为必填项，<span class="redstar" style="font-size:12px">注意：请填写高中期间的社会活动</span>）</span>
            </div>
            <div class="ui-tiptext-container ui-tiptext-container-message" style="margin-top:10px;">
                <p class="ui-tiptext ui-tiptext-message">
                    <i title="提示" class="ui-tiptext-icon iconfont"></i>
                    <span style="color:#c30;">注意：</span>{{notice}}。
                </p>
            </div>
            <div class="ui-box-container">
                <input name="gzStartTime" value="20150901" id="gzStartTime" type="hidden">
                <form id="commitEditForm"
                      name="commitEditForm"
                      action="/zzbm/stu/info/commitShhd.action"
                      method="post"
                      enctype="multipart/form-data"
                      novalidate="novalidate">
                    <input name="zid" value="" id="commitEditForm_zid" type="hidden">
                    <input name="xxId" value="" id="commitEditForm_xxId" type="hidden">
                    <input id="UpToken" name="upToken" style="display: none;" value="ad0fcef5b7d9a3c7368ef03d9ffa38ec">
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>活动名称：</strong></label>
                        <input name="zhxxVO.name" id="zhxx_hdmc" maxlength="50" class="ui-input" type="text" v-model="name">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>担任角色：</strong></label>
                        <input name="zhxxVO.role" id="zhxx_drjs" maxlength="30" class="ui-input" type="text" v-model="role">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>活动时间：</strong></label>
                        <input name="zhxxVO.time" id="zhxx_hdsj" maxlength="10" 
                        class="ui-input date_time" type="text"
                        v-model="old"
                        > 至
                        <input name="zhxxVO.endTime" id="zhxx_hdsj2" maxlength="10" 
                        class="ui-input date_time" type="text"
                        v-model="newly"
                        >
                        <div class="td_title" style="display:none;position: absolute;z-index: 10000;border-radius: 2px;opacity: 0.9;background: #000;padding:5px 10px;color:#fff;">
                            <span style="border-color: transparent transparent #000;border-style: dashed dashed solid;border-width: 6px;font-size: 0;height: 0;left: 14px;position: absolute;top: -12px;width: 0;"></span>
                            <p style="color:#fff;"><i class="ui-tiptext-icon iconfont" style="color:#fff;padding-right: 5px"></i>当前活动时间不在高中时期</p>
                            <p style="color:#97DCFC;padding-left: 20px;cursor: pointer;" class="closetag">继续使用该时间</p>
                        </div>
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>组织单位：</strong></label>
                        <input name="zhxxVO.org" id="zhxx_zzdw" maxlength="100" class="ui-input" type="text" v-model="unit">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>证明材料：</strong></label>
                        <!-- <div id="showBox" class="ui-form-text" style="width:610px;"> -->
                            <!-- <div
                                    class="uploadnullbox"
                                    id="uploadnullbox">
                                <i class="iconfont" title="添加-方"></i>
                                <br>添加图片
                                <input class="file" id="upZmcl" value="" name="zmcl" type="file">
                            </div>
                        </div> -->
                        <img :src="uploadImg.url" alt="" width="120px" height="160px" title="点击">
                        <div class="file_box">
                            <Upload
                                    ref="upload"
                                    :show-upload-list="false"
                                    :before-upload="handleUpload"
                                    type="drag"
                                    action=""
                                    style="display: inline-block;width:58px;"
                            >
                                <div style="width: 58px;height:58px;line-height: 58px;">
                                    <Icon type="ios-camera" size="20"></Icon>
                                </div>
                            </Upload>
                        </div>
                        <p class="ui-form-explain uploadeddel" style="padding-top:0;">上传图片格式为 jpg 或 jpeg；大小为20K-1M</p>
                    </div>
                    <div class="ui-form-item m_top10">
                        <!--<input id="saveBtn" class="ui-button ui-button-lorange" value="新增" type="submit">-->
                        <Button type="warning" @click="submit">新增</Button>
                        &nbsp;&nbsp;
                        <Button type="primary" onclick="javascript:history.go(-1);">取消</Button>
                        <!--<input class="ui-button ui-button-lceladon" value="取消" onclick="javascript:history.go(-1);" type="button">-->
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { activity } from '../../vuex/actions.js'
export default {
    data(){
        return{
            uploadImg : {},
            notice:"本页面对于证明材料的删除，上传操作，均在点击“新增”或“保存”按钮之后才会生效",
        //    活动名称
            name:"",
            // 担任角色
            role:"",
            // 活动时间左
            old:"",
            // 活动时间右
            newly:"",
            // 组织单位
            unit:"",
        }
    },
    methods:{
        handleFormatError(file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg、jpeg 或 png 的图片文件。',
                });
        },
        handleMaxSize(file) {
            this.$Notice.warning({
                title: '超出文件大小限制',
                desc: '文件 ' + file.name + ' 太大，不能超过 2M。',
            });
        },
        handleUpload(file) {
                if (file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png') {
                    this.handleFormatError(file);
                } else if (file.size > 2 * 1024 * 1024) {
                    this.handleMaxSize(file);
                } else {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                        this.uploadImg = {
                            url: reader.result,
                            file,
                        };
                    };
                }
                return false;
        },
        submit(){
            let data = {
                activityName : this.name,
                activityRole : this.role,
                activityTimelower : this.newly,
                activityTimeup : this.old,
                organizationalUnit : this.unit,
                // proofMaterial : this. 证明材料
            }
            console.log(data);
            // activity(data);
        }
    }
}
</script>


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
        /* filter: alpha(opacity:0); */
        opacity: 0;
        width:90px;
        cursor:pointer;
    }
    .ui-form-text input {
        margin-right: 2px;
    }
    .ui-form-item {
        padding: 0 5px 6px 180px;
        zoom: 1;
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