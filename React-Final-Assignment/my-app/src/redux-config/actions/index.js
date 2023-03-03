import { USER_LOGIN, USER_LOGOUT, USER_LOGGEDIN, USER_NOTLOGGEDIN, USER_DETAIL, USERS_LIST, OPEN_SIDEBAR } from "../constants/actions-types";
import store from "../store";
import { ENDPOINTS } from "../../utilities/config";
import axios from "axios";


// Auth Actions ==============

function getUserData() {
    return new Promise((resolve, reject) => {
        axios.get(`${ENDPOINTS.singleUser}/4`).then((res) => {
            if (res) {
                resolve(res.data);
            }
        }).catch((e) => {
            reject(e.message);
        })
    })
}

export function checkIsUserLogedIn() {
    return function (_dispatch) {
        const token = localStorage.getItem('userToken');
        if (!token || token === 'undefined' || token === '' || token === null) {
            store.dispatch({ type: USER_NOTLOGGEDIN });
        } else {
            axios.get(`${ENDPOINTS.singleUser}/4`).then((res) => {
                store.dispatch({ type: USER_LOGGEDIN, payload: { token: token }, userData: res.data });
            })
        }
    }
}

export function userLogin(authCredentials) {
    return function (_dispatch) {
        return axios.post(ENDPOINTS.auth, authCredentials).then(async(res) => {
            if (res) {
                let user = await getUserData();
                store.dispatch({ type: USER_LOGIN, payload: res.data, userData:user });
            }

        })
    }
}

export function userLogout() {
    localStorage.removeItem('userToken');
    return { type: USER_LOGOUT };
}


// userDetals ===============
export function getUserByID(userId) {
    return function (_dispatch) {
        return axios.get(`${ENDPOINTS.singleUser}/${userId}`).then((res) => {
            store.dispatch({ type: USER_DETAIL, payload: res.data });
        })
    }
}

export function getUserList(){
    return function(_dispatch){
        return axios.get(`${ENDPOINTS.userList}`).then((res)=>{
            store.dispatch({type: USERS_LIST, payload: res.data})
        })
    }
}




// ==========Sidebar open and close action
export function openCloseSidebar(stateusToSet){
    // debugger;
    return function(_dispatch){
        store.dispatch({type: OPEN_SIDEBAR, payload: stateusToSet});
    }
}



