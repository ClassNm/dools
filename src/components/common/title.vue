<template>
    <div class="tab_box">
        <div class="footer">
            Copyright © 2003-2016
            学信网&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务热
            线：010-82199588&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客服邮
            箱：kefu#chsi.com.cn（将#替换为@）
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .tab_box{
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        /*clear: both;*/
        position: relative;
        z-index: 10;
        text-align: center;
        height: 40px;
        /*margin-top: -40px;*/
        overflow: hidden;
        background:  #666;
        padding: 0 20px;
    }
    .footer{
        /*display: inline-block;*/
        /*margin: 0;*/
        /*padding: 0;*/
        /*white-space: nowrap;*/
        /*color: white;*/

        line-height: 40px;
        color: #eee;
        background: #666;
        font-size: 12px;
        padding: 0 20px;
        text-shadow: 1px 1px 0 rgba(255,255,255,0.1);
    }

</style>