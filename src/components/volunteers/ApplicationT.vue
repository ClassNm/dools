<template>
    <div>
        <headerT></headerT>
        <div class="ui-box-container zystepcnt">
            <div class="ui-tiptext-container ui-tiptext-container-message m_bottom10">
                <p class="ui-tiptext ui-tiptext-message">
                    <i class="ui-tiptext-icon iconfont" title="提示"></i>
                     {{verify}}。
                    <a href="javascript:;" target="_blank">{{look}}</a>
                </p>
            </div>
            <div class="ui-tiptext-container ui-tiptext-container-wait m_bottom10">
                <p class="ui-tiptext ui-tiptext-warning">
                    <i class="ui-tiptext-icon iconfont" title="提示"></i>
                    {{verifyL}}！&nbsp;&nbsp;<a href="javascript:;">{{add}}</a><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{verifyLL}}！&nbsp;&nbsp;<a href="javascript:;">{{addL}}</a>
                </p>
            </div>
            <div class="zhiysqbt">
                {{schoolName}}
                {{title}}
            </div>
            <div class="zhiysqbtsub" style="overflow:visible;position:relative">
                <div class="zhiysqbtl">
                    报名号：{{number}}<br>
                    报名类型及一志愿类别：{{type}}
                </div>
                <div class="zhiysqbtr">
                    <div style="float: right;">
                        <img
                                src="../../../public/111.jpg"
                                height="37px"
                                width="250px"
                        >
                    </div>
                    <div style="float: right;">申请表编号：</div>
                </div>
            </div>
            <table class="zhiysqb" cellspacing="0" cellpadding="0" border="0">
                <colgroup><col width="80">
                    <col width="60">
                    <col width="125">
                    <col width="155">
                    <col width="70">
                    <col width="120">
                    <col width="">
                </colgroup><tbody><tr>
                <th colspan="7">基本信息</th>
            </tr>
            <tr>
                <td class="zhiysqbtdt">姓名</td>
                <td colspan="3">{{name}}</td>
                <td class="zhiysqbtdt" style="white-space: nowrap">手机号码</td>
                <td>{{PhoneN}}</td>
                <td rowspan="5">
                    <div class="text_center">
                        <img id="imgPhoto"
                             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551785549153&di=6de16ead21019d093bc84929b88091a1&imgtype=0&src=http%3A%2F%2Fwww.t-chs.com%2FtuhsaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90ZnNjb20vaTQvNzQ2NzQ1NTcxL1RCMlZiRkVmTDZIOEtKankwRmpYWGFYZXBYYV8hITc0Njc0NTU3MSQ5.jpg" width="120">
                    </div>
                </td>
            </tr>
            <tr>
                <td class="zhiysqbtdt">性别</td>
                <td>{{sex}}</td>
                <td class="zhiysqbtdt">证件号码</td>
                <td style="white-space:nowrap">{{IDNumber}}</td>
                <td class="zhiysqbtdt">出生日期</td>
                <td>{{birth}}</td>
            </tr>
            <tr>
                <td class="zhiysqbtdt">政治面貌</td>
                <td colspan="3">{{face}}</td>
                <td class="zhiysqbtdt">民族</td>
                <td>{{nation}}</td>
            </tr>
            <tr>
                <td class="zhiysqbtdt">是否色盲</td>
                <td style="white-space: nowrap">{{achromatopsia}}</td>
                <td class="zhiysqbtdt" style="white-space: nowrap">身高(cm)/体重(kg)</td>
                <td>
                   {{Height}}
                </td>
                <td class="zhiysqbtdt">裸眼视力</td>
                <td>
                    {{vision}}
                </td>
            </tr>
            <tr>
                <td class="zhiysqbtdt" style="white-space: nowrap">高考报名号</td>
                <td colspan="3">{{mark}}</td>
                <td class="zhiysqbtdt">考生类型</td>
                <td>{{typeS}}</td>
            </tr>
            <tr>
                <td colspan="2" class="zhiysqbtdt">高考报名所在地</td>
                <td colspan="5">{{home}}</td>
            </tr>
            <tr>
                <td class="zhiysqbtdt">外语语种</td>
                <td colspan="2">{{language}}</td>
                <td class="zhiysqbtdt">学科类型</td>
                <td>{{typeStudy}}</td>
                <td class="zhiysqbtdt">联系电话</td>
                <td>{{telephone}}</td>
            </tr>
            <tr>
                <td class="zhiysqbtdt">联系地址</td>
                <td colspan="6">{{contact}}</td>
            </tr>
            <tr>
                <td class="zhiysqbtdt">父亲信息</td>
                <td colspan="6">
                   {{father}}
                </td>
            </tr>
            <tr>
                <td class="zhiysqbtdt">母亲信息</td>
                <td colspan="6">
                   {{mather}}</td>
            </tr>
            </tbody></table>
            <table class="zhiysqb" cellspacing="0" cellpadding="0" border="0">
                <colgroup><col width="130">
                    <col width="90">
                    <col width="90">
                    <col width="140">
                    <col width="90">
                    <col width="">
                </colgroup><tbody><tr>
                <th colspan="6">中学信息</th>
            </tr>
            <tr>
                <td class="zhiysqbtdt">学籍所在中学</td>
                <td colspan="5">{{census}}</td>
            </tr>
            <tr>
                <td class="zhiysqbtdt">当前就读中学</td>
                <td colspan="5">{{middleSchool}}</td>
            </tr>
            <tr>
                <td class="zhiysqbtdt">中学详细地址</td>
                <td colspan="5">{{inDetail}}</td>
            </tr>
            <tr>
                <td class="zhiysqbtdt">中学级别</td>
                <td>{{rank}}</td>
                <td class="zhiysqbtdt">所在班级</td>
                <td>{{classL}}</td>
                <td class="zhiysqbtdt">担任职务</td>
                <td>{{post}}</td>
            </tr>
            <tr>
                <td class="zhiysqbtdt">班主任信息</td>
                <td colspan="5">{{teacher}}</td>
            </tr>
            <tr>
                <td class="zhiysqbtdt">主管教学领导信息</td>
                <td colspan="5">{{lead}}</td>
            </tr>
            <tr>
                <td rowspan="3" class="zhiysqbtdt">教育经历</td>
                <td>高中一年级</td>
                <td colspan="4">{{Seniortime}}
                    &nbsp;&nbsp;&nbsp;&nbsp;证明人：
                    {{SeniorPeople}}
                    <br>
                    {{SeniorSite}}</td>
            </tr>
            <tr>
                <td>高中二年级</td>
                <td colspan="4">{{SeniortimeT}}
                    &nbsp;&nbsp;&nbsp;&nbsp;证明人：
                    {{SeniorPeopleT}}
                    <br>
                    {{SeniorSiteT}}</td>
            </tr>
            <tr>
                <td>高中三年级</td>
                <td colspan="4">{{SeniortimeL}}
                    &nbsp;&nbsp;&nbsp;&nbsp;证明人：
                    {{SeniorPeopleL}}
                    <br>
                    {{SeniorSiteL}}</td>
            </tr>
            </tbody></table>
            <table class="zhiysqb zhiysqbcj">
                <colgroup><col width="70">
                    <col width="70">
                    <col width="70">
                    <col width="70">
                    <col width="70">
                    <col width="70">
                    <col width="70">
                </colgroup><tbody><tr>
                <th colspan="7">成绩信息</th>
            </tr>
            <!-- 表单学校分类 -->
            <tr>
                <td class="zhiysqbtdt"> </td>
                <td class="zhiysqbtdt" v-for="(item,i) in Hschool" :key="i">{{item.schoolLLL}}</td>
                <!-- <td class="zhiysqbtdt">高一上</td>
                <td class="zhiysqbtdt">高一下</td>
                <td class="zhiysqbtdt">高二上</td>
                <td class="zhiysqbtdt">高二下</td>
                <td class="zhiysqbtdt">高三上</td>
                <td class="zhiysqbtdt">学业水平</td> -->
            </tr>
            <!-- 语文 -->
            <tr>
                <td class="zhiysqbtdt">{{language}}</td>
                <td v-for="(item,i) in languageL" :key="i">{{item.value}}</td>
                <!-- <td>132/150</td>
                <td>130/150</td>
                <td>130/150</td>
                <td>132/150</td>
                <td>132/150</td>
                <td>A/A</td> -->
            </tr>
            <!-- 数学 -->
            <tr>
                <td class="zhiysqbtdt">{{mathematics}}</td>
                <td v-for="(item,i) in mathematicsL" :key="i">{{item.value}}</td>
                <!-- <td>132/150</td>
                <td>132/150</td>
                <td>132/150</td>
                <td>132/150</td>
                <td>132/150</td>
                <td>A/A</td> -->
            </tr>
            <!-- 外语 -->
            <tr>
                <td class="zhiysqbtdt">{{languages}}</td>
                <td v-for="(item,i) in languagesL" :key="i">{{item.value}}</td>
                <!-- <td>132/150</td>
                <td>132/150</td>
                <td>132/150</td>
                <td>132/150</td>
                <td>132/150</td>
                <td>A/A</td> -->
            </tr>
            <!-- 政治 -->
            <tr>
                <td class="zhiysqbtdt">{{politics}}</td>
                <td v-for="(item,i) in politicsL" :key="i">{{item.value}}</td>
                <!-- <td>90/100</td>
                <td>90/100</td>
                <td>/</td>
                <td>/</td>
                <td>/</td>
                <td>A/A</td> -->
            </tr>
            <!-- 历史 -->
            <tr>
                <td class="zhiysqbtdt">{{history}}</td>
                <td v-for="(item,i) in historyL" :key="i">{{item.value}}</td>
                <!-- <td>90/100</td>
                <td>90/100</td>
                <td>/</td>
                <td>/</td>
                <td>/</td>
                <td>A/A</td> -->
            </tr>
            <!-- 地理 -->
            <tr>
                <td class="zhiysqbtdt">{{geography}}</td>
                <td v-for="(item,i) in geographyL" :key="i">{{item.value}}</td>
                <!-- <td>90/100</td>
                <td>90/100</td>
                <td>/</td>
                <td>/</td>
                <td>/</td>
                <td>A/A</td> -->
            </tr>
            <!-- 物理 -->
            <tr>
                <td class="zhiysqbtdt">{{physics}}</td>
                <td v-for="(item,i) in physicsL" :key="i">{{item.value}}</td>
                <!-- <td>90/100</td>
                <td>90/100</td>
                <td>90/100</td>
                <td>90/100</td>
                <td>90/100</td>
                <td>A/A</td> -->
            </tr>
            <!-- 化学 -->
            <tr>
                <td class="zhiysqbtdt">{{chemistry}}</td>
                <td v-for="(item,i) in chemistryL" :key="i">{{item.value}}</td>
                <!-- <td>90/100</td>
                <td>90/100</td>
                <td>90/100</td>
                <td>90/100</td>
                <td>90/100</td>
                <td>A/A</td> -->
            </tr>
            <!-- 生物 -->
            <tr>
                <td class="zhiysqbtdt">{{biology}}</td>
                <td v-for="(item,i) in biologyL" :key="i">{{item.value}}</td>
                <!-- <td>90/100</td>
                <td>90/100</td>
                <td>90/100</td>
                <td>90/100</td>
                <td>90/100</td>
                <td>A/A</td> -->
            </tr>
            <!-- 美术 -->
            <tr>
                <td class="zhiysqbtdt">{{arts}}</td>
                <td v-for="(item,i) in artsL" :key="i">{{item.value}}</td>
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>合格/合格</td> -->
            </tr>
            <!-- 体育 -->
            <tr>
                <td class="zhiysqbtdt">{{sports}}</td>
                <td v-for="(item,i) in sportsL" :key="i">{{item.value}}</td>
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>合格/合格</td> -->
            </tr>
            <!-- 音乐 -->
            <tr>
                <td class="zhiysqbtdt">{{music}}</td>
                <td v-for="(item,i) in musicL" :key="i">{{item.value}}</td>
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>合格/合格</td> -->
            </tr>
            <!-- 信息技术  -->
            <tr>
                <td class="zhiysqbtdt">{{IT}}</td>
                <td v-for="(item,i) in ITL" :key="i">{{item.value}}</td>
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>合格/合格</td> -->
            </tr>
            <!-- 通用技术 -->
            <tr>
                <td class="zhiysqbtdt">{{technique}}</td>
                <td v-for="(item,i) in techniqueL" :key="i">{{item.value}}</td>
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>合格/合格</td> -->
            </tr>
            <!-- 文科综合 -->
            <tr>
                <td class="zhiysqbtdt">{{comprehensive}}</td>
                <td v-for="(item,i) in comprehensiveL" :key="i">{{item.value}}</td>
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
            </tr>
            <!-- 理科综合 -->
            <tr>
                <td class="zhiysqbtdt">{{integrated}}</td>
                <td v-for="(item,i) in integratedL" :key="i">{{item.value}}</td>
                <!-- <td>/</td> -->
                <!-- <td>/</td> -->
                <!-- <td>250/300</td> -->
                <!-- <td>250/300</td> -->
                <!-- <td>250/300</td> -->
                <!-- <td>/</td> -->
            </tr>
            <!-- 总分 -->
            <tr>
                <td class="zhiysqbtdt">{{total}}</td>
                <td v-for="(item,i) in totalL" :key="i">{{item.value}}</td>
                <!-- <td>936/1050</td> -->
                <!-- <td>934/1050</td> -->
                <!-- <td>664/750</td> -->
                <!-- <td>666/750</td> -->
                <!-- <td>666/750</td> -->
                <!-- <td></td> -->
            </tr>
            <!-- 年级排名 -->
            <tr>
                <td class="zhiysqbtdt">{{Grade}}</td>
                <td v-for="(item,i) in GradeL" :key="i">{{item.value}}</td>
                <!-- <td>20</td> -->
                <!-- <td>20</td> -->
                <!-- <td>20</td> -->
                <!-- <td>20</td> -->
                <!-- <td>20</td> -->
                <!-- <td></td> -->
            </tr>
            <!-- 年级人数    -->
            <tr>
                <td class="zhiysqbtdt">{{numbergrade}}</td>
                <td v-for="(item,i) in numbergradeL" :key="i">{{item.value}}</td>
                <!-- <td>1000</td> -->
                <!-- <td>1000</td> -->
                <!-- <td>1000</td> -->
                <!-- <td>1000</td> -->
                <!-- <td>1000</td> -->
                <!-- <td></td> -->
            </tr>
            </tbody></table>
            <!-- 志愿信息 -->
            <table class="zhiysqb" cellspacing="0" cellpadding="0" border="0">
                <colgroup><col width="115">
                    <col width="260">
                    <col width="70">
                    <col width="120">
                    <col width="100">
                    <col width="">
                </colgroup><tbody><tr>
                <th colspan="6">志愿信息</th>
            </tr>
            <!-- 报名学习 -->
            <tr>
                <td class="zhiysqbtdt">学校名称</td>
                <td>北京科技大学</td>
                <td class="zhiysqbtdt">报名类型</td>
                <td>自主招生</td>
                <td class="zhiysqbtdt">是否服从调剂</td>
                <td> 否</td>
            </tr>
            <!-- 专业 -->
            <tr>
                <td class="zhiysqbtdt">专业</td>
                <td colspan="5">
                   {{gold}}
                    <br>
                    {{materials}}
                    <br>
                   {{computers}}
                    <br>
                    {{automate}}
                    <br>
                    {{mechanical}}
                    <br>
                   {{communication}}
                    <br>
                </td>
            </tr>
            <!-- 具备的报名条件 -->
            <tr>
                <td class="zhiysqbtdt">具备的报名条件</td>
                <td colspan="5">
                   {{applicationCondition}}；
                    <br>
                </td>
            </tr>
            </tbody></table>
            <!-- 综合信息 -->
            <table class="zhiysqb" cellspacing="0" cellpadding="0" border="0">  
                <tbody><tr>
                    <th>综合信息</th>
                </tr>
                <tr>
                    <td><strong>高中期间参与的社会活动</strong></td>
                </tr>
                <tr>
                    <td>{{world}}</td>
                </tr>
                <tr>
                    <td><strong>高中期间的获奖记录</strong></td>
                </tr>
                <tr>
                    <td>{{carry}}</td>
                </tr>
                <tr>
                    <td><strong>高中期间获得的专利</strong></td>
                </tr>
                <tr>
                    <td>{{patents}}</td>
                </tr>
                </tbody></table>
            <table class="zhiysqb" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                    <th>推荐专家</th>
                </tr>
                <tr>
                    <td>{{expert}}</td>
                </tr>
                </tbody></table>
            <table class="zhiysqb" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                    <th>推荐中学</th>
                </tr>
                <tr>
                    <td>{{RecommendSchool}}</td>
                </tr>
                </tbody></table>
            <table class="zhiysqb" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                    <th>推荐社会团体</th>
                </tr>
                <tr>
                    <td>{{SocialGroups}}</td>
                </tr>
                </tbody></table>
            <table class="zhiysqb" cellspacing="0" cellpadding="0" border="0">
                <colgroup><col width="250">
                    <col width="">
                </colgroup><tbody><tr>
                <th colspan="2">所报志愿的附加要求</th>
            </tr>
            <tr>
                <td>个人陈述</td>
                <td>
                    <span class="color-c30">材料未上传 （此项为必填项）</span>
                </td>
            </tr>
            </tbody></table>
            <div class="text_center">
                <!--<form id="next" name="next" action="" method="post">-->
                    <!--<input name="id" type="hidden" value="hyxwozx97f00uv2l">-->
                    <!--<input name="order" type="hidden" value="9">-->
                    <!--<input id="randamT" name="randamTime" type="hidden" value="1551768739362">-->
                    <!--<input value="下一步" type="submit" class="ui-button ui-button-lceladon m_top10">-->
                <!--</form>-->
                <Button type="primary" class="ui-button ui-button-lceladon m_top10">下一步</Button>
            </div>
        </div>
    </div>
</template>

<script>
    import headerT from '../common/headerT'
    export default {
        data(){
            return {
                schoolName:'',
                // 说明
                verify:"请认真核对申请表中的各项信息，确保所有信息按志愿高校要求填写并且准确无误，信息错误会导致报名无效。申请表里只显示学校要求的模考成绩和单科排名，提示信息（ 以红色文字显示）不会出现在下载版申请表中",
                verifyL:"您没有给当前志愿添加社会活动、获奖记录和专利，只有添加后志愿高校才能看到这三类信息及其证明材料",
                verifyLL:"您没有给当前志愿添加推荐人，志愿高校将无法收到推荐信",
                // 查看志愿填报
                look:" 查看志愿填报说明",
                // 添加推荐人 综合信息
                add:"添加综合信息",
                addL:"添加推荐人",
                // 2018申请表title
                title:"2018年普通自主招生申请表",
                // 报名号
                number:"181000801003396",
                // 报名类型 志愿类别
                type:"自主招生-理工二类",
                // 姓名
                name:"蔡嘉欣",
                // 手机号码
                PhoneN:"13223196675",
                // 性别
                sex:"男",
                // 证件号码
                IDNumber:"210727199004261813",
                // 出生日期
                birth:"1990-04-26",
                // 政治面貌
                face:"中国共产主义青年团团员",
                // 民族
                nation:"蒙古族",
                // 是否色盲
                achromatopsia:"否",
                // 身高体重
                Height:"183/80",
                // 视力
                vision:"1.5/1.5",
                // 高考报名号
                mark:"123456",
                // 考生类型
                typeS:"城镇应届",
                // 高考报名所在地
                home:"河北省 唐山市 路北区",
                // 外语语种
                language:"英语",
                // 学科类型
                typeStudy:"理工",
                // 联系电话
                telephone:"13223196675",
                // 联系地址
                contact:"河北省 唐山市 路北区 和平楼 (邮编 063000)",
                // 父亲信息
                father:"蔡而非 | 13320616911 | 本科 | 公务员 | 水利局 | 主任",
                // 母亲信息
                mather:"苏艾薇 | 13121204045 | 专科 | 无 | 无 | 无",
                // 学籍所在中学
                census:"河北省 唐山市 路北区 唐山市第一中学",
                // 当前就读中学
                middleSchool:"河北省 唐山市 路北区 唐山市第一中学",
                // 中学详细地址	
                inDetail:"河北省 唐山市 路北区 祥云道22号 (邮编063000)",
                // 中学级别
                rank:"省级",
                // 所在班级	
                classL:"高三14班",
                // 担任职务	
                post:"班长",
                // 班主任信息
                teacher:"李志国 | 13031507333",
                // 主管教学领导信息
                lead:"王云涛 | 18716062111",
                // 高中一年级
                Seniortime:"自 2015-09-01 至 2016-06-22",
                SeniorPeople:"刘周颖",
                SeniorSite:"河北省 唐山市 路北区 唐山市第一中学",
                // 高中二年级
                SeniortimeT:"自 2016-09-01 至 2017-06-22",
                SeniorPeopleT:"刘周颖",
                SeniorSiteT:"河北省 唐山市 路北区 唐山市第一中学",
                // 高中仨年级
                SeniortimeL:"自 2017-09-01 至 2018-06-10",
                SeniorPeopleL:"刘周颖",
                SeniorSiteL:"河北省 唐山市 路北区 唐山市第一中学",
                // 成绩信息  学校分类
                Hschool:[
                    {
                        schoolLLL:"高一上"
                    },
                    {
                        schoolLLL:"高一下"
                    },
                    {
                        schoolLLL:"高二上"
                    },
                    {
                        schoolLLL:"高二下"
                    },
                    {
                        schoolLLL:"高三上"
                    },
                    {
                        schoolLLL:"学业水平"
                    },
                ],
                 // 科目 语文
                language:"语文",
                languageL:[
                    // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"132/150",
                    },
                    {
                        value:"130/150",
                    },
                    {
                        value:"130/150",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"A/A",
                    },
                ],
                // 科目 数学
                mathematics:"数学",
                mathematicsL:[
                     // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"132/150",
                    },
                    {
                        value:"130/150",
                    },
                    {
                        value:"130/150",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"A/A",
                    },
                ],
                // 科目 外语
                languages:"外语",
                languagesL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                   { 
                        value:"132/150",
                    },
                    {
                        value:"130/150",
                    },
                    {
                        value:"/",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"A/A",
                    },
                ],
                // 科目 政治
                politics:"政治",
                politicsL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                   { 
                        value:"132/150",
                    },
                    {
                        value:"130/150",
                    },
                    {
                        value:"/",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"A/A",
                    },
                ],
                // 科目 历史
                history:"历史",
                historyL:[
                    { 
                        value:"132/150",
                    },
                    {
                        value:"130/150",
                    },
                    {
                        value:"130/150",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"A/A",
                    },
                ],
                // 科目 地理
                geography:"地理",
                geographyL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"132/150",
                    },
                    {
                        value:"130/150",
                    },
                    {
                        value:"130/150",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"A/A",
                    },
                ],
                // 科目  物理
                physics:"物理",
                physicsL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"132/150",
                    },
                    {
                        value:"130/150",
                    },
                    {
                        value:"130/150",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"A/A",
                    },
                ],
                // 科目 化学
                chemistry:"化学",
                chemistryL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"132/150",
                    },
                    {
                        value:"130/150",
                    },
                    {
                        value:"130/150",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"A/A",
                    },
                ],
                // 科目 生物
                biology:"生物",
                biologyL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"132/150",
                    },
                    {
                        value:"130/150",
                    },
                    {
                        value:"130/150",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"A/A",
                    },
                ],
                // 科目 美术
                arts:"美术",
                artsL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"合格/合格",
                    },
                ],
                // 科目 体育
                sports:"体育",
                sportsL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"合格/合格",
                    },
                ],
                // 科目 音乐
                music:"音乐",
                musicL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"合格/合格",
                    },
                ],
                 // 科目 信息技术
                IT:"信息技术",
                ITL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                ],
                 // 科目 通用技术
                technique:"通用技术",
                techniqueL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    }
                ],
                // 科目 文科综合	
                comprehensive:"文科综合",
                comprehensiveL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                   { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    }
                ],
                // 科目 理科综合	
                integrated:"理科综合",
                integratedL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    }
                ],
                // 科目 总分	
                total:"总分",
                totalL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    }
                ],
                // 科目 年级排名		
                Grade:"年级排名",
                GradeL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                   { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    }
                ],
                // 科目 年级人数			
                numbergrade:"年级人数",
                numbergradeL:[
                      // 分别对应第一次成绩 第二次成绩 第三次成绩
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    { 
                        value:"/",
                    },
                    {
                        value:"/",
                    },
                    {
                        value:"/",
                    }
                ],
                // 志愿信息 专业
                gold:"理工二类-冶金工程",
                materials:"理工一类-材料科学与工程 ",
                computers:"理工一类-计算机类",
                automate:"理工一类-自动化类",
                mechanical:"理工一类-机械类",
                communication:"理工一类-通信工程",
                // 报名条件
                applicationCondition:"高中阶段获得全国奥林匹克竞赛（数学、物理、化学、生物、信息学）省级赛区二等奖（含）以上奖励者",
                // 高中期间参与的社会活动
                world:"无",
                // 高中期间的获奖记录
                carry:"没有",
                // 高中期间获得的专利
                patents:"无",
                // 推荐专家
                expert:"无",
                // 推荐中学
                RecommendSchool:"无",
                // 推荐社会团体
                SocialGroups:"",
            }
        },
        components:{
            headerT
        },
        mounted() {
            this.schoolName = this.$route.query.schoolName
        },
    }
</script>

<style scoped>
    .zystepcnt {
        margin-top: -1px;
        border: 1px solid #ddd;
        padding: 10px 10px 15px 10px;
        clear: both;
        zoom: 1;
    }
    .ui-box-container {
        background: #fff;
        padding: 10px 0;
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
    .m_bottom10 {
        margin-bottom: 10px;
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
    a {
        color: #333;
        text-decoration: none;
    }
    .ui-tiptext-container-wait {
        border: 1px solid #fae3cc;
        background: #FFF9D9;
    }
    .ui-tiptext {
        margin: 0;
        color: #4D4D4D;
        position: relative;
        font-size: 12px;
        zoom: 1;
    }
    .zhiysqbt {
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        padding: 10px 0;
    }
    .zhiysqbtsub {
        width: 700px;
        margin: 0 auto;
        margin-bottom: 0px;
        margin-bottom: 8px;
        font-size: 12px;
        line-height: 22px;
        overflow: hidden;
        clear: both;
    }
    .zhiysqbtl {
        float: left;
        text-align: left;
        display: inline;
        width: 370px;
    }
    .zhiysqbtr {
        float: right;
        display: inline;
        width: 330px;
        text-align: right;
    }
    img {
        border: 0;
    }
    .zhiysqb {
        width: 700px;
        margin: -1px auto 0 auto;
        border-collapse: collapse;
        clear: both;
    }
    .zhiysqb th {
        border: 1px solid #ccc;
        background: #F9F9F9;
        padding: 4px 6px;
        font-size: 16px;
        font-weight: 700;
        text-align: left;
    }
    .zhiysqb td.zhiysqbtdt {
        color: #999;
    }
    .zhiysqb td {
        border: 1px solid #ccc;
        padding: 4px 6px;
        text-align: left;
    }
    .text_center {
        text-align: center;
        padding: 0;
    }
    .zhiysqbcj td.zhiysqbtdt {
        color: #999;
        padding: 4px 6px;
        text-align: center;
    }
    .zhiysqbcj td {
        padding: 4px 2px;
        text-align: right;
    }
    .color-c30 {
        color: #c30;
    }
    .text_center {
        text-align: center;
        padding: 0;
        margin-top: 10px;
    }
    .ui-button-lceladon {
        height: 32px;
    }





</style>