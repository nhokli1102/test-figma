import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Dashboards from "../index/dashboards";
import Order from "../index/order";
import OrderItems from "../index/orderItems";
import Stores from "../index/stores";
import Index from "../index/index";
import { Modal, Container, Button, Form, Alert, Nav } from 'react-bootstrap';

// https://ant.design/ 
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import orderItems from '../index/orderItems';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            buttonColor: 'dashboards',
        };
    }


    setModal = (values) => {
        this.setState({
            showModal: values
        })
    }

    setButton = (values) => {
        this.setState({
            buttonColor: values
        })
    }

    render() {
        const { showModal, buttonColor } = this.state;
        const menuLink = (
            <Menu>
                <Menu.Item>
                    <span className="checkOutLink" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-star downIcon1"></i>Checkout
                    </span>
                </Menu.Item>
                <Menu.Item>
                    <span className="checkOutLink" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-star downIcon1"></i>Dropship
                    </span>
                </Menu.Item>
                <Menu.Item>
                    <span className="checkOutLink" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-star downIcon1"></i>POD
                    </span>
                </Menu.Item>
                {/* <Menu.Item danger>a danger item</Menu.Item> */}
            </Menu>
        );

        return (
            <>
                <BrowserRouter >
                    <Modal
                        show={showModal}
                        onHide={() => this.setModal(false)}
                        backdrop="static"
                        keyboard={false}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                <h6 class="textItemOrderTracking">Invite Link</h6>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><h6 className="">Link invite Supplier by Seller</h6></Form.Label>
                                <input class="inputInModal" type="text" placeholder="https://account.salegate.io/invite_link/seller/gVBGPddN-KQWd-py7f-MgIw-rXoMJ6xrLoVd01qu3Ae9RJ5Mumber...." />
                                {/* <Form.Text className="text-muted">
                            </Form.Text> */}
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <button class="buttonCoppy" variant="secondary" onClick={() => this.setModal(false)}>
                                <svg className="iconCoppyLink" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 3.33333H9.33333C9.70152 3.33333 10 3.63181 10 4V4.66667H11.3333V4C11.3333 2.89543 10.4379 2 9.33333 2H4C2.89543 2 2 2.89543 2 4V9.33333C2 10.4379 2.89543 11.3333 4 11.3333H4.66667V10H4C3.63181 10 3.33333 9.70152 3.33333 9.33333V4C3.33333 3.63181 3.63181 3.33333 4 3.33333Z" fill="#33383F" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0003 6.00033H6.66699C6.2988 6.00033 6.00033 6.2988 6.00033 6.66699V12.0003C6.00033 12.3685 6.2988 12.667 6.66699 12.667H12.0003C12.3685 12.667 12.667 12.3685 12.667 12.0003V6.66699C12.667 6.2988 12.3685 6.00033 12.0003 6.00033ZM6.66699 4.66699C5.56242 4.66699 4.66699 5.56242 4.66699 6.66699V12.0003C4.66699 13.1049 5.56242 14.0003 6.66699 14.0003H12.0003C13.1049 14.0003 14.0003 13.1049 14.0003 12.0003V6.66699C14.0003 5.56242 13.1049 4.66699 12.0003 4.66699H6.66699Z" fill="#33383F" />
                                </svg>
                                Coppy
                            </button>
                            <Button variant="success" onClick={() => this.setModal(false)}>
                                <svg class="iconOpenLink" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6663 6C12.6663 6.36819 12.9648 6.66667 13.333 6.66667C13.7012 6.66667 13.9997 6.36819 13.9997 6V3.33333C13.9997 2.59695 13.4027 2 12.6663 2H9.99967C9.63148 2 9.33301 2.29848 9.33301 2.66667C9.33301 3.03486 9.63148 3.33333 9.99967 3.33333L11.7235 3.33333L7.52827 7.5286C7.26792 7.78895 7.26792 8.21106 7.52827 8.4714C7.78862 8.73175 8.21073 8.73175 8.47108 8.4714L12.6663 4.27614V6Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2H7.33333C7.70152 2 8 2.29848 8 2.66667C8 3.03486 7.70152 3.33333 7.33333 3.33333H4C3.63181 3.33333 3.33333 3.63181 3.33333 4V12C3.33333 12.3682 3.63181 12.6667 4 12.6667H12C12.3682 12.6667 12.6667 12.3682 12.6667 12V8.66667C12.6667 8.29848 12.9651 8 13.3333 8C13.7015 8 14 8.29848 14 8.66667V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4Z" fill="white" />
                                </svg>
                                Open Link
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <div class="offcanvas offcanvas-end mw-30" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <div class="headerMenuIcon">
                                <i class="bi bi-person-plus iconInvite" /> Invite Supplier
                            </div>
                            <button type="button" class="btn-close btn-close-white " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div class="headerMenu">
                                <img class="avartaAdminMenu" src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" />
                                <span class="textMenu">Admin</span>
                            </div>

                            <div class="dropdown mt-3">
                                <div className="itemMenu">
                                    <div className="nav-text">
                                        <i class="bi bi-graph-down iconAdd1"></i>
                                        <span className="textMenu">Dashboards</span>
                                    </div>
                                </div>
                                <div className="itemMenuActive">
                                    <li className="nav-text">
                                        <i class="bi bi-cart iconAdd1"></i>
                                        <span className="textMenu">Order</span>
                                    </li>
                                </div>
                                <div className="itemMenu">
                                    <li className="nav-text">
                                        <i class="bi bi-card-list iconAdd1"></i>
                                        <span className="textMenu">Order Items</span>
                                    </li>
                                </div>
                                <div className="itemMenu">
                                    <li className="nav-text">
                                        <i class="bi bi-shop iconAdd1"></i>
                                        <span className="textMenu">Stores</span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end */}

                    <div class="header">
                        <div class="col-12 row">
                            <div class="col-md-7 col-7 checkHeaderRight">
                                <svg class="logo" width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.4356 5.93895C29.2094 4.65858 27.7787 3.5665 26.1951 2.70218L21.746 7.94242C21.9144 8.01345 22.0805 8.08853 22.2441 8.16755L22.2489 8.16983C23.4038 8.72723 24.4358 9.4807 25.2947 10.3895C25.5358 10.6442 25.7634 10.9112 25.9763 11.1896L30.4356 5.93895Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8675 13.6725L18.3442 20.1816L18.3442 20.1784L23.8675 13.6725ZM34.5898 20.2597L18.3442 20.2597L18.3442 20.1816V20.2629H27.3559C25.9174 24.1007 22.0341 26.8501 17.4704 26.8501C16.0553 26.8519 14.6546 26.5827 13.3532 26.0588L8.89261 31.3102C11.5085 32.7066 14.4642 33.439 17.4704 33.4355C25.9067 33.4355 32.967 27.7673 34.5898 20.2597Z" fill="white" />
                                    <path d="M34.5898 20.2597C34.8235 19.1757 34.9411 18.0723 34.9409 16.9661C34.9411 15.8599 34.8235 14.7565 34.5898 13.6725H23.8675L18.3442 20.1816L18.3442 20.2597L34.5898 20.2597Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1951 2.70218C23.544 1.25509 20.534 0.494669 17.4704 0.498058C7.83756 0.498058 0 7.8859 0 16.966C0 21.2596 1.75296 25.1754 4.62011 28.1104L9.06685 22.8741C10.1704 24.27 11.6479 25.3693 13.3524 26.0565L8.89247 31.308C8.8929 31.3082 8.89333 31.3084 8.89376 31.3087L13.3544 26.0573L13.3524 26.0565L13.3532 26.0556C11.6524 25.369 10.1739 24.2713 9.06738 22.8735L9.06685 22.8741C8.94792 22.7237 8.83333 22.5698 8.72327 22.4126C7.59153 20.7964 6.9882 18.9026 6.98817 16.966C6.98817 11.5086 11.6815 7.08525 17.4704 7.08525C19.1302 7.08426 20.7664 7.45523 22.2441 8.16755C23.399 8.72513 24.433 9.47892 25.2947 10.3895C25.5357 10.6445 25.7631 10.9117 25.9757 11.1903L25.9763 11.1896L25.9769 11.1903L30.4356 5.93895L35.0004 0.560692H28.0122L26.1951 2.70218ZM26.1951 2.70218C27.7787 3.5665 29.2094 4.65858 30.4356 5.93895L25.9763 11.1896C25.7634 10.9112 25.5358 10.6442 25.2947 10.3895C24.4358 9.4807 23.4038 8.72723 22.2489 8.16983L22.2441 8.16755C22.0805 8.08853 21.9144 8.01345 21.746 7.94242L26.1951 2.70218Z" fill="white" />
                                    <path d="M4.62011 28.1104C4.62016 28.1104 4.62007 28.1103 4.62011 28.1104L0.0457892 33.4963H7.03396L8.89247 31.308C7.30041 30.4583 5.85891 29.3795 4.62011 28.1104Z" fill="white" />
                                    <path d="M4.62011 28.1104C5.85891 29.3795 7.30041 30.4583 8.89247 31.308L13.3524 26.0565C11.6479 25.3693 10.1704 24.27 9.06685 22.8741L4.62011 28.1104Z" fill="white" />
                                </svg>
                                <Dropdown overlay={menuLink}>
                                    <span className="ant-dropdown-link format" onClick={e => e.preventDefault()}>
                                        Checkout <i class="downIcon bi bi-chevron-down"></i>
                                    </span>
                                </Dropdown>,
                                <div class="space"></div>

                                <Link to="/">
                                    <button onClick={() => this.setButton('dashboards')} type="button" class="buttonTopLeft1" style= {buttonColor == 'dashboards' ? { backgroundColor: '#FBBC05' } : { backgroundColor: '#007B5C'}}>
                                        <div class="textItemTop"><i class="bi bi-graph-down iconAdd"></i>Dashboards</div>
                                    </button>
                                </Link>
                                
                                <Link to="/order">
                                    <button onClick={() => this.setButton('order')} type="button" class="buttonTopLeft" style= {buttonColor == 'order' ? { backgroundColor: '#FBBC05' } : { backgroundColor: '#007B5C'}}>
                                        <div class="textItemTop" ><i class="bi bi-cart iconAdd" ></i>Order</div>
                                    </button>
                                </Link>

                                <Link to="/orderItems">
                                    <button onClick={() => this.setButton('orderItems')} type="button" class="buttonTopLeft1" style= {buttonColor == 'orderItems' ? { backgroundColor: '#FBBC05' } : { backgroundColor: '#007B5C'}}>
                                        <div class="textItemTop" ><i class="bi bi-card-list iconAdd" ></i>Order Items</div>
                                    </button>

                                </Link>

                                <Link to="/stores">
                                    <button onClick={() => this.setButton('stores')} type="button" class="buttonTopLeft1" style= {buttonColor == 'stores' ? { backgroundColor: '#FBBC05' } : { backgroundColor: '#007B5C'}}>
                                        <div class="textItemTop" ><i class="bi bi-shop iconAdd"></i>Stores</div>
                                    </button>
                                </Link>

                            </div>
                            <div class="col-md-5 col-5 checkHeaderLeft">
                                {/* <div class="checkHeader"> */}
                                <button type="button" class="buttonTop" onClick={() => this.setModal(true)}>
                                    <div class="text textItemTopInvite" ><i class="bi bi-person-plus iconAdd"></i>Invite Supplier</div>
                                </button>

                                {/* <Dropdown overlay={menuSeller}> */}
                                <div class="dropdownSeller">
                                    <button type="button" class="buttonTopViewAdd">
                                        <div class="text textItemTopInvite" ><i class="bi bi-eye iconAdd"></i>View as (Seller)</div>
                                    </button>
                                    <div class="dropdown-content-seller">
                                        <span className="viewAs"><i class="bi bi-star downIcon2"></i>Seller</span>
                                        <span className="viewAs"><i class="bi bi-star downIcon2"></i>Supplier (Owner)</span>
                                    </div>
                                </div>

                                {/* </Dropdown> */}

                                {/* <Dropdown overlay={menuAdmin}> */}
                                <div class="dropdownAdmin">
                                    <div class="avartaAdmin">
                                    </div>
                                    <div class="dropdown-content-admin">
                                        <span className="viewAs"><i class="bi bi-person-circle downIcon2"></i>Manage account</span>
                                        <span className="viewAs"><i class="bi bi-gear downIcon2"></i>Settings</span>
                                        <span className="viewAs"><i class="bi bi-box-arrow-right downIcon2"></i>Log out</span>
                                    </div>
                                </div>

                               
                                {/* </Dropdown> */}

                                <b class="user">Admin</b>
                                {/* </div> */}
                                <i class="bi bi-list iconMenu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"></i>
                            </div>
                        </div>
                    </div>

                    <Route exact path="/" component={Dashboards} />
                    <Route exact path="/order" component={Order} />
                    <Route exact path="/orderItems" component={OrderItems} />
                    <Route exact path="/stores" component={Stores} />
                    <Route exact path="/index" component={Index} />
                </BrowserRouter>

            </>
        )
    }
}


export default Router;