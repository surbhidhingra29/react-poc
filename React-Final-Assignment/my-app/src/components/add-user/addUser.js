import React, { useState } from "react";
import Layout from "../../common/layout/layout";
import { addNewUser } from "../../services/userData";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddNewUser = (props) => {

    const [isUserAdded, setResponse] = useState(false)
    const [newUserData, setData] = useState({});
    const [errorOccured, setError] = useState();
    const [isWorkingOn, setWorkingStatus] = useState(false);


    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (formData) => {
        setWorkingStatus(true);
        addNewUser(formData).then((res) => {
            if (res) {
                setData(res.data)
                setResponse(true);
                setWorkingStatus(false);
            }
        }).catch((e) => {
            setError(e.message);
            setWorkingStatus(false);
        })
    };

    return (
        <Layout>
            <div className="content-head pt-3 pb-2 borderw-2">
                <h6>{!isUserAdded && <><span>Add a user</span>
                </>} {isUserAdded && <span>User added successfully!</span>}</h6>
            </div>
            {isUserAdded && <h6 className="mt-3">User Added with ID: {newUserData['id']}</h6>}
            <div className="formwrp-adduser col-md-6 col-xl-5 px-3 pt-4">
                {errorOccured && <p className="text-danger">{errorOccured}</p>}

                {!isUserAdded && <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" defaultValue="" {...register("email", { required: true })} placeholder="Username" />
                            {errors.email && <div className="text-danger mt-1">This field is required</div>}
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" defaultValue="" className="form-control" {...register("password", { required: true })} placeholder="Password"/>
                            {errors.password && <div className="text-danger mt-1">This field is required</div>}
                        </div>
                        <div>
                            <button className="btn btn-primary" type="submit" disabled={isWorkingOn}>Add</button>
                            <button className="btn btn-secondary ms-2" type="reset" disabled={isWorkingOn}>Reset</button>
                        </div>
                    </form>
                </>}
            </div>
            <div className="mt-5">
               Note : You can add user with following details :- <br/>
                Username : <strong>eve.holt@reqres.in</strong><br/>
                Password : <strong>pistol</strong>
            </div>
            <Link to="/userList" className="btn btn-secondary setBottom">Back</Link>
        </Layout>
    )
}

export default AddNewUser;
