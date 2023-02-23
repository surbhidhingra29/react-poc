import React from "react";
import axios from "axios";
import ReactDOM from 'react-dom';
import AddPost from "./addUserForm";
import Modal from 'react-bootstrap/Modal';
import styles from './UserList.module.css';

export default class UserList extends React.Component {
    apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    constructor(props) {
        super(props);
        this.state = {
            postData: [],
            modalShow: false
        }
        // this.loadUserList = this.loadUserList.bind(this);
        this.editPost = this.editPost.bind(this);
        this.shouldUpdateFormClose = this.shouldUpdateFormClose.bind(this);
    }


    componentDidMount() {
        axios.get(this.apiUrl).then((res) => {
            this.setState({ postData: res.data });
        });

    }

    shouldUpdateFormClose(e) {
        if (e) {
            this.setState({ modalShow: false });
            setTimeout(() => {
                // @ts-ignore
                ReactDOM.unmountComponentAtNode(document.getElementById('addpostForm'));
            }, 0)
        }
    }

    addnewPost() {
        this.setState({ modalShow: true })
        setTimeout(() => {
            ReactDOM.render(<AddPost editPostData={{ formState: 'addpost' }} />, document.getElementById('addpostForm'));
            this.setState({ isAddFormOpen: true })
        }, 100)
    }

    editPost(postToEdit) {
        // @ts-ignore
        this.setState({ modalShow: true });
        setTimeout(() => {
             ReactDOM.render(<AddPost editPostData={{ formState: 'editPost', data: { ...postToEdit }, closeTheForm: this.shouldUpdateFormClose }} />, document.getElementById('addpostForm'));
            this.setState({ isAddFormOpen: true })
        })

    }

    deletePost(postId) {
        axios.delete(`${this.apiUrl}/${postId}`).then(res => {
            console.log('DELETE API Response: ', res);
            if (res) {
                alert('Item Deleted Successfully');
            }
        })
    }

    handleShow() {
        this.setState({ modalShow: true })
    }
    handleClose() {
        this.setState({ modalShow: false })
        setTimeout(() => {
            // @ts-ignore
            ReactDOM.unmountComponentAtNode(document.getElementById('addpostForm'));
        }, 0)
    }

    render() {
        return (
            <>

                    <div className='container py-5'>
                        <div className='row justify-content-center align-items-center'>
                            <div className="col-lg-12 mx-auto">
                                <div className="d-flex py-3 align-items-center">
                                    <h5 className="text-center mb-0" style={{color: "dodgerblue"}}>CURD operations</h5>

                                    <button className="btn btn-primary ms-auto" onClick={() => this.addnewPost()}>Add New User</button>
                                </div>
                                <table className="table table-bordered shadow">
                                    <thead>
                                        <tr style={{color: "dodgerblue"}}>
                                            <th>S.No</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.postData.map((item, i) => (
                                            <tr key={item['id']}>
                                                <td>{i + 1}</td>
                                                <td>{item['title']}</td>
                                                <td>{item['body']}</td>
                                                <td className={styles.nowrap}>
                                                    <button className="btn btn-primary" onClick={() => this.editPost(item)}>Edit</button>
                                                    <button className="btn btn-danger ms-2" onClick={() => this.deletePost(item['id'])}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                <Modal show={this.state.modalShow} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton className='border-0 pb-0'></Modal.Header>
                    <Modal.Body className="pt-0">
                        <div id="addpostForm"></div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}
