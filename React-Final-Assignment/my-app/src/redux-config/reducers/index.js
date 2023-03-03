
import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import userOperationsReducer from "./userdata.js";
import commonReducer from "./common-reducer/commonReducer";





// ========= Combiing reducers

const rootReducer = combineReducers({authReducer: authReducer, userOperationsReducer, commonReducer})

export default rootReducer;
