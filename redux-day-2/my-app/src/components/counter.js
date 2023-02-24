import React, {Component} from "react";
import { connect } from "react-redux";
import { decrement, increment, reset } from "../js/actions";

export class Counter extends Component{
    render(){
        const {counter, increment, decrement, reset} = this.props
        return(
            <>
                <div className="container py-4 border shadow">
                    <div className="col-lg-6">
                        <h5>Counter {counter}</h5>
                        <div>
                            <button className="btn btn-primary" onClick={increment}>Increment</button>
                            <button className="btn btn-primary mx-2" onClick={decrement}>Decrement</button>
                            <button className="btn btn-primary" onClick={reset}>Reset</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function mapStateTProps(state){

    return {
        counter: state.counterReducer.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        increment: ()=> dispatch(increment()),
        decrement: ()=> dispatch(decrement()),
        reset: ()=> dispatch(reset()),
    }
}

export default connect(mapStateTProps,mapDispatchToProps)(Counter);
