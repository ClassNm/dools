<template>
    <div class="School">
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
                <li class="active">中学信息</li>
            </ul>
        </div>
        <div class="ui-box">
            <div class="ui-box-head">
                <h3 class="ui-box-head-title">中学信息</h3>
                <span class="ui-box-head-text">（<span class="redstar">*</span> 为必填项）</span>
                <div class="txt-explain m_bottom10"></div>
            </div>
            <div class="ui-tiptext-container ui-tiptext-container-message" style="margin-top:10px;">
                <p class="ui-tiptext ui-tiptext-message" style="font-size:13px">
                    <i title="提示" class="ui-tiptext-icon iconfont"></i>
                    <span style="color:#c30;">注意：
                    </span>如果选不到自己的中学，请“
                    <a href="###">
                        <font color="blue">在线反馈</font> 
                    </a>”。
                </p>
            </div>
            <!-- 学籍所在中学： -->
            <div class="ui-box-container">
                <form action="updateXyxx.action" method="post" id="form_step" class="addsubmittip" novalidate="novalidate">
                    <!-- 学籍所在中学： -->
                    <div class="ui-form-item" style="border-bottom:1px dotted #ccc; margin-bottom:6px;">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">*</span>
                            <strong>学籍所在中学：</strong>
                        </label>
                        <!-- 地区 -->
                        <select id="xjxxszdSslist" class="ignoreselect"
                        v-model="item.SchoolRollID"
                        @change= "aaa(item.SchoolRollID)"
                        >
                            <option :selected="item.selected" 
                            :value="item.id" 
                            v-for="item in SchoolRoll" 
                            :key="item.id">{{item.name}}</option>                            
                        </select>
                        <!-- 市 -->
                        <select id="xjxxszdXjslist" class="ignoreselect"
                        v-model="item.SchoolRollIDTwo"
                        @change= "bbb(item.SchoolRollIDTwo)"
                        >
                            <option :selected="item.selected" 
                            :value="item.id" 
                            v-for="item in SchoolCityLevel" 
                            :key="item.id">{{item.name}}</option>
                            
                        </select>
                        <!-- 区 -->
                        <select id="xjxxszdDqlist" class="ignoreselect"
                        v-model="item.SchoolRollIDThree"
                        @change= "ccc(item.SchoolRollIDThree)"
                        >
                            <option :selected="item.selected" 
                            :value="item.name" 
                            v-for="item in SchoolCounty" 
                            :key="item.name">{{item.name}}</option>

                        </select>
                        <!-- 学校 -->
                        <select id="xjxxszdXxlist" name="xyxxVO.xjxxDm"
                        v-model="item.SchoolRollIDFour"
                        >
                            <option :selected="item.selected" 
                            :value="item.gxSchoolCode" 
                            v-for="item in SchoolCountyL" 
                            :key="item.gxSchoolCode">{{item.school}}</option>
                            
                        </select>
                        <div id="xjxxmc" style="display:none; margin-top:4px;">
                            <div style="float:left;padding-top:6px;">学校名称：</div>
                            <input name="xyxxVO.xjxxMc" maxlength="30" id="zxxx_xjxxmc" class="ui-input" type="text">
                        </div>
                        <p class="ui-form-explain"></p>
                    </div>
                    <!-- 当前就读中学： -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">*</span>
                            <strong>当前就读中学：</strong>
                        </label>
                        <!-- 学校 -->
                        <select id="xxszdSslist" class="ignoreselect"
                        v-model="item.SchoolRollTID"
                        @change= "aaa(item.SchoolRollTID)"
                        >
                            <option :selected="item.selected" 
                            :value="item.id" 
                            v-for="item in SchoolRollT" 
                            :key="item.id">{{item.name}}</option>
                            
                        </select>
                        <!-- 市 -->
                        <select id="xxszdXjslist" class="ignoreselect"
                        v-model="item.SchoolRollTIDTwo"
                        @change= "bbb(item.SchoolRollTIDTwo)"
                        >
                            <option :selected="item.selected" 
                            :value="item.id" 
                            v-for="item in SchoolCityLevelT" 
                            :key="item.id">{{item.name}}</option>
                            
                        </select>
                        <!-- 区 -->
                        <select id="xxszdDqlist" class="ignoreselect"
                         v-model="item.SchoolRollTIDThree"
                        @change= "ccc(item.SchoolRollTIDThree)"
                        >
                            <option :selected="item.selected" 
                            :value="item.name" 
                            v-for="item in SchoolCountyT" 
                            :key="item.name">{{item.name}}</option>
                            
                        </select>
                        <!-- 学校 -->
                        <select id="xxszdXxlist" name="xyxxVO.xxDm"
                         v-model="item.SchoolRollTIDFourL"
                        >
                            <option :selected="item.selected" 
                            :value="item.gxSchoolCode" 
                            v-for="item in SchoolCountyLT" 
                            :key="item.gxSchoolCode">{{item.school}}</option>
                            
                        </select>
                        <div id="xxmc" style="display:none; margin-top:4px;">
                            <div style="float:left;padding-top:6px;">学校名称：</div>
                            <input name="xyxxVO.xxMc" maxlength="30" id="zxxx_xxmc" class="ui-input" type="text">
                        </div>
                        <div class="ui-form-explain">
                            如果是复读或借读，请选择复读或借读的学校名称</div>
                        <p class="ui-form-explain"></p>
                    </div>
                    <!-- 中学级别： -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">*</span>
                            <strong>中学级别：</strong>
                        </label>
                        <select name="xyxxVO.xxjbDm" 
                        id="zxxx_zxjb" 
                        style="margin-right: 450px"
                        v-model="item.levelNumber"
                        >
                            <option 
                            :value="item.name" 
                            :selected="item.selected" 
                            v-for="item in level" 
                            :key="item.name">{{item.name}}</option>
                            
                        </select>
                        <p class="ui-form-explain"></p>
                    </div>
                    <!-- 所在班级： -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">
                                *
                            </span>
                            <strong>所在班级：</strong>
                        </label>
                        <input name="xyxxVO.bj" id="zxxx_bj" v-model="classT" maxlength="30" class="ui-input" type="text" style="margin-right: 360px">
                        <p class="ui-form-explain">
                        </p>
                    </div>
                    <!-- 担任职务： -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">*</span>
                            <strong>担任职务：</strong>
                        </label>
                        <input name="xyxxVO.zw" id="zxxx_zw" v-model="duty" maxlength="30" class="ui-input" type="text" style="margin-right: 360px">
                        <p class="ui-form-explain"></p>
                    </div>
                    <!-- 班主任姓名： -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">*</span>
                            <strong>班主任姓名：</strong>
                        </label>
                        <input name="xyxxVO.bzr" id="zxxx_bzr" v-model="teacher" maxlength="30" class="ui-input" type="text" style="margin-right: 360px">
                        <p class="ui-form-explain"></p>
                    </div>
                    <!-- 班主任联系电话： -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">*</span>
                            <strong>班主任联系电话：</strong>
                        </label>
                        <input name="xyxxVO.bzrLxdh" id="zxxx_bzrlxdh" v-model="teacherPhone" maxlength="30" class="ui-input" type="text" style="margin-right: 360px">
                        <p class="ui-form-explain"></p>
                    </div>
                    <!-- 中学详细地址： -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">*</span>
                            <strong>中学详细地址：</strong>
                        </label>
                        <!--<div style="padding-top:7px;" id="zxxxdz">河北省唐山市路北区&nbsp;</div>-->
                        <input name="xyxxVO.xxxxdz" 
                        id="zxxx_zxxxdz" 
                        v-model="schoolSite" 
                        maxlength="50" 
                        class="ui-input" 
                        style="width:200px;margin-left: 20px;margin-right: 360px" 
                        type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <!-- 中学邮政编码： -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>中学邮政编码：</strong></label>
                        <input name="xyxxVO.xxyzbm" id="zxxx_yzbm" 
                        v-model="postalCode" maxlength="6" class="ui-input" style="width:58px;margin-right: 480px" 
                        type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <!-- 主管教学领导姓名： -->
                    <div class="ui-form-item" title="如教务处主任、年级组长等">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>主管教学领导姓名：</strong></label>
                        <input name="xyxxVO.xxlxr" id="zxxx_jxld" 
                        v-model="lead" maxlength="30" class="ui-input" type="text" 
                        style="margin-right: 360px">
                        <p class="ui-form-explain" style="margin-right: 360px">如教务处主任、年级组长等</p>
                    </div>
                    <!-- 主管教学领导联系电话： -->
                    <div class="ui-form-item" style="border-bottom:1px dotted #ccc; margin-bottom:11px;">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">*</span>
                            <strong>主管教学领导联系电话：</strong>
                        </label>
                        <input name="xyxxVO.xxlxdh" id="zxxx_jxldlxdh" 
                        v-model="leadPhone" maxlength="30" class="ui-input" type="text" 
                        style="margin-right: 360px">
                        <p class="ui-form-explain"></p>
                    </div>
                    <!-- 教育经历： -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label">
                            <span class="ui-form-required">*</span>
                            <strong>教育经历：</strong>
                        </label>
                        <div class="jbxxjtbox">
                            <!-- 高中一年级： -->
                            <table width="100%" cellspacing="6" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td colspan="2"><strong>高中一年级：</strong></td>
                                </tr>
                                <!-- 时间 -->
                                <tr>
                                    <td width="68" align="right">自</td>
                                    <td><input name="xyjl1VO.start" id="jyjl1start" maxlength="10" 
                                    v-model="SchoolDataLeft" class="ui-input" type="text">
                                        至
                                        <input name="xyjl1VO.end" id="jyjl1end" maxlength="10" 
                                        v-model="SchoolDataRight" class="ui-input"  type="text">
                                    </td>
                                </tr>
                                <!-- 高一 教育经历 -->
                                <tr>
                                    <td align="right">就读于
                                    </td>
                                    <td>
                                        <!-- 教育经历 -->
                                        <select id="jl1Sslist" class="ignoreselect"
                                        v-model="item.educationONE"
                                        @change= "aaa(item.educationONE)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.id" 
                                              v-for="item in education" 
                                             :key="item.id">{{item.name}}</option>
                                            
                                        </select>
                                        <!-- 教育经历 市级 -->
                                        <select id="jl1Xjslist" class="ignoreselect"
                                        v-model="item.educationONEL"
                                        @change= "bbb(item.educationONEL)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.id" 
                                              v-for="item in educationCityLevel" 
                                             :key="item.id">{{item.name}}</option>
                                            
                                        </select>
                                        <!-- 教育经历 区县级别 -->
                                        <select id="jl1Dqlist" class="ignoreselect"
                                        v-model="item.educationONELL"
                                        @change= "ccc(item.educationONELL)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.name" 
                                              v-for="item in educationCounty" 
                                             :key="item.name">{{item.name}}</option>
                                           
                                        </select>
                                        <br>
                                    </td>
                                </tr>
                                <!-- 教育经历 学校 -->
                                <tr>
                                    <td align="right">&nbsp;</td>
                                    <td>
                                        <div>
                                            <select id="jl1Xxlist" name="xyjl1VO.xxDm"
                                            v-model="item.educationONELLL"
                                            >
                                                <option :selected="item.selected" 
                                             :value="item.gxSchoolCode" 
                                              v-for="item in educationCountyL" 
                                             :key="item.gxSchoolCode">{{item.school}}</option>
                                            </select>
                                        </div>
                                        <div id="jl1xxmc" style="display:none; float:left; padding-left:10px;">学校名称：
                                            <input name="xyjl1VO.xxMc" id="zxxx_jy_xxmc1" class="ui-input" type="text">
                                        </div>
                                    </td>
                                </tr>
                                <!-- 证明人 -->
                                <tr>
                                    <td align="right">证明人</td>
                                    <td>
                                        <input name="xyjl1VO.zmr" id="zxxx_jy_zmr1" v-model="references" maxlength="30" class="ui-input" type="text">
                                    </td>
                                </tr>
                                <!--高中二年级：  -->
                                <tr>
                                    <td colspan="2" style="height:30px; border-top:1px dotted #ccc;">
                                        <strong>高中二年级：</strong>
                                    </td>
                                </tr>
                                <!-- 时间 -->
                                <tr>
                                    <td align="right">自</td>
                                    <td>
                                        <input name="xyjl2VO.start" 
                                        id="jyjl2start" maxlength="10" 
                                        v-model="SchoolDataLeftTwo" class="ui-input" type="text">
                                        至
                                        <input name="xyjl2VO.end" 
                                        id="jyjl2end" maxlength="10" 
                                        v-model="SchoolDataRightTwo" class="ui-input" type="text">
                                    </td>
                                </tr>
                                <!-- 高二教育经历 -->
                                <tr>
                                    <td align="right">就读于</td>
                                    <td>
                                        <!-- 高二教育经历 -->
                                        <select id="jl2Sslist" class="ignoreselect"
                                        v-model="item.educationTw"
                                        @change= "aaa(item.educationTw)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.id" 
                                              v-for="item in educationTwo" 
                                             :key="item.id">{{item.name}}</option>
                                            
                                        </select>
                                         <!-- 教育经历 市级 -->
                                        <select id="jl2Xjslist" class="ignoreselect"
                                        v-model="item.educationTwoL"
                                        @change= "bbb(item.educationTwoL)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.id" 
                                              v-for="item in educationCityLevelTwo" 
                                             :key="item.id">{{item.name}}</option>
                                           
                                        </select>
                                         <!-- 教育经历  区县 -->
                                        <select id="jl2Dqlist" class="ignoreselect"
                                        v-model="item.educationTwoLL"
                                        @change= "ccc(item.educationTwoLL)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.name" 
                                              v-for="item in educationCountyTwo" 
                                             :key="item.name">{{item.name}}</option>
                                           
                                        </select>
                                    </td>
                                </tr>
                                <!-- 当前就读中学 学校 -->
                                <tr>
                                    <td align="right">&nbsp;</td>
                                    <td>
                                        <div>
                                            <select id="jl2Xxlist" name="xyjl2VO.xxDm"
                                            v-model="item.educationTwoLLL"
                                            >
                                                <option :selected="item.selected" 
                                             :value="item.gxSchoolCode" 
                                              v-for="item in educationCountyLTwo" 
                                             :key="item.gxSchoolCode">{{item.school}}</option>
                                               
                                            </select>
                                        </div>
                                        <div id="jl2xxmc" style="display:none; float:left; padding-left:10px;">学校名称：
                                            <input name="xyjl2VO.xxMc" id="zxxx_jy_xxmc2" class="ui-input" type="text">
                                        </div>
                                    </td>
                                </tr>
                                <!-- 证明人 -->
                                <tr>
                                    <td align="right">证明人</td>
                                    <td>
                                        <input name="xyjl2VO.zmr" id="zxxx_jy_zmr2" v-model="referencesTwo" maxlength="30" class="ui-input" type="text">
                                    </td>
                                </tr>
                                <!-- 高中三年级： -->
                                <tr>
                                    <td colspan="2" style="height:30px; border-top:1px dotted #ccc;">
                                        <strong>高中三年级：</strong>
                                    </td>
                                </tr>
                                <!-- 高中三年级：时间 -->
                                <tr>
                                    <td align="right">自</td>
                                    <td>
                                        <input name="xyjl3VO.start" id="jyjl3start" maxlength="10" v-model="SchoolDataLeftThree" class="ui-input" type="text">
                                        至
                                        <input name="xyjl3VO.end" id="jyjl3end" maxlength="10" v-model="SchoolDataRightThree" class="ui-input" type="text">
                                    </td>
                                </tr>
                                <!-- 高三 教育经历 -->
                                <tr>
                                    <td align="right">就读于</td>
                                    <td>
                                        <!--高三 教育经历  -->
                                        <select id="jl3Sslist" class="ignoreselect"
                                        v-model="item.educationThre"
                                        @change= "aaa(item.educationThre)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.id" 
                                              v-for="item in educationThree" 
                                             :key="item.id">{{item.name}}</option>
                                           
                                        </select>
                                        <!-- 教育经历 市级 -->
                                        <select id="jl3Xjslist" class="ignoreselect"
                                        v-model="item.educationThreeL"
                                        @change= "bbb(item.educationThreeL)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.id" 
                                              v-for="item in educationCityLevelThree" 
                                             :key="item.id">{{item.name}}</option>
                                    
                                        </select>
                                        <!-- 教育经历 区县级别 -->
                                        <select id="jl3Dqlist" class="ignoreselect"
                                         v-model="item.educationThreeLL"
                                        @change= "ccc(item.educationThreeLL)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.name" 
                                              v-for="item in educationCountyThree" 
                                             :key="item.name">{{item.name}}</option>
                                           
                                        </select>
                                    </td>
                                </tr>
                                <!-- // 教育经历 学校 -->
                                <tr>
                                    <td align="right">&nbsp;</td>
                                    <td>
                                        <div>
                                            <select id="jl3Xxlist" name="xyjl3VO.xxDm"
                                            v-model="item.educationThreeLLL"
                                            >
                                                <option :selected="item.selected" 
                                             :value="item.gxSchoolCode" 
                                              v-for="item in educationCountyLThree" 
                                             :key="item.gxSchoolCode">{{item.school}}</option>
                                               
                                            </select>
                                        </div>
                                        <div id="jl3xxmc" style="display:none; float:left; padding-left:10px;">学校名称：
                                            <input name="xyjl3VO.xxMc" id="zxxx_jy_xxmc3" class="ui-input" type="text">
                                        </div>
                                    </td>
                                </tr>
                                <!-- 高三证明人 -->
                                <tr>
                                    <td align="right">证明人</td>
                                    <td>
                                        <input name="xyjl3VO.zmr" id="zxxx_jy_zmr3" v-model="referencesThree" maxlength="30" class="ui-input" type="text">
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p class="ui-form-explain"></p>
                    </div>
                    <!-- 备选经历 -->
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><strong>备选教育经历：</strong></label>
                        <div class="ui-form-explain">如果高中某一年曾在两个中学受过教育，可在此进行补充说明。</div>
                        <div class="jbxxjtbox">
                            <table class="forclearbxjyjl" width="100%" cellspacing="6" cellpadding="0" border="0">
                                <tbody>
                                <!-- 备选经历 -->
                                <tr>
                                    <td colspan="3">
                                        <select name="bxjl1VO.bxjlDm" 
                                        class="ignoreselect"
                                        v-model="item.gradeOne"
                                        >
                                            <option 
                                            :value="item.name" 
                                            :selected="item.selected" 
                                            v-for="item in grade" 
                                            :key="item.name">
                                            {{item.name}}
                                            </option>
                                            
                                        </select>
                                    </td>
                                </tr>
                                <!-- 备选：时间 -->
                                <tr>
                                    <td width="68" align="right">自</td>
                                    <td colspan="2">
                                        <input name="bxjl1VO.start" id="bxjl1start" 
                                        maxlength="10" v-model="SchoolDataLeftThreeLL" 
                                        class="ui-input" type="text">
                                        至
                                        <input name="bxjl1VO.end" id="bxjl1end" 
                                        maxlength="10" v-model="SchoolDataRightThreeLL" 
                                        class="ui-input" type="text">
                                    </td>
                                </tr>
                                <!-- 就读于 -->
                                <tr>
                                    <td align="right">就读于
                                    </td>
                                    <td colspan="2">
                                        <!-- 备选 教育经历 -->
                                        <select id="bx1Sslist" class="ignoreselect" 
                                        v-model="item.alternative"
                                        @change= "aaa(item.alternative)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.id" 
                                              v-for="item in educationAlternative" 
                                             :key="item.id"
                                             >{{item.name}}</option>
                                        </select>
                                        <!-- 备选 市级 -->
                                        <select id="bx1Xjslist" 
                                        class="ignoreselect"
                                        v-model="item.alternativeL"
                                        @change= "bbb(item.alternativeL)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.id" 
                                              v-for="item in educationCityLevelAlternative" 
                                             :key="item.id">{{item.name}}</option>
                                        </select>
                                        <!-- 备选 区县级别 -->
                                        <select id="bx1Dqlist" class="ignoreselect"
                                        v-model="item.alternativeLL"
                                        @change="ccc(item.alternativeLL)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.name" 
                                              v-for="item in educationCountyAlternative" 
                                             :key="item.name">{{item.name}}</option>
                                        </select>
                                        <br>
                                    </td>
                                </tr>
                                <!-- 备选 学校 -->
                                <tr>
                                    <td align="right">&nbsp;</td>
                                    <td colspan="2">
                                        <div>
                                            <select id="bx1Xxlist" 
                                            name="bxjl1VO.xxDm"
                                            v-model="item.alternativeLLL"
                                            >
                                                <option :selected="item.selected" 
                                                    :value="item.gxSchoolCode" 
                                                    v-for="item in educationCountyLAlternative" 
                                                    :key="item.gxSchoolCode">{{item.school}}
                                                </option>
                                            </select>
                                        </div>
                                        <div id="bx1xxmc" style="display:none; float:left; padding-left:10px;">学校名称：
                                            <input name="bxjl1VO.xxMc" id="zxxx_jybx_xxmc1" class="ui-input" type="text">
                                        </div>
                                    </td>
                                </tr>
                                <!-- 证明人 -->
                                <tr>
                                    <td align="right">证明人</td>
                                    <td>
                                        <input name="bxjl1VO.zmr" id="zxxx_jybx_zmr1" 
                                        maxlength="30" v-model="referencesAlternative" 
                                        class="ui-input" type="text">
                                    </td>
                                    <td width="40">
                                        <a href="#" class="clearbxjyjl">
                                            清空
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <!-- 备选经历2 -->
                            <table class="forclearbxjyjl" style="border-top:1px dotted #ccc;" width="100%" cellspacing="6" cellpadding="0" border="0">
                                <tbody>
                                    <!-- 备选经历2  年级 -->
                                <tr>
                                    <td colspan="3" valign="bottom">
                                        <select name="bxjl2VO.bxjlDm" 
                                        class="ignoreselect"
                                        v-model="item.gradeTwoL"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.name" 
                                              v-for="item in gradeTwo" 
                                             :key="item.name">{{item.name}}</option>
                                        </select>
                                    </td>
                                </tr>
                                <!-- 备选2：时间 -->
                                <tr>
                                    <td width="68" align="right">自</td>
                                    <td colspan="2">
                                        <input name="bxjl2VO.start" id="bxjl2start" 
                                        maxlength="10" v-model="SchoolDataLeftThreeL"
                                        class="ui-input" type="text">
                                        至
                                        <input name="bxjl2VO.end" id="bxjl2end" 
                                        maxlength="10" v-model="SchoolDataRightThreeL" 
                                        class="ui-input" type="text">
                                    </td>
                                </tr>
                                <!-- 备选2 教育经历 -->
                                <tr>
                                    <td align="right">就读于</td>
                                    <td colspan="2">
                                        <!-- 备选2 教育经历 -->
                                        <select id="bx2Sslist" 
                                        class="ignoreselect"
                                        v-model="item.alternativeW"
                                        @change= "aaa(item.alternativeW)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.id" 
                                              v-for="item in educationAlternativeTwo" 
                                             :key="item.id">{{item.name}}</option>
                                        </select>
                                        <!-- 备选2 市级 -->
                                        <select id="bx2Xjslist" class="ignoreselect"
                                        v-model="item.alternativeWL"
                                         @change= "bbb(item.alternativeWL)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.id" 
                                              v-for="item in educationCityLevelAlternativeTwo" 
                                             :key="item.id">{{item.name}}</option>
                                        </select>
                                        <!-- 备选2 区县级别 -->
                                        <select id="bx2Dqlist" class="ignoreselect"
                                        v-model="item.alternativeWLL"
                                        @change="ccc(item.alternativeWLL)"
                                        >
                                            <option :selected="item.selected" 
                                             :value="item.name" 
                                              v-for="item in educationCountyAlternativeTwo" 
                                             :key="item.name">{{item.name}}</option>
                                        </select>
                                    </td>
                                </tr>
                                <!-- 备选2 学校 -->
                                <tr>
                                    <td align="right">&nbsp;</td>
                                    <td colspan="2">
                                        <div>
                                            <select id="bx2Xxlist" 
                                            name="bxjl2VO.xxDm"
                                            v-model="item.alternativeWLLL"
                                            >
                                                <option :selected="item.selected" 
                                             :value="item.gxSchoolCode" 
                                              v-for="item in educationCountyLAlternativeTwo" 
                                             :key="item.gxSchoolCode">{{item.school}}</option>
                                            </select>
                                        </div>
                                        <div id="bx2xxmc" style="display:none; float:left; padding-left:10px;">学校名称：
                                            <input name="bxjl2VO.xxMc" id="zxxx_bx_xxmc2" class="ui-input" type="text">
                                        </div>
                                    </td>
                                </tr>
                                <!-- 证明人 -->
                                <tr>
                                    <td align="right">证明人</td>
                                    <td>
                                        <input name="bxjl2VO.zmr" id="zxxx_bx_zmr2" 
                                        maxlength="30" v-model="referencesAlternativeTwo"
                                        class="ui-input" type="text">
                                    </td>
                                    <td width="40"><a href="#" class="clearbxjyjl">清空</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item m_top10">
                        <Button type="warning" @click="submit">保存</Button>
                        &nbsp;&nbsp;
                        <Button type="primary" onclick="javascript:history.go(-1);">取消</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "../../../node_modules/axios/dist/axios.js"
import {mSchool,Province} from '../../vuex/actions.js'
import { error } from 'util';
import { type } from 'os';
export default {
    data(){
        return{
            // 户籍所在中学
            SchoolRoll:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            //户籍所在中学 市级
            SchoolCityLevel:[
                {
                    name:"请选择",
                    selected:"selected"
                },
                
            ],
             //户籍所在中学 区县级别
            SchoolCounty:[
                {
                    name:"请选择",
                    selected:"selected"
                }
            ],
            // 户籍所在中学 学校
            SchoolCountyL:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            // 当前就读中学
            SchoolRollT:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            //当前就读中学 市级
            SchoolCityLevelT:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
             //当前就读中学 区县级别
            SchoolCountyT:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            // 当前就读中学 学校
            SchoolCountyLT:[
                {
                    school:"请选择",
                    selected:"selected"
                },
            ],
            // 中学级别
            level:[
                {
                    name:"请选择",
                    selected:"selected" 
                },
                {
                    name:"省级"
                },
                {
                    name:"区级"
                },
                {
                    name:"市级"
                },
                {
                    name:"县级"
                },
                {
                    name:"县级以下"
                },
            ],
            // 所在班级：
            classT:"",
            // 担任职务：
            duty:"",
            // 班主任姓名：
            teacher:"",
            // 班主任联系电话：
            teacherPhone:"",
            // 中学详细地址：
            schoolSite:"",
            // 中学邮政编码：
            postalCode:"",
            // 主管教学领导姓名：
            lead:"",
            // 主管教学领导联系电话：
            leadPhone:"",
             // 高一 教育经历
            education:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            //教育经历 市级
            educationCityLevel:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
             //教育经历 区县级别
            educationCounty:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            // 教育经历 学校
            educationCountyL:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            // 高中一年级：时间
            SchoolDataLeft:"",
            SchoolDataRight:"",
            // 高一证明人
            references:"",
            // 高中二年级：时间
            SchoolDataLeftTwo:"",
            SchoolDataRightTwo:"",
             //  高二 教育经历
            educationTwo:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            //教育经历 市级
            educationCityLevelTwo:[
                {
                    name:"请选择",
                    selected:"selected"
                }
            ],
             //教育经历 区县级别
            educationCountyTwo:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            // 教育经历 学校
            educationCountyLTwo:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
             // 高二证明人
            referencesTwo:"",
            // 高中三年级：时间
            SchoolDataLeftThree:"",
            SchoolDataRightThree:"",
            //  高三 教育经历
            educationThree:[
                {
                    name:"请选择",
                    selected:"selected"
                },
                
            ],
            //教育经历 市级
            educationCityLevelThree:[
                {
                    name:"请选择",
                    selected:"selected"
                },
                
            ],
             //教育经历 区县级别
            educationCountyThree:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            // 教育经历 学校
            educationCountyLThree:[
                {
                    name:"请选择",
                    selected:"selected"
                },
                {
                    name:"唐山市第十一中学"
                },
                {
                    name:"唐山市公共关系学校"
                },
                {
                    name:"唐山市路北区成人教育中心学校"
                },
                {
                    name:"唐山市路北区教师进修学校"
                },
                {
                    name:"唐山工程技术学校"
                },
                {
                    name:"唐山中华职业学校"
                },
                {
                    name:"唐山市艺术学校"
                },
                {
                    name:"唐山第十中学"
                },
                {
                    name:"唐山市农业广播电视学校"
                },
                {
                    name:"唐山市体育运动学校"
                },
                {
                    name:"唐山光厚高中学校"
                },
                {
                    name:"唐山市开滦第一中学"
                },
                {
                    name:"唐山市职业教育中心"
                },
                {
                    name:"唐山长城中等专业学校"
                },
                {
                    name:"唐山市第一职业中等专业学校"
                },
                {
                    name:"唐山工业职业技术学院"
                },
                {
                    name:"唐山市电视中等专业学校"
                },
                {
                    name:"唐山市第十二高级中学"
                },
                {
                    name:"河北唐山外国语学校（唐山八中）"
                },
                {
                    name:"开滦集团有限责任公司职工中等专业学校"
                },
            ],
            // 高三证明人
            referencesThree:"",
            // 备选经历
            grade:[
                {
                    name:"请选择",
                    selected:"selected"
                },
                {
                    name:"高中一年级"
                },
                {
                    name:"高中二年级"
                },
                {
                    name:"高中三年级"
                },
            ],
            // 备选：时间
            SchoolDataLeftThreeLL:"",
            SchoolDataRightThreeLL:"",
            //  备选 教育经历
            educationAlternative:[],
            //备选 市级
            educationCityLevelAlternative:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
             //备选 区县级别
            educationCountyAlternative:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            // 备选 学校
            educationCountyLAlternative:[
                {
                    name:"请选择",
                    selected:"selected"
                }
            ],
             // 备选证明人
            referencesAlternative:"",
             // 备选经历2
            gradeTwo:[
                {
                    name:"请选择",
                    selected:"selected"
                },
                {
                    name:"高中一年级"
                },
                {
                    name:"高中二年级"
                },
                {
                    name:"高中三年级"
                },
            ],
            // 备选2：时间
            SchoolDataLeftThreeL:"",
            SchoolDataRightThreeL:"",
             //  备选2 教育经历
            educationAlternativeTwo:[
                {
                    name:"请选择",
                    selected:"selected"
                },
                
            ],
            //备选2 市级
            educationCityLevelAlternativeTwo:[
                {
                    name:"请选择",
                    selected:"selected"
                }
            ],
             //备选2 区县级别
            educationCountyAlternativeTwo:[
                {
                    name:"请选择",
                    selected:"selected"
                },
            ],
            // 备选2 学校
            educationCountyLAlternativeTwo:[
                {
                    name:"请选择",
                    selected:"selected"
                }
            ],
            // 备选2 证明人
            referencesAlternativeTwo:"",

            // 备选省份
            item : { alternative : "" },
            // 市
            item : { alternativeL : "" },
            // 区
            item : { alternativeLL : "" },
            // 学校
            item : { alternativeLLL : ""},

            // 备选2 省份
            item : { alternativeW : "" },
            // 市
            item : { alternativeWL : "" },
            // 区
            item : { alternativeWLL : "" },
             // 学校
            item : { alternativeWLLL : ""},

            // 学籍所在学校 省份
            item : { SchoolRollID : "" },
            // 市
            item : { SchoolRollIDTwo : "" },
            // 区
            item : { SchoolRollIDThree : "" },
             // 学校
            item : { SchoolRollIDFour : ""},

            // 当前就读中学
            item : { SchoolRollTID : "" },
            // 市
            item : { SchoolRollTIDTwo : "" },
            // 区
            item : { SchoolRollTIDThree : "" },
             // 学校
            item : { SchoolRollTIDFourL : ""},
            
             // 当前就读中学 高中一年级
            item : { educationONE : "" },
            // 市
            item : { educationONEL : "" },
            // 区
            item : { educationONELL : "" },
             // 学校
            item : { educationONELLL : ""},

             // 当前就读中学 高中二年级
            item : { educationTw : "" },
            // 市
            item : { educationTwoL : "" },
            // 区
            item : { educationTwoLL : "" },
             // 学校
            item : { educationTwoLLL : ""},

             // 当前就读中学 高中仨年级
            item : { educationThre : "" },
            // 市
            item : { educationThreeL : "" },
            // 区
            item : { educationThreeLL : "" },
             // 学校
            item : { educationThreeLLL : ""},

            // 中学级别
            item : { levelNumber : ""},

            // 备选第几年级
            item : { gradeOne : ""},
            item : { gradeTwoL : ""}

        }
    },
    created(){
        // 省份数据
        axios.post('http://192.168.0.130:8080/City/findByCode')
        .then((res)=>{
            this.educationAlternative = res.data,
            this.educationAlternativeTwo = res.data,
            this.SchoolRoll = res.data,
            this.SchoolRollT = res.data,
            this.education = res.data,
            this.educationTwo = res.data,
            this.educationThree = res.data
        }),(err)=>{
            console.log(error)
        }
        
    },
    computed:{
    },
    methods:{
        // 市
        aaa(word){
            let data = word
            axios.post('http://192.168.0.130:8080/City/findById',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res) => {
                // console.log(data)
                if(data ==  this.item.alternative){
                    this.educationCityLevelAlternative = res.data
                }
                else if(data == this.item.alternativeW ){
                    this.educationCityLevelAlternativeTwo = res.data
                }
                else if(data == this.item.SchoolRollID ){
                    this.SchoolCityLevel = res.data
                }
                else if(data == this.item.SchoolRollTID ){
                    this.SchoolCityLevelT = res.data
                }
                else if(data == this.item.educationONE ){
                    this.educationCityLevel = res.data
                }
                else if(data == this.item.educationTw ){
                    this.educationCityLevelTwo = res.data
                }
                else if(data == this.item.educationThre ){
                    this.educationCityLevelThree = res.data
                }
                // this.educationCityLevelAlternative = res.data,
                // this.educationCityLevelAlternativeTwo = res.data
            }),(err) => {
                console.log(err)
            }
        },
        // 区县
        bbb(word){
            let data = word
             axios.post('http://192.168.0.130:8080/City/findByCode2',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res) => {
                if(data ==  this.item.alternativeL){
                    this.educationCountyAlternative = res.data
                }
                else if(data == this.item.alternativeWL ){
                    this.educationCountyAlternativeTwo = res.data
                }
                else if(data == this.item.SchoolRollIDTwo){
                    this.SchoolCounty = res.data
                }
                else if(data == this.item.SchoolRollTIDTwo){
                    this.SchoolCountyT = res.data
                }
                else if(data == this.item.educationONEL){
                    this.educationCounty = res.data
                }
                else if(data == this.item.educationTwoL){
                    this.educationCountyTwo = res.data
                }
                else if(data == this.item.educationThreeL){
                    this.educationCountyThree = res.data
                }
            }),
            (err) => {
                console.log(err)
            }
        },
        // 学校
        ccc(word){
            // let data = this.item.educationIDTwo
            let data = word
            axios.post('http://192.168.0.130:8080/City/findByCode3',
            data,
            {headers:{'Content-Type':"application/json; charset=UTF-8"}}
            )
            .then((res) => {
                if(data ==  this.item.alternativeLL){
                    this.educationCountyLAlternative = res.data
                }
                else if(data == this.item.alternativeWLL ){
                    this.educationCountyLAlternativeTwo = res.data
                }
                else if(data == this.item.SchoolRollIDThree ){
                    this.SchoolCountyL = res.data
                }
                else if(data == this.item.SchoolRollTIDThree ){
                    this.SchoolCountyLT = res.data
                }
                else if(data == this.item.educationONELL ){
                    this.educationCountyL = res.data
                }
                else if(data == this.item.educationTwoLL ){
                    this.educationCountyLTwo = res.data
                }
                else if(data == this.item.educationThreeLL ){
                    this.educationCountyLThree = res.data
                }
            }),(err) => {
                console.log(err)
            }
        },
        submit(){
             //学籍所在中学 
            let a = JSON.stringify(this.item.SchoolRollID)
            let b = JSON.stringify(this.item.SchoolRollIDTwo)
            let c = this.item.SchoolRollIDThree
            let d = this.item.SchoolRollIDFour
            let m = ","
            let e = a+m+b+m+c+m+d

            //当前就读中学 
            let aa = JSON.stringify(this.item.SchoolRollTID)
            let bb = JSON.stringify(this.item.SchoolRollTIDTwo)
            let cc = this.item.SchoolRollTIDThree
            let dd = this.item.SchoolRollTIDFourL
            let mm = ","
            let ee = aa+mm+bb+mm+cc+mm+dd
            // console.log(typeof(ee))

            //教育经历 高一
            let aaOne = JSON.stringify(this.item.educationONE)
            let bbOne = JSON.stringify(this.item.educationONEL)
            let ccOne = this.item.educationONELL
            // let ddOne = this.item.educationONELLL
            let mmOne = ","
            let eeOne = aaOne+mmOne+bbOne+mmOne+ccOne
            // console.log(typeof(eeOne))

            //教育经历 高二
            let aaTwo = JSON.stringify(this.item.educationTw)
            let bbTwo = JSON.stringify(this.item.educationTwoL)
            let ccTwo = this.item.educationTwoLL
            // let ddTwo = this.item.educationTwoLLL
            let mmTwo = ","
            let eeTwo = aaTwo+mmTwo+bbTwo+mmTwo+ccTwo
            console.log(eeTwo)
            console.log(typeof(eeTwo))
            
            //教育经历 高三
            let aaThree = JSON.stringify(this.item.educationThre)
            let bbThree = JSON.stringify(this.item.educationThreeL)
            let ccThree = this.item.educationThreeLL
            // let ddThree = this.item.educationThreeLLL
            let mmThree = ","
            let eeThree = aaThree+mmThree+bbThree+mmThree+ccThree

            //备选教育经历 第一个
            let aanat = JSON.stringify(this.item.alternative)
            let bbnat = JSON.stringify(this.item.alternativeL)
            let ccnat = this.item.alternativeLL
            // let ddnat = this.item.alternativeLLL
            let mmnat = ","
            let eenat = aanat+mmnat+bbnat+mmnat+ccnat

            //备选教育经历 第二个
            let aanatTwo = JSON.stringify(this.item.alternativeW)
            let bbnatTwo = JSON.stringify(this.item.alternativeWL)
            let ccnatTwo = this.item.alternativeWLL
            // let ddnatTwo = this.item.alternativeWLLL
            let mmnatTwo = ","
            let eenatTwo = aanatTwo+mmnatTwo+bbnatTwo+mmnatTwo+ccnatTwo

            

            let data = {
                // IID:this.item.educationID,
                classPost : this.duty,
                classTeacherName : this.teacher,
                classTeacherPhone : this.teacherPhone,
                classid : this.classT,
                currentSchoolProvince : ee,
                middleSchoolNub1 : this.item.gradeOne,
                middleSchoolNub2 : this.item.gradeTwoL,
                middleSchoolOneNew : this.SchoolDataRight,
                middleSchoolOneNew1 : this.SchoolDataRightThreeLL,
                middleSchoolOneOld : this.SchoolDataLeft,
                middleSchoolOneOld1 : this.SchoolDataLeftThreeLL,
                middleSchoolOneProvince : eeOne,
                middleSchoolOneProvince1 : eenat,
                middleSchoolOneSchoolName : this.item.educationONELLL,
                middleSchoolOneSchoolName1 : this.item.alternativeLLL,
                middleSchoolOneWitnessName : this.references,
                middleSchoolOneWitnessName1 : this.referencesAlternative,
                middleSchoolThreeNew : this.SchoolDataRightThree,
                middleSchoolThreeOld : this.SchoolDataLeftThree,
                middleSchoolThreeRegion : eeThree,
                middleSchoolThreeSchoolName : this.item.educationThreeLLL,
                middleSchoolThreeWitnessName : this.referencesThree,
                middleSchoolTwoNew : this.SchoolDataRightTwo,
                middleSchoolTwoNew1 : this.SchoolDataRightThreeL,
                middleSchoolTwoOld : this.SchoolDataLeftTwo,
                middleSchoolTwoOld1 : this.SchoolDataLeftThreeL,
                middleSchoolTwoProvince : eeTwo,
                middleSchoolTwoProvince1 : eenatTwo,
                middleSchoolTwoSchoolName : this.item.educationTwoLLL,
                middleSchoolTwoSchoolName1 : this.item.alternativeWLLL,
                middleSchoolTwoWitnessName : this.referencesTwo,
                middleSchoolTwoWitnessName1 : this.referencesAlternativeTwo,
                schoolDetailedAddress : this.schoolSite,
                schoolLevel : this.item.levelNumber,
                schoolPost : this.postalCode,
                studentStatusProvince : e,
                teachingLeaderName : this.lead,
                teachingLeaderPhone : this.leadPhone,
            }
            console.log(data);
            mSchool(data);
        }
    }
}
</script>

<style scoped>
    .School{
        background: white;
        padding: 15px;
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
    }
    .txt-explain {
        font-size: 12px;
        color: #999;
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
    .ui-box a {
        color: #09f;
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
        font-size: 14px;
        margin-right: 6px;
    }
    strong, b {
        font-weight: bold;
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
        padding: 0 2px 1px;
    }
    .ui-form-item .ui-input {
        color: #595959;
        width: 176px;
        margin-top: 4px;
        vertical-align: middle;
    }
    .ui-form-explain {
        margin: 0;
        padding: 8px 0 0;
        font-size: 12px;
        color: #999;
    }
    .jbxxjtbox {
        width: 588px;
        padding: 4px 10px;
        border: 1px solid #CCC;
        margin: 4px 0;
        overflow: hidden;
    }
    tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
    table td, table th {
        word-wrap: break-word;
        word-break: break-all;
    }
    strong, b {
        font-weight: bold;
    }
    tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }
    .jbxxjtbox select {
        margin-top: 0;

    }
    .jbxxjtbox .ui-input {
        width: 118px;
        margin-top: 0;
    }
    .ui-form-item input {
        vertical-align: middle;
    }
    .ui-button-lorange {
        height: 32px;
    }
    .ui-button-lceladon, .ui-button-mceladon, .ui-button-sceladon {
        color: #fff;
        text-shadow: 0 -1px 1px rgba(0,0,0,0.25);
        border: 1px solid #4498ae;
        background-color: #50aac2;
    }

</style>
