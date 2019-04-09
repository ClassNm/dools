import axios from 'axios';
axios.defaults.baseURL = "http://192.168.0.130:8080";


/*实验用作基础信息页面级存储*/
// export const information = ({commit},obj)=>{
//     axios.get('./information').then((data)=>{
//         commit('information',data.data)
//     })
// };


// 学生基本信息·
// export const getListDataFn = ({commit},obj)=>{
    //     axios.post('/StudentInformation/save').then((data)=>{
    //         commit('getListData',data.data)
    //     })
    // }

    // export const aa = function(){
    //     let url = '/StudentInformation/save'
    //     axios.post(url,data).then(res) => {
            
    //     },(err)=>{

    //     }
    // }
    // heads : {
        //     'content-type' : 'application/x-www-form-urlencoded'
        // }
        // let heads = {
        //     'content-type' : 'application/x-www-form-urlencoded'
        // }
        // var instance = axios.create({
        //     baseURL: 'http://192.168.0.130:8080/swagger-ui.html#/',
        //     timeout: 1000,
        //     headers: {'X-Custom-Header': 'foobar'}
        //   });  
        
        
        //基本信息 
    export const aa = function(e) {
        let url = '/StudentInformation/save'
        let data = e
        axios.post(url,data).then((res)=>{
            console.log(res)
            res = res.data;
        },(err)=>{
            console.log(err)
        })
    }


    // 中学信息
    export const mSchool = function(e) {
        let url = '/MiddleschoolInformation/save'
        let data = e
        axios.post(url,data).then((res)=>{
            console.log(res)
            res = res.data;
        },(err)=>{
            console.log(err)
        })
    }

    // 成绩信息
    export const grade = function(e) {
        let url = '/Scoresheet/save'
        let data = e
        axios.post(url,data).then((res)=>{
            console.log(res)
            res = res.data;
        },(err)=>{
            console.log(err)
        })
    }



    // 新增社会活动
    export const activity = function(e) {
        let url = '/Activity/save'
        let data = e
        axios.post(url,data).then((res)=>{
            console.log(res)
            res = res.data;
        },(err)=>{
            console.log(err)
        })
    }

     // 新增获奖记录
     export const newly = function(e) {
        let url = '/Prize/save'
        let data = e
        axios.post(url,data).then((res)=>{
            console.log(res)
            res = res.data;
        },(err)=>{
            console.log(err)
        })
    }

    // 推荐人信息  添加推荐专家
    export const expert = function(e) {
        let url = '/Recommender/save'
        let data = e
        axios.post(url,data).then((res)=>{
            console.log(res)
            res = res.data;
        },(err)=>{
            console.log(err)
        })
    }

    // 推荐人信息  添加推荐中学
    export const secondarySchool = function(e) {
        let url = '/RecommendSchool/save'
        let data = e
        axios.post(url,data).then((res)=>{
            console.log(res)
            res = res.data;
        },(err)=>{
            console.log(err)
        })
    }

    // 推荐人信息  添加推荐社会团体
    export const organization = function(e) {
        let url = '/RecommendSocialgroups/save'
        let data = e
        axios.post(url,data).then((res)=>{
            console.log(res)
            res = res.data;
        },(err)=>{
            console.log(err)
        })
    }

    // 个人照片
    export const photo = function(e) {
        let url = '/Picture/save'
        let data = e
        axios.post(url,data).then((res)=>{
            console.log(res)
            res = res.data;
        },(err)=>{
            console.log(err)
        })
    }


    // 接受省级信息
    // export const Province = function(e) {
    //     let url = '/City/findById'
    //     let data = e
    //     // console.log(this.data)
    //     let contentType = "application/json"
    //     // axios.post(baseURL，data,
    //         // {headers: {'Content-Type': 'json'}})
    //     axios.post(url,data)
    //     .then((res)=>{
            
    //         // console.log(data)
    //         // this.educationAlternative = data
    //     },(err)=>{
    //         console.log(err)
    //     })
    // }
            