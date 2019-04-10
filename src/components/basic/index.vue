    <template>
        <div class="Essent">
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
                    <li class="active">基本信息</li>
                </ul>
            </div>
            <div class="ui-box">
                <div class="ui-box-head">
                    <h3 class="ui-box-head-title">基本信息</h3>
                    <span class="ui-box-head-text">（<span class="redstar">*</span> 为必填项；
                        <a style="border-bottom:dotted 1px; " href="javascript:;"
                           title="输入1个汉字 = 2个字节，1个半角字母 = 1个字节，1个半角数字 = 1个字节，1个半角标点 = 1个字节。">
                            关于字节
                        </a>）
                        <span style="color:#c30;">注意：在输入数字或字母时，请使用半角字符，否则可能会造成报名失败</span></span></div>
                <div class="ui-box-container">
                    <form action="updateJbxx.action"
                          method="post" id="form_step" class="addsubmittip" novalidate="novalidate">
                        <input name="struts.token.name" value="token" type="hidden">
                        <input name="token" value="42GRT3P7JYG0NFAIYEHQ5M8YBGPKI1QW" type="hidden">
                        <div class="ui-form-item m_top10" style="padding-bottom:0;">
                            <span class="ui-form-explain" style="margin-left: 40px">姓名、手机号码来源于您的注册信息，如果有误请修改您的
                                <a href="javascript:;" target="_blank">
                                    注册信息
                                </a>
                            </span>
                        </div>
                        <!-- 姓名 -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><strong>姓名：</strong></label>
                            <p class="ui-form-text" style="margin-right: 470px;width: 100px;">
                                {{name}}
                            </p>
                        </div>
                        <!-- 证件号码 -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><strong>证件号码：</strong></label>
                            <p class="ui-form-text" id="zjhm" style="margin-right: 390px;width: 140px;">
                                {{papers}}
                            </p>
                        </div>
                        <!-- 手机号码 -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><strong>手机号码：</strong></label>
                            <p class="ui-form-text" style="margin-right: 450px;width: 100px;">
                                {{Phone}}
                            </p>
                        </div>
                        <!-- 性别 -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>性别：</strong></label>
                            <select name="jbxxVO.xbDm" 
                            id="jbxx_xb" 
                            style="margin-right: 460px;"
                            v-model="item.sexL"
                            >
                                <option :selected="item.selected" 
                                :value="item.value" 
                                v-for="item in sex" 
                                :key="item.value">
                                    {{item.name}}
                                </option>
                                <!-- <option value="1">{{sexK}}</option> -->
                                <!-- <option value="2">{{sexJ}}</option> -->
                            </select>
                            <p class="ui-form-explain" id="zjhmInfo"></p>
                        </div>
                        <!-- 出生日期 -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>出生日期：</strong></label>
                            <p class="ui-form-text" style="margin-right: 450px;width: 100px;">
                                {{birth}}
                            </p>
                            <p class="ui-form-explain"></p>
                        </div>
                        <!-- 民族 -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>民族：</strong></label>
                            <select name="jbxxVO.mzDm" 
                            id="jbxx_mz" 
                            style="margin-right: 390px;width: 140px;"
                            v-model="item.select"
                            >
                                 <option  v-for="item in Home" 
                                 :key="item.value" :selected="item.selected" 
                                 :value="item.value">
                                    {{item.name}}
                                 </option>
                            </select>
                            <p class="ui-form-explain"></p>
                        </div>
                        <!-- 政治面貌： -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>政治面貌：</strong></label>
                            <select name="jbxxVO.zzmmDm" 
                            id="jbxx_zzmm" 
                            style="margin-right: 390px;width: 140px;"
                            v-model="item.FacesL"
                            >
                                <option  v-for="item in Faces" 
                                :key="item.value" :selected="item.selected" 
                                :value="item.value">
                                    {{item.name}}
                                </option>
                            </select>
                            <p class="ui-form-explain"></p>
                        </div>
                        <div class="ui-form-item" style="margin-left: 73px">
                            <span class="ui-form-explain">请查看学校招生简章，如果报考专业对视力、是否色盲、身高、体重有要求，则必须填写。</span>
                        </div>
                        <!-- 视力 -->
                        <div class="ui-form-item" title="视力标准为 0.1-1.5（或 4.0-5.2）">
                            <label for="" class="ui-label"><strong>裸眼视力（左/右）：</strong></label>
                            <div style="margin-right: 400px">
                                <input name="jbxxVO.sll" class="ui-input" style="width:58px;" maxlength="6" type="text" v-model="seeingLeft"> / <input v-model="seeingRight" name="jbxxVO.slr" class="ui-input" style="width:58px;" maxlength="6" type="text">
                            </div>
                            <p class="ui-form-explain" style="margin-right: 150px">视力标准为 0.1-1.5（或 4.0-5.2）</p>
                        </div>
                        <!-- 是否色盲： -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><strong>是否色盲：</strong></label>
                            <select name="jbxxVO.sm" 
                            style="margin-right: 460px;"
                            v-model="item.eyes"
                            >
                                <option  v-for="item in chromatodysopia" 
                                :key="item.value" :selected="item.selected" 
                                :value="item.value">
                                     {{item.name}}
                                </option>
                            </select>
                            <p class="ui-form-explain"></p>
                        </div>
                        <!-- 身高 -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><strong>身高(cm)：</strong></label>
                            <input name="jbxxVO.sg" v-model="Height" maxlength="3" class="ui-input" style="width:58px;margin-right: 470px;" type="text">
                            <p class="ui-form-explain"></p>
                        </div>
                        <!-- 体重 -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><strong>体重(kg)：</strong></label>
                            <input name="jbxxVO.tz" v-model="Weight" maxlength="3" class="ui-input" style="width:58px;margin-right: 470px" type="text">
                            <p class="ui-form-explain"></p>
                        </div>
                        <!-- 高考报名所在地 -->
                        <div class="ui-form-item" title="">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>高考报名所在地：</strong></label>
                            <div style="margin-right: 245px">
                                <select id="bmszdSslist" class="ignoreselect"
                                 v-model="item.baseArea"
                                @change= "aaa(item.baseArea)"
                                >
                                    <option :value="item.id" 
                                    :selected="item.selected" 
                                    v-for="item in Bourn" 
                                    :key="item.id">{{item.name}}</option>
                                    
                                </select>
                                <!-- 石家庄市 -->
                                <select id="bmszdXjslist" class="ignoreselect"
                                 v-model="item.baseAreaL"
                                @change= "bbb(item.baseAreaL)"
                                >
                                    <option :value="item.id" 
                                    :selected="item.selected" 
                                    v-for="item in CityLevel" 
                                    :key="item.id">{{item.name}}</option>
                                    
                                </select>
                                <!-- 市辖区 -->
                                <select id="bmszdDqlist" name="jbxxVO.bmszdDm"
                                v-model="item.baseAreaLL"
                                >
                                    <option :value="item.name" 
                                    :selected="item.selected" 
                                    v-for="item in County" 
                                    :key="item.name">
                                        {{item.name}}
                                    </option>
                                    
                                </select>
                            </div>
                            <p class="ui-form-explain" style="margin-left: 66px">填写高考报名时的户籍所在地，应与参加高考录取的省（区、市）保持一致</p>
                        </div>
                        <!-- 高考报名号 -->
                        <div class="ui-form-item" title="请填写14位高考报名号(全国统一编号)">
                            <label for="" class="ui-label"><strong>高考报名号：</strong></label>
                            <input name="jbxxVO.gkbmh" maxlength="32" class="ui-input" type="text" v-model="SerialNumber" style="margin-right: 350px">
                            <p class="ui-form-explain" style="margin-right: 130px">请填写14位高考报名号(全国统一编号)</p>
                        </div>
                        <!-- 考生类型： -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>考生类型：</strong></label>
                            <select name="jbxxVO.kslxDm" 
                            id="jbxx_kslx" 
                            style="margin-right: 450px"
                            v-model="item.ExamineeL"
                            >
                                <option :value="item.value" 
                                :selected="item.selected" v-for="item in Examinee" 
                                :key="item.value">
                                    {{item.name}}
                                </option>
                            </select>
                            <p class="ui-form-explain"></p>
                        </div>
                        <!-- 外语语种： -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>外语语种：</strong></label>
                            <select name="jbxxVO.wyyzDm" 
                            id="jbxx_wyyz" 
                            style="margin-right: 440px"
                            v-model="item.langue"
                            >
                                <option :value="item.value" 
                                :selected="item.selected" 
                                v-for="item in Language" 
                                :key="item.value"
                                >
                                    {{item.name}}
                                </option>
                            </select>
                            <p class="ui-form-explain"></p>
                        </div>
                        <!-- 学科类型： -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">
                                *
                            </span>
                                <strong>
                                    学科类型：
                                </strong>
                            </label>
                            <select name="jbxxVO.xklbDm" id="jbxx_xklx" 
                            style="margin-right: 450px"
                            v-model="item.TypeL"
                            >
                                <option :value="item.value" 
                                :selected="item.selected" :disabled="item.disabled" 
                                v-for="item in Type" :key="item.value">
                                    {{item.name}}
                                </option>
                            </select>
                            <p class="ui-form-explain" style="margin-left: 170px">
                                高考报名所在地为上海、浙江的考生，请选择“综合改革”。其他省份的考生请选择“文科”或“理科”
                            </p>
                        </div>
                        <!-- 联系电话： -->
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>联系电话：</strong></label>
                            <input name="jbxxVO.lxdh" id="jbxx_lxdh" v-model="PhoneNumber" maxlength="30" class="ui-input" type="text" style="margin-right: 350px">
                            <p class="ui-form-explain"></p>
                        </div>
                        <div class="ui-form-item" title="最多可输入50个字符；地址请写明街道名称、门牌号码、楼层和房间号等信息">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>联系地址：</strong></label>
                            <div style="margin-right: 250px">
                                <select id="txdzSslist" class="ignoreselect"
                                v-model="item.contactAdd"
                                @change= "aaa(item.contactAdd)"
                                >
                                    <option :selected="item.selected" 
                                    :value="item.id" 
                                    v-for="item in Site"
                                    :key="item.id">{{item.name}}</option>
                                </select>
                                <!-- 联系地址 -->
                                <select id="txdzXjslist" class="ignoreselect"
                                v-model="item.contactAddL"
                                @change= "bbb(item.contactAddL)"
                                >
                                    <option :selected="item.selected" 
                                    :value="item.id" 
                                    v-for="item in CityLevelTwo" 
                                    :key="item.id">{{item.name}}</option>

                                </select>
                                <select id="txdzDqlist" name="jbxxVO.txdzDm"
                                v-model="item.contactAddLL"
                                >
                                    <option :selected="item.selected" 
                                    :value="item.name" 
                                    v-for="item in CountyTwo" 
                                    :key="item.name">{{item.name}}</option>

                                </select>
                            </div>
                            <br><input name="jbxxVO.txdzXxdz" id="jbxx_xxdz"
                                       v-model="SiteLL" maxlength="50"
                                       class="ui-input"
                                       style="width:300px;
                                       margin-right: 30px"
                                       type="text">
                            <p class="ui-form-explain" style="margin-left: 77px">最多可输入50个字符；地址请写明街道名称、门牌号码、楼层和房间号等信息</p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>邮政编码：</strong></label>
                            <input id="hdxx_daszDwYzbm"
                                   name="jbxxVO.txdzYzbm"
                                   v-model="postal"
                                   maxlength="6"
                                   class="ui-input"
                                   style="width:58px;margin-right: 475px"
                                   type="text">
                            <p class="ui-form-explain"></p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>家庭信息：</strong></label>
                            <div class="jbxxjtbox" id="jbxxjtbox">
                                <table style="border-bottom: 1px dotted #ccc;" cellspacing="8" cellpadding="0" border="0">
                                    <tbody><tr>
                                        <td align="right">父亲姓名</td>
                                        <td>
                                            <input name="faInfoVO.xm" id="faname" class="ui-input valid" v-model="father" maxlength="30" type="text" aria-required="true" aria-invalid="false">
                                        </td>
                                        <td align="right">联系电话</td>
                                        <td>
                                            <input name="faInfoVO.lxdh" id="jbxx_fa_lxdh" class="ui-input valid" v-model="PhoneNumberFather" maxlength="30" aria-invalid="false" type="text">
                                        </td>
                                        <td align="right">文化程度</td>
                                        <td>
                                            <select name="faInfoVO.whcdDm" 
                                            id="jbxx_fa_whcd"
                                            v-model="item.cityIDFather"
                                            >
                                                <option :selected="item.selected" 
                                                :value="item.value" v-for="item in degree" 
                                                :key="item.value">
                                                    {{item.name}}
                                                </option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">职业</td>
                                        <td>
                                            <input name="faInfoVO.zy" id="jbxx_fa_zy" class="ui-input valid" v-model="professionFather" maxlength="30" type="text" aria-required="true" aria-invalid="false">
                                        </td>
                                        <td align="right">工作单位</td>
                                        <td><input name="faInfoVO.dw" id="jbxx_fa_dw" class="ui-input" v-model="organizationFather" maxlength="30" type="text">
                                        </td>
                                        <td align="right">职务</td>
                                        <td><input name="faInfoVO.zw" id="jbxx_fa_zw" class="ui-input" v-model="dutyFather" maxlength="30" type="text">
                                        </td>
                                    </tr>
                                    </tbody></table>
                                <table cellspacing="8" cellpadding="0" border="0">
                                    <tbody><tr>
                                        <td align="right">母亲姓名</td>
                                        <td>
                                            <input name="maInfoVO.xm" id="maname" class="ui-input valid"  v-model="mather" maxlength="30" type="text" aria-required="true" aria-invalid="false">
                                        </td>
                                        <td align="right">联系电话</td>
                                        <td>
                                            <input name="maInfoVO.lxdh" id="jbxx_ma_lxdh" class="ui-input valid" v-model="PhoneNumberMather" maxlength="30" aria-invalid="false" type="text" aria-required="true">
                                        </td>
                                        <td align="right">文化程度</td>
                                        <td>
                                            <select name="maInfoVO.whcdDm" id="jbxx_ma_whcd" 
                                            v-model="item.cityID">
                                                <option :selected="item.selected" 
                                                :value="item.value" v-for="item in degreeT" 
                                                :key="item.value">
                                                    {{item.name}}
                                                </option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">职业</td>
                                        <td>
                                            <input name="maInfoVO.zy" id="jbxx_ma_zy" class="ui-input valid" v-model="professionMather" maxlength="30" type="text" aria-required="true" aria-invalid="false">
                                        </td>
                                        <td align="right">工作单位</td>
                                        <td><input name="maInfoVO.dw" id="jbxx_ma_dw" class="ui-input" v-model="organizationMather" maxlength="30" type="text">
                                        </td>
                                        <td align="right">职务</td>
                                        <td><input name="maInfoVO.zw" id="jbxx_ma_zw" class="ui-input" v-model="dutyMather" maxlength="30" type="text">
                                        </td>
                                    </tr>
                                    </tbody></table>
                            </div>
                            <p class="ui-form-explain" style="margin-left: 66px">请根据实际情况填写家庭信息。如果没有，各项请填 “无”，文化程度请选择 “请选择”</p>
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
    // import axios from 'axios'
    import axios from '../../../node_modules/axios/dist/axios.js'
    import {aa} from '../../vuex/actions.js'
        export default {
            data() {
                return {
                    SerialNumber: '',
                    PhoneNumber:'',
                    name:"格学教育",
                    papers:"411381201902186111",
                    Phone:"4000180810",
                    // 性别
                    sex:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                        {
                            name:"男",
                            value:"男",
                        },
                        {
                            name:"女",
                            value:"女"
                        },
                    ],
                    birth:"2019-02-26",
                    // 民族
                    Home:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                        {
                            name:"汉族",
                            value:"汉族"
                        },
                        {
                            name:"蒙古族",
                            value:"蒙古族"
                        },
                        {
                            name:"回族",
                            value:"回族"
                        },
                        {
                            name:"藏族",
                            value:"藏族"
                        },
                        {
                            name:"维吾尔族",
                            value:"维吾尔族"
                        },
                        {
                            name:"苗族",
                            value:"苗族"
                        },
                        {
                            name:"彝族",
                            value:"彝族"
                        },
                        {
                            name:"壮族",
                            value:"壮族"
                        },
                        {
                            name:"布依族",
                            value:"布依族"
                        },
                        {
                            name:"朝鲜族",
                            value:"朝鲜族"
                        },
                        {
                            name:"满族",
                            value:"满族"
                        },
                        {
                            name:"侗族",
                            value:"侗族"
                        },
                        {
                            name:"瑶族",
                            value:"瑶族"
                        },
                        {
                            name:"白族",
                            value:"白族"
                        },
                        {
                            name:"土家族",
                            value:"土家族"
                        },
                        {
                            name:"哈尼族",
                            value:"哈尼族"
                        },
                        {
                            name:"哈萨克族",
                            value:"哈萨克族"
                        },
                        {
                            name:"傣族",
                            value:"傣族"
                        },
                        {
                            name:"黎族",
                            value:"黎族"
                        },
                        {
                            name:"傈僳族",
                            value:"傈僳族"
                        },
                        {
                            name:"佤族",
                            value:"佤族"
                        },
                        {
                            name:"畲族",
                            value:"畲族"
                        },
                        {
                            name:"高山族",
                            value:"高山族"
                        },
                        {
                            name:"拉祜族",
                            value:"拉祜族"
                        },
                        {
                            name:"水族",
                            value:"水族"
                        },
                        {
                            name:"达斡尔族",
                            value:"达斡尔族"
                        },
                    ],
                    // // 政治面貌
                    Faces:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                        {
                            name:"中国共产党党员",
                            value:"中国共产党党员"
                        },
                        {
                            name:"中国共产党预备党员",
                            value:"中国共产党预备党员"
                        },
                        {
                            name:"中国共产主义青年团团员",
                            value:"中国共产主义青年团团员"
                        },
                        {
                            name:"中国国民党革命委员会会员",
                            value:"中国国民党革命委员会会员"
                        },
                        {
                            name:"中国民主同盟盟员",
                            value:"中国民主同盟盟员"
                        },
                        {
                            name:"中国民主建国会会员",
                            value:"中国民主建国会会员"
                        },
                        {
                            name:"中国民主促进会会员",
                            value:"中国民主促进会会员"
                        },
                        {
                            name:"中国农工民主党党员",
                            value:"中国农工民主党党员"
                        },
                        {
                            name:"中国致公党党员",
                            value:"中国致公党党员"
                        },
                        {
                            name:"九三学社社员",
                            value:"九三学社社员"
                        },
                        {
                            name:"台湾民主自治同盟盟员",
                            value:"台湾民主自治同盟盟员"
                        },
                        {
                            name:"无党派民主人士",
                            value:"无党派民主人士"
                        },
                        {
                            name:"群众",
                            value:"群众"
                        }
                    ],
                    // 视力
                    seeingLeft:"",
                    seeingRight:"",
                    // 是否色盲
                    chromatodysopia:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                        {
                            name:"非色盲",
                            value:"非色盲"
                        },
                        {
                            name:"色盲",
                            value:"色盲",
                        },
                        {
                            name:"色弱",
                            value:"色弱"
                        }
                    ],
                    // 身高
                    Height:"",
                    // 体重
                    Weight:"",
                    // 高考报名所在地
                    Bourn:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                    ],
                    // 市级
                    CityLevel:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                    ],
                    // 区县级别
                    County:[
                        {
                            school:"请选择",
                            selected:"selected"
                        },
                    ],
                    // 考生类型
                    Examinee:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                        {
                            name:"农村应届",
                            value:"农村应届"
                        },
                         {
                            name:"农村往届",
                            value:"农村往届"
                        },
                         {
                            name:"城镇应届",
                            value:"城镇应届"
                        },
                         {
                            name:"城镇往届",
                            value:"城镇往届"
                        },
                    ],
                    // 外语语种：
                    Language:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                        {
                            name:"不应试外语",
                            value:'不应试外语'
                        },
                        {
                            name:"英语",
                            value:'英语'
                        },
                        {
                            name:"俄语",
                            value:'俄语'
                        },
                        {
                            name:"日语",
                            value:'日语'
                        },
                        {
                            name:"德语",
                            value:'德语'
                        },
                        {
                            name:"法语",
                            value:'法语'
                        },
                        {
                            name:"西班牙语",
                            value:'西班牙语'
                        },
                        {
                            name:"其他外语",
                            value:'其他外语'
                        },
                    ],
                    // 学科类型：
                    Type:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                        {
                            name:"文史",
                            value:"文史"
                        },
                        {
                            name:"理工",
                            value:"理工"
                        },
                        {
                            name:"综合改革",
                            disabled:"disabled"
                        }
                    ],
                    // 联系地址
                    Site:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                    ],
                    // 市级
                    CityLevelTwo:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                    ],
                    // 区县级别
                    CountyTwo:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                    ],
                    // 详细地址
                    SiteLL:"",
                    // 邮政编码：
                    postal:"",
                    // 文化程度
                    degree:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                        {
                            name:"博士",
                            value:"博士"
                        },
                        {
                            name:"硕士",
                            value:"硕士"
                        },
                        {
                            name:"本科",
                            value:"本科"
                        },
                        {
                            name:"专科",
                            value:"专科"
                        },
                        {
                            name:"高中及以下",
                            value:"高中及以下"
                        },
                    ],
                     // 文化程度
                    degreeT:[
                        {
                            name:"请选择",
                            selected:"selected"
                        },
                        {
                            name:"博士",
                            value:"博士"
                        },
                        {
                            name:"硕士",
                            value:"硕士"
                        },
                        {
                            name:"本科",
                            value:"本科"
                        },
                        {
                            name:"专科",
                            value:"专科"
                        },
                        {
                            name:"高中及以下",
                            value:"高中及以下"
                        },
                    ],
                    // 父亲姓名
                    father:"",
                    // 联系电话
                    PhoneNumberFather:"",
                    // 职业
                    professionFather:"",
                    // 工作单位
                    organizationFather:"",
                    // 职务
                    dutyFather:"",
                    // 母亲姓名
                    mather:"",
                    // 联系电话
                    PhoneNumberMather:"",
                    // 职业
                    professionMather:"",
                    // 工作单位
                    organizationMather:"",
                    // 职务
                    dutyMather:"",
                    // 母亲的文化程度  key值
                    item : { cityID : "" },
                    // 父亲的文化程度  key值
                    item : { cityIDFather : "" },
                     // 视力  key值
                    item : { eyes : "" },
                     // 民族  key值
                    item : { select : "" },
                    // 外语语种  key值
                    item : { langue : "" },
                    // 政治面貌：  key值
                    item : { FacesL : "" },
                    // 性别  key值
                    item : { sexL : "" },
                    // 考生类型  key值
                    item : { ExamineeL : "" },
                    // 学科类型  key值
                    item : { TypeL : "" },
                    // 联系地址 省份
                    item : { contactAdd : ""},
                    // 市
                    item : { contactAddL : ""},
                    // 区
                    item : { contactAddLL : ""},
                    // 高考报名所在地 省份
                    item : { baseArea : ""},
                    // 市
                    item : { baseAreaL : ""},
                    // 区
                    item : { baseAreaLL : ""},
                }
            },
            created(){
                // 省份数据
                axios.post('http://192.168.0.130:8080/City/findByCode')
                    .then((res)=>{
                        this.Site = res.data,
                        this.Bourn = res.data
                }),(err)=>{
                        console.log(error)
                }
            },
            methods:{
                // add(){
                    // let obj = {
                    //     SerialNumber: this.SerialNumber,
                    //     PhoneNumber: this.PhoneNumber
                    // };
                    // this.$store.commit('GET_APP_NAME','this.SerialNumber')
                // },
                aaa(word){
                    let data = word
                    axios.post('http://192.168.0.130:8080/City/findById',
                    data,
                    {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                    )
                    .then((res) => {
                        // console.log(data)
                        if(data ==  this.item.contactAdd){
                            this.CityLevelTwo = res.data
                        }
                        else if(data ==  this.item.baseArea){
                            this.CityLevel = res.data
                        }
                        
                    }),(err) => {
                        console.log(err)
                    }
                },
                // 区县
                bbb(word){
                    let data = word
                    // console.log(data)
                    axios.post('http://192.168.0.130:8080/City/findByCode2',
                    data,
                    {headers:{'Content-Type':"application/json; charset=UTF-8"}}
                    )
                    .then((res) => {
                        if(data ==  this.item.contactAddL){
                            this.CountyTwo = res.data
                        }
                        else if(data ==  this.item.baseAreaL){
                            this.County = res.data
                        }
                        
                    }),
                    (err) => {
                        console.log(err)
                    }
                },
                // 获取名字
                submit(){
                    //联系地址    
                    let a = JSON.stringify(this.item.contactAdd)
                    let b = JSON.stringify(this.item.contactAddL)
                    let c = this.item.contactAddLL
                    let m = ","
                    let d = a+m+b+m+c
                    // console.log(typeof(d,'d'))
                    // console.log(d)
                    // 高考报名所在地  
                    let aaa = JSON.stringify(this.item.baseArea)
                    // console.log(a,'a')
                    let bb = JSON.stringify(this.item.baseAreaL)
                    // console.log(b,'b')
                    let cc = this.item.baseAreaLL
                    // console.log(c,'c')
                    let mm = ","
                    let dd = aaa+mm+bb+mm+cc
                    // console.log(dd)
                    // console.log(typeof(dd,'dd'))


                    let data = {
                        Height : this.Height,
                        colorEye : this.item.eyes,
                        contactNumber : this.PhoneNumber,
                        contactProvinceAddress : d, 
                        contactRoadAddress : this.SiteLL,
                        date : this.birth,
                        eyeLeft : this.seeingLeft,
                        eyeRight : this.seeingRight,
                        famousRace : this.item.select,
                        fatherCulture : this.item.cityIDFather,
                        fatherName : this.father,
                        fatherOccupation : this.dutyFather,
                        fatherPhone : this.PhoneNumberFather,
                        fatherPost : this.dutyFather,
                        fatherWork : this.organizationFather,
                        idNumber : this.SerialNumber,
                        languageType : this.item.langue,
                        motherCulture : this.item.cityID,
                        motherName : this.mather,
                        motherOccupation : this.professionMather,
                        motherPhone : this.PhoneNumberMather,
                        motherPost : this.dutyMather,
                        motherWork : this.organizationMather,
                        name : this.name,
                        Phone : this.Phone,
                        politicalOutlook : this.item.FacesL,
                        postalCode : this.postal,
                        sex : this.item.sexL,
                        signupNumber : this.SerialNumber,
                        signupProvinceAddress : dd,
                        studentType : this.item.ExamineeL,
                        subjectType : this.item.TypeL,
                        weight : this.Weight,
                    }
                    // console.log(data);
                    aa(data);
               }
            },
        }
    </script>

    <style scoped>
        .Essent{
            /*width: 900px;*/
            /*margin: 0 0 0 100px;*/
            background: white;
            overflow: hidden;
            padding: 10px;
        }
        ul li{
            list-style: none;
        }
        .ui-breadcrumbs{
            margin: 0;
            padding: 0;
            color: #333;
        }
        .ui-breadcrumb{
            font-size: 0;
            padding: 0;
            width: 250px;
        }
        .ui-breadcrumb li{
            padding: 8px 4px;
            color: #333;
            font-size: 14px;
            display: inline-block;
            vertical-align: top;
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
            font-size: 14px;
            display: inline-block;
        }
        .ui-box {
            zoom: 1;
            font-size: 12px;
            margin: 0;
            padding: 0;
            border-bottom: 0;
            /*box-shadow: 0 1px 2px #dadad8;*/
            background: white;
        }
        .ui-box-head {
            border-bottom: 1px solid #ccc;
            /*margin-left: 330px;*/
            /*position: relative;*/
            padding-bottom: 5px;
            height: 26px;
            margin-left: 13px;
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
        .element{
             border-bottom: dotted 1px;
        }
        .ui-box a {
            color: #09f;
        }
        a {
            color: #333;
            text-decoration: none;
        }
        .ui-box-container {
            background: #fff;
            padding: 10px 0;
        }
        form {
            display: block;
            margin-top: 0;
        }
        .ui-form-item {
            padding: 0 5px 6px 0;
            zoom: 1;
            width: 100%;
            /*float: left;*/
            /*padding-right: 300px;*/
        }
        .m_top10 {
            margin-top: 10px;
        }
        .ui-form-explain {
            margin: 0;
            padding: 8px 0 0;
            font-size: 12px;
            color: #999;
        }
        .ui-label {
            float: left;
            width: 200px;
            /*margin-left: 190px;*/
            padding-top: 5px;
            text-align: right;
            font-size: 14px;
        }
        .ui-form-text {
            font-size: 14px;
            word-wrap: break-word;
            word-break: break-all;
            display: inline-block;
            margin-top: 5px;
            *display: inline;
            *zoom: 1;
            width: 270px;
        }
        .ui-form-required {
            color: red;
            font-family: SimSun;
            font-size: 14px;
            margin-right: 6px;
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
        .ui-form-explain {
            margin: 0;
            padding: 8px 0 0;
            font-size: 12px;
            color: #999;
        }
        .ui-form-item .ui-input {
            color: #595959;
            width: 176px;
            margin-top: 4px;
            vertical-align: middle;
            *vertical-align: -5px;
        }
        .jbxxjtbox {
            /*width: 588px;*/
            /*padding: 4px 10px;*/
            border: 1px solid #CCC;
            margin: 4px 0;
            overflow: hidden;
        }
        tbody {
            display: table-row-group;
            vertical-align: middle;
            border-color: inherit;
        }
        tr {
            display: table-row;
            vertical-align: inherit;
            border-color: inherit;
        }
        table td, table th {
            word-wrap: break-word;
            word-break: break-all;
        }
        .jbxxjtbox .ui-input {
            width: 118px;
            margin-top: 0;
        }
        .jbxxjtbox select {
            margin-top: 0;
        }
        .ui-form-item input {
            vertical-align: middle;
            width: 70px;
            height: 30px;
        }
        .ui-button-lorange {
            height: 32px;
        }
        .ui-button-lceladon{
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
