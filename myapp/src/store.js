import { createStore,combineReducers ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./redux/reducers/userReducer";
import weatherData from "./redux/weatherReducer/reducer";

const rootReducer = combineReducers({
   userList: userReducer,
   weatherList:weatherData
})

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//    rootReducers,
//    initialState,
//    composeEnhancer(applyMiddleware(thunk))
//  );



const initialState={

}
const store = createStore(
 rootReducer,initialState,composeWithDevTools(applyMiddleware(thunk))
  )

export default store;
