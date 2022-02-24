
import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Switch } from 'antd';
import { Modal, Container, Button, Form, Alert, Nav } from 'react-bootstrap';

class stores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showmore: false,
            data: [
                {
                    key: 1,
                    storename: 'John Brown 1',
                    createat: '17/01/2022 14:54:00',
                    domain: 'jesk.mobi',
                    active: true,
                },
                {
                    key: 2,
                    storename: 'John Brown 2',
                    createat: '17/01/2022 14:54:00',
                    domain: 'jesk.mobi',
                    active: true,
                },
                {
                    key: 3,
                    storename: 'John Brown 3',
                    createat: '17/01/2022 14:54:00',
                    domain: 'jesk.mobi',
                    active: true,
                },
                {
                    key: 4,
                    storename: 'John Brown',
                    createat: '17/01/2022 14:54:00',
                    domain: 'jesk.mobi',
                    active: true,
                },
            ],
        };
    }

    setModal = (values) => {
        this.setState({
            showModal: values
        })
    }

    showMore = (values) => {
        this.setState({
            showmore: values,
        })
    }

    

    render() {
        const { data, showModal, showmore } = this.state;

        const columns = [
            Table.SELECTION_COLUMN,
            { title: 'Store Name', width: '350px', dataIndex: 'storename', key: 'storename', render: storename => <><div class="textStores">{storename}</div></> },
            Table.EXPAND_COLUMN,
            { title: 'Create at', width: '200px', dataIndex: 'createat', key: 'createat' },
            { title: 'Domain', dataIndex: 'domain', key: 'domain', width: '650px' },
            {
                title: 'Active', dataIndex: 'active', key: 'active', render: () =>
                    <>
                        <Switch defaultChecked className="switchActive" />
                    </>
            },
        ];

        return (
            <>
                <Modal
                    show={showModal}
                    onHide={() => this.setModal(false)}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h6 class="textItemOrderTracking">New store</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h6 className="">Name</h6></Form.Label>
                            <input class="inputInModal" type="text" placeholder="Enter store's name" />
                            {/* <Form.Text className="text-muted">
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h6 className="">Domain</h6></Form.Label>
                            <input class="inputInModal" type="text" placeholder="Enter store's domain" />
                            {/* <Form.Text className="text-muted">
                            </Form.Text> */}
                        </Form.Group>
                    </Modal.Body>
                    <hr class="hrModal"/>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h6 className="">New Private app</h6></Form.Label>
                            {showmore ? <>
                                <button className="showMore" onClick={() => this.showMore(false)}>
                                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.792893 8.45711C1.18342 8.84763 1.81658 8.84763 2.20711 8.45711L8 2.66422L13.7929 8.45711C14.1834 8.84763 14.8166 8.84763 15.2071 8.45711C15.5976 8.06659 15.5976 7.43342 15.2071 7.0429L9.41421 1.25C8.63316 0.468952 7.36683 0.468953 6.58579 1.25L0.792893 7.04289C0.402369 7.43342 0.402369 8.06658 0.792893 8.45711Z" fill="#33383F" />
                                    </svg>
                                </button>
                            </> : <>
                                <button className="showMore" onClick={() => this.showMore(true)}>
                                    <i class="bi bi-chevron-down"></i>
                                </button>
                            </> }
                          
                        </Form.Group>
                        {showmore && 
                        <>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h6 className="">Shop name</h6></Form.Label>
                            <input class="inputInModal" type="text" placeholder="Shop name" />
                            {/* <Form.Text className="text-muted">
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h6 className="">Shop domain</h6></Form.Label>
                            <input class="inputInModal" type="text" placeholder="Shop domain" />
                            {/* <Form.Text className="text-muted">
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h6 className="">API key</h6></Form.Label>
                            <input class="inputInModal" type="text" placeholder="API key" />
                            {/* <Form.Text className="text-muted">
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h6 className="">API secret</h6></Form.Label>
                            <input class="inputInModal" type="text" placeholder="API secret" />
                            {/* <Form.Text className="text-muted">
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h6 className="">Shared secret</h6></Form.Label>
                            <input class="inputInModal" type="text" placeholder="Shared secret" />
                            {/* <Form.Text className="text-muted">
                            </Form.Text> */}
                        </Form.Group>
                        </>}
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setModal(false)}>
                            Cancel
                        </Button>
                        <Button variant="success" onClick={() => this.setModal(false)}>
                            Create Store
                        </Button>
                    </Modal.Footer>
                </Modal>


                <div className="col-12 g-2 row contaiHeaderOrders">
                    <div className="col-2 contaiHeaderOrdersLeft">
                        <div className="titleOrders">Stores</div>
                    </div>
                    <div className="col-10 contaiHeaderOrdersRight">
                        <button type="button" class="buttonOrders2" onClick={() => this.setState({ showModal: true })}>
                            <div class="text" ><i class="iconAdd" class="bi bi-plus-lg"></i>
                                <span class="textNewStore">New Store</span></div>
                        </button>
                    </div>
                </div>
                <div className="col-12 contaiBodyOrder">
                    <div class="bodyBody1">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div className="col-12">
                                        <div class="menuBar">
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83301 9.16667C4.2012 9.16667 4.49967 8.86819 4.49967 8.5C4.49967 8.13181 4.2012 7.83333 3.83301 7.83333C3.46482 7.83333 3.16634 8.13181 3.16634 8.5C3.16634 8.86819 3.46482 9.16667 3.83301 9.16667ZM3.83301 10.5C4.93758 10.5 5.83301 9.60457 5.83301 8.5C5.83301 7.39543 4.93758 6.5 3.83301 6.5C2.72844 6.5 1.83301 7.39543 1.83301 8.5C1.83301 9.60457 2.72844 10.5 3.83301 10.5Z" fill="#33383F" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 9.16667C8.86819 9.16667 9.16667 8.86819 9.16667 8.5C9.16667 8.13181 8.86819 7.83333 8.5 7.83333C8.13181 7.83333 7.83333 8.13181 7.83333 8.5C7.83333 8.86819 8.13181 9.16667 8.5 9.16667ZM8.5 10.5C9.60457 10.5 10.5 9.60457 10.5 8.5C10.5 7.39543 9.60457 6.5 8.5 6.5C7.39543 6.5 6.5 7.39543 6.5 8.5C6.5 9.60457 7.39543 10.5 8.5 10.5Z" fill="#33383F" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.167 9.16667C13.5352 9.16667 13.8337 8.86819 13.8337 8.5C13.8337 8.13181 13.5352 7.83333 13.167 7.83333C12.7988 7.83333 12.5003 8.13181 12.5003 8.5C12.5003 8.86819 12.7988 9.16667 13.167 9.16667ZM13.167 10.5C14.2716 10.5 15.167 9.60457 15.167 8.5C15.167 7.39543 14.2716 6.5 13.167 6.5C12.0624 6.5 11.167 7.39543 11.167 8.5C11.167 9.60457 12.0624 10.5 13.167 10.5Z" fill="#33383F" />
                                            </svg>
                                        </div>
                                        <div className="searchBar1">
                                            <div class="input-group md-form form-sm form-1 pl-0">
                                                <div class="input-group-prepend">
                                                    <span className='iconSearch purple lighten-3'><i class="bi bi-search"></i></span>
                                                </div>
                                                <input class="form-control" type="text" placeholder="Search Store" aria-label="Search" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 contaiBodyOrder">
                    <div class="bodyBodyTable">
                        {/* tableBody */}
                        <Table
                            pagination={{ position: ['none'] }}
                            columns={columns}
                            rowSelection={{}}
                            expandable={{
                                expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                            }}
                            dataSource={data}
                        />
                    </div>
                </div>
                <div className="col-12 contaiBodyOrder">
                    <div class="bodyBodyBottom row">
                        <div className="col-6 rowOrderLeft">
                            <table>
                                <tr>
                                    <td class="textOrder">
                                        Row per page
                                    </td>
                                    <td>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>20</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-6 rowOrderRight">
                            <table>
                                <tr>
                                    <td>
                                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 5.5C0 2.73858 2.23858 0.5 5 0.5H27C29.7614 0.5 32 2.73858 32 5.5V27.5C32 30.2614 29.7614 32.5 27 32.5H5C2.23858 32.5 0 30.2614 0 27.5V5.5Z" fill="#EFEFEF" />
                                            <path d="M15.0302 20.8447C15.3231 21.1376 15.3231 21.6124 15.0302 21.9053C14.7373 22.1982 14.2624 22.1982 13.9696 21.9053L9.62489 17.5607C9.0391 16.9749 9.0391 16.0251 9.62489 15.4393L13.9696 11.0947C14.2624 10.8018 14.7373 10.8018 15.0302 11.0947C15.3231 11.3876 15.3231 11.8624 15.0302 12.1553L11.4355 15.75H21.9999C22.4141 15.75 22.7499 16.0858 22.7499 16.5C22.7499 16.9142 22.4141 17.25 21.9999 17.25H11.4355L15.0302 20.8447Z" fill="#33383F" />
                                        </svg>
                                    </td>
                                    <td class="textOrderRight">
                                        1-50 of 601
                                    </td>
                                    <td>
                                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 5.5C0 2.73858 2.23858 0.5 5 0.5H27C29.7614 0.5 32 2.73858 32 5.5V27.5C32 30.2614 29.7614 32.5 27 32.5H5C2.23858 32.5 0 30.2614 0 27.5V5.5Z" fill="#EFEFEF" />
                                            <path d="M16.9697 20.8447C16.6768 21.1376 16.6768 21.6124 16.9697 21.9053C17.2626 22.1982 17.7374 22.1982 18.0303 21.9053L22.375 17.5607C22.9608 16.9749 22.9608 16.0251 22.375 15.4393L18.0303 11.0947C17.7374 10.8018 17.2626 10.8018 16.9697 11.0947C16.6768 11.3876 16.6768 11.8624 16.9697 12.1553L20.5643 15.75H10C9.58579 15.75 9.25 16.0858 9.25 16.5C9.25 16.9142 9.58579 17.25 10 17.25H20.5643L16.9697 20.8447Z" fill="#33383F" />
                                        </svg>
                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default stores;
