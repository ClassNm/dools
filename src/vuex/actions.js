import axios from 'axios';
axios.defaults.baseURL = "http://192.168.0.130:8080/swagger-ui.html#/";

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
    export const aa = function(e){
        let url = "/StudentInformation/save"
        let data = e
        axios.post(url,data).then((res) => {
            // res = res.data;
            console.log(res)
        },(err) => {
            console.log(err)
        })
        // heads : {
        //     'content-type' : 'application/x-www-form-urlencoded'
        // }
    }