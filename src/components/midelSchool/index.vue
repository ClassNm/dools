<template>
    <div class="School">
        <div class="ui-breadcrumbs">
            <ul class="ui-breadcrumb ">
                <li> <a href="https://gaokao.chsi.com.cn/zzbm/stu/">首页</a> </li>
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
                    <span style="color:#c30;">注意：</span>如果选不到自己的中学，请“<a href="https://gaokao.chsi.com.cn/zzbm/stu/feedback/list.action"><font color="blue">在线反馈</font></a>”。
                </p>
            </div>
            <div class="ui-box-container">
                <form action="updateXyxx.action" method="post" id="form_step" class="addsubmittip" novalidate="novalidate">
                    <div class="ui-form-item" style="border-bottom:1px dotted #ccc; margin-bottom:6px;">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>学籍所在中学：</strong></label>
                        <select id="xjxxszdSslist" class="ignoreselect" onchange="initXxXjsList('xjxxszdSslist', 'xjxxszdXjslist', 'xjxxszdDqlist', 'xjxxszdXxlist', '', '', '');">
                            <option value="">请选择</option>
                            <option value="110000">北京市</option><option value="120000">天津市</option><option value="130000" selected="selected">河北省</option><option value="140000">山西省</option><option value="150000">内蒙古自治区</option><option value="210000">辽宁省</option><option value="220000">吉林省</option><option value="230000">黑龙江省</option><option value="310000">上海市</option><option value="320000">江苏省</option><option value="330000">浙江省</option><option value="340000">安徽省</option><option value="350000">福建省</option><option value="360000">江西省</option><option value="370000">山东省</option><option value="410000">河南省</option><option value="420000">湖北省</option><option value="430000">湖南省</option><option value="440000">广东省</option><option value="450000">广西壮族自治区</option><option value="460000">海南省</option><option value="500000">重庆市</option><option value="510000">四川省</option><option value="520000">贵州省</option><option value="530000">云南省</option><option value="540000">西藏自治区</option><option value="610000">陕西省</option><option value="620000">甘肃省</option><option value="630000">青海省</option><option value="640000">宁夏回族自治区</option><option value="650000">新疆维吾尔自治区</option><option value="710000">台湾省</option><option value="810000">香港特别行政区</option><option value="820000">澳门特别行政区</option><option value="990000">其他</option></select>
                        <select id="xjxxszdXjslist" class="ignoreselect" onchange="initXxDqList('xjxxszdSslist', 'xjxxszdXjslist', 'xjxxszdDqlist', 'xjxxszdXxlist', '', '');">
                            <option value="">请选择</option>
                            <option value="130100">石家庄市</option><option value="130200" selected="selected">唐山市</option><option value="130300">秦皇岛市</option><option value="130400">邯郸市</option><option value="130500">邢台市</option><option value="130600">保定市</option><option value="130700">张家口市</option><option value="130800">承德市</option><option value="130900">沧州市</option><option value="131000">廊坊市</option><option value="131100">衡水市</option></select>
                        <select id="xjxxszdDqlist" class="ignoreselect" onchange="initXxList('xjxxszdSslist', 'xjxxszdXjslist', 'xjxxszdDqlist', 'xjxxszdXxlist', '');">
                            <option value="">请选择</option>
                            <option value="130201">市辖区</option><option value="130202">路南区</option><option value="130203" selected="selected">路北区</option><option value="130204">古冶区</option><option value="130205">开平区</option><option value="130207">丰南区</option><option value="130208">丰润区</option><option value="130209">曹妃甸区</option><option value="130223">滦县</option><option value="130224">滦南县</option><option value="130225">乐亭县</option><option value="130227">迁西县</option><option value="130229">玉田县</option><option value="130281">遵化市</option><option value="130283">迁安市</option></select>
                        <select id="xjxxszdXxlist" name="xyxxVO.xjxxDm">
                            <option value="">请选择</option>
                            <option value="1302030010013413013059341">唐山市第十一中学</option><option value="1302030010013613000618365">唐山市公共关系学校</option><option value="1302030010053613000518362">唐山市路北区成人教育中心学校</option><option value="1302030010123613000526364">唐山市路北区教师进修学校</option><option value="1302030010173613000256362">唐山工程技术学校</option><option value="1302030010183613000519362">唐山中华职业学校</option><option value="1302030020013613000578362">唐山市艺术学校</option><option value="1302030020023413013057341">唐山第十中学</option><option value="1302030020093613000581364">唐山市农业广播电视学校</option><option value="1302030020133613000258362">唐山市体育运动学校</option><option value="1302030020173413000132342">唐山光厚高中学校</option><option value="1302030020173413013060341">唐山市开滦第一中学</option><option value="1302030030203613000600362">唐山市职业教育中心</option><option value="1302030030233613000524362">唐山长城中等专业学校</option><option value="1302030040013613000517362">唐山市第一职业中等专业学校</option><option value="1302030050204113012787368">唐山工业职业技术学院</option><option value="1302030060013613000586364">唐山市电视中等专业学校</option><option value="1302030080053413000307342">唐山市第十二高级中学</option><option value="1302030100043413013063341">河北唐山外国语学校（唐山八中）</option><option value="1302030100043613000289362">开滦集团有限责任公司职工中等专业学校</option><option value="1302030100044113012785368">唐山职业技术学院</option><option value="1302032002073413000175342">唐山市翔云中学</option><option value="1302032002073413013050342" selected="selected">唐山市第一中学</option><option value="1302032002293613000574362">唐山市对外经济贸易学校</option><option value="1302034502043413000126342">唐山市长宁高级中学</option><option value="1302034502043613000520362">唐山长宁中等专业学校</option><option value="1302034502043613000525362">唐山通远中等专业学校</option><option value="1302034502063613000521362">唐山天成中等专业学校</option></select>
                        <div id="xjxxmc" style="display:none; margin-top:4px;"><div style="float:left;padding-top:6px;">学校名称：</div><input name="xyxxVO.xjxxMc" maxlength="30" id="zxxx_xjxxmc" class="ui-input" type="text"></div>
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>当前就读中学：</strong></label>
                        <select id="xxszdSslist" class="ignoreselect" onchange="initXxXjsList('xxszdSslist', 'xxszdXjslist', 'xxszdDqlist', 'xxszdXxlist', '', '', '');">
                            <option value="">请选择</option>
                            <option value="110000">北京市</option><option value="120000">天津市</option><option value="130000" selected="selected">河北省</option><option value="140000">山西省</option><option value="150000">内蒙古自治区</option><option value="210000">辽宁省</option><option value="220000">吉林省</option><option value="230000">黑龙江省</option><option value="310000">上海市</option><option value="320000">江苏省</option><option value="330000">浙江省</option><option value="340000">安徽省</option><option value="350000">福建省</option><option value="360000">江西省</option><option value="370000">山东省</option><option value="410000">河南省</option><option value="420000">湖北省</option><option value="430000">湖南省</option><option value="440000">广东省</option><option value="450000">广西壮族自治区</option><option value="460000">海南省</option><option value="500000">重庆市</option><option value="510000">四川省</option><option value="520000">贵州省</option><option value="530000">云南省</option><option value="540000">西藏自治区</option><option value="610000">陕西省</option><option value="620000">甘肃省</option><option value="630000">青海省</option><option value="640000">宁夏回族自治区</option><option value="650000">新疆维吾尔自治区</option><option value="710000">台湾省</option><option value="810000">香港特别行政区</option><option value="820000">澳门特别行政区</option><option value="990000">其他</option></select>
                        <select id="xxszdXjslist" class="ignoreselect" onchange="initXxDqList('xxszdSslist', 'xxszdXjslist', 'xxszdDqlist', 'xxszdXxlist', '', '');">
                            <option value="">请选择</option>
                            <option value="130100">石家庄市</option><option value="130200" selected="selected">唐山市</option><option value="130300">秦皇岛市</option><option value="130400">邯郸市</option><option value="130500">邢台市</option><option value="130600">保定市</option><option value="130700">张家口市</option><option value="130800">承德市</option><option value="130900">沧州市</option><option value="131000">廊坊市</option><option value="131100">衡水市</option></select>
                        <select id="xxszdDqlist" class="ignoreselect" onchange="initXxList('xxszdSslist', 'xxszdXjslist', 'xxszdDqlist', 'xxszdXxlist', '');">
                            <option value="">请选择</option>
                            <option value="130201">市辖区</option><option value="130202">路南区</option><option value="130203" selected="selected">路北区</option><option value="130204">古冶区</option><option value="130205">开平区</option><option value="130207">丰南区</option><option value="130208">丰润区</option><option value="130209">曹妃甸区</option><option value="130223">滦县</option><option value="130224">滦南县</option><option value="130225">乐亭县</option><option value="130227">迁西县</option><option value="130229">玉田县</option><option value="130281">遵化市</option><option value="130283">迁安市</option></select>
                        <select id="xxszdXxlist" name="xyxxVO.xxDm">
                            <option value="">请选择</option>
                            <option value="1302030010013413013059341">唐山市第十一中学</option><option value="1302030010013613000618365">唐山市公共关系学校</option><option value="1302030010053613000518362">唐山市路北区成人教育中心学校</option><option value="1302030010123613000526364">唐山市路北区教师进修学校</option><option value="1302030010173613000256362">唐山工程技术学校</option><option value="1302030010183613000519362">唐山中华职业学校</option><option value="1302030020013613000578362">唐山市艺术学校</option><option value="1302030020023413013057341">唐山第十中学</option><option value="1302030020093613000581364">唐山市农业广播电视学校</option><option value="1302030020133613000258362">唐山市体育运动学校</option><option value="1302030020173413000132342">唐山光厚高中学校</option><option value="1302030020173413013060341">唐山市开滦第一中学</option><option value="1302030030203613000600362">唐山市职业教育中心</option><option value="1302030030233613000524362">唐山长城中等专业学校</option><option value="1302030040013613000517362">唐山市第一职业中等专业学校</option><option value="1302030050204113012787368">唐山工业职业技术学院</option><option value="1302030060013613000586364">唐山市电视中等专业学校</option><option value="1302030080053413000307342">唐山市第十二高级中学</option><option value="1302030100043413013063341">河北唐山外国语学校（唐山八中）</option><option value="1302030100043613000289362">开滦集团有限责任公司职工中等专业学校</option><option value="1302030100044113012785368">唐山职业技术学院</option><option value="1302032002073413000175342">唐山市翔云中学</option><option value="1302032002073413013050342" selected="selected">唐山市第一中学</option><option value="1302032002293613000574362">唐山市对外经济贸易学校</option><option value="1302034502043413000126342">唐山市长宁高级中学</option><option value="1302034502043613000520362">唐山长宁中等专业学校</option><option value="1302034502043613000525362">唐山通远中等专业学校</option><option value="1302034502063613000521362">唐山天成中等专业学校</option></select>
                        <div id="xxmc" style="display:none; margin-top:4px;"><div style="float:left;padding-top:6px;">学校名称：</div><input name="xyxxVO.xxMc" maxlength="30" id="zxxx_xxmc" class="ui-input" type="text"></div>
                        <div class="ui-form-explain">
                            如果是复读或借读，请选择复读或借读的学校名称</div>
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>中学级别：</strong></label>
                        <select name="xyxxVO.xxjbDm" id="zxxx_zxjb">
                            <option value="">请选择</option>
                            <option value="00" selected="selected">
                                省级
                            </option>
                            <option value="01">
                                区级
                            </option>
                            <option value="02">
                                市级
                            </option>
                            <option value="03">
                                县级
                            </option>
                            <option value="04">
                                县级以下
                            </option>
                        </select>
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>所在班级：</strong></label>
                        <input name="xyxxVO.bj" id="zxxx_bj" value="14班" maxlength="30" class="ui-input" type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>担任职务：</strong></label>
                        <input name="xyxxVO.zw" id="zxxx_zw" value="学生" maxlength="30" class="ui-input" type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>班主任姓名：</strong></label>
                        <input name="xyxxVO.bzr" id="zxxx_bzr" value="李明" maxlength="30" class="ui-input" type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>班主任联系电话：</strong></label>
                        <input name="xyxxVO.bzrLxdh" id="zxxx_bzrlxdh" value="13315557187" maxlength="30" class="ui-input" type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>中学详细地址：</strong></label>
                        <div style="float:left; padding-top:7px;" id="zxxxdz">河北省唐山市路北区&nbsp;</div><input name="xyxxVO.xxxxdz" id="zxxx_zxxxdz" value="翔云道" maxlength="50" class="ui-input" style="width:200px;" type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>中学邮政编码：</strong></label>
                        <input name="xyxxVO.xxyzbm" id="zxxx_yzbm" value="063000" maxlength="6" class="ui-input" style="width:58px;" type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item" title="如教务处主任、年级组长等">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>主管教学领导姓名：</strong></label>
                        <input name="xyxxVO.xxlxr" id="zxxx_jxld" value="赵广" maxlength="30" class="ui-input" type="text">
                        <p class="ui-form-explain">如教务处主任、年级组长等</p>
                    </div>
                    <div class="ui-form-item" style="border-bottom:1px dotted #ccc; margin-bottom:11px;">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>主管教学领导联系电话：</strong></label>
                        <input name="xyxxVO.xxlxdh" id="zxxx_jxldlxdh" value="13203158821" maxlength="30" class="ui-input" type="text">
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><span class="ui-form-required">*</span><strong>教育经历：</strong></label>
                        <div class="jbxxjtbox">
                            <table width="100%" cellspacing="6" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td colspan="2"><strong>高中一年级：</strong></td>
                                </tr>
                                <tr>
                                    <td width="68" align="right">自</td>
                                    <td><input name="xyjl1VO.start" id="jyjl1start" maxlength="10" value="2015-09-01" class="ui-input" onfocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',maxDate:'#F{$dp.$D(\'jyjl1end\')||\'%y-%M-%d\'}'})" type="text">
                                        至
                                        <input name="xyjl1VO.end" id="jyjl1end" maxlength="10" value="2016-06-30" class="ui-input" onfocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'jyjl1start\')}',maxDate:'%y-%M-%d'})" type="text">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">就读于
                                    </td>
                                    <td><select id="jl1Sslist" class="ignoreselect" onchange="initXxXjsList('jl1Sslist', 'jl1Xjslist', 'jl1Dqlist', 'jl1Xxlist', '', '', '');">
                                        <option value="">请选择</option>
                                        <option value="110000">北京市</option><option value="120000">天津市</option><option value="130000" selected="selected">河北省</option><option value="140000">山西省</option><option value="150000">内蒙古自治区</option><option value="210000">辽宁省</option><option value="220000">吉林省</option><option value="230000">黑龙江省</option><option value="310000">上海市</option><option value="320000">江苏省</option><option value="330000">浙江省</option><option value="340000">安徽省</option><option value="350000">福建省</option><option value="360000">江西省</option><option value="370000">山东省</option><option value="410000">河南省</option><option value="420000">湖北省</option><option value="430000">湖南省</option><option value="440000">广东省</option><option value="450000">广西壮族自治区</option><option value="460000">海南省</option><option value="500000">重庆市</option><option value="510000">四川省</option><option value="520000">贵州省</option><option value="530000">云南省</option><option value="540000">西藏自治区</option><option value="610000">陕西省</option><option value="620000">甘肃省</option><option value="630000">青海省</option><option value="640000">宁夏回族自治区</option><option value="650000">新疆维吾尔自治区</option><option value="710000">台湾省</option><option value="810000">香港特别行政区</option><option value="820000">澳门特别行政区</option><option value="990000">其他</option></select>
                                        <select id="jl1Xjslist" class="ignoreselect" onchange="initXxDqList('jl1Sslist', 'jl1Xjslist', 'jl1Dqlist', 'jl1Xxlist', '', '');">
                                            <option value="">请选择</option>
                                            <option value="130100">石家庄市</option><option value="130200" selected="selected">唐山市</option><option value="130300">秦皇岛市</option><option value="130400">邯郸市</option><option value="130500">邢台市</option><option value="130600">保定市</option><option value="130700">张家口市</option><option value="130800">承德市</option><option value="130900">沧州市</option><option value="131000">廊坊市</option><option value="131100">衡水市</option></select>
                                        <select id="jl1Dqlist" class="ignoreselect" onchange="initXxList('jl1Sslist', 'jl1Xjslist', 'jl1Dqlist', 'jl1Xxlist', '');">
                                            <option value="">请选择</option>
                                            <option value="130201">市辖区</option><option value="130202">路南区</option><option value="130203" selected="selected">路北区</option><option value="130204">古冶区</option><option value="130205">开平区</option><option value="130207">丰南区</option><option value="130208">丰润区</option><option value="130209">曹妃甸区</option><option value="130223">滦县</option><option value="130224">滦南县</option><option value="130225">乐亭县</option><option value="130227">迁西县</option><option value="130229">玉田县</option><option value="130281">遵化市</option><option value="130283">迁安市</option></select>
                                        <br>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">&nbsp;</td>
                                    <td><div style="float:left;"><select id="jl1Xxlist" name="xyjl1VO.xxDm">
                                        <option value="">请选择</option>
                                        <option value="1302030010013413013059341">唐山市第十一中学</option><option value="1302030010013613000618365">唐山市公共关系学校</option><option value="1302030010053613000518362">唐山市路北区成人教育中心学校</option><option value="1302030010123613000526364">唐山市路北区教师进修学校</option><option value="1302030010173613000256362">唐山工程技术学校</option><option value="1302030010183613000519362">唐山中华职业学校</option><option value="1302030020013613000578362">唐山市艺术学校</option><option value="1302030020023413013057341">唐山第十中学</option><option value="1302030020093613000581364">唐山市农业广播电视学校</option><option value="1302030020133613000258362">唐山市体育运动学校</option><option value="1302030020173413000132342">唐山光厚高中学校</option><option value="1302030020173413013060341">唐山市开滦第一中学</option><option value="1302030030203613000600362">唐山市职业教育中心</option><option value="1302030030233613000524362">唐山长城中等专业学校</option><option value="1302030040013613000517362">唐山市第一职业中等专业学校</option><option value="1302030050204113012787368">唐山工业职业技术学院</option><option value="1302030060013613000586364">唐山市电视中等专业学校</option><option value="1302030080053413000307342">唐山市第十二高级中学</option><option value="1302030100043413013063341">河北唐山外国语学校（唐山八中）</option><option value="1302030100043613000289362">开滦集团有限责任公司职工中等专业学校</option><option value="1302030100044113012785368">唐山职业技术学院</option><option value="1302032002073413000175342">唐山市翔云中学</option><option value="1302032002073413013050342" selected="selected">唐山市第一中学</option><option value="1302032002293613000574362">唐山市对外经济贸易学校</option><option value="1302034502043413000126342">唐山市长宁高级中学</option><option value="1302034502043613000520362">唐山长宁中等专业学校</option><option value="1302034502043613000525362">唐山通远中等专业学校</option><option value="1302034502063613000521362">唐山天成中等专业学校</option></select></div>
                                        <div id="jl1xxmc" style="display:none; float:left; padding-left:10px;">学校名称：<input name="xyjl1VO.xxMc" id="zxxx_jy_xxmc1" class="ui-input" type="text"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">证明人</td>
                                    <td><input name="xyjl1VO.zmr" id="zxxx_jy_zmr1" value="李明" maxlength="30" class="ui-input" type="text">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="height:30px; border-top:1px dotted #ccc;"><strong>高中二年级：</strong></td>
                                </tr>
                                <tr>
                                    <td align="right">自</td>
                                    <td><input name="xyjl2VO.start" id="jyjl2start" maxlength="10" value="2016-09-01" class="ui-input" onfocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',maxDate:'#F{$dp.$D(\'jyjl2end\')||\'%y-%M-%d\'}'})" type="text">
                                        至
                                        <input name="xyjl2VO.end" id="jyjl2end" maxlength="10" value="2017-06-30" class="ui-input" onfocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'jyjl2start\')}',maxDate:'%y-%M-%d'})" type="text">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">就读于</td>
                                    <td>
                                        <select id="jl2Sslist" class="ignoreselect" onchange="initXxXjsList('jl2Sslist', 'jl2Xjslist', 'jl2Dqlist', 'jl2Xxlist', '', '', '');">
                                            <option value="">请选择</option>
                                            <option value="110000">北京市</option><option value="120000">天津市</option><option value="130000" selected="selected">河北省</option><option value="140000">山西省</option><option value="150000">内蒙古自治区</option><option value="210000">辽宁省</option><option value="220000">吉林省</option><option value="230000">黑龙江省</option><option value="310000">上海市</option><option value="320000">江苏省</option><option value="330000">浙江省</option><option value="340000">安徽省</option><option value="350000">福建省</option><option value="360000">江西省</option><option value="370000">山东省</option><option value="410000">河南省</option><option value="420000">湖北省</option><option value="430000">湖南省</option><option value="440000">广东省</option><option value="450000">广西壮族自治区</option><option value="460000">海南省</option><option value="500000">重庆市</option><option value="510000">四川省</option><option value="520000">贵州省</option><option value="530000">云南省</option><option value="540000">西藏自治区</option><option value="610000">陕西省</option><option value="620000">甘肃省</option><option value="630000">青海省</option><option value="640000">宁夏回族自治区</option><option value="650000">新疆维吾尔自治区</option><option value="710000">台湾省</option><option value="810000">香港特别行政区</option><option value="820000">澳门特别行政区</option><option value="990000">其他</option></select>
                                        <select id="jl2Xjslist" class="ignoreselect" onchange="initXxDqList('jl2Sslist', 'jl2Xjslist', 'jl2Dqlist', 'jl2Xxlist', '', '');">
                                            <option value="">请选择</option>
                                            <option value="130100">石家庄市</option><option value="130200" selected="selected">唐山市</option><option value="130300">秦皇岛市</option><option value="130400">邯郸市</option><option value="130500">邢台市</option><option value="130600">保定市</option><option value="130700">张家口市</option><option value="130800">承德市</option><option value="130900">沧州市</option><option value="131000">廊坊市</option><option value="131100">衡水市</option></select>
                                        <select id="jl2Dqlist" class="ignoreselect" onchange="initXxList('jl2Sslist', 'jl2Xjslist', 'jl2Dqlist', 'jl2Xxlist', '');">
                                            <option value="">请选择</option>
                                            <option value="130201">市辖区</option><option value="130202">路南区</option><option value="130203" selected="selected">路北区</option><option value="130204">古冶区</option><option value="130205">开平区</option><option value="130207">丰南区</option><option value="130208">丰润区</option><option value="130209">曹妃甸区</option><option value="130223">滦县</option><option value="130224">滦南县</option><option value="130225">乐亭县</option><option value="130227">迁西县</option><option value="130229">玉田县</option><option value="130281">遵化市</option><option value="130283">迁安市</option></select>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">&nbsp;</td>
                                    <td><div style="float:left"><select id="jl2Xxlist" name="xyjl2VO.xxDm">
                                        <option value="">请选择</option>
                                        <option value="1302030010013413013059341">唐山市第十一中学</option><option value="1302030010013613000618365">唐山市公共关系学校</option><option value="1302030010053613000518362">唐山市路北区成人教育中心学校</option><option value="1302030010123613000526364">唐山市路北区教师进修学校</option><option value="1302030010173613000256362">唐山工程技术学校</option><option value="1302030010183613000519362">唐山中华职业学校</option><option value="1302030020013613000578362">唐山市艺术学校</option><option value="1302030020023413013057341">唐山第十中学</option><option value="1302030020093613000581364">唐山市农业广播电视学校</option><option value="1302030020133613000258362">唐山市体育运动学校</option><option value="1302030020173413000132342">唐山光厚高中学校</option><option value="1302030020173413013060341">唐山市开滦第一中学</option><option value="1302030030203613000600362">唐山市职业教育中心</option><option value="1302030030233613000524362">唐山长城中等专业学校</option><option value="1302030040013613000517362">唐山市第一职业中等专业学校</option><option value="1302030050204113012787368">唐山工业职业技术学院</option><option value="1302030060013613000586364">唐山市电视中等专业学校</option><option value="1302030080053413000307342">唐山市第十二高级中学</option><option value="1302030100043413013063341">河北唐山外国语学校（唐山八中）</option><option value="1302030100043613000289362">开滦集团有限责任公司职工中等专业学校</option><option value="1302030100044113012785368">唐山职业技术学院</option><option value="1302032002073413000175342">唐山市翔云中学</option><option value="1302032002073413013050342" selected="selected">唐山市第一中学</option><option value="1302032002293613000574362">唐山市对外经济贸易学校</option><option value="1302034502043413000126342">唐山市长宁高级中学</option><option value="1302034502043613000520362">唐山长宁中等专业学校</option><option value="1302034502043613000525362">唐山通远中等专业学校</option><option value="1302034502063613000521362">唐山天成中等专业学校</option></select></div>
                                        <div id="jl2xxmc" style="display:none; float:left; padding-left:10px;">学校名称：<input name="xyjl2VO.xxMc" id="zxxx_jy_xxmc2" class="ui-input" type="text"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">证明人</td>
                                    <td>
                                        <input name="xyjl2VO.zmr" id="zxxx_jy_zmr2" value="李明" maxlength="30" class="ui-input" type="text">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="height:30px; border-top:1px dotted #ccc;"><strong>高中三年级：</strong></td>
                                </tr>
                                <tr>
                                    <td align="right">自</td>
                                    <td>
                                        <input name="xyjl3VO.start" id="jyjl3start" maxlength="10" value="2017-09-01" class="ui-input" onfocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',maxDate:'#F{$dp.$D(\'jyjl3end\')||\'%y-%M-%d\'}'})" type="text">
                                        至
                                        <input name="xyjl3VO.end" id="jyjl3end" maxlength="10" value="2017-12-06" class="ui-input" onfocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'jyjl3start\')}'})" type="text">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">就读于</td>
                                    <td>
                                        <select id="jl3Sslist" class="ignoreselect" onchange="initXxXjsList('jl3Sslist', 'jl3Xjslist', 'jl3Dqlist', 'jl3Xxlist', '', '', '');">
                                            <option value="">请选择</option>
                                            <option value="110000">北京市</option><option value="120000">天津市</option><option value="130000" selected="selected">河北省</option><option value="140000">山西省</option><option value="150000">内蒙古自治区</option><option value="210000">辽宁省</option><option value="220000">吉林省</option><option value="230000">黑龙江省</option><option value="310000">上海市</option><option value="320000">江苏省</option><option value="330000">浙江省</option><option value="340000">安徽省</option><option value="350000">福建省</option><option value="360000">江西省</option><option value="370000">山东省</option><option value="410000">河南省</option><option value="420000">湖北省</option><option value="430000">湖南省</option><option value="440000">广东省</option><option value="450000">广西壮族自治区</option><option value="460000">海南省</option><option value="500000">重庆市</option><option value="510000">四川省</option><option value="520000">贵州省</option><option value="530000">云南省</option><option value="540000">西藏自治区</option><option value="610000">陕西省</option><option value="620000">甘肃省</option><option value="630000">青海省</option><option value="640000">宁夏回族自治区</option><option value="650000">新疆维吾尔自治区</option><option value="710000">台湾省</option><option value="810000">香港特别行政区</option><option value="820000">澳门特别行政区</option><option value="990000">其他</option></select>
                                        <select id="jl3Xjslist" class="ignoreselect" onchange="initXxDqList('jl3Sslist', 'jl3Xjslist', 'jl3Dqlist', 'jl3Xxlist', '', '');">
                                            <option value="">请选择</option>
                                            <option value="130100">石家庄市</option><option value="130200" selected="selected">唐山市</option><option value="130300">秦皇岛市</option><option value="130400">邯郸市</option><option value="130500">邢台市</option><option value="130600">保定市</option><option value="130700">张家口市</option><option value="130800">承德市</option><option value="130900">沧州市</option><option value="131000">廊坊市</option><option value="131100">衡水市</option></select>
                                        <select id="jl3Dqlist" class="ignoreselect" onchange="initXxList('jl3Sslist', 'jl3Xjslist', 'jl3Dqlist', 'jl3Xxlist', '');">
                                            <option value="">请选择</option>
                                            <option value="130201">市辖区</option><option value="130202">路南区</option><option value="130203" selected="selected">路北区</option><option value="130204">古冶区</option><option value="130205">开平区</option><option value="130207">丰南区</option><option value="130208">丰润区</option><option value="130209">曹妃甸区</option><option value="130223">滦县</option><option value="130224">滦南县</option><option value="130225">乐亭县</option><option value="130227">迁西县</option><option value="130229">玉田县</option><option value="130281">遵化市</option><option value="130283">迁安市</option></select>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">&nbsp;</td>
                                    <td><div style="float:left"><select id="jl3Xxlist" name="xyjl3VO.xxDm">
                                        <option value="">请选择</option>
                                        <option value="1302030010013413013059341">唐山市第十一中学</option><option value="1302030010013613000618365">唐山市公共关系学校</option><option value="1302030010053613000518362">唐山市路北区成人教育中心学校</option><option value="1302030010123613000526364">唐山市路北区教师进修学校</option><option value="1302030010173613000256362">唐山工程技术学校</option><option value="1302030010183613000519362">唐山中华职业学校</option><option value="1302030020013613000578362">唐山市艺术学校</option><option value="1302030020023413013057341">唐山第十中学</option><option value="1302030020093613000581364">唐山市农业广播电视学校</option><option value="1302030020133613000258362">唐山市体育运动学校</option><option value="1302030020173413000132342">唐山光厚高中学校</option><option value="1302030020173413013060341">唐山市开滦第一中学</option><option value="1302030030203613000600362">唐山市职业教育中心</option><option value="1302030030233613000524362">唐山长城中等专业学校</option><option value="1302030040013613000517362">唐山市第一职业中等专业学校</option><option value="1302030050204113012787368">唐山工业职业技术学院</option><option value="1302030060013613000586364">唐山市电视中等专业学校</option><option value="1302030080053413000307342">唐山市第十二高级中学</option><option value="1302030100043413013063341">河北唐山外国语学校（唐山八中）</option><option value="1302030100043613000289362">开滦集团有限责任公司职工中等专业学校</option><option value="1302030100044113012785368">唐山职业技术学院</option><option value="1302032002073413000175342">唐山市翔云中学</option><option value="1302032002073413013050342" selected="selected">唐山市第一中学</option><option value="1302032002293613000574362">唐山市对外经济贸易学校</option><option value="1302034502043413000126342">唐山市长宁高级中学</option><option value="1302034502043613000520362">唐山长宁中等专业学校</option><option value="1302034502043613000525362">唐山通远中等专业学校</option><option value="1302034502063613000521362">唐山天成中等专业学校</option></select></div>
                                        <div id="jl3xxmc" style="display:none; float:left; padding-left:10px;">学校名称：<input name="xyjl3VO.xxMc" id="zxxx_jy_xxmc3" class="ui-input" type="text"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">证明人</td>
                                    <td>
                                        <input name="xyjl3VO.zmr" id="zxxx_jy_zmr3" value="李明" maxlength="30" class="ui-input" type="text">
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item">
                        <label for="" class="ui-label"><strong>备选教育经历：</strong></label>
                        <div class="ui-form-explain">如果高中某一年曾在两个中学受过教育，可在此进行补充说明。</div>
                        <div class="jbxxjtbox">
                            <table class="forclearbxjyjl" width="100%" cellspacing="6" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td colspan="3">
                                        <select name="bxjl1VO.bxjlDm" class="ignoreselect">
                                            <option value="" selected="selected">请选择</option>
                                            <option value="0">高中一年级</option>
                                            <option value="1">高中二年级</option>
                                            <option value="2">高中三年级</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="68" align="right">自</td>
                                    <td colspan="2"><input name="bxjl1VO.start" id="bxjl1start" maxlength="10" class="ui-input" onfocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',maxDate:'#F{$dp.$D(\'bxjl1end\')||\'%y-%M-%d\'}'})" type="text">
                                        至
                                        <input name="bxjl1VO.end" id="bxjl1end" maxlength="10" class="ui-input" onfocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'bxjl1start\')}'})" type="text">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">就读于
                                    </td>
                                    <td colspan="2"><select id="bx1Sslist" class="ignoreselect" onchange="initXxXjsList('bx1Sslist', 'bx1Xjslist', 'bx1Dqlist', 'bx1Xxlist', '', '', '');">
                                        <option value="" selected="selected">请选择</option>
                                        <option value="110000">北京市</option><option value="120000">天津市</option><option value="130000">河北省</option><option value="140000">山西省</option><option value="150000">内蒙古自治区</option><option value="210000">辽宁省</option><option value="220000">吉林省</option><option value="230000">黑龙江省</option><option value="310000">上海市</option><option value="320000">江苏省</option><option value="330000">浙江省</option><option value="340000">安徽省</option><option value="350000">福建省</option><option value="360000">江西省</option><option value="370000">山东省</option><option value="410000">河南省</option><option value="420000">湖北省</option><option value="430000">湖南省</option><option value="440000">广东省</option><option value="450000">广西壮族自治区</option><option value="460000">海南省</option><option value="500000">重庆市</option><option value="510000">四川省</option><option value="520000">贵州省</option><option value="530000">云南省</option><option value="540000">西藏自治区</option><option value="610000">陕西省</option><option value="620000">甘肃省</option><option value="630000">青海省</option><option value="640000">宁夏回族自治区</option><option value="650000">新疆维吾尔自治区</option><option value="710000">台湾省</option><option value="810000">香港特别行政区</option><option value="820000">澳门特别行政区</option><option value="990000">其他</option></select>
                                        <select id="bx1Xjslist" class="ignoreselect" onchange="initXxDqList('bx1Sslist', 'bx1Xjslist', 'bx1Dqlist', 'bx1Xxlist', '', '');">
                                            <option value="" selected="selected">请选择</option>
                                        </select>
                                        <select id="bx1Dqlist" class="ignoreselect" onchange="initXxList('bx1Sslist', 'bx1Xjslist', 'bx1Dqlist', 'bx1Xxlist', '');">
                                            <option value="" selected="selected">请选择</option>
                                        </select>
                                        <br>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">&nbsp;</td>
                                    <td colspan="2"><div style="float:left;"><select id="bx1Xxlist" name="bxjl1VO.xxDm">
                                        <option value="" selected="selected">请选择</option>
                                    </select></div>
                                        <div id="bx1xxmc" style="display:none; float:left; padding-left:10px;">学校名称：<input name="bxjl1VO.xxMc" id="zxxx_jybx_xxmc1" class="ui-input" type="text"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">证明人</td>
                                    <td><input name="bxjl1VO.zmr" id="zxxx_jybx_zmr1" maxlength="30" class="ui-input" type="text">
                                    </td>
                                    <td width="40"><a href="#" class="clearbxjyjl">清空</a></td>
                                </tr>
                                </tbody>
                            </table>
                            <table class="forclearbxjyjl" style="border-top:1px dotted #ccc;" width="100%" cellspacing="6" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td colspan="3" valign="bottom">
                                        <select name="bxjl2VO.bxjlDm" class="ignoreselect">
                                            <option value="" selected="selected">请选择</option>
                                            <option value="0">高中一年级</option>
                                            <option value="1">高中二年级</option>
                                            <option value="2">高中三年级</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="68" align="right">自</td>
                                    <td colspan="2"><input name="bxjl2VO.start" id="bxjl2start" maxlength="10" class="ui-input" onfocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',maxDate:'#F{$dp.$D(\'bxjl2end\')||\'%y-%M-%d\'}'})" type="text">
                                        至
                                        <input name="bxjl2VO.end" id="bxjl2end" maxlength="10" class="ui-input" onfocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'bxjl2start\')}'})" type="text">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">就读于</td>
                                    <td colspan="2">
                                        <select id="bx2Sslist" class="ignoreselect" onchange="initXxXjsList('bx2Sslist', 'bx2Xjslist', 'bx2Dqlist', 'bx2Xxlist', '', '', '');">
                                            <option value="" selected="selected">请选择</option>
                                            <option value="110000">北京市</option><option value="120000">天津市</option><option value="130000">河北省</option><option value="140000">山西省</option><option value="150000">内蒙古自治区</option><option value="210000">辽宁省</option><option value="220000">吉林省</option><option value="230000">黑龙江省</option><option value="310000">上海市</option><option value="320000">江苏省</option><option value="330000">浙江省</option><option value="340000">安徽省</option><option value="350000">福建省</option><option value="360000">江西省</option><option value="370000">山东省</option><option value="410000">河南省</option><option value="420000">湖北省</option><option value="430000">湖南省</option><option value="440000">广东省</option><option value="450000">广西壮族自治区</option><option value="460000">海南省</option><option value="500000">重庆市</option><option value="510000">四川省</option><option value="520000">贵州省</option><option value="530000">云南省</option><option value="540000">西藏自治区</option><option value="610000">陕西省</option><option value="620000">甘肃省</option><option value="630000">青海省</option><option value="640000">宁夏回族自治区</option><option value="650000">新疆维吾尔自治区</option><option value="710000">台湾省</option><option value="810000">香港特别行政区</option><option value="820000">澳门特别行政区</option><option value="990000">其他</option></select>
                                        <select id="bx2Xjslist" class="ignoreselect" onchange="initXxDqList('bx2Sslist', 'bx2Xjslist', 'bx2Dqlist', 'bx2Xxlist', '', '');">
                                            <option value="" selected="selected">请选择</option>
                                        </select>
                                        <select id="bx2Dqlist" class="ignoreselect" onchange="initXxList('bx2Sslist', 'bx2Xjslist', 'bx2Dqlist', 'bx2Xxlist', '');">
                                            <option value="" selected="selected">请选择</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">&nbsp;</td>
                                    <td colspan="2"><div style="float:left"><select id="bx2Xxlist" name="bxjl2VO.xxDm">
                                        <option value="" selected="selected">请选择</option>
                                    </select></div>
                                        <div id="bx2xxmc" style="display:none; float:left; padding-left:10px;">学校名称：<input name="bxjl2VO.xxMc" id="zxxx_bx_xxmc2" class="ui-input" type="text"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">证明人</td>
                                    <td>
                                        <input name="bxjl2VO.zmr" id="zxxx_bx_zmr2" maxlength="30" class="ui-input" type="text">
                                    </td>
                                    <td width="40"><a href="#" class="clearbxjyjl">清空</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p class="ui-form-explain"></p>
                    </div>
                    <div class="ui-form-item m_top10">
                        <input class="ui-button ui-button-lorange"
                               value="保存"
                               type="submit"
                               style=" width: 44px;height: 31px">
                        &nbsp;&nbsp;
                        <input class="ui-button ui-button-lceladon" value="取消"
                               onclick="javascript:history.go(-1);"
                               type="button"
                                style=" width: 44px;height: 31px"
                        >
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

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
