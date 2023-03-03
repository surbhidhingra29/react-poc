import React, {  useEffect } from "react";
import { Navigation } from "react-minimal-side-navigation";
import { getUserByID, openCloseSidebar, userLogout } from "../../redux-config/actions";
import { connect } from "react-redux";
import { useLocation,useNavigate } from "react-router-dom";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const SideBar = (props) => {

    const location = useLocation();
    const navigate = useNavigate();


    const logout = () => {
        props.logout();
        navigate('/login');
    }

    useEffect(() => {

        props.setSideBarClosedAtDefault();
    }, []);


    return (
        <>
            <div className={props.sideBarOpenStatus ? 'showSidebarMob_device showSidebar' : 'd-none d-md-block'}>
                <div className="sidebar-wrp shadow px-4 py-3">
                    <div className="pb-2 mb-2 borderw-2">
                        <div className="sidebarheader d-flex align-items-center">
                            <div className="imgbox">
                                <img src={props.userDetail.data.avatar} className='img-responsive' alt="" />
                            </div>
                            <div className="content ps-2">{props.userDetail.data.first_name} {props.userDetail.data.last_name}</div>
                        </div>
                    </div>
                    <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            navigate(itemId);
          }}
          items={[
            {
              title: "Dashboard",
              itemId: "",
              elemBefore: () => <i class="bi bi-grid"></i>
            },
            {
              title: "User manager",
              itemId: "/userDetails/4",
               elemBefore: () => <i class="bi bi-person"></i>,
              subNav: [
                {
                  title: "List users",
                  itemId: "/userList",
                  elemBefore: () => <i class="bi bi-people"></i>
                },
                {
                  title: "Add users",
                  itemId: "/addUser",
                elemBefore: () => <i class="bi bi-person-add"></i>
                }
              ]
            },
            {
                title: "Products",
                itemId: "/productList",
                elemBefore: () => <i class="bi bi-list"></i>
              },
            {
                title: "Calendar",
                itemId: "",
                elemBefore: () => <i class="bi bi-calendar"></i>
            },

          ]}
        />
        <div className="pt-2 mt-2 borderT-2 bottom-logoutbtn">
                        <button className="logout-btn btn text-start" onClick={logout}><i className="bi bi-box-arrow-left"></i> Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        userDetail: state.authReducer.loggedUserData,
        sideBarOpenStatus: state.commonReducer.isSideBarOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: (userId) => dispatch(getUserByID(userId)),
        logout: () => dispatch(userLogout()),
        setSideBarClosedAtDefault: () => dispatch(openCloseSidebar(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

