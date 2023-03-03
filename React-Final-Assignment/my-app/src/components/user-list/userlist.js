import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../common/layout/layout";
import { getUserList } from "../../redux-config/actions";
import styles from './userlist.module.css';
import Modal from 'react-bootstrap/Modal';
import ReactPaginate from 'react-paginate';
import GoogleMapComp from "../google-map/googleMap";
import {  Link } from "react-router-dom";


export class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            numberOfItemsPerPage: 3,
            itemsToShow: [],
            numberOfPages: 0,
            itemOffset: 0,
            totalItemsLength: 0,
            isLoading: true,
            geoCoordinates: {
                lat: -3.745,
                lng: -38.523
            }
        }
    }

    static getDerivedStateFromProps(props, state) {
        return function () {
            this.loadPagnation();
        }
    }

    componentDidMount() {
        this.props.getUserList().then(() => {
            this.loadPagnation();
            this.setState({ isLoading: false });
        }).catch((e) => {
            this.setState({ isLoading: false });
            alert(e.message);
        })
    }

    loadPagnation() {
        const endOffset = this.state.itemOffset + this.state.numberOfItemsPerPage;
        let pageCount = Math.ceil(this.props.list.length / this.state.numberOfItemsPerPage);
        const currentItems = this.props.list.slice(this.state.itemOffset, endOffset);
        this.setState({ totalItemsLength: this.props.list.length, numberOfPages: pageCount, itemsToShow: currentItems })
    }

    getLocation(geoData) {
        this.setState(prevState => ({
            geoCoordinates: { lat: parseInt(geoData.lat), lng: parseInt(geoData.lng) }
        }), () => {
            this.setState({ modalShow: true });
        })
    }

    handleClose() {
        this.setState({ modalShow: false });
    }

    handlePageClick(event) {
        const newOffset = (event.selected * this.state.numberOfItemsPerPage) % this.state.totalItemsLength;
        this.setState({ itemOffset: newOffset }, () => {
            this.loadPagnation();
        });
    }

    render() {
        return (
            <Layout>
                <div className="content-head pt-3 pb-2 borderw-2">
                    <h6>User List</h6>
                </div>

                {!this.state.isLoading &&
                    <>
                        <div className="table-responsive mt-2">
                            <table className="table table -borderless styledata-table text-center">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>City</th>
                                        <th>Zipcode</th>
                                        <th>Locate on Map</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.itemsToShow.map((item, i) => (
                                        <tr key={item['id']}>
                                            <td className="text-secondary">{item['id']}</td>
                                            <td className="text-secondary ps-0 pe-0">
                                            <Link  className="text-secondary" to={`/userDetails/${item.id}`} >{item.name}</Link></td>
                                            <td className="text-secondary">{item['username']}</td>
                                            <td className="text-secondary">{item['email']}</td>
                                            <td className="text-secondary">{item['address']['city']}</td>
                                            <td className="text-secondary">{item['address']['zipcode']}</td>
                                            <td className="text-secondary"><i className={styles.cursorPointer + ' bi bi-geo-alt-fill text-danger'} onClick={() => this.getLocation(item['address']['geo'])}></i></td>

                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={7}></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="d-flex justify-content-center paginations absolute">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">>"
                                previousLabel="<<"
                                onPageChange={(event) => this.handlePageClick(event)}
                                pageRangeDisplayed={5}
                                pageCount={this.state.numberOfPages}

                            />

                        </div>
                    </>
                }
                { <Modal show={this.state.modalShow} backdrop="static" keyboard={false} centered size="xl" onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Location</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={styles.geomapContainer}>
                            <GoogleMapComp geoCoordinates={this.state.geoCoordinates} />
                        </div>
                    </Modal.Body>
                </Modal> }

            </Layout>

        )
    }

}


function mapStateToProps(state) {
    return {
        list: state.userOperationsReducer.userList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserList: () => dispatch(getUserList())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
