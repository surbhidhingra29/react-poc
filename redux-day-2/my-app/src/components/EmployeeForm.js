
import { connect } from "react-redux";
import React from "react";
import { addUser } from "../js/actions";

let nextId = 0;

class ConnectedForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: '',
            name: '',
            age: '',
            gender: '',
            companyName: null
        }
    }

    handleChanges(event, type) {

        if (type === 'empId') {
            this.setState({ empId: event.target.value });
        }
        if (type === 'name') {
            this.setState({ name: event.target.value });
        }
        if (type === 'age') {
            this.setState({ age: event.target.value });
        }
        if (type === 'gender') {
            this.setState({ gender: event.target.value });
        }
        if (type === 'companyName') {
            this.setState({ companyName: event.target.value });
        }

    }

    handleSubmit(event) {
        this.props.users({ 'id': nextId++, ...this.state });
        event.preventDefault();
    }


    render() {
        return (
            <>
                <div className="col-12 mx-auto border shadow p-3 round">
                    <h6 className="text-center" style={{color:"dodgerblue"}}>Employee Form</h6>
                    <form>
                        <div className="form-group mb-3">
                            <label className="mb-2">Employee ID</label>
                            <input type="text" className="form-control" name="empId" value={this.state.empId || ''} onChange={(event) => this.handleChanges(event, 'empId')} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-2">Employee Name</label>
                            <input type="text" className="form-control" name="name" value={this.state.name || ''} onChange={(event) => this.handleChanges(event, 'name')} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-2">Age</label>
                            <input type="number" className="form-control" name="designation" value={this.state.age || ''} onChange={(event) => this.handleChanges(event, 'age')} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-2">Gender</label>
                            <select className="form-control" name="gender" value={this.state.gender || ''} onChange={(event) => this.handleChanges(event, 'gender')}>
                                <option disabled value=''>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-2">Company Name</label>
                            <input type="text" className="form-control" name="companyName" value={this.state.companyName || ''} onChange={(event) => this.handleChanges(event, 'companyName')} />
                        </div>
                        <button className="btn btn-primary mt-4 mx-auto d-block" type="button" onClick={(event) => this.handleSubmit(event)}>Save</button>
                    </form>
                </div>
            </>
        )
    }

}

// form to connect with redux
function mapDispatchToProps(dispatch) {
    return {
        // addArticle: article => dispatch(addArticle(article)) // dispatch(actionName)
        users: user => dispatch(addUser(user)) // dispatch(actionName(payload))
    }
}

const AddUserForm = connect(null, mapDispatchToProps)(ConnectedForm);

export default AddUserForm;
