<template>
    <div>
        <!--<div class="layout">-->
                <!--<Layout>-->
                    <!--<Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">-->
                        <!--<Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">-->
                            <!--<router-link to="/home/sigh">-->
                                <!--<MenuItem name="1-1">-->
                                    <!--<span>报名须知</span>-->
                                <!--</MenuItem>-->
                            <!--</router-link>-->
                            <!--<router-link to="/home/rank">-->
                                <!--<MenuItem name="1-2">-->
                                    <!--<span>确认身份</span>-->
                                <!--</MenuItem>-->
                            <!--</router-link>-->
                            <!--<MenuItem name="1-3">-->
                                <!--<span>填报个人信息</span>-->
                            <!--</MenuItem>-->
                            <!--<router-link to="/home/basic">-->
                                <!--<MenuItem name="1-4">-->
                                    <!--<span>基本信息</span>-->
                                <!--</MenuItem>-->
                            <!--</router-link>-->
                            <!--<router-link to="/home/photo">-->
                                <!--<MenuItem name="1-5">-->
                                    <!--<span>个人照片</span>-->
                                <!--</MenuItem>-->
                            <!--</router-link>-->
                            <!--<router-link to="/home/midelSchool">-->
                                <!--<MenuItem name="1-6">-->
                                    <!--<span>中学信息</span>-->
                                <!--</MenuItem>-->
                            <!--</router-link>-->
                            <!--<router-link to="/home/grade">-->
                                <!--<MenuItem name="1-7">-->
                                    <!--<span>成绩信息</span>-->
                                <!--</MenuItem>-->
                            <!--</router-link>-->
                            <!--<router-link to="/home/selectionTest">-->
                                <!--<MenuItem name="1-8">-->
                                    <!--<span>选考科目成绩</span>-->
                                <!--</MenuItem>-->
                            <!--</router-link>-->
                            <!--<router-link to="/home/generalMessage">-->
                                <!--<MenuItem name="1-9">-->
                                    <!--<span>综合信息</span>-->
                                <!--</MenuItem>-->
                            <!--</router-link>-->
                            <!--<router-link to="/home/mockExam">-->
                                <!--<MenuItem name="1-10">-->
                                    <!--<span>模考成绩</span>-->
                                <!--</MenuItem>-->
                            <!--</router-link>-->
                            <!--<router-link to="/home/singleSub">-->
                                <!--<MenuItem name="1-11">-->
                                    <!--<span>单科排名</span>-->
                                <!--</MenuItem>-->
                            <!--</router-link>-->
                            <!--<router-link to="/home/referrer">-->
                                <!--<MenuItem name="1-12">-->
                                    <!--<span>推荐人信息</span>-->
                                <!--</MenuItem>-->
                            <!--</router-link>-->
                            <!--<router-link to="/home/volunteer">-->
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
                        <!--<router-view></router-view>-->
                    <!--</Layout>-->
                <!--</Layout>-->
        <!--</div>-->
        <div class="layout">
            <Layout>
                <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                    <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                        <router-link to="/home/sigh">
                            <MenuItem name="1-1">
                                <span>报名须知</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/rank">
                            <MenuItem name="1-2">
                                <span>确认身份</span>
                            </MenuItem>
                        </router-link>
                        <MenuItem name="1-3">
                            <span>填报个人信息</span>
                        </MenuItem>
                        <router-link to="/basic">
                            <MenuItem name="1-4">
                                <span>基本信息</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/photo">
                            <MenuItem name="1-5">
                                <span>个人照片</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/midelSchool">
                            <MenuItem name="1-6">
                                <span>中学信息</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/grade">
                            <MenuItem name="1-7">
                                <span>成绩信息</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/selectionTest">
                            <MenuItem name="1-8">
                                <span>选考科目成绩</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/generalMessage">
                            <MenuItem name="1-9">
                                <span>综合信息</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/mockExam">
                            <MenuItem name="1-10">
                                <span>模考成绩</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/singleSub">
                            <MenuItem name="1-11">
                                <span>单科排名</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/referrer">
                            <MenuItem name="1-12">
                                <span>推荐人信息</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/volunteer">
                            <MenuItem name="1-13">
                                <span>志愿管理</span>
                            </MenuItem>
                        </router-link>
                        <MenuItem name="1-14">
                            <span>我的消息</span>
                        </MenuItem>
                        <MenuItem name="1-15">
                            <span>在线反馈</span>
                        </MenuItem>
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
    .layout{
        /*border: 1px solid #d7dde4;*/
        box-shadow: 0 0 1px #888888;
        background: white;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        width: 1000px;
        margin: 0 auto;
        padding: 0 20px;
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
</style>