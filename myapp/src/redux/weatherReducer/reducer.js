import { GET_WEATH_REQ,GET_WEATH_SUC,GET_WEATH_FAI } from "./actionType"
const initialState = {
    weatherData : []
}
const weatherData = (state =initialState,action)=>{
switch(action.type){
    case GET_WEATH_REQ : return{
     loading:true,
     weatherData:[]
    };

    case GET_WEATH_SUC :return{
        loading:false,
        weatherData:[action.payload]
    };
    case GET_WEATH_FAI :return{
        loading:false,
        weatherData:action.payload
    };
    default:return state;
    
}
}

export default weatherData;