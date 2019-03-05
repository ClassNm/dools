<template>
    <div>
        <div class="ui-box">
            <headerT></headerT>
            <div class="ui-box-container ui-box-zhiy">
                <!--<form id="add" name="add" action="https://gaokao.chsi.com.cn/zzbm/stu/zhiy/add.action" method="POST">-->
                <form id="add" name="add" method="POST">
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>招生类型：</strong></label>
                        <p class="ui-form-text" style="margin-right: 345px">
                            普通自主招生
                        </p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>学校：</strong></label>
                        <p class="ui-form-text" style="margin-right: 345px">
                            北京科技大学
                            <input type="hidden" name="zhiY.orgId" value="476734158">
                        </p>
                        <input type="hidden" name="org" value="476734158" id="add_org">
                        <div id="orgInfos"></div>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>报名类型：</strong></label>
                        <p class="ui-form-text" style="margin-right: 372px">自主招生</p>
                        <div class="ui-tiptext-container ui-tiptext-container-wait" style="margin-top:6px;">
                            <div class="ui-tiptext-arrow ui-tiptext-arrowup" style="left:14px;">
                                <em>◆</em>
                                <span>◆</span>
                            </div>
                            <p class="ui-tiptext ui-tiptext-wait">
                                <i class="ui-tiptext-icon iconfont" title="提示"></i>
                                报名时间：2018-03-20 19:40:00 至 2018-04-01 00:00:00；北京科技大学最多允许填报 2 个报名类型；“自主招生”类型要求考生的报考学校总数不能超过5个；允许填报的专业类别总数至少 1 个，最多 2 个；允许填报专业总数最少 6 个，最多 6 个；允许每个专业类别下可选专业数最少 0 个，最多 6 个。
                            </p>
                        </div>
                        <input type="hidden" name="zhiY.lxmc" value="自主招生">
                        <input type="hidden" name="zhiY.lxdm" value="01">
                        <input type="hidden" name="lxdm" value="01" id="add_lxdm">
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>您具备的报名条件：</strong></label>
                        <ul class="ui-form-text">
                            <li style="color:#c06800;">
                                可填报专业依赖于报名条件，请先选择报名条件再选择报考专业
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" value="高中阶段获得全国奥林匹克竞赛（数学、物理、化学、生物、信息学）省级赛区二等奖（含）以上奖励者；" name="bmtjs">
                                    高中阶段获得全国奥林匹克竞赛（数学、物理、化学、生物、信息学）省级赛区二等奖（含）以上奖励者；
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" value="高中阶段在全国青少年科技创新大赛（含全国青少年生物和环境科学实践活动）、“明天小小科学家”奖励活动或全国中小学电脑制作活动中获得省级一等奖（含）以上奖励者；" name="bmtjs" onclick="">
                                    高中阶段在全国青少年科技创新大赛（含全国青少年生物和环境科学实践活动）、“明天小小科学家”奖励活动或全国中小学电脑制作活动中获得省级一等奖（含）以上奖励者；
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" value="对我校某类学科有浓厚兴趣，并具有较强学科特长或较强创新实践能力，且能提供相关证明材料。符合该报名条件的考生，须配寄中学校长、社会团体或专家（正教授或相当专业技术职务）的实名推荐材料，推荐内容要能够证明该考生的学科特长和专业培养潜质，推荐人或推荐单位须对其所推荐材料真实性负责。" name="bmtjs">
                                    对我校某类学科有浓厚兴趣，并具有较强学科特长或较强创新实践能力，且能提供相关证明材料。符合该报名条件的考生，须配寄中学校长、社会团体或专家（正教授或相当专业技术职务）的实名推荐材料，推荐内容要能够证明该考生的学科特长和专业培养潜质，推荐人或推荐单位须对其所推荐材料真实性负责。
                                </label>
                            </li>
                            <div class="ui-tiptext-container ui-tiptext-container-wait" style="margin-top:6px;">
                                <!--<div class="ui-tiptext-arrow ui-tiptext-arrowup" style="left:14px;">-->
                                    <!--<em>◆</em>-->
                                    <!--<span>◆</span>-->
                                <!--</div>-->
                                <p class="ui-tiptext ui-tiptext-wait">
                                    <i class="ui-tiptext-icon iconfont" title="报名条件说明"></i>
                                    请选择1个报名条件
                                </p>
                            </div>
                        </ul>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>专业：</strong></label>
                        <p class="ui-form-text" style="margin-bottom:5px;color:#c06800;margin-right: 88px;">
                            选定报考专业之后，可通过右侧的箭头调整专业的次序。
                        </p>
                        <div id="zhiyzymlDIV" class="zhiyzyml">
                        </div>
                        <div id="allZymls">
                            <ul class="zhiyzy">
                                <li class="zhiyzyt">理工二类</li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="cakv1nz4g1rl4gnu" onclick="" bmtjs="">
                                        冶金工程
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="mgnsdv5se550dv2z" onclick="" bmtjs="">
                                        矿业类
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="zs6fuje1jtpw2nx4" onclick="" bmtjs="">
                                        安全工程
                                    </label>
                                </li>
                            </ul>
                            <ul class="zhiyzy">
                                <li class="zhiyzyt">理工一类</li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="sdrk4sfvrmsgf0pp" onclick="" bmtjs="">
                                        材料科学与工程
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="5h49mm89x8blrx5d" onclick="" bmtjs="">
                                        机械类
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="48xth0zyyo3cs5b7" onclick="" bmtjs="">
                                        计算机类
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="81z2o4t7dd5u5ojy" onclick="" bmtjs="">
                                        通信工程
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="xqom8mq1jpmorkmf" onclick="" bmtjs="">
                                        自动化类
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="upu3e0p6nhn60c5y" onclick="" bmtjs="">
                                        土木类
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="whw9oavvcjiekdkc" onclick="" bmtjs="">
                                        能源动力类
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="oqieo8c1v0ujx0x0" onclick="" bmtjs="">
                                        环境科学与工程类
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="jxmg11fgbv8wmkgg" onclick="" bmtjs="">
                                        数学类
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="axni75f6ohywf19s" onclick="" bmtjs="">
                                        应用物理学
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="hjduvhet4kuuf5ay" onclick="" bmtjs="">

                                        应用化学
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="0iox18182eybh1xs" onclick="" bmtjs="">
                                        生物技术
                                    </label>
                                </li>
                                <!-- 北京邮电大学 || 厦门大学特殊处理 -->
                                <li>
                                    <label>
                                        <input type="checkbox" id="uc5axdlettrkwwmn" onclick="" bmtjs="">
                                        管理科学与工程类
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>是否服从调剂：</strong></label>
                        <p class="ui-form-text" style="margin-right: 370px">
                            <label><input type="radio" name="zhiY.fctj" value="true">是</label>
                            <label><input type="radio" name="zhiY.fctj" value="false" checked="checked">否</label>
                        </p>
                    </div>
                    <div class="ui-form-item" id="errorMessageBox" style="display:none">
                    </div>
                    <!-- 点击跳转  附加材料页面 -->
                    <router-link to="/additional">
                        <div class="ui-form-item" style="width: 391px;padding:0 5px 6px 0">
                            <!--<input type="submit" id="add_0" value="下一步" class="ui-button ui-button-lceladon">-->
                            <Button type="primary">下一步</Button>
                        </div>
                    </router-link>
                </form>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import headerT from '../common/headerT'
    export default {
        components:{
            headerT
        },
        computed:{
            // flag(){
            //     // console.log(this.$route.path);
            //     let pa = this.$route.path;
            //     // console.log('bb');
            //     if (pa == '/additional'){
            //         console.log('附加材料');
            //         return false
            //     }else {
            //         return true
            //     }
            // }
        }
    }
</script>

<style scoped>
    .ui-box-zhiy {
        border: 1px solid #ddd;
        border-top-color: rgb(221, 221, 221);
        border-top-style: solid;
        border-top-width: 1px;
        border-top: none;
        padding: 15px 10px;
    }
    .ui-box-container {
        background: #fff;
        padding: 10px 0;
    }
    .ui-form-item {
        width: 605px;
        padding: 0 5px 6px 160px;
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
    .ui-label {
        text-align: right;
        font-size: 14px;
    }
    .ui-form-text {
        list-style: none;
        font-size: 14px;
        word-wrap: break-word;
        word-break: break-all;
        display: inline-block;
        margin-top: 5px;
        text-align: left;
    }
    .ui-tiptext-container-wait {
        border: 1px solid #fae3cc;
        background: #FFF9D9;
    }
    .ui-tiptext-container {
        padding: 8px 12px;
        position: relative;
        zoom: 1;
    }
    .ui-tiptext-arrowup {
        left: 32px;
        top: -7px;
    }
    .ui-tiptext-container-wait .ui-tiptext-arrow em {
        color: #fae3cc;
    }
    .ui-tiptext-arrowup em {
        top: -1px;
    }
    .ui-tiptext-container-wait .ui-tiptext-arrow span {
        color: #FFF9D9;
    }
    .ui-tiptext {
        margin: 0;
        color: #4D4D4D;
        position: relative;
        font-size: 12px;
        zoom: 1;
    }
    .ui-tiptext-wait .ui-tiptext-icon {
        color: #d1a066;
    }
    .ui-tiptext .iconfont {
        font-size: 1.33em;
        line-height: 1em;
        text-shadow: 0 1px 0 #fff;
        position: relative;
        top: 2px;
        margin-right: 2px;
    }
    .ui-form-item li {
        word-wrap: break-word;
        word-break: normal;
    }
    .ui-form-text label {
        margin-right: 6px;
    }
    .ui-form-text input {
        margin-right: 2px;
    }
    .ui-form-item input {
        vertical-align: middle;
    }
    .ui-tiptext-container-wait {
        border: 1px solid #fae3cc;
        background: #FFF9D9;
    }
    .ui-tiptext-container {
        padding: 8px 12px;
        position: relative;
        zoom: 1;
    }
    .ui-tiptext-arrowup {
        left: 32px;
        top: -7px;
    }
    .ui-tiptext {
        margin: 0;
        color: #4D4D4D;
        position: relative;
        font-size: 12px;
        zoom: 1;
    }
    .ui-tiptext-wait .ui-tiptext-icon {
        color: #d1a066;
    }
    .ui-tiptext .iconfont {
        font-size: 1.33em;
        line-height: 1em;
        text-shadow: 0 1px 0 #fff;
        position: relative;
        top: 2px;
        margin-right: 2px;
    }
    .zhiyzyml {
        padding: 0 0 10px 0;
    }
    .zhiyzyml {
        position: relative;
        padding: 0 20px 10px 0;
    }
    .zhiyzy {
        width: 608px;
        border: 1px solid #ccc;
        padding-bottom: 6px;
        margin-top: -1px;
        overflow: hidden;
        text-align: left;
    }
    .zhiyzy li.zhiyzyt {
        float: none;
        display: block;
        width: 596px;
        height: 32px;
        margin-bottom: 6px;
        line-height: 32px;
        font-weight: 700;
        background: #f9f9f9;
        border-bottom: 1px solid #ccc;
    }
    .ui-form-item li {
        word-wrap: break-word;
        word-break: normal;
    }
    .zhiyzy li {
        float: left;
        display: inline;
        width: 290px;
        padding: 2px 0 2px 12px;
    }
    .ui-form-required {
        color: red;
        font-family: SimSun;
        font-size: 14px;
        margin-right: 6px;
    }
    .ui-label {
        text-align: right;
        font-size: 14px;
    }
    .ui-form-item input {
        vertical-align: middle;
    }
    .ui-button-lceladon {
         height: 32px;
     }

    /* orange 字体颜色*/
    .zystep li.stepon {
        /*background: url(../../images/bm/icon-prog-on.png) no-repeat center 0;*/
        color: #f60;
        font-weight: 700;
    }


</style>