import { COUNTE_INCREMENT, COUNTE_DECREMENT, COUNTE_RESET } from "../constants/action-types";

const initiatState = {

    counter: 0
}



const counterReducer = (state = initiatState, action) => {

    if (action.type === COUNTE_INCREMENT) {
        return Object.assign({}, state, {
            counter: state.counter + 1
        })
    }
    if (action.type === COUNTE_DECREMENT) {
        return Object.assign({}, state, {
            counter: state.counter - 1
        })
    }
    if (action.type === COUNTE_RESET) {
        return Object.assign({}, state, {
            counter: initiatState.counter
        })
    }
    return state;
}


export default counterReducer;
