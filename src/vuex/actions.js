import axios from 'axios';
axios.defaults.baseURL = "http://192.168.0.130:8080/swagger-ui.html#/";

/*实验用作基础信息页面级存储*/
// export const information = ({commit},obj)=>{
//     axios.get('./information').then((data)=>{
//         commit('information',data.data)
//     })
// };

// 模拟成绩表
// 根据学生id查询学生模考成绩
// export const getListDataFn = ({commit},obj)=>{
//     axios.post('/Analogscore/findBySid').then((data)=>{
//         commit('getListData',data.data)
//     })
// }
// 保存模拟成绩
// export const getListDataFn = ({commit},obj)=>{
//     axios.post('/Analogscore/save').then((data)=>{
//         commit('getListData',data.data)
//     })
// }

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
    export const aa = function(){
        let url = "/StudentInformation/save"
        axios.post(url,data).then((res) => {
            console.log(res)
        },(err) => {
            console.log(err)
        })
    }