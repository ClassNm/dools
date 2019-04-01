<template>
    <div class="tab_box">
        <h1 class="one">
            特殊类型招生报名平台
        </h1>
        <p class="two">
            普通自主招生
        </p>
        <p class="three">
            <!--？？？暂定-->
            其他招生类型
            <i class="iconfont" style="padding-left:8px; font-size:12px;">></i>
        </p>
        <div class="four">
            <!--用户名？？？-->
            <p class="Only" style="cursor:wait">欢迎,web_liuhang@163.com </p><br>
            <a href="javascript:;" class="Clear" @click="change">用户中心</a>
            <a href="javascript:;" class="ClearAgain">退出</a>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            change(){
                console.log(1)
            }
        }
    }
</script>

<style scoped>
    .tab_box{
        background: #50aac2;
        width: 1000px;
        height: 90px;
        margin: 0 auto;
        padding: 0 20px;
        overflow: hidden;
    }
    .one{
        display: inline;
        line-height: 90px;
        font-size: 25px;
        float: left;
        margin-top: 0;
        color: white;
    }
    .two{
        display: inline-block;
        height: 70px;
        line-height: 90px;
        font-size: 16px;
        float: left;
        padding-left: 20px;
        text-align: left;
        margin-top: 0;
        color: white;
    }
    .three{
        display: inline-block;
        float: left;
        text-align: left;
        margin-left: 10px;
        margin-top: 35px;
        height: 21px;
        padding: 0 8px 0 10px;
        border-radius: 4px;
        line-height: 21px;
        color: #666;
        background: #dbf4fb;
        font-size: 12px;
    }
    .four{
        display: block;
        float: right;
        color: #fff;
        line-height: 24px;
        padding-top: 10px;
        text-align: right;
    }
    .Only{
        display: inline-block;
        margin-right: 20px;
        font-size: 12px;
    }
    .Clear{
        color: white;
        text-decoration: none;
        padding: 10px;
        font-size: 12px;
        /*cursor:s-resize*/
    }
    .ClearAgain{
        color: white;
        text-decoration: none;
        font-size: 12px;
        margin-right: 40px;
    }
</style>