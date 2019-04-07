<template>
    <div class="picture">
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
                <li class="active">个人照片</li>
            </ul>
        </div>
        <div class="ui-box">
            <div class="ui-box-head">
                <h3 class="ui-box-head-title">个人照片</h3>
                <span class="ui-box-head-text">（<span class="redstar">*</span> 为必填项）</span> </div>
            <div class="ui-box-container">
                <form action="uploadPhoto.action"
                      method="post"
                      enctype="multipart/form-data"
                      id="form_step"
                      novalidate="novalidate">
                    <div class="ui-form-item">
                        <label for="" class="ui-label" style="padding-right: 0;margin-left: -80px;"><span class="ui-form-required">
                            *
                        </span>
                            <strong>
                                个人照片：
                            </strong>
                        </label>
                        <div class="ui-form-text">
                            <img :src="uploadImg.url" alt="" width="120px" height="160px" >
                            <h4 class="Hoo">请选择照片</h4>
                        </div>
                        <p style="padding:8px 0; text-align: left;margin-left: 117px;">
                            {{condition}}：<br>
                            {{conditionOne}}<br>
                            {{conditionTwo}}<br>
                            {{conditionThree}}<br>
                            {{conditionFour}}</p>
                        <div class="file_box">
                            <Button type="text" class="ui-button ui-button-mwhite">选择照片</Button>
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
                        <p class="ui-form-explain ui-tiptext ui-tiptext-error" id="myphoto-tips"></p>
                    </div>
                    <div class="ui-form-item" @click="submit" style="margin-right:344px">
                        <Button type="primary">上传照片</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { photo } from '../../vuex/actions.js'
import { read } from 'fs';
// import wrap from './loa'
    export default {
        // components:{
        //     // wrap
        // }
        data () {
            return {
                uploadImg: {},
                id:1,
                // isShow:true
                // 条件上传照片
                condition:"必须上传本人近期一寸正面免冠彩色头像照片(参照居民身份证照片样式)",
                conditionOne : "1.格式 jpg 或 jpeg ，大小20K－500K",
                conditionTwo : "2.照片背景为单色(白色、蓝色、红色均可)，人像清晰，神态自然，无明显畸变",
                conditionThree : "3.上传的照片文件名称不要包含空格等特殊字符",
                conditionFour : "4.非jpg 或 jpeg格式的文件修改后缀上传、图片本身因素等有可能引起图片解析失败。可尝试使用图片编辑工具将该图另存为jpg 或 jpeg格式然后上传"
            };
        },
        methods: {
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
                    // reader.onloadend = () => {
                    //     // Image_base64 = this.result.split(",")[1];
                    //     // artive_image = Image_base64;
                    //     this.uploadImg = {
                    //         Image_base64 : this.result.split(",")[1],
                    //         artive_image : Image_base64,
                    //         url:reader.artive_image,
                    //         file
                    //     }
                    // }
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
                    name : this.uploadImg.url,
                    // id : this.id
                }
                let bb = JSON.stringify(data)
                console.log(bb);
                // photo(data);
            }


            // 实验state的初始值
            // onChange(){
            //     this.isShow = false
            // }
        },

    }
</script>

<style scoped>
    .Hoo{
        color: red;
    }
    .picture{
        /*width: 900px;*/
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
        /**display: inline;*/
        /**zoom: 1;*/
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
    .ui-breadcrumb li.active {
        color: #999;
    }
    .ui-breadcrumb li {
        padding: 8px 4px;
    }
    .ui-box {
        zoom: 1;
        font-size: 12px;
        margin: 0;
        padding: 0;
        border-bottom: 0;
    }
    .ui-box-head {
        border-bottom: 1px solid #ccc;
        position: relative;
        padding-bottom: 5px;
        height: 26px;
        line-height: 26px;
        zoom: 1;
        margin-left: 10px;
    }
    .ui-box-head .ui-box-head-title {
        color: #656565;
        font-size: 18px;
        font-weight: 700;
        float: left;
        /* display: inline; */
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
        /*font-family: SimSun;*/
    }
    .ui-box-container {
        background: #fff;
        padding: 10px 0;
    }
    .ui-label {
        float: left;
        width: 180px;
        /*margin-left: -165px;*/
        padding-top: 5px;
        padding-right: 94px;
        text-align: right;
        font-size: 14px;
    }
    .ui-form-required {
        color: red;
        /*font-family: SimSun;*/
        font-size: 14px;
        margin-right: 6px;
    }
    .ui-form-text {
        font-size: 14px;
        word-wrap: break-word;
        word-break: break-all;
        display: inline-block;
        margin-top: 5px;
        zoom: 1;
        margin-right: 447px;
    }
    img {
        border: 0;
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    .file_box {
        position: relative;
        margin-right: 350px;
    }
    .file_box .textfield {
        height: 27px;
        border: 1px solid #CDCDCD;
        width: 180px;
        vertical-align: -1px;
    }
    .ui-form-item input {
        vertical-align: middle;
    }
    .ui-button-mwhite {
        height: 29px;
        padding: 0 10px;
        display: block;
        margin: 0 auto;
    }
    .file_box .file {
        position: absolute;
        top: 0;
        left: 0;
        height: 29px;
        /* filter: alpha(opacity:0); */
        opacity: 0;
        width: 265px;
        cursor:pointer
    }
    .ui-tiptext {
        margin: 0;
        color: #4D4D4D;
        position: relative;
        font-size: 12px;
        zoom: 1;
    }
    .ui-form-item {
        padding: 0 5px 6px 100px;
        zoom: 1;
    }
    .ui-form-item input {
        vertical-align: middle;
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


















    .demo-upload-list {
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
        margin-right: 4px;
    }

    .demo-upload-list img {
        width: 100%;
        height: 100%;
    }

    .demo-upload-list-cover {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .6);
    }

    .demo-upload-list:hover .demo-upload-list-cover {
        display: block;
    }

    .demo-upload-list-cover i {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }

    .ivu-icon {
        line-height: 58px;
    }
</style>