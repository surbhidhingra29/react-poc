
import { connect } from "react-redux";
import React from "react";
import { addArticle } from "../js/actions";

class ConnectedForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleChanges(event){

        this.setState({name: event.target.value});
    }

    handleSubmit(event){

        const {name} = this.state;
        this.props.addArticle({name});
        event.preventDefault();
    }


    render() {
        return (
            <>
                <div className="col-lg-4">
                    <form>
                        <div className="form-group">
                            <label className="mb-3" style={{color:"dodgerblue"}}>Add User List</label>
                            <input type="text" className="form-control" name="name" value={this.state.name || ''} onChange={(event)=> this.handleChanges(event)} />
                        </div>
                        <button className="btn btn-primary mt-4 mx-auto d-block" type="button" onClick={(event)=> this.handleSubmit(event)}>Add</button>
                    </form>
                </div>
            </>
        )
    }

}

// form to connect with redux
function mapDispatchToProps(dispatch){
    return {
        addArticle: article => dispatch(addArticle(article)) // dispatch(actionName)
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
