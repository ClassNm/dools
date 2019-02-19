<template>
    <div class="picture">
        <div class="ui-breadcrumbs">
            <ul class="ui-breadcrumb ">
                <li> <a href="https://gaokao.chsi.com.cn/zzbm/stu/">首页</a> </li>
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
                <form action="uploadPhoto.action" method="post" enctype="multipart/form-data" id="form_step" novalidate="novalidate">
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>个人照片：</strong></label>
                        <p class="ui-form-text">
                            <img id="imgPhoto" src="../../assets/1111.jpg" width="120" height="160">
                        </p>
                        <p style="padding:8px 0px;">必须上传本人近期一寸正面免冠彩色头像照片(参照居民身份证照片样式)：<br>
                            1.格式 jpg 或 jpeg ，大小20K－500K<br>
                            2.照片背景为单色(白色、蓝色、红色均可)，人像清晰，神态自然，无明显畸变<br>
                            3.上传的照片文件名称不要包含空格等特殊字符<br>
                            4.非jpg 或 jpeg格式的文件修改后缀上传、图片本身因素等有可能引起图片解析失败。可尝试使用图片编辑工具将该图另存为jpg 或 jpeg格式然后上传</p>
                        <div class="file_box">
                            <input name="textfield" id="textfield" class="textfield" readonly="readonly" type="text">
                            <input class="ui-button ui-button-mwhite" value="选择照片" type="button">
                            <input name="photo" value="" id="myphoto" class="file" type="file">
                        </div>
                        <p class="ui-form-explain ui-tiptext ui-tiptext-error" id="myphoto-tips"></p>
                    </div>
                    <div class="ui-form-item">
                        <input class="ui-button ui-button-lceladon m_top10" value="上传照片" type="submit">
                    </div>
                    <!--<wrap></wrap>-->
                </form>
            </div>
        </div>

        <div>
            <div class="demo-upload-list" v-for="item in uploadList">
                ![](item.url)
                <div class="demo-upload-list-cover">
                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                </div>
            </div>
            <Upload ref="upload"
                    :show-upload-list="false"
                    :format="['jpg','jpeg','png']"
                    :max-size="2048"
                    :before-upload="handleBeforeUpload"
                    :on-format-error="handleFormatError"
                    :on-exceeded-size="handleMaxSize"
                    type="drag"
                    action="//jsonplaceholder.typicode.com/posts/"
                    style="display: inline-block;width:58px;">
                <div style="width: 58px;height:58px;line-height: 58px;">
                    <Icon type="camera" size="20"></Icon>
                </div>
            </Upload>
        </div>

        <!--<wrap></wrap>-->
    </div>
</template>

<script>
    // import wrap from './loa'
    export default {
        // name:{
        //
        // },
        components:{
            // wrap
        },
        data(){
            return {
                uploadList: []
            }
        },
        methods: {
            // data(){
            //     return {
            //         uploadList: []
            //     }
            // },
            handleBeforeUpload(file) {
                // 创建一个 FileReader 对象
                let reader = new FileReader()
                // readAsDataURL 方法用于读取指定 Blob 或 File 的内容
                // 当读操作完成，readyState 变为 DONE，loadend 被触发，此时 result 属性包含数据：URL（以 base64 编码的字符串表示文件的数据）
                // 读取文件作为 URL 可访问地址
                reader.readAsDataURL(file)

                const _this = this
                reader.onloadend = function (e) {
                    file.url = reader.result
                    _this.uploadList.push(file)
                }
            },
            handleRemove(file) {
                this.uploadList.splice(this.uploadList.indexOf(file), 1)
            },
            handleFormatError(file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
                })
            },
            handleMaxSize(file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
                })
            }
        }
    }
</script>

<style scoped>
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
        margin-right: 203px;
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
    }
    .file_box .file {
        position: absolute;
        top: 0;
        left: 0;
        height: 29px;
        filter: alpha(opacity:0);
        opacity: 0;
        width: 265px;
        cursor: pointer;
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