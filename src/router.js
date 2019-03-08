import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

/*  Sigh 报名须知 */
import sigh from './components/sigh/index'

/*  Rank  确认身份*/
import  rank from './components/rank/index'

/* Basic  基本信息*/
import  basic from './components/basic/index'

/* Photo  个人照片*/
import photo from  './components/photo/index'

/* midelSchool  中学信息*/
import midelSchool from  './components/midelSchool/index'

/* grade   成绩信息*/
import grade from  './components/grade/index'

/* selectionTest   选考科目成绩*/
import selectionTest from  './components/selectionTest/index'

/*  generalMessage  综合信息*/
import generalMessage from  './components/generalMessage/index'

/*   newly         获奖记录    综合信息里*/
import bear from './components/newly/index'

/* publicActivity   高中期间获奖记录  综合信息里*/
import  schoolAward from './components/publicActivity/index'

/* patent           获得的专利      综合信息*/
import  patent from './components/patent/index'

/*  mockExam   模考成绩*/
import mockExam from  './components/mockExam/index'

/*  singleSub  单科排名*/
import singleSub from  './components/singleSub/index'

/*  referrer  推荐人信息*/
import referrer from  './components/referrer/index'

/*  expert   推荐专家  推荐人信息*/
import expert from './components/expert/index'

/*   secondarySchool  推荐中学  推荐人信息*/
import  secondarySchool from './components/secondarySchool/index'

/* organization   推荐社会团体  推荐人信息*/
import organization from './components/organization/index'


/*  volunteer  志愿管理*/
import volunteer from  './components/volunteers/Volunteer'

/*  volunteerNew  添加志愿   志愿管理*/
import volunteerNew from './components/volunteers/VolunteerNew'

/*  applicationForm  报考志愿   三级路由  志愿管理*/
import applicationForm from './components/volunteers/ApplicationForm'

/*  additional   附加材料    三级路由   志愿管理*/
import additional from './components/volunteers/Additional'

/*  messaged     综合信息   三级路由     志愿管理*/
import messaged from './components/volunteers/Messaged'

/*  referrerT     推荐人    三级路由     志愿管理 */
import referrerT from  './components/volunteers/ReferrerT'

/*  applicationT   预览申请表  三级路由   志愿管理 */
import applicationT from './components/volunteers/ApplicationT'

/*  多余的三个*/
/* statement 个人陈述 3级路由 报考志愿*/
import statement from './components/statement/index'

/* mock  模考成绩 3级路由 报考志愿*/
import mock from './components/mock/index'

/* obstetrics 单科排名 3级路由 报考志愿*/
import obstetrics from  './components/obstetrics/index'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
      {
        path:'/',
        redirect:'/home'
      },
      {
          path: '/home',
          name: 'home',
          component: Home,
          children:[
              {
                  path: '/',
                  redirect:'/home/sigh'
              },
              {
                  path: '/home/sigh',
                  name: 'sigh',
                  component: sigh
              },
              {
                  path: '/rank',
                  name: 'rank',
                  component: rank
              },
              {
                  path: '/basic',
                  name: 'basic',
                  component: basic
              },
              {
                  path: '/photo',
                  name: 'photo',
                  component: photo
              },
              {
                  path: '/midelSchool',
                  name: 'midelSchool',
                  component: midelSchool
              },
              {
                  path: '/grade',
                  name: 'grade',
                  component: grade
              },
              {
                  path: '/selectionTest',
                  name: 'selectionTest',
                  component: selectionTest
              },
              {
                  path: '/generalMessage',
                  name: 'generalMessage',
                  component: generalMessage,
                  children:[
                      {
                          path:'/newly',
                          name:'bear',
                          component: bear
                      },
                      {
                          path:'/publicActivity',
                          name:'schoolAward',
                          component: schoolAward
                      },
                      {
                          path:'/patent',
                          name:'patent',
                          component: patent
                      },
                  ]
              },
              {
                  path: '/mockExam',
                  name: 'mockExam',
                  component: mockExam
              },
              {
                  path: '/singleSub',
                  name: 'singleSub',
                  component: singleSub
              },
              {
                  path: '/referrer',
                  name: 'referrer',
                  component: referrer,
                  children:[
                      {
                          path:'/expert',
                          name:'expert',
                          component: expert
                      },
                      {
                          path:'/secondarySchool',
                          name:'secondarySchool',
                          component: secondarySchool
                      },
                      {
                          path:'/organization',
                          name:'organization',
                          component: organization
                      }
                  ]
              },
              {
                  path: '/volunteer',
                  name: 'volunteer',
                  component: volunteer,
                  children:[
                      {
                          path:'/volunteerNew',
                          name:'volunteerNew',
                          component:volunteerNew,
                          children:[
                              {
                                  path:'/volunteerNew/applicationForm',
                                  name:'applicationForm',
                                  component:applicationForm,
                              },
                              {
                                  path:'/additional',
                                  name:'additional',
                                  component:additional
                              },
                              {
                                  path:'/messaged',
                                  name:'messaged',
                                  component:messaged
                              },
                              {
                                  path:'/referrerT',
                                  name:'referrerT',
                                  component:referrerT
                              },
                              {
                                  path:'/applicationT',
                                  name:'applicationT',
                                  component:applicationT
                              },
                              {
                                  path:'/statement',
                                  name:'statement',
                                  component:statement
                              },
                              {
                                  path:'/mock',
                                  name:'mock',
                                  component:mock
                              },
                              {
                                  path:'/obstetrics',
                                  name:'obstetrics',
                                  component:obstetrics
                              }
                          ]
                      }
                  ]
              },
          ]
      },
  ]
})
