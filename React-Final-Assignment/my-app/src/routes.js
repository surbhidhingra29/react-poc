// @ts-nocheck
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./common/login";
import PageNotFound from "./common/pageNotFound/pageNotFound";
import UserList from "./components/user-list/userlist";
import { connect } from "react-redux";
import { checkIsUserLogedIn } from "./redux-config/actions";
import UsersDetail from "./components/user-details/user-details";
import AddNewUser from "./components/add-user/addUser";
import ProductList from "./components/product-list/productList";
import ProductDetail from "./components/product-details/productDetails";
export class Routers extends Component {

    componentDidMount() {
        this.props.checkIsUserLogedIn();
    }

    render() {
        return (
            <>
                <Routes>
                    {!this.props.isLoggedIn && <>
                        <Route path="/" index element={<Login />}></Route>
                        <Route index element={<Login />}></Route>
                        <Route path="login" element={<Login />}></Route>
                        <Route path="*" element={<PageNotFound />}></Route>
                    </>}
                    {this.props.isLoggedIn && <>
                        <Route path="/" index element={<UserList />}></Route>
                        <Route path="userList" element={<UserList />}></Route>
                        <Route path={`userDetails/:userId`} element={<UsersDetail />}></Route>
                        <Route path='addUser' element={<AddNewUser />}></Route>
                        <Route path='productList' element={<ProductList />}></Route>
                        <Route path={`productDetails/:productId`} element={<ProductDetail />}></Route>
                        <Route path="*" element={<PageNotFound />}></Route>
                    </>}


                </Routes>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer.auth,
        isLoggedIn: state.authReducer.isLoggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        checkIsUserLogedIn: () => dispatch(checkIsUserLogedIn()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routers);
