import Vue from 'vue'
import Router from 'vue-router'

// 外边
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
// import  patent from './components/patent/index'

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
import statement from './components/volunteers/Statement.vue'

/* mock  模考成绩 3级路由 报考志愿*/
import mock from './components/volunteers/Mock.vue'

/* obstetrics 单科排名 3级路由 报考志愿*/
import obstetrics from  './components/volunteers/Obstetrics.vue'

Vue.use(Router);

// export default new Router({
export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        // 路由重定向
      {
        path:'/',
        redirect:'/home'
      },
    //   整体
      {
          path: '/home',
          name: 'home',
          component: Home,
          children:[
              {
                  path: '/',
                  redirect:'/home/sigh'
              },
              /*  Sigh 报名须知 */
              {
                  path: '/home/sigh',
                  name: 'sigh',
                  component: sigh
              },
              /*  Rank  确认身份*/
              {
                  path: '/rank',
                  name: 'rank',
                  component: rank
              },
              /* Basic  基本信息*/
              {
                  path: '/basic',
                  name: 'basic',
                  component: basic
              },
              /* Photo  个人照片*/
              {
                  path: '/photo',
                  name: 'photo',
                  component: photo
              },
              /* midelSchool  中学信息*/ 
              {
                  path: '/midelSchool',
                  name: 'midelSchool',
                  component: midelSchool
              },
              /* grade   成绩信息*/
              {
                  path: '/grade',
                  name: 'grade',
                  component: grade
              },
               /* selectionTest   选考科目成绩*/
              {
                  path: '/selectionTest',
                  name: 'selectionTest',
                  component: selectionTest
              },
              /*  generalMessage  综合信息*/
              { 
                  path: '/generalMessage',
                  name: 'generalMessage',
                  component: generalMessage,
                  children:[
                      /*   newly         获奖记录    综合信息里*/
                      {
                          path:'/newly',
                          name:'bear',
                          component: bear
                      },
                      /* publicActivity   高中期间获奖记录  综合信息里*/
                      {
                          path:'/publicActivity',
                          name:'schoolAward',
                          component: schoolAward
                      },
                      /* patent           获得的专利      综合信息*/
                    //   {
                    //       path:'/patent',
                    //       name:'patent',
                    //       component: patent
                    //   },
                  ]
              },
              /*  mockExam   模考成绩*/
              {
                  path: '/mockExam',
                  name: 'mockExam',
                  component: mockExam
              },
              /*  singleSub  单科排名*/
              {
                  path: '/singleSub',
                  name: 'singleSub',
                  component: singleSub
              },
               /*  referrer  推荐人信息*/
              {
                  path: '/referrer',
                  name: 'referrer',
                  component: referrer,
                  children:[
                      /*  expert   推荐专家  推荐人信息*/
                      {
                          path:'/expert',
                          name:'expert',
                          component: expert
                      },
                      /*   secondarySchool  推荐中学  推荐人信息*/
                      {
                          path:'/secondarySchool',
                          name:'secondarySchool',
                          component: secondarySchool
                      },
                       /* organization   推荐社会团体  推荐人信息*/
                      {
                          path:'/organization',
                          name:'organization',
                          component: organization
                      }
                  ]
              },
               /*  volunteer  志愿管理*/
              {
                  path: '/volunteer',
                  name: 'volunteer',
                  component: volunteer,
                  children:[
                      /*  volunteerNew  添加志愿   志愿管理*/
                      {
                          path:'/volunteerNew',
                          name:'volunteerNew',
                          component:volunteerNew,
                          children:[
                              /*  applicationForm  报考志愿   三级路由  志愿管理*/
                              {
                                  path:'/volunteerNew/applicationForm',
                                  name:'applicationForm',
                                //   meta:{auth:true},
                                //   设置当前路由需要判断 
                                  component:applicationForm,
                              },
                               /* statement 个人陈述 3级路由 报考志愿*/
                              {
                                 path:'/statement',
                                 name:'statement',
                                 component:statement
                              },
                              /* mock  模考成绩 3级路由 报考志愿*/
                              {
                                  path:'/mock',
                                  name:'mock',
                                  component:mock
                              },
                               /* obstetrics 单科排名 3级路由 报考志愿*/
                              {
                                  path:'/obstetrics',
                                  name:'obstetrics',
                                  component:obstetrics
                              },
                              /*  additional   附加材料    三级路由   志愿管理*/
                              {
                                  path:'/additional',
                                  name:'additional',
                                  component:additional
                              },
                              /*  messaged     综合信息   三级路由     志愿管理*/
                              {
                                  path:'/messaged',
                                  name:'messaged',
                                  component:messaged
                              },
                              /*  referrerT     推荐人    三级路由     志愿管理 */
                              {
                                  path:'/referrerT',
                                  name:'referrerT',
                                  component:referrerT
                              },
                              /*  applicationT   预览申请表  三级路由   志愿管理 */
                              {
                                  path:'/applicationT',
                                  name:'applicationT',
                                  component:applicationT
                              },
                          ]
                      }
                  ]
              },
          ]
      },
  ]
})

// routes.beforeEach((to,from,next) =>{   
//     if(to.matched.some( m => m.meta.auth)){     
//             // 对路由进行验证     
//         if(store.state.isLogin=='1') { // 跳1蹦页面       
//             // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
//             next({path:'/statement',query:{Rurl:to.fullPath}})     
//         }else{       
//             // next({path:'/login',query:{ Rurl: to.fullPath} })
//             next()   // 正常跳转到你设置好的页面
// 　    　} 
// 　  }else{ 
// 　　　　　　next() 
// 　　} 
// })
