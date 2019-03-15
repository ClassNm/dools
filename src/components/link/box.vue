<!--<template>-->
    <!--<div>-->
        <!--<div class="layout">-->
            <!--<Layout>-->
                <!--<Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">-->
                    <!--<Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">-->
                        <!--<router-link to="/home/sigh">-->
                            <!--<MenuItem name="1-1">-->
                                <!--<span>报名须知</span>-->
                            <!--</MenuItem>-->
                        <!--</router-link>-->
                        <!--<router-link to="/rank">-->
                            <!--<MenuItem name="1-2">-->
                                <!--<span>确认身份</span>-->
                            <!--</MenuItem>-->
                        <!--</router-link>-->
                        <!--<MenuItem name="1-3"-->
                                  <!--style="text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"-->
                                  <!--title="填报个人信息">-->
                            <!--<span>填报个人信息</span>-->
                        <!--</MenuItem>-->
                        <!--<router-link to="/basic">-->
                            <!--<MenuItem name="1-4">-->
                                <!--<span>基本信息</span>-->
                            <!--</MenuItem>-->
                        <!--</router-link>-->
                        <!--<router-link to="/photo">-->
                            <!--<MenuItem name="1-5">-->
                                <!--<span>个人照片</span>-->
                            <!--</MenuItem>-->
                        <!--</router-link>-->
                        <!--<router-link to="/midelSchool">-->
                            <!--<MenuItem name="1-6">-->
                                <!--<span>中学信息</span>-->
                            <!--</MenuItem>-->
                        <!--</router-link>-->
                        <!--<router-link to="/grade">-->
                            <!--<MenuItem name="1-7">-->
                                <!--<span>成绩信息</span>-->
                            <!--</MenuItem>-->
                        <!--</router-link>-->
                        <!--<router-link to="/selectionTest">-->
                            <!--<MenuItem name="1-8" style="text-overflow:ellipsis;overflow:hidden;white-space:nowrap;" title="选考科目成绩">-->
                                <!--<span>选考科目成绩</span>-->
                            <!--</MenuItem>-->
                        <!--</router-link>-->
                        <!--<router-link to="/generalMessage">-->
                            <!--<MenuItem name="1-9">-->
                                <!--<span>综合信息</span>-->
                            <!--</MenuItem>-->
                        <!--</router-link>-->
                        <!--<router-link to="/mockExam">-->
                            <!--<MenuItem name="1-10">-->
                                <!--<span>模考成绩</span>-->
                            <!--</MenuItem>-->
                        <!--</router-link>-->
                        <!--<router-link to="/singleSub">-->
                            <!--<MenuItem name="1-11">-->
                                <!--<span>单科排名</span>-->
                            <!--</MenuItem>-->
                        <!--</router-link>-->
                        <!--<router-link to="/referrer">-->
                            <!--<MenuItem name="1-12" style="text-overflow:ellipsis;overflow:hidden;white-space:nowrap;" title="推荐人信息">-->
                                <!--<span>推荐人信息</span>-->
                            <!--</MenuItem>-->
                        <!--</router-link>-->
                        <!--<router-link to="/volunteer">-->
                            <!--<MenuItem name="1-13">-->
                                <!--<span>志愿管理</span>-->
                            <!--</MenuItem>-->
                        <!--</router-link>-->
                        <!--<MenuItem name="1-14">-->
                            <!--<span>我的消息</span>-->
                        <!--</MenuItem>-->
                        <!--<MenuItem name="1-15">-->
                            <!--<span>在线反馈</span>-->
                        <!--</MenuItem>-->
                    <!--</Menu>-->
                    <!--<div slot="trigger"></div>-->
                <!--</Sider>-->
                <!--<Layout>-->
                    <!--<keep-alive>-->
                        <!--<router-view></router-view>-->
                    <!--</keep-alive>-->
                <!--</Layout>-->
            <!--</Layout>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--isCollapsed: false-->
            <!--};-->
        <!--},-->
        <!--computed: {-->
            <!--menuitemClasses: function () {-->
                <!--return [-->
                    <!--'menu-item',-->
                    <!--this.isCollapsed ? 'collapsed-menu' : ''-->
                <!--]-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->
    <!--.layout{-->
        <!--/*border: 1px solid #d7dde4;*/-->
        <!--box-shadow: 0 0 1px #888888;-->
        <!--background: white;-->
        <!--position: relative;-->
        <!--border-radius: 4px;-->
        <!--overflow: hidden;-->
        <!--width: 1000px;-->
        <!--margin: 0 auto;-->
    <!--}-->
    <!--.menu-item span{-->
        <!--display: inline-block;-->
        <!--overflow: hidden;-->
        <!--width: 69px;-->
        <!--text-overflow: ellipsis;-->
        <!--white-space: nowrap;-->
        <!--vertical-align: bottom;-->
        <!--transition: width .2s ease .2s;-->
    <!--}-->
    <!--.menu-item i{-->
        <!--transform: translateX(0px);-->
        <!--transition: font-size .2s ease, transform .2s ease;-->
        <!--vertical-align: middle;-->
        <!--font-size: 16px;-->
    <!--}-->
    <!--.collapsed-menu span{-->
        <!--width: 0;-->
        <!--transition: width .2s ease;-->
    <!--}-->
    <!--.collapsed-menu i{-->
        <!--transform: translateX(5px);-->
        <!--transition: font-size .2s ease .2s, transform .2s ease .2s;-->
        <!--vertical-align: middle;-->
        <!--font-size: 22px;-->
    <!--}-->
<!--</style>-->






<template>
    <div>
        <div class="layout">
            <Layout>
                <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                    <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses" :open-names="['3']">
                        <router-link to="/home/sigh">
                            <Submenu name="1">
                                <template slot="title">
                                    <Icon type="ios-keypad"></Icon>
                                   报名须知
                                </template>
                            </Submenu>
                        </router-link>
                        <router-link to="/rank">
                            <Submenu name="2">
                                <template slot="title">
                                    <Icon type="ios-keypad"></Icon>
                                    确认身份
                                </template>
                            </Submenu>
                        </router-link>
                        <Submenu name="3">
                            <template slot="title">
                                    <Icon type="ios-keypad" style="margin: 0 10px 10px 0"></Icon>
                                    <div style="display: inline-block;" title="填报个人信息">
                                        填报个人信息
                                    </div>
                            </template>
                            <router-link to="/basic">
                                <MenuItem name="3-1">基本信息</MenuItem>
                            </router-link>
                            <router-link to="/photo">
                                <MenuItem name="3-2">个人照片</MenuItem>
                            </router-link>
                            <router-link to="/midelSchool">
                                <MenuItem name="3-3">中学信息</MenuItem>
                            </router-link>
                            <router-link to="/grade">
                                <MenuItem name="3-4">成绩信息</MenuItem>
                            </router-link>
                            <router-link to="/selectionTest">
                                <MenuItem name="3-5">选考科目成绩</MenuItem>
                            </router-link>
                            <router-link to="/generalMessage">
                                <MenuItem name="3-6">综合信息</MenuItem>
                            </router-link>
                            <router-link to="/mockExam">
                                <MenuItem name="3-7">模考成绩</MenuItem>
                            </router-link>
                            <router-link to="/singleSub">
                                <MenuItem name="3-8">单科排名</MenuItem>
                            </router-link>
                            <router-link to="/referrer">
                                <MenuItem name="3-9">推荐人信息</MenuItem>
                            </router-link>
                        </Submenu>
                        <router-link to="/volunteer">
                            <Submenu name="4">
                                <template slot="title">
                                    <Icon type="ios-keypad"></Icon>
                                    志愿管理
                                </template>
                            </Submenu>
                        </router-link>

                        <Submenu name="5">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                我的消息
                            </template>
                        </Submenu>
                        <Submenu name="6">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                在线反馈
                            </template>
                        </Submenu>
                    </Menu>
                    <div slot="trigger"></div>
                </Sider>
                <Layout>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </Layout>
            </Layout>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>

<style scoped>
    .ivu-menu-submenu{
        padding-bottom:-10px;
    }
    .layout{
        /*border: 1px solid #d7dde4;*/
        box-shadow: 0 0 1px #888888;
        background: white;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        width: 1000px;
        margin: 0 auto;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .ivu-menu-dark{
        text-align: left
    }
</style>






