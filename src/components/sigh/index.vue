<template>
    <div class="lable">
        <div class="about">
            <div class="zero">
                <p align="left">
                    1、报名前请仔细查看
                    <a href="https://gaokao.chsi.com.cn/gkxx/kp/tsbmsysm.shtml">报名系统使用说明</a>
                    、 <a href="https://gaokao.chsi.com.cn/help/wb.jsp">常见问题</a>、相关学校的招生简章和
                    <a href="https://gaokao.chsi.com.cn/zzbm/xxgk/">已发布的信息</a>；
                </p>
                <p align="left">
                    2、填报志愿完成后，志愿学校可能会发送消息或短信给您，请注意查看“我的消息”栏目，并确保手机号可用；
                </p>
                <p align="left">
                    3、请确保所填信息及上传材料的真实性，如有不实，将会影响您的报名；
                </p>
            </div>
            <div class="instructions">
                <p class="apply ">
                    自主招生报名须知
                </p>
                <h3 style="color: red;margin-top: 10px;">(本系统为模拟填报系统，自主招生报名请登录阳光高考平台进行申报，本系统仅做练习使用)</h3>
                <div class="store">
                    <p class="message">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        报名信息须由考生本人准确填写，考生本人对报名提供的所有申请材料（包括但不限于学习成绩、证书、发明、专利、论文等）内容的真实性、合法性、原创性负责。
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        高校自主招生考核，是国家教育考试的组成部分。对在自主招生中提供虚假个人信息或申请材料等违规行为， 将认定为在国家教育考试中作弊，
                        <strong>取消今年自主招生的报名、考试和录取资格</strong>，同时通报有关省级招生考试机构或教育行政部门
                        <strong>取消今年高考报名、考试和录取资格，并视情节轻重给予3年内暂停参加各类国家教育考试的处理</strong>。
                    </p>
                </div>

            </div>
            <div class="require">
                <input
                        class="ui-button"
                        type="button"
                        value="您已阅读并知悉相关要求"
                        disabled="disabled"
                        style="color:#F00">
            </div>
        </div>
    </div>

</template>
<!--    about  居中 margin  0  auto-->

<style scoped>
    .lable{
        background: white;
    }
    .about{
        background: white;
        padding: 10px 10px;
        display: block;
        width: 790px;
        height: 424px;
    }
    .zero{
        border: 1px solid #ccc;
        color: #666;
        display: block;
        padding: 15px 20px;
    }
    .zero p {
        font-size: 14px;
        display: block;
        line-height: 28px;
    }
    .instructions .store{
        line-height: 28px;
        /*padding: 15px 40px;*/
        font-size: 14px;
        width: 750px;
        text-align: left;
        display: block;
        margin: 0 20px 20px 20px;
    }
    .instructions .apply{
        margin-top: 15px;
        font-size: 18px;
        text-align: center;
    }
    .instructions .message{
        line-height: 28px;
        padding: 15px 40px 15px 0;
        font-size: 14px;
        /*display: inline-block;*/
    }
    .require{
        margin-top: 10px;
        text-align: center;
        padding: 0;
        display: block;
    }
    .require .ui-button{
        color: #F00;
        line-height: 32px;
        height: 32px;
        border: 0;
        background: #cacccd;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        font-size: 14px;
        font-family: inherit;
        font-weight: 700;
        border-radius: 2px;
        padding: 0 20px;
    }
</style>
