import { GET_WEATH_REQ,GET_WEATH_SUC ,GET_WEATH_FAI} from "./actionType";
import axios from 'axios';

export const weatherAction=(search)=>async(dispatch)=>{
  dispatch({type:GET_WEATH_REQ})
  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e03f08264363e664bf4e65b62afa7fda`).then((res)=>{
    dispatch({type:GET_WEATH_SUC,payload:res.data})
  }).catch((error)=>{
    dispatch({type:GET_WEATH_FAI,payload:error})
  });
}