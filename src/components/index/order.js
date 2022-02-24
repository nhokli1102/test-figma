
import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import { Table, Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

class order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    key: 1,
                    order: '#281119-DKS',
                    date: '17/01/2022 14:54:00',
                    customer: 'debbie.baker@example.com',
                    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
                },
                {
                    key: 2,
                    order: '#212701605-GBS',
                    date: '17/01/2022 14:54:00',
                    customer: 'debbie.baker@example.com',
                    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
                },
                {
                    key: 3,
                    order: '#281119-DKS',
                    date: '17/01/2022 14:54:00',
                    customer: 'debbie.baker@example.com',
                    description: 'This not expandable',
                },
                {
                    key: 4,
                    order: '#212701605-GBS',
                    date: '17/01/2022 14:54:00',
                    customer: 'debbie.baker@example.com',
                    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                },
            ],
        };
    }


    setDetails = () => {
        this.props.history.push('/index')
    }


    render() {
        const { data } = this.state;

        const menu = (
            <Menu>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    1st menu item
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                    2nd menu item
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                    3rd menu item
                </Menu.Item>
            </Menu>
        );

        const columns = [
            Table.SELECTION_COLUMN,
            {
                title: 'Order', dataIndex: 'order', key: 'order', width: '400px', render: order =>
                    <a className="textOrderLink" onClick={() => this.setDetails()}>{order}
                        <svg class="dangerIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.82763 3.81101C8.78669 2.1281 11.2127 2.1281 12.1717 3.81101L17.8426 13.7618C18.7923 15.4284 17.5888 17.4996 15.6705 17.4996H4.32888C2.41062 17.4996 1.20704 15.4284 2.15683 13.7618L7.82763 3.81101ZM9.99965 11.6663C10.4599 11.6663 10.833 11.2932 10.833 10.833V6.6663C10.833 6.20606 10.4599 5.83296 9.99965 5.83296C9.53941 5.83296 9.16631 6.20606 9.16631 6.6663V10.833C9.16631 11.2932 9.53941 11.6663 9.99965 11.6663ZM9.99965 14.9996C10.4599 14.9996 10.833 14.6265 10.833 14.1663C10.833 13.7061 10.4599 13.333 9.99965 13.333C9.53941 13.333 9.16631 13.7061 9.16631 14.1663C9.16631 14.6265 9.53941 14.9996 9.99965 14.9996Z" fill="#FF6A55" />
                        </svg>
                    </a>
            },
            Table.EXPAND_COLUMN,
            { title: 'Date', dataIndex: 'date', key: 'date' },
            { title: 'Customer', dataIndex: 'customer', width: '400px', key: 'customer' },
            {
                title: 'Fulfillment Status', dataIndex: 'fill', key: 'fill', render: () =>
                    <>
                        {/* <div class="statusFill">
                            <svg class="svgFill" width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5.75" cy="5" r="5" fill="#6D7175" />
                            </svg>
                            <text class="textFill">Fulfilled</text>
                        </div> */}

                        <div class="statusUnFill">
                            <svg class="svgFill" width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 10C8.01142 10 10.25 7.76142 10.25 5C10.25 2.23858 8.01142 0 5.25 0C2.48858 0 0.25 2.23858 0.25 5C0.25 7.76142 2.48858 10 5.25 10ZM5.25 8C6.90685 8 8.25 6.65685 8.25 5C8.25 3.34315 6.90685 2 5.25 2C3.59315 2 2.25 3.34315 2.25 5C2.25 6.65685 3.59315 8 5.25 8Z" fill="#916A00" />
                            </svg>
                            <text class="textFill">Unfulfilled</text>
                        </div>
                    </>

            },
            {
                title: 'Payment Status', dataIndex: 'payment', key: 'payment', render: () =>
                    <>
                        {/* <div class="statusPayment">
                            <svg class="svgFill" width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5.75" cy="5" r="5" fill="#007B5C" />
                            </svg>
                            <text class="textFill">Paid</text>
                        </div>

                        <div class="statusPaymentV">
                            <svg class="svgFill" width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5.75" cy="5" r="5" fill="#E83232" />
                            </svg>
                            <text class="textFill">Voided</text>
                        </div> */}
                        <div class="statusPaymentA">
                            <svg class="svgFill" width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 10C8.01142 10 10.25 7.76142 10.25 5C10.25 2.23858 8.01142 0 5.25 0C2.48858 0 0.25 2.23858 0.25 5C0.25 7.76142 2.48858 10 5.25 10ZM5.25 8C6.90685 8 8.25 6.65685 8.25 5C8.25 3.34315 6.90685 2 5.25 2C3.59315 2 2.25 3.34315 2.25 5C2.25 6.65685 3.59315 8 5.25 8Z" fill="#916A00" />
                            </svg>

                            <text class="textFill">Authorized</text>
                        </div>
                    </>

            },
            { title: 'Toltal', dataIndex: 'toltal', key: 'toltal', render: () => <a>$169.43</a> },
            { title: 'Items', dataIndex: 'items', key: 'items', render: () => <a>1</a> },
        ];

        return (
            <>

                <div className="col-12 g-2 row contaiHeaderOrders">
                    <div className="col-2 contaiHeaderOrdersLeft">
                        <div className="titleOrders">Orders</div>
                    </div>
                    <div className="col-10 contaiHeaderOrdersRight">
                        <button type="button" class="buttonOrders3">
                            <div class="text" ><svg class="iconAdd" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70741 4.16566C6.41996 2.50022 8.0729 1.33301 9.99967 1.33301C12.577 1.33301 14.6663 3.42235 14.6663 5.99967C14.6663 7.38185 14.0646 8.62436 13.111 9.47791C12.8366 9.72346 12.4151 9.70011 12.1696 9.42576C11.924 9.15141 11.9474 8.72994 12.2217 8.48439C12.9047 7.87308 13.333 6.98683 13.333 5.99967C13.333 4.15873 11.8406 2.66634 9.99967 2.66634C8.42128 2.66634 7.09765 3.76404 6.75351 5.23841C6.70429 5.44931 6.55568 5.62315 6.35501 5.7046C6.15434 5.78604 5.92661 5.76494 5.74432 5.648C5.43361 5.44867 5.0645 5.33301 4.66634 5.33301C3.56177 5.33301 2.66634 6.22844 2.66634 7.33301C2.66634 8.07245 3.06728 8.71904 3.66683 9.06585C3.98553 9.25021 4.09444 9.65803 3.91008 9.97674C3.72572 10.2954 3.3179 10.4044 2.99919 10.22C2.00459 9.64465 1.33301 8.56765 1.33301 7.33301C1.33301 5.49206 2.82539 3.99967 4.66634 3.99967C5.02944 3.99967 5.37954 4.05794 5.70741 4.16566Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.47108 11.5289C6.21073 11.2686 5.78862 11.2686 5.52827 11.5289C5.26792 11.7893 5.26792 12.2114 5.52827 12.4717L7.52827 14.4717C7.65794 14.6014 7.82773 14.6665 7.99768 14.667C7.99834 14.667 7.99901 14.667 7.99967 14.667C8.00034 14.667 8.00101 14.667 8.00167 14.667C8.09134 14.6667 8.17684 14.6488 8.25486 14.6164C8.33349 14.5839 8.40716 14.5356 8.47108 14.4717L10.4711 12.4717C10.7314 12.2114 10.7314 11.7893 10.4711 11.5289C10.2107 11.2686 9.78862 11.2686 9.52827 11.5289L8.66634 12.3908V8.66699C8.66634 8.2988 8.36786 8.00033 7.99967 8.00033C7.63148 8.00033 7.33301 8.2988 7.33301 8.66699V12.3908L6.47108 11.5289Z" fill="white" />
                            </svg>
                                Export Orders</div>
                        </button>
                    </div>
                </div>
                <div className="col-12 contaiBodyOrder">
                    <div class="bodyHeader">
                        <div className="bodyHeaderIn">
                            <span className="textHeader">
                                All {" "}
                                <Badge pill bg="light" text="dark">
                                    131
                                </Badge>
                            </span>
                            <span className="space" />
                            <span className="textHeaderDont">
                                Pending {" "}
                                <Badge pill bg="light" text="dark">
                                    131
                                </Badge>
                            </span>
                            <span className="space" />
                            <span className="textHeaderDont">
                                Bidding {" "}
                                <Badge pill bg="light" text="dark">
                                    196
                                </Badge>
                            </span>
                            <span className="space" />
                            <span className="textHeaderDont">
                                Closed {" "}
                                <Badge pill bg="light" text="dark">
                                    21
                                </Badge>
                            </span>
                            <span className="space" />
                            <span className="textHeaderDont">
                                Processing {" "}
                                <Badge pill bg="light" text="dark">
                                    10
                                </Badge>
                            </span>
                            <span className="space" />
                            <span className="textHeaderDont">
                                Tracking Added {" "}
                                <Badge pill bg="light" text="dark">
                                    4
                                </Badge>
                            </span>
                            <span className="space" />
                            <span className="textHeaderDont">
                                Shipped {" "}
                                <Badge pill bg="light" text="dark">
                                    337
                                </Badge>
                            </span>
                            <span className="space" />
                            <span className="textHeaderDont">
                                Returned {" "}
                                <Badge pill bg="light" text="dark">
                                    67
                                </Badge>
                            </span>
                            <span className="space" />
                            <span className="textHeaderDont">
                                Delivered {" "}
                                <Badge pill bg="light" text="dark">
                                    0
                                </Badge>
                            </span>
                            <span className="space" />
                            <span className="textHeaderDont">
                                Cancelled {" "}
                                <Badge pill bg="light" text="dark">
                                    131
                                </Badge>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 contaiBodyOrder">
                    <div class="bodyBody">
                        <div className="row">
                            <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="row">
                                    <div className="col-12">
                                        <div class="menuBar">
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83301 9.16667C4.2012 9.16667 4.49967 8.86819 4.49967 8.5C4.49967 8.13181 4.2012 7.83333 3.83301 7.83333C3.46482 7.83333 3.16634 8.13181 3.16634 8.5C3.16634 8.86819 3.46482 9.16667 3.83301 9.16667ZM3.83301 10.5C4.93758 10.5 5.83301 9.60457 5.83301 8.5C5.83301 7.39543 4.93758 6.5 3.83301 6.5C2.72844 6.5 1.83301 7.39543 1.83301 8.5C1.83301 9.60457 2.72844 10.5 3.83301 10.5Z" fill="#33383F" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 9.16667C8.86819 9.16667 9.16667 8.86819 9.16667 8.5C9.16667 8.13181 8.86819 7.83333 8.5 7.83333C8.13181 7.83333 7.83333 8.13181 7.83333 8.5C7.83333 8.86819 8.13181 9.16667 8.5 9.16667ZM8.5 10.5C9.60457 10.5 10.5 9.60457 10.5 8.5C10.5 7.39543 9.60457 6.5 8.5 6.5C7.39543 6.5 6.5 7.39543 6.5 8.5C6.5 9.60457 7.39543 10.5 8.5 10.5Z" fill="#33383F" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.167 9.16667C13.5352 9.16667 13.8337 8.86819 13.8337 8.5C13.8337 8.13181 13.5352 7.83333 13.167 7.83333C12.7988 7.83333 12.5003 8.13181 12.5003 8.5C12.5003 8.86819 12.7988 9.16667 13.167 9.16667ZM13.167 10.5C14.2716 10.5 15.167 9.60457 15.167 8.5C15.167 7.39543 14.2716 6.5 13.167 6.5C12.0624 6.5 11.167 7.39543 11.167 8.5C11.167 9.60457 12.0624 10.5 13.167 10.5Z" fill="#33383F" />
                                            </svg>
                                        </div>
                                        <div className="searchBar">
                                            <div class="input-group md-form form-sm form-1 pl-0">
                                                <div class="input-group-prepend">
                                                    <span className='iconSearch purple lighten-3'><i class="bi bi-search"></i></span>
                                                </div>
                                                <input class="form-control" type="text" placeholder="Search by Order name, Transaction ID, Line item name, Variant SKU...." aria-label="Search" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-12">
                                        
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="storesBar">
                                            <Dropdown overlay={menu}>
                                                <Button>
                                                    <i class="bi bi-shop iconAdd1"></i>Button<DownOutlined />
                                                </Button>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="storesBar1">
                                            <div class="filterBar">
                                                <svg class="iconAdd2" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6667 4.50033H10C9.63181 4.50033 9.33333 4.7988 9.33333 5.16699V11.8337C9.33333 12.2018 9.63181 12.5003 10 12.5003H12.6667C13.0349 12.5003 13.3333 12.2018 13.3333 11.8337V5.16699C13.3333 4.7988 13.0349 4.50033 12.6667 4.50033ZM10 3.16699C8.89543 3.16699 8 4.06242 8 5.16699V11.8337C8 12.9382 8.89543 13.8337 10 13.8337H12.6667C13.7712 13.8337 14.6667 12.9382 14.6667 11.8337V5.16699C14.6667 4.06242 13.7712 3.16699 12.6667 3.16699H10Z" fill="#33383F" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 4.49967C1.33301 4.13148 1.63148 3.83301 1.99967 3.83301H5.99967C6.36786 3.83301 6.66634 4.13148 6.66634 4.49967C6.66634 4.86786 6.36786 5.16634 5.99967 5.16634H1.99967C1.63148 5.16634 1.33301 4.86786 1.33301 4.49967Z" fill="#33383F" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 7.16667C1.33301 6.79848 1.63148 6.5 1.99967 6.5H5.99967C6.36786 6.5 6.66634 6.79848 6.66634 7.16667C6.66634 7.53486 6.36786 7.83333 5.99967 7.83333H1.99967C1.63148 7.83333 1.33301 7.53486 1.33301 7.16667Z" fill="#33383F" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 9.83366C1.33301 9.46547 1.63148 9.16699 1.99967 9.16699H5.99967C6.36786 9.16699 6.66634 9.46547 6.66634 9.83366C6.66634 10.2018 6.36786 10.5003 5.99967 10.5003H1.99967C1.63148 10.5003 1.33301 10.2018 1.33301 9.83366Z" fill="#33383F" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 12.4997C1.33301 12.1315 1.63148 11.833 1.99967 11.833H5.99967C6.36786 11.833 6.66634 12.1315 6.66634 12.4997C6.66634 12.8679 6.36786 13.1663 5.99967 13.1663H1.99967C1.63148 13.1663 1.33301 12.8679 1.33301 12.4997Z" fill="#33383F" />
                                                </svg>
                                                <span className="textFilter">Filter</span>
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
                                expandedRowRender: record =>
                                    // <p style={{ margin: 0 }}>{record.description}
                                    // </p>,
                                    <>
                                        <div>
                                            <table>
                                                <tr>
                                                    <td class="orderFirst">
                                                        <img class="imgOrder2" src="https://icdn.dantri.com.vn/thumb_w/640/2017/1-1510967806416.jpg" />
                                                    </td>
                                                    <td class="orderSecond">
                                                        <span class="textOrderItems2">Game MTG Brisela, Voice of Nightmares Keychain</span>
                                                    </td>
                                                    <td class="orderThird">
                                                        <span>$167.16 x 2 </span>
                                                    </td>
                                                    <td>
                                                        $334.32
                                                    </td>
                                                </tr>
                                            </table>
                                            <div class="formatHr"/>
                                            
                                            <table>
                                                <tr>
                                                    <td class="orderFirst">
                                                        <img class="imgOrder2" src="https://icdn.dantri.com.vn/thumb_w/640/2017/1-1510967806416.jpg" />
                                                    </td>
                                                    <td class="orderSecond">
                                                        <span class="textOrderItems2">Game MTG Brisela, Voice of Nightmares Keychain</span>
                                                    </td>
                                                    <td class="orderThird">
                                                        <span>$167.16 x 2 </span>
                                                    </td>
                                                    <td>
                                                        $334.32
                                                    </td>
                                                </tr>
                                            </table>
                                            <div class="formatHr"/>

                                            <table>
                                                <tr>
                                                    <td class="orderFirst">
                                                        <img class="imgOrder2" src="https://icdn.dantri.com.vn/thumb_w/640/2017/1-1510967806416.jpg" />
                                                    </td>
                                                    <td class="orderSecond">
                                                        <span class="textOrderItems2">Game MTG Brisela, Voice of Nightmares Keychain</span>
                                                    </td>
                                                    <td class="orderThird">
                                                        <span>$167.16 x 2 </span>
                                                    </td>
                                                    <td>
                                                        $334.32
                                                    </td>
                                                </tr>

                                            </table>

                                        </div>
                                    </>
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

export default order;
