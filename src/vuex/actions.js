import axios from 'axios';
axios.defaults.baseURL = " https://easy-mock.com/mock/5c64c76b19caca77fc9b31b3/Autonomous";

/*实验用作基础信息页面级存储*/
export const information = ({commit},obj)=>{
    axios.get('./information').then((data)=>{
        commit('information',data.data)
    })
};