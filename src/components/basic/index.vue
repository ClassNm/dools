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
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><strong>姓名：</strong></label>
                            <p class="ui-form-text" style="margin-right: 470px;width: 100px;">
                                格学教育
                            </p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><strong>证件号码：</strong></label>
                            <p class="ui-form-text" id="zjhm" style="margin-right: 390px;width: 140px;">
                                411381201902186111
                            </p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><strong>手机号码：</strong></label>
                            <p class="ui-form-text" style="margin-right: 450px;width: 100px;">
                                4000180810
                            </p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>性别：</strong></label>
                            <select name="jbxxVO.xbDm" id="jbxx_xb" style="margin-right: 460px;">
                                <option value=""  selected="selected">请选择</option>
                                <option value="1">男</option>
                                <option value="2">女</option>
                            </select>
                            <p class="ui-form-explain" id="zjhmInfo"></p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>出生日期：</strong></label>
                            <p class="ui-form-text" style="margin-right: 450px;width: 100px;">
                                2019-02-26
                            </p>
                            <p class="ui-form-explain"></p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>民族：</strong></label>
                            <select name="jbxxVO.mzDm" id="jbxx_mz" style="margin-right: 390px;width: 140px;">
                                <option value="" selected="selected">请选择</option>
                                <option value="01">汉族</option>
                                <option value="02">蒙古族</option>
                                <option value="03">回族</option>
                                <option value="04">藏族</option>
                                <option value="05">维吾尔族</option>
                                <option value="06">苗族</option>
                                <option value="07">彝族</option>
                                <option value="08">壮族</option>
                                <option value="09">布依族</option>
                                <option value="10">朝鲜族</option>
                                <option value="11">满族</option>
                                <option value="12">侗族</option>
                                <option value="13">瑶族</option>
                                <option value="14">白族</option>
                                <option value="15">土家族</option>
                                <option value="16">哈尼族</option>
                                <option value="17">哈萨克族</option>
                                <option value="18">傣族</option>
                                <option value="19">黎族</option>
                                <option value="20">傈僳族</option>
                                <option value="21">佤族</option>
                                <option value="22">畲族</option>
                                <option value="23">高山族</option>
                                <option value="24">拉祜族</option>
                                <option value="25">水族</option>
                                <option value="26">东乡族</option>
                                <option value="27">纳西族</option>
                                <option value="28">景颇族</option>
                                <option value="29">柯尔克孜族</option>
                                <option value="30">土族</option>
                                <option value="31">达斡尔族</option>
                                <option value="32">仫佬族</option>
                                <option value="33">羌族</option>
                                <option value="34">布朗族</option>
                                <option value="35">撒拉族</option>
                                <option value="36">毛南族</option>
                                <option value="37">仡佬族</option>
                                <option value="38">锡伯族</option>
                                <option value="39">阿昌族</option>
                                <option value="40">普米族</option>
                                <option value="41">塔吉克族</option>
                                <option value="42">怒族</option>
                                <option value="43">乌孜别克族</option>
                                <option value="44">俄罗斯族</option>
                                <option value="45">鄂温克族</option>
                                <option value="46">德昂族</option>
                                <option value="47">保安族</option>
                                <option value="48">裕固族</option>
                                <option value="49">京族</option>
                                <option value="50">塔塔尔族</option>
                                <option value="51">独龙族</option>
                                <option value="52">鄂伦春族</option>
                                <option value="53">赫哲族</option>
                                <option value="54">门巴族</option>
                                <option value="55">珞巴族</option>
                                <option value="56">基诺族</option>
                                <option value="97">其他</option>
                                <option value="98">外国血统中国籍人士</option>
                            </select>
                            <p class="ui-form-explain"></p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>政治面貌：</strong></label>
                            <select name="jbxxVO.zzmmDm" id="jbxx_zzmm" style="margin-right: 390px;width: 140px;">
                                <option value="" selected="selected">请选择</option>
                                <option value="01">中国共产党党员</option>
                                <option value="02">中国共产党预备党员</option>
                                <option value="03">中国共产主义青年团团员</option>
                                <option value="04">中国国民党革命委员会会员</option>
                                <option value="05">中国民主同盟盟员</option>
                                <option value="06">中国民主建国会会员</option>
                                <option value="07">中国民主促进会会员</option>
                                <option value="08">中国农工民主党党员</option>
                                <option value="09">中国致公党党员</option>
                                <option value="10">九三学社社员</option>
                                <option value="11">台湾民主自治同盟盟员</option>
                                <option value="12">无党派民主人士</option>
                                <option value="13">群众</option>
                            </select>
                            <p class="ui-form-explain"></p>
                        </div>
                        <div class="ui-form-item" style="margin-left: 73px">
                            <span class="ui-form-explain">请查看学校招生简章，如果报考专业对视力、是否色盲、身高、体重有要求，则必须填写。</span>
                        </div>
                        <div class="ui-form-item" title="视力标准为 0.1-1.5（或 4.0-5.2）">
                            <label for="" class="ui-label"><strong>裸眼视力（左/右）：</strong></label>
                            <div style="margin-right: 400px">
                                <input name="jbxxVO.sll" class="ui-input" style="width:58px;" maxlength="6" type="text"> / <input name="jbxxVO.slr" class="ui-input" style="width:58px;" maxlength="6" type="text">
                            </div>
                            <p class="ui-form-explain" style="margin-right: 150px">视力标准为 0.1-1.5（或 4.0-5.2）</p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><strong>是否色盲：</strong></label>
                            <select name="jbxxVO.sm" style="margin-right: 460px;">
                                <option value="" selected="selected">请选择</option>
                                <option value="0">非色盲</option>
                                <option value="1">色盲</option>
                                <option value="2">色弱</option>
                            </select>
                            <p class="ui-form-explain"></p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><strong>身高(cm)：</strong></label>
                            <input name="jbxxVO.sg" value="" maxlength="3" class="ui-input" style="width:58px;margin-right: 470px;" type="text">
                            <p class="ui-form-explain"></p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><strong>体重(kg)：</strong></label>
                            <input name="jbxxVO.tz" value="" maxlength="3" class="ui-input" style="width:58px;margin-right: 470px" type="text">
                            <p class="ui-form-explain"></p>
                        </div>
                        <div class="ui-form-item" title="">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>高考报名所在地：</strong></label>
                            <!--<select id="bmszdSslist" class="ignoreselect" onchange="initBmszdXjsList('bmszdSslist', 'bmszdXjslist', 'bmszdDqlist', '', '');initKlList();">-->
                            <div style="margin-right: 245px">
                                <select id="bmszdSslist" class="ignoreselect">
                                    <option value="" selected="selected">请选择</option>
                                    <option value="110000">北京市</option><option value="120000">天津市</option><option value="130000">河北省</option><option value="140000">山西省</option><option value="150000">内蒙古自治区</option><option value="210000">辽宁省</option><option value="220000">吉林省</option><option value="230000">黑龙江省</option><option value="310000">上海市</option><option value="320000">江苏省</option><option value="330000">浙江省</option><option value="340000">安徽省</option><option value="350000">福建省</option><option value="360000">江西省</option><option value="370000">山东省</option><option value="410000">河南省</option><option value="420000">湖北省</option><option value="430000">湖南省</option><option value="440000">广东省</option><option value="450000">广西壮族自治区</option><option value="460000">海南省</option><option value="500000">重庆市</option><option value="510000">四川省</option><option value="520000">贵州省</option><option value="530000">云南省</option><option value="540000">西藏自治区</option><option value="610000">陕西省</option><option value="620000">甘肃省</option><option value="630000">青海省</option><option value="640000">宁夏回族自治区</option><option value="650000">新疆维吾尔自治区</option><option value="710000">台湾省</option><option value="810000">香港特别行政区</option><option value="820000">澳门特别行政区</option><option value="990000">其他</option></select>
                                <!--<select id="bmszdXjslist" class="ignoreselect" onchange="initBmszdDqList('bmszdSslist', 'bmszdXjslist', 'bmszdDqlist', '');">-->
                                <select id="bmszdXjslist" class="ignoreselect">
                                    <option value="" selected="selected">请选择</option>
                                    <option value="130100">石家庄市</option><option value="130200">唐山市</option><option value="130300">秦皇岛市</option><option value="130400">邯郸市</option><option value="130500">邢台市</option><option value="130600">保定市</option><option value="130700">张家口市</option><option value="130800">承德市</option><option value="130900">沧州市</option><option value="131000">廊坊市</option><option value="131100">衡水市</option></select>
                                <select id="bmszdDqlist" name="jbxxVO.bmszdDm">
                                    <option value="" selected="selected">请选择</option>
                                    <option value="130201">市辖区</option><option value="130202">路南区</option><option value="130203">路北区</option><option value="130204">古冶区</option><option value="130205">开平区</option><option value="130207">丰南区</option><option value="130208">丰润区</option><option value="130209">曹妃甸区</option><option value="130223">滦县</option><option value="130224">滦南县</option><option value="130225">乐亭县</option><option value="130227">迁西县</option><option value="130229">玉田县</option><option value="130281">遵化市</option><option value="130283">迁安市</option></select>
                            </div>
                            <p class="ui-form-explain" style="margin-left: 66px">填写高考报名时的户籍所在地，应与参加高考录取的省（区、市）保持一致</p>
                        </div>
                        <div class="ui-form-item" title="请填写14位高考报名号(全国统一编号)">
                            <label for="" class="ui-label"><strong>高考报名号：</strong></label>
                            <input name="jbxxVO.gkbmh" maxlength="32" class="ui-input" type="text" v-model="SerialNumber" style="margin-right: 350px">
                            <p class="ui-form-explain" style="margin-right: 130px">请填写14位高考报名号(全国统一编号)</p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>考生类型：</strong></label>
                            <select name="jbxxVO.kslxDm" id="jbxx_kslx" style="margin-right: 450px">
                                <option value="" selected="selected">请选择</option>
                                <option value="01">农村应届</option>
                                <option value="02">农村往届</option>
                                <option value="03">城镇应届</option>
                                <option value="04">城镇往届</option>
                            </select>
                            <p class="ui-form-explain"></p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>外语语种：</strong></label>
                            <select name="jbxxVO.wyyzDm" id="jbxx_wyyz" style="margin-right: 440px">
                                <option value="" selected="selected">请选择</option>
                                <option value="0">不应试外语</option>
                                <option value="1">英语</option>
                                <option value="2">俄语</option>
                                <option value="3">日语</option>
                                <option value="4">德语</option>
                                <option value="5">法语</option>
                                <option value="6">西班牙语</option>
                                <option value="7">其他外语</option>
                            </select>
                            <p class="ui-form-explain"></p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">
                                *
                            </span>
                                <strong>
                                    学科类型：
                                </strong>
                            </label>
                            <select name="jbxxVO.xklbDm" id="jbxx_xklx" style="margin-right: 450px">
                                <option value="" selected="selected">请选择</option>
                                <option value="1">文史</option>
                                <option value="5">理工</option>
                                <option value="Z" disabled="disabled">综合改革</option>
                            </select>
                            <p class="ui-form-explain" style="margin-left: 170px">
                                高考报名所在地为上海、浙江的考生，请选择“综合改革”。其他省份的考生请选择“文科”或“理科”
                            </p>
                        </div>
                        <div class="ui-form-item">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>联系电话：</strong></label>
                            <input name="jbxxVO.lxdh" id="jbxx_lxdh" v-model="PhoneNumber" maxlength="30" class="ui-input" type="text" style="margin-right: 350px">
                            <p class="ui-form-explain"></p>
                        </div>
                        <div class="ui-form-item" title="最多可输入50个字符；地址请写明街道名称、门牌号码、楼层和房间号等信息">
                            <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>联系地址：</strong></label>
                            <!--<select id="txdzSslist" class="ignoreselect" onchange="initXjsList('txdzSslist', 'txdzXjslist', 'txdzDqlist', '', '');">-->
                            <div style="margin-right: 250px">
                                <select id="txdzSslist" class="ignoreselect">
                                    <option value="" selected="selected">请选择</option>
                                    <option value="110000">北京市</option><option value="120000">天津市</option><option value="130000">河北省</option><option value="140000">山西省</option><option value="150000">内蒙古自治区</option><option value="210000">辽宁省</option><option value="220000">吉林省</option><option value="230000">黑龙江省</option><option value="310000">上海市</option><option value="320000">江苏省</option><option value="330000">浙江省</option><option value="340000">安徽省</option><option value="350000">福建省</option><option value="360000">江西省</option><option value="370000">山东省</option><option value="410000">河南省</option><option value="420000">湖北省</option><option value="430000">湖南省</option><option value="440000">广东省</option><option value="450000">广西壮族自治区</option><option value="460000">海南省</option><option value="500000">重庆市</option><option value="510000">四川省</option><option value="520000">贵州省</option><option value="530000">云南省</option><option value="540000">西藏自治区</option><option value="610000">陕西省</option><option value="620000">甘肃省</option><option value="630000">青海省</option><option value="640000">宁夏回族自治区</option><option value="650000">新疆维吾尔自治区</option><option value="710000">台湾省</option><option value="810000">香港特别行政区</option><option value="820000">澳门特别行政区</option><option value="990000">其他</option></select>
                                <!--<select id="txdzXjslist" class="ignoreselect" onchange="initDqList('txdzSslist', 'txdzXjslist', 'txdzDqlist', '');">-->
                                <select id="txdzXjslist" class="ignoreselect">
                                    <option value="" selected="selected">请选择</option>
                                    <option value="130100">石家庄市</option><option value="130200">唐山市</option><option value="130300">秦皇岛市</option><option value="130400">邯郸市</option><option value="130500">邢台市</option><option value="130600">保定市</option><option value="130700">张家口市</option><option value="130800">承德市</option><option value="130900">沧州市</option><option value="131000">廊坊市</option><option value="131100">衡水市</option></select>
                                <select id="txdzDqlist" name="jbxxVO.txdzDm">
                                    <option value="" selected="selected">请选择</option>
                                    <option value="130201">市辖区</option><option value="130202">路南区</option><option value="130203">路北区</option><option value="130204">古冶区</option><option value="130205">开平区</option><option value="130207">丰南区</option><option value="130208">丰润区</option><option value="130209">曹妃甸区</option><option value="130223">滦县</option><option value="130224">滦南县</option><option value="130225">乐亭县</option><option value="130227">迁西县</option><option value="130229">玉田县</option><option value="130281">遵化市</option><option value="130283">迁安市</option></select>
                            </div>
                            <br><input name="jbxxVO.txdzXxdz" id="jbxx_xxdz"
                                       value="" maxlength="50"
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
                                   value=""
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
                                            <input name="faInfoVO.xm" id="faname" class="ui-input valid" value="" maxlength="30" type="text" aria-required="true" aria-invalid="false">
                                        </td>
                                        <td align="right">联系电话</td>
                                        <td>
                                            <input name="faInfoVO.lxdh" id="jbxx_fa_lxdh" class="ui-input valid" value="" maxlength="30" aria-invalid="false" type="text">
                                        </td>
                                        <td align="right">文化程度</td>
                                        <td>
                                            <select name="faInfoVO.whcdDm" id="jbxx_fa_whcd">
                                                <option value="" selected="selected">请选择</option>
                                                <option value="01">博士</option>
                                                <option value="02">硕士</option>
                                                <option value="03">本科</option>
                                                <option value="04">专科</option>
                                                <option value="05">高中及以下</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">职业</td>
                                        <td>
                                            <input name="faInfoVO.zy" id="jbxx_fa_zy" class="ui-input valid" value="" maxlength="30" type="text" aria-required="true" aria-invalid="false">
                                        </td>
                                        <td align="right">工作单位</td>
                                        <td><input name="faInfoVO.dw" id="jbxx_fa_dw" class="ui-input" value="" maxlength="30" type="text">
                                        </td>
                                        <td align="right">职务</td>
                                        <td><input name="faInfoVO.zw" id="jbxx_fa_zw" class="ui-input" value="" maxlength="30" type="text">
                                        </td>
                                    </tr>
                                    </tbody></table>
                                <table cellspacing="8" cellpadding="0" border="0">
                                    <tbody><tr>
                                        <td align="right">母亲姓名</td>
                                        <td>
                                            <input name="maInfoVO.xm" id="maname" class="ui-input valid" value="" maxlength="30" type="text" aria-required="true" aria-invalid="false">
                                        </td>
                                        <td align="right">联系电话</td>
                                        <td>
                                            <input name="maInfoVO.lxdh" id="jbxx_ma_lxdh" class="ui-input valid" value="" maxlength="30" aria-invalid="false" type="text" aria-required="true">
                                        </td>
                                        <td align="right">文化程度</td>
                                        <td>
                                            <select name="maInfoVO.whcdDm" id="jbxx_ma_whcd">
                                                <option value="" selected="selected">请选择</option>
                                                <option value="01">博士</option>
                                                <option value="02">硕士</option>
                                                <option value="03">本科</option>
                                                <option value="04">专科</option>
                                                <option value="05">高中及以下</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">职业</td>
                                        <td>
                                            <input name="maInfoVO.zy" id="jbxx_ma_zy" class="ui-input valid" value="" maxlength="30" type="text" aria-required="true" aria-invalid="false">
                                        </td>
                                        <td align="right">工作单位</td>
                                        <td><input name="maInfoVO.dw" id="jbxx_ma_dw" class="ui-input" value="" maxlength="30" type="text">
                                        </td>
                                        <td align="right">职务</td>
                                        <td><input name="maInfoVO.zw" id="jbxx_ma_zw" class="ui-input" value="" maxlength="30" type="text">
                                        </td>
                                    </tr>
                                    </tbody></table>
                            </div>
                            <p class="ui-form-explain" style="margin-left: 66px">请根据实际情况填写家庭信息。如果没有，各项请填 “无”，文化程度请选择 “请选择”</p>
                        </div>
                        <div class="ui-form-item m_top10">
                            <Button type="warning">保存</Button>
                            &nbsp;&nbsp;
                            <Button type="primary" onclick="javascript:history.go(-1);">取消</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </template>

    <script>
        export default {
            data() {
                return {
                    SerialNumber: '',
                    PhoneNumber:''
                }
            },
            methods:{
                add(){
                    // let obj = {
                    //     SerialNumber: this.SerialNumber,
                    //     PhoneNumber: this.PhoneNumber
                    // };
                    this.$store.commit('GET_APP_NAME','this.SerialNumber')
                }
            }
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
