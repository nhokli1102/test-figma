import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Modal, Container, Button, Form, Alert, Nav } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IconContext } from 'react-icons';

import {
  DrawerNavigationHeader,
  DrawerNavigation,
} from 'react-bootstrap-drawer';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        'Select master',
        'Create an ad group',
        'Create an ad',
        'Create an ad',
        'Create an ad',
      ],
      showModal: false,
      showModalStepper: false,
      showModalBids: false,
      menuBar: false,

      SidebarData: [
        {
          title: 'Dashboards',
          path: '/',
          icon: <i class="bi bi-graph-down iconAdd"></i>,
          cName: 'nav-text'
        },
        {
          title: 'Order',
          path: '/reports',
          icon: <i class="bi bi-cart iconAdd"></i>,
          cName: 'nav-text'
        },
        {
          title: 'Order Items',
          path: '/products',
          icon: <i class="bi bi-card-list iconAdd"></i>,
          cName: 'nav-text'
        },
        {
          title: 'Stores',
          path: '/team',
          icon: <i class="bi bi-shop iconAdd"></i>,
          cName: 'nav-text'
        },
      ],
    };
  }

  setModal = (status) => {
    this.setState({
      showModal: status,
    });
  }

  setModalBids = (status) => {
    this.setState({
      showModalBids: status,
    });
  }

  setModalStepper = (status) => {
    this.setState({
      showModalStepper: status,
    });
  }


  componentDidMount() {

  }

  setBar = (values) => {
    this.setState({
      menuBar: values
    })
  }

  render() {
    const { steps, showModal, showModalStepper, showModalBids, menuBar, SidebarData } = this.state;
    return (
      <>
        {/* canvas */}
        <div class="offcanvas offcanvas-end mw-30" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <div class="headerMenuIcon">
              <i class="bi bi-person-plus iconInvite"/> Invite Supplier
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
            <div class="col-md-8 col-8 checkHeaderRight">
              <svg class="logo" width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.4356 5.93895C29.2094 4.65858 27.7787 3.5665 26.1951 2.70218L21.746 7.94242C21.9144 8.01345 22.0805 8.08853 22.2441 8.16755L22.2489 8.16983C23.4038 8.72723 24.4358 9.4807 25.2947 10.3895C25.5358 10.6442 25.7634 10.9112 25.9763 11.1896L30.4356 5.93895Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8675 13.6725L18.3442 20.1816L18.3442 20.1784L23.8675 13.6725ZM34.5898 20.2597L18.3442 20.2597L18.3442 20.1816V20.2629H27.3559C25.9174 24.1007 22.0341 26.8501 17.4704 26.8501C16.0553 26.8519 14.6546 26.5827 13.3532 26.0588L8.89261 31.3102C11.5085 32.7066 14.4642 33.439 17.4704 33.4355C25.9067 33.4355 32.967 27.7673 34.5898 20.2597Z" fill="white" />
                <path d="M34.5898 20.2597C34.8235 19.1757 34.9411 18.0723 34.9409 16.9661C34.9411 15.8599 34.8235 14.7565 34.5898 13.6725H23.8675L18.3442 20.1816L18.3442 20.2597L34.5898 20.2597Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1951 2.70218C23.544 1.25509 20.534 0.494669 17.4704 0.498058C7.83756 0.498058 0 7.8859 0 16.966C0 21.2596 1.75296 25.1754 4.62011 28.1104L9.06685 22.8741C10.1704 24.27 11.6479 25.3693 13.3524 26.0565L8.89247 31.308C8.8929 31.3082 8.89333 31.3084 8.89376 31.3087L13.3544 26.0573L13.3524 26.0565L13.3532 26.0556C11.6524 25.369 10.1739 24.2713 9.06738 22.8735L9.06685 22.8741C8.94792 22.7237 8.83333 22.5698 8.72327 22.4126C7.59153 20.7964 6.9882 18.9026 6.98817 16.966C6.98817 11.5086 11.6815 7.08525 17.4704 7.08525C19.1302 7.08426 20.7664 7.45523 22.2441 8.16755C23.399 8.72513 24.433 9.47892 25.2947 10.3895C25.5357 10.6445 25.7631 10.9117 25.9757 11.1903L25.9763 11.1896L25.9769 11.1903L30.4356 5.93895L35.0004 0.560692H28.0122L26.1951 2.70218ZM26.1951 2.70218C27.7787 3.5665 29.2094 4.65858 30.4356 5.93895L25.9763 11.1896C25.7634 10.9112 25.5358 10.6442 25.2947 10.3895C24.4358 9.4807 23.4038 8.72723 22.2489 8.16983L22.2441 8.16755C22.0805 8.08853 21.9144 8.01345 21.746 7.94242L26.1951 2.70218Z" fill="white" />
                <path d="M4.62011 28.1104C4.62016 28.1104 4.62007 28.1103 4.62011 28.1104L0.0457892 33.4963H7.03396L8.89247 31.308C7.30041 30.4583 5.85891 29.3795 4.62011 28.1104Z" fill="white" />
                <path d="M4.62011 28.1104C5.85891 29.3795 7.30041 30.4583 8.89247 31.308L13.3524 26.0565C11.6479 25.3693 10.1704 24.27 9.06685 22.8741L4.62011 28.1104Z" fill="white" />
              </svg>
              <span class="format">Checkout</span>
              <i class="downIcon bi bi-chevron-down"></i>
              <div class="space"></div>
              <button type="button" class="buttonTopLeft1">
                <div class="textItemTop"><i class="bi bi-graph-down iconAdd"></i>Dashboards</div>
              </button>
              <button type="button" class="buttonTopLeft">
                <div class="textItemTop" ><i class="bi bi-cart iconAdd"></i>Order</div>
              </button>
              <button type="button" class="buttonTopLeft1">
                <div class="textItemTop" ><i class="bi bi-card-list iconAdd"></i>Order Items</div>
              </button>
              <button type="button" class="buttonTopLeft1">
                <div class="textItemTop" ><i class="bi bi-shop iconAdd"></i>Stores</div>
              </button>
            </div>
            <div class="col-md-4 col-4 checkHeaderLeft">
              {/* <div class="checkHeader"> */}
              <button type="button" class="buttonTop">
                <div class="text textItemTopInvite" ><i class="bi bi-person-plus iconAdd"></i>Invite Supplier</div>
              </button>
              <div class="avartaAdmin"> </div>
              <b class="user">Admin</b>
              {/* </div> */}
              <i class="bi bi-list iconMenu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"></i>
            </div>

          </div>
        </div>

        <div class="container">
          <div class="row g-2 col-lg-10 col-md-12 col-sm-12 col-12 offset-lg-1 offset-md-0 offset-sm-0">
            <div class="col-12">
              <div class="divBodyHeader">
                <div class="col-12" >
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div class="buttonBack">
                            <i class="bi bi-arrow-left"></i>
                          </div>
                        </td>
                        <td>
                          <div class="textBack">
                            <p class="textBackTop">#2262108-PGL<svg class="coppiedIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5H6C5.44772 5 5 5.44772 5 6V14C5 14.5523 5.44772 15 6 15H14C14.5523 15 15 14.5523 15 14V6C15 5.44772 14.5523 5 14 5ZM6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14V6C17 4.34315 15.6569 3 14 3H6Z" fill="#33383F" />
                              <path d="M7 10C7 8.34315 8.34315 7 10 7H18C19.6569 7 21 8.34315 21 10V18C21 19.6569 19.6569 21 18 21H10C8.34315 21 7 19.6569 7 18V10Z" fill="#33383F" />
                            </svg>
                            <p class="textBackBottom">Jan 15, 2021 at 08:10 pm</p>
                            </p>
                          </div>
                        </td>
                        <td>
                          <div class="textBack">

                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="divBodyTop">
                <div class="col-12 stepper">
                  <table>
                    <tr>
                      <td>
                        <svg class="iconStepper" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M32 0H0V32H32V0Z" fill="white" fill-opacity="0.01" />
                          <path d="M25.9997 21.3333H8.66634L5.33301 8H29.333L25.9997 21.3333Z" fill="#007B5C" />
                          <path d="M2 4H4.33333L5.33333 8L2 4ZM5.33333 8L8.66667 21.3333H26L29.3333 8H5.33333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M8.66602 27C9.77059 27 10.666 26.1046 10.666 25C10.666 23.8954 9.77059 23 8.66602 23C7.56145 23 6.66602 23.8954 6.66602 25C6.66602 26.1046 7.56145 27 8.66602 27Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M26 27C27.1046 27 28 26.1046 28 25C28 23.8954 27.1046 23 26 23C24.8954 23 24 23.8954 24 25C24 26.1046 24.8954 27 26 27Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M14.667 14.666H20.0003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M17.333 17.3333V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </td>
                      <td class="">
                        <div className="d-flex flex-column tdHeader">
                          <div className="mx-2">
                            <text class="textTop">Order Placed</text><svg width="14" height="14" class="checkIcon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.99967 13.6673C10.6816 13.6673 13.6663 10.6825 13.6663 7.00065C13.6663 5.97112 13.433 4.9961 13.0162 4.12559C12.876 3.83259 12.491 3.78552 12.2613 4.01522L7.27582 9.00065C6.75512 9.52135 5.9109 9.52135 5.3902 9.00065L3.52827 7.13872C3.26792 6.87837 3.26792 6.45626 3.52827 6.19591C3.78862 5.93556 4.21073 5.93556 4.47108 6.19591L6.33301 8.05784L11.5675 2.82708C11.7571 2.63755 11.7648 2.33059 11.5696 2.14676C10.3763 1.02278 8.7684 0.333984 6.99967 0.333984C3.31778 0.333984 0.333008 3.31875 0.333008 7.00065C0.333008 10.6825 3.31778 13.6673 6.99967 13.6673Z" fill="#007B5C" />
                            </svg>
                          </div>
                          <span className="texTopBot">Jan 9, 2022</span>
                        </div>
                      </td>
                      <td>
                        <div class="border" />
                      </td>

                      <td>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 9.33268C4.5 2.66602 9.83333 2.66602 9.83333 2.66602V15.9993H4.5C4.5 15.9993 4.5 15.9993 4.5 9.33268Z" fill="white" stroke="black" stroke-width="2" stroke-linejoin="round" />
                          <path d="M28.4997 6.66602H9.83301V10.666H28.4997V6.66602Z" fill="white" stroke="black" stroke-width="2" stroke-linejoin="round" />
                          <path d="M4.5 20H28.5C28.5 20 28.5 25.3333 24.5 25.3333C20.5 25.3333 19.8333 25.3333 19.8333 25.3333L21.1667 29.3333H9.16667L10.5 25.3333H4.5V20Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linejoin="round" />
                        </svg>

                      </td>
                      <td class="">
                        <div className="d-flex flex-column tdHeader">
                          <div className="mx-2">
                            <span class="textTop">Bids</span><svg width="14" height="14" class="checkIcon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.99967 13.6673C10.6816 13.6673 13.6663 10.6825 13.6663 7.00065C13.6663 5.97112 13.433 4.9961 13.0162 4.12559C12.876 3.83259 12.491 3.78552 12.2613 4.01522L7.27582 9.00065C6.75512 9.52135 5.9109 9.52135 5.3902 9.00065L3.52827 7.13872C3.26792 6.87837 3.26792 6.45626 3.52827 6.19591C3.78862 5.93556 4.21073 5.93556 4.47108 6.19591L6.33301 8.05784L11.5675 2.82708C11.7571 2.63755 11.7648 2.33059 11.5696 2.14676C10.3763 1.02278 8.7684 0.333984 6.99967 0.333984C3.31778 0.333984 0.333008 3.31875 0.333008 7.00065C0.333008 10.6825 3.31778 13.6673 6.99967 13.6673Z" fill="#007B5C" />
                            </svg>
                          </div>
                          <span className="texTopBot">Jan 9, 2022, <u className="colorHref" onClick={() => this.setModalBids(true)}>More info</u></span>
                        </div>
                      </td>
                      <td>
                        <div class="border" />
                      </td>

                      <td>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M32 0H0V32H32V0Z" fill="white" fill-opacity="0.01" />
                          <path d="M26 4H6C4.89543 4 4 4.89543 4 6V26C4 27.1046 4.89543 28 6 28H26C27.1046 28 28 27.1046 28 26V6C28 4.89543 27.1046 4 26 4Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linejoin="round" />
                          <path d="M22.6663 18H9.33301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M17.9997 22.666H9.33301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                      </td>
                      <td class="">
                        <div className="d-flex flex-column tdHeader">
                          <div className="mx-2">
                            <span class="textTop">Add TKN (4/4)</span>
                            <svg width="14" height="14" class="checkIcon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.99967 13.6673C10.6816 13.6673 13.6663 10.6825 13.6663 7.00065C13.6663 5.97112 13.433 4.9961 13.0162 4.12559C12.876 3.83259 12.491 3.78552 12.2613 4.01522L7.27582 9.00065C6.75512 9.52135 5.9109 9.52135 5.3902 9.00065L3.52827 7.13872C3.26792 6.87837 3.26792 6.45626 3.52827 6.19591C3.78862 5.93556 4.21073 5.93556 4.47108 6.19591L6.33301 8.05784L11.5675 2.82708C11.7571 2.63755 11.7648 2.33059 11.5696 2.14676C10.3763 1.02278 8.7684 0.333984 6.99967 0.333984C3.31778 0.333984 0.333008 3.31875 0.333008 7.00065C0.333008 10.6825 3.31778 13.6673 6.99967 13.6673Z" fill="#007B5C" />
                            </svg>
                          </div>
                          <span className="texTopBot">Jan 9, 2022, <u className="colorHref" onClick={() => this.setModalStepper(true)}>More info</u></span>
                        </div>
                      </td>
                      <td>
                        <div class="border" />
                      </td>

                      <td>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M25.8329 28.0002L28.0935 21.7836C28.3249 21.1472 28.0425 20.4383 27.4367 20.1354L17.0959 14.965C16.7205 14.7773 16.2787 14.7773 15.9033 14.965L5.56247 20.1354C4.95672 20.4383 4.67425 21.1472 4.9057 21.7836L7.16626 28.0002" stroke="black" stroke-width="2" stroke-linejoin="round" />
                          <path d="M23.833 9.33398H9.16634C8.42994 9.33398 7.83301 9.93092 7.83301 10.6673V18.6673L15.9409 14.9252C16.2955 14.7616 16.7039 14.7616 17.0584 14.9252L25.1663 18.6673V10.6673C25.1663 9.93092 24.5694 9.33398 23.833 9.33398Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M19.8337 9.33268V3.99935C19.8337 3.26297 19.2367 2.66602 18.5003 2.66602H14.5003C13.7639 2.66602 13.167 3.26297 13.167 3.99935V9.33268" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M16.5 21.334V26.6673" stroke="black" stroke-width="2" stroke-linecap="round" />
                          <path d="M3.16699 29.3333C5.83366 29.3333 5.83366 28 7.83366 28C9.83366 28 9.83366 29.3333 11.8337 29.3333C13.8337 29.3333 14.167 28 16.5003 28C18.8337 28 19.167 29.3333 21.167 29.3333C23.167 29.3333 23.167 28 25.167 28C27.167 28 27.167 29.3333 29.8337 29.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                      </td>
                      <td>
                        <div className="d-flex flex-column tdHeaderShip">
                          <div className="mx-2">
                            <span class="textTop">Shipped</span><svg width="14" height="14" class="checkIcon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.99967 13.6673C10.6816 13.6673 13.6663 10.6825 13.6663 7.00065C13.6663 5.97112 13.433 4.9961 13.0162 4.12559C12.876 3.83259 12.491 3.78552 12.2613 4.01522L7.27582 9.00065C6.75512 9.52135 5.9109 9.52135 5.3902 9.00065L3.52827 7.13872C3.26792 6.87837 3.26792 6.45626 3.52827 6.19591C3.78862 5.93556 4.21073 5.93556 4.47108 6.19591L6.33301 8.05784L11.5675 2.82708C11.7571 2.63755 11.7648 2.33059 11.5696 2.14676C10.3763 1.02278 8.7684 0.333984 6.99967 0.333984C3.31778 0.333984 0.333008 3.31875 0.333008 7.00065C0.333008 10.6825 3.31778 13.6673 6.99967 13.6673Z" fill="#007B5C" />
                            </svg>
                          </div>
                          <span className="texTopBot">Jan 9, 2022</span>
                        </div>
                      </td>
                      <td>
                        <div class="border" />
                      </td>

                      <td>
                        <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6.75L7.5 13.75L18 20.75L28.5 13.75L18 6.75Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linejoin="round" />
                          <path d="M18 6.75L28.5 13.75L32.875 7.625L23.25 1.5L18 6.75Z" stroke="black" stroke-width="2" stroke-linejoin="round" />
                          <path d="M18 6.75L7.5 13.75L3.125 7.625L12.75 1.5L18 6.75Z" stroke="black" stroke-width="2" stroke-linejoin="round" />
                          <path d="M34.625 17.25L28.5 13.75L18 20.75L24.125 25.125L34.625 17.25Z" stroke="black" stroke-width="2" stroke-linejoin="round" />
                          <path d="M1.375 17.25L7.5 13.75L18 20.75L11.875 25.125L1.375 17.25Z" stroke="black" stroke-width="2" stroke-linejoin="round" />
                          <path d="M29.7969 21V30L17.7969 37L5.79688 30V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                      </td>
                      <td>
                        <div className="d-flex flex-column tdHeader">
                          <div className="mx-2">
                            <span class="textTop">Delivered</span><svg width="14" height="14" class="checkIcon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.99967 13.6673C10.6816 13.6673 13.6663 10.6825 13.6663 7.00065C13.6663 5.97112 13.433 4.9961 13.0162 4.12559C12.876 3.83259 12.491 3.78552 12.2613 4.01522L7.27582 9.00065C6.75512 9.52135 5.9109 9.52135 5.3902 9.00065L3.52827 7.13872C3.26792 6.87837 3.26792 6.45626 3.52827 6.19591C3.78862 5.93556 4.21073 5.93556 4.47108 6.19591L6.33301 8.05784L11.5675 2.82708C11.7571 2.63755 11.7648 2.33059 11.5696 2.14676C10.3763 1.02278 8.7684 0.333984 6.99967 0.333984C3.31778 0.333984 0.333008 3.31875 0.333008 7.00065C0.333008 10.6825 3.31778 13.6673 6.99967 13.6673Z" fill="#007B5C" />
                            </svg>
                          </div>
                          <span className="texTopBot">Jan 9, 2022</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 ">
              <div class="divBodyLeft">
                <div class="col-12">
                  <div class="row">
                    <div class="col-12">
                      <div class="textItem py-3">
                        <text class="textOrderItems">Order Items</text>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="orderItem">
                        <table class="table table-borderless">
                          <tbody>
                            <tr>
                              <td><img class="imgOrder" src="https://icdn.dantri.com.vn/thumb_w/640/2017/1-1510967806416.jpg" /></td>
                              <td><p class="textItemOrder1">Ozark Trail Sand Island Beach Wagon Cart, Outdoor and Camping, Blue, Adult<p class="textItemOrderIn">SKU: 760256796</p></p></td>
                              <td class="textItemOrderTKN">TKN:<u className="colorHrefTKN">23123123123</u></td>
                              <td class="textItemOrderPrice">$35.20 x 1</td>
                              <td class="textItemOrder">$35.20</td>
                            </tr>
                            <tr>
                              <td><img class="imgOrder" src="https://chupanhsanpham.com.vn/wp-content/uploads/2017/11/le-fruit-passion-2.jpg" /></td>
                              <td><p class="textItemOrder1">Ozark Trail Sand Island Beach Wagon Cart, Outdoor and Camping, Blue, Adult<p class="textItemOrderIn">SKU: 760256796</p></p></td>

                              <td class="textItemOrderTKN">TKN:<u className="colorHrefTKN">23123123123</u></td>
                              <td class="textItemOrderPrice">$35.20 x 1</td>
                              <td class="textItemOrder">$35.20</td>
                            </tr>
                            <tr>
                              <td><img class="imgOrder" src="https://otusstudio.com/wp-content/uploads/2018/09/chup-anh-san-pham-nuoc-hoa-otus-studio-9-300x300.jpg" /></td>
                              <td><p class="textItemOrder1">Ozark Trail Sand Island Beach Wagon Cart, Outdoor and Camping, Blue, Adult<p class="textItemOrderIn">SKU: 760256796</p></p></td>
                              <td class="textItemOrderTKN">TKN:<u className="colorHrefTKN">23123123123</u></td>
                              <td class="textItemOrderPrice">$35.20 x 1</td>
                              <td class="textItemOrder">$35.20</td>
                            </tr>
                            <tr>
                              <td><img class="imgOrder" src="https://logoaz.net/wp-content/uploads/2019/02/quy-tac-chup-anh-san-pham-bo-cuc-anh.jpg" /></td>
                              <td><p class="textItemOrder1">Ozark Trail Sand Island Beach Wagon Cart, Outdoor and Camping, Blue, Adult<p class="textItemOrderIn">SKU: 760256796</p></p></td>

                              <td class="textItemOrderTKN">TKN:<u className="colorHrefTKN">23123123123</u></td>
                              <td class="textItemOrderPrice">$35.20 x 1</td>
                              <td class="textItemOrder">$35.20</td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="col-12">
                      <hr className="" />
                      <div class="bottomRight">
                        <div class="bottomRightEqu">
                          <div class="textFloat">$325</div><br />
                          <div class="textFloat">$32</div><br />
                          <div class="textFloat">$3</div><br />
                          <div class="textFloat">$32</div><br />
                          <div class="textFloatTotal"><h6>$325</h6></div><br />
                        </div>
                        <div class="bottomRightEqu1">
                          <div class="textFloat">Subtotal: </div><br />
                          <div class="textFloat">Shipping:</div><br />
                          <div class="textFloat">Tip:</div><br />
                          <div class="textFloat">Tax:</div><br />
                          <div class="textFloatTotal"><h6>Total:</h6></div><br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* <div class="bottomOrder col-12">
                <div class="rightOrder">
                  
                </div>
              </div> */}
              </div>

              {/* footer */}
              <div class="col-12">
                <div class="divBodyBottom">
                  <div class="textItemBottom">
                    <span><svg class="checkIconBot" width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4.16732C8 5.27189 7.10457 6.16732 6 6.16732C4.89543 6.16732 4 5.27189 4 4.16732C4 3.06275 4.89543 2.16732 6 2.16732C7.10457 2.16732 8 3.06275 8 4.16732ZM9.33333 4.16732C9.33333 6.00827 7.84095 7.50065 6 7.50065C4.15905 7.50065 2.66667 6.00827 2.66667 4.16732C2.66667 2.32637 4.15905 0.833984 6 0.833984C7.84095 0.833984 9.33333 2.32637 9.33333 4.16732ZM1.33333 12.834C1.33333 11.3612 2.52724 10.1673 4 10.1673H8C9.47276 10.1673 10.6667 11.3612 10.6667 12.834V13.5007C10.6667 13.8688 10.9651 14.1673 11.3333 14.1673C11.7015 14.1673 12 13.8688 12 13.5007V12.834C12 10.6248 10.2091 8.83398 8 8.83398H4C1.79086 8.83398 0 10.6248 0 12.834V13.5007C0 13.8688 0.298477 14.1673 0.666667 14.1673C1.03486 14.1673 1.33333 13.8688 1.33333 13.5007V12.834Z" fill="#33383F" />
                    </svg>{" "}
                      <span class="textBottom">CUSTOMER DETAILS</span></span>
                    <h6 class="textItemOrder3">Barbra Curchill</h6>
                  </div>
                  <div class="col-12 divHr">
                    <hr className="mb-2 hrSize" />
                  </div>
                  <div class="textItemBottom">
                    <span><svg class="checkIconBot" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33301 1.49935H11.6663C11.9238 1.49935 12.1472 1.64533 12.2583 1.85904L7.36948 5.11824C7.14555 5.26753 6.85382 5.26753 6.62988 5.11824L1.74107 1.85903C1.85213 1.64532 2.07552 1.49935 2.33301 1.49935ZM1.66634 3.41168V8.83268C1.66634 9.20087 1.96482 9.49935 2.33301 9.49935H11.6663C12.0345 9.49935 12.333 9.20087 12.333 8.83268V3.41169L8.10908 6.22764C7.43728 6.67551 6.56208 6.67551 5.89028 6.22764L1.66634 3.41168ZM0.333008 2.16602C0.333008 1.06145 1.22844 0.166016 2.33301 0.166016H11.6663C12.7709 0.166016 13.6663 1.06145 13.6663 2.16602V8.83268C13.6663 9.93725 12.7709 10.8327 11.6663 10.8327H2.33301C1.22844 10.8327 0.333008 9.93725 0.333008 8.83268V2.16602Z" fill="#33383F" />
                    </svg>
                      {" "}
                      <span class="textBottom">CONTACT INFORMATION</span></span>
                    <h6 class="textItemOrder3">barbracurchill@gmail.com</h6>
                  </div>
                  <div class="col-12 divHr">
                    <hr className="mb-2 hrSize" />
                  </div>
                  <div class="textItemBottom">
                    <span><svg class="checkIconBot" width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14143 8.70437C9.69377 8.01535 10.0233 7.14323 10.0233 6.19051C10.0233 3.96856 8.22202 2.16732 6.00008 2.16732C3.77813 2.16732 1.97689 3.96856 1.97689 6.19051C1.97689 7.14315 2.30633 8.01519 2.85857 8.70419L2.86255 8.70913C2.97947 8.85481 3.08771 9.00817 3.20018 9.15727C3.3955 9.41623 3.67094 9.77989 3.99096 10.1981C4.58732 10.9775 5.33228 11.9383 6.00055 12.7632C6.67091 11.9366 7.41758 10.9743 8.01512 10.1939C8.33571 9.77514 8.61158 9.41113 8.80719 9.15195C8.91908 9.00368 9.02526 8.84928 9.14143 8.70437ZM10.1837 9.53989C10.1837 9.53989 10.1826 9.54141 10.1818 9.54248C10.1476 9.58814 9.83411 10.007 9.37985 10.6036C8.70591 11.4886 7.72215 12.7647 6.88106 13.7935C6.42097 14.3563 5.57936 14.3561 5.11953 13.7931C3.68196 12.033 1.82273 9.54373 1.82273 9.54373L1.81839 9.53833C1.08327 8.6213 0.643555 7.45725 0.643555 6.19051C0.643555 3.23218 3.04175 0.833984 6.00008 0.833984C8.9584 0.833984 11.3566 3.23218 11.3566 6.19051C11.3566 6.97867 11.1864 7.72708 10.8807 8.40096C10.6958 8.80863 10.4612 9.18903 10.1849 9.53446L10.1829 9.53688L10.1818 9.53833H10.1849L10.1837 9.53989Z" fill="#33383F" />
                    </svg>
                      {" "}
                      <span class="textBottom">SHIPPING ADDRESS</span></span>
                    <h6 class="textItemOrder3">barbracurchill</h6>
                    <h6 class="textItemOrder">555barbracurchill</h6>
                    <h6 class="textItemOrder">LincolnNE</h6>
                    <h6 class="textItemOrder">US</h6>
                    <h6 class="textItemOrder">(402) 570-2216</h6>
                  </div>
                </div>

              </div>
            </div>

            <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
              <div class="divBodyRight">
                <div class="col-md-12 hearderTrack">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12">
                        <h6 class="textItem1">Tracking Number</h6>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12">
                      <div class="textItem2">
                        <button type="button" class="btn btn-success" onClick={() => this.setModal(true)}>
                          <div class="textItemOrderAdd" ><i class="bi bi-plus-lg iconAdd"></i>Add</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <div class="row">
                  <div class="col-6">
                    <div class="textItem1">
                      <h6>Tracking Number</h6>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="textItem2">
                      <button>a</button>
                    </div>
                  </div>
                </div> */}
                </div>
                <div class="col-12 divHrTop">
                  <hr className="mb-2 hrSize" />
                </div>
                <div class="col-12 check">
                  <div class="centerTracking">
                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                          <td class="textItemOrder"><a hred=""><u className="colorHref">Fedex</u></a></td>
                          <td class="textItemOrder">
                            <div class="iconDelete"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9018 3.35628C11.7804 2.4776 13.2051 2.4776 14.0837 3.35628L15.1444 4.41694C16.0231 5.29561 16.0231 6.72024 15.1444 7.59892L7.35002 15.3933C7.24532 15.498 7.11197 15.5694 6.96678 15.5984L2.9893 16.3939C2.46451 16.4989 2.00182 16.0362 2.10678 15.5114L2.90227 11.5339C2.93131 11.3887 3.00268 11.2554 3.10738 11.1507L10.9018 3.35628ZM13.0231 4.41694L14.0837 5.4776C14.3766 5.77049 14.3766 6.24536 14.0837 6.53826L13.0231 7.59892L10.9018 5.4776L11.9624 4.41694C12.2553 4.12404 12.7302 4.12404 13.0231 4.41694ZM9.84109 6.53826L4.32861 12.0507L3.79828 14.7024L6.44993 14.1721L11.9624 8.65958L9.84109 6.53826Z" fill="#33383F" />
                            </svg>
                            </div>
                            <div class="iconEdit"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 8C7.91421 8 8.25 8.33579 8.25 8.75V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V8.75C6.75 8.33579 7.08579 8 7.5 8Z" fill="#33383F" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 8C10.9142 8 11.25 8.33579 11.25 8.75V12.5C11.25 12.9142 10.9142 13.25 10.5 13.25C10.0858 13.25 9.75 12.9142 9.75 12.5V8.75C9.75 8.33579 10.0858 8 10.5 8Z" fill="#33383F" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2C6.25736 2 5.25 3.00736 5.25 4.25H3H2.25C1.83579 4.25 1.5 4.58579 1.5 5C1.5 5.41421 1.83579 5.75 2.25 5.75H3V14.75C3 15.9926 4.00736 17 5.25 17H12.75C13.9926 17 15 15.9926 15 14.75V5.75H15.75C16.1642 5.75 16.5 5.41421 16.5 5C16.5 4.58579 16.1642 4.25 15.75 4.25H15H12.75C12.75 3.00736 11.7426 2 10.5 2H7.5ZM11.25 4.25C11.25 3.83579 10.9142 3.5 10.5 3.5H7.5C7.08579 3.5 6.75 3.83579 6.75 4.25H11.25ZM5.25 5.75H4.5V14.75C4.5 15.1642 4.83579 15.5 5.25 15.5H12.75C13.1642 15.5 13.5 15.1642 13.5 14.75V5.75H12.75H5.25Z" fill="#33383F" />
                            </svg>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="textItemOrder">
                            <div>
                              <text>Quantity: 1</text><br />
                              <text>Status: Delivered</text><br />
                              <text>TKN 523079971462</text>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="col-12 divHr">
                  <hr className="mb-2 hrSize" />
                </div>
                <div class="col-12 check">
                  <div class="centerTracking">
                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                          <td class="textItemOrder"><a hred=""><u className="colorHref">Fedex</u></a></td>
                          <td class="textItemOrder">
                            <div class="iconDelete"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9018 3.35628C11.7804 2.4776 13.2051 2.4776 14.0837 3.35628L15.1444 4.41694C16.0231 5.29561 16.0231 6.72024 15.1444 7.59892L7.35002 15.3933C7.24532 15.498 7.11197 15.5694 6.96678 15.5984L2.9893 16.3939C2.46451 16.4989 2.00182 16.0362 2.10678 15.5114L2.90227 11.5339C2.93131 11.3887 3.00268 11.2554 3.10738 11.1507L10.9018 3.35628ZM13.0231 4.41694L14.0837 5.4776C14.3766 5.77049 14.3766 6.24536 14.0837 6.53826L13.0231 7.59892L10.9018 5.4776L11.9624 4.41694C12.2553 4.12404 12.7302 4.12404 13.0231 4.41694ZM9.84109 6.53826L4.32861 12.0507L3.79828 14.7024L6.44993 14.1721L11.9624 8.65958L9.84109 6.53826Z" fill="#33383F" />
                            </svg>
                            </div>
                            <div class="iconEdit"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 8C7.91421 8 8.25 8.33579 8.25 8.75V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V8.75C6.75 8.33579 7.08579 8 7.5 8Z" fill="#33383F" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 8C10.9142 8 11.25 8.33579 11.25 8.75V12.5C11.25 12.9142 10.9142 13.25 10.5 13.25C10.0858 13.25 9.75 12.9142 9.75 12.5V8.75C9.75 8.33579 10.0858 8 10.5 8Z" fill="#33383F" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2C6.25736 2 5.25 3.00736 5.25 4.25H3H2.25C1.83579 4.25 1.5 4.58579 1.5 5C1.5 5.41421 1.83579 5.75 2.25 5.75H3V14.75C3 15.9926 4.00736 17 5.25 17H12.75C13.9926 17 15 15.9926 15 14.75V5.75H15.75C16.1642 5.75 16.5 5.41421 16.5 5C16.5 4.58579 16.1642 4.25 15.75 4.25H15H12.75C12.75 3.00736 11.7426 2 10.5 2H7.5ZM11.25 4.25C11.25 3.83579 10.9142 3.5 10.5 3.5H7.5C7.08579 3.5 6.75 3.83579 6.75 4.25H11.25ZM5.25 5.75H4.5V14.75C4.5 15.1642 4.83579 15.5 5.25 15.5H12.75C13.1642 15.5 13.5 15.1642 13.5 14.75V5.75H12.75H5.25Z" fill="#33383F" />
                            </svg>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="textItemOrder">
                            <div>
                              <text>Quantity: 1</text><br />
                              <text>Status: Delivered</text><br />
                              <text>TKN 523079971462</text>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="col-12 divHr">
                  <hr className="mb-2 hrSize" />
                </div>
                <div class="col-12 check">
                  <div class="centerTracking">
                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                          <td class="textItemOrder"><a hred=""><u className="colorHref">Fedex</u></a></td>
                          <td class="textItemOrder">
                            <div class="iconDelete"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9018 3.35628C11.7804 2.4776 13.2051 2.4776 14.0837 3.35628L15.1444 4.41694C16.0231 5.29561 16.0231 6.72024 15.1444 7.59892L7.35002 15.3933C7.24532 15.498 7.11197 15.5694 6.96678 15.5984L2.9893 16.3939C2.46451 16.4989 2.00182 16.0362 2.10678 15.5114L2.90227 11.5339C2.93131 11.3887 3.00268 11.2554 3.10738 11.1507L10.9018 3.35628ZM13.0231 4.41694L14.0837 5.4776C14.3766 5.77049 14.3766 6.24536 14.0837 6.53826L13.0231 7.59892L10.9018 5.4776L11.9624 4.41694C12.2553 4.12404 12.7302 4.12404 13.0231 4.41694ZM9.84109 6.53826L4.32861 12.0507L3.79828 14.7024L6.44993 14.1721L11.9624 8.65958L9.84109 6.53826Z" fill="#33383F" />
                            </svg>
                            </div>
                            <div class="iconEdit"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 8C7.91421 8 8.25 8.33579 8.25 8.75V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V8.75C6.75 8.33579 7.08579 8 7.5 8Z" fill="#33383F" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 8C10.9142 8 11.25 8.33579 11.25 8.75V12.5C11.25 12.9142 10.9142 13.25 10.5 13.25C10.0858 13.25 9.75 12.9142 9.75 12.5V8.75C9.75 8.33579 10.0858 8 10.5 8Z" fill="#33383F" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2C6.25736 2 5.25 3.00736 5.25 4.25H3H2.25C1.83579 4.25 1.5 4.58579 1.5 5C1.5 5.41421 1.83579 5.75 2.25 5.75H3V14.75C3 15.9926 4.00736 17 5.25 17H12.75C13.9926 17 15 15.9926 15 14.75V5.75H15.75C16.1642 5.75 16.5 5.41421 16.5 5C16.5 4.58579 16.1642 4.25 15.75 4.25H15H12.75C12.75 3.00736 11.7426 2 10.5 2H7.5ZM11.25 4.25C11.25 3.83579 10.9142 3.5 10.5 3.5H7.5C7.08579 3.5 6.75 3.83579 6.75 4.25H11.25ZM5.25 5.75H4.5V14.75C4.5 15.1642 4.83579 15.5 5.25 15.5H12.75C13.1642 15.5 13.5 15.1642 13.5 14.75V5.75H12.75H5.25Z" fill="#33383F" />
                            </svg>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="textItemOrder">
                            <div>
                              <text>Quantity: 1</text><br />
                              <text>Status: Delivered</text><br />
                              <text>TKN 523079971462</text>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        {/* Modal */}
        <Modal
          show={showModal}
          onHide={() => this.setModal(false)}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h6 class="textItemOrder">Add Tracking Number</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><h6 className="">Carrier</h6></Form.Label>
              <Form.Select class="selectInModal" aria-label="Default select example">
                <option class="selectInModal" value="1">Carrier</option>
                <option class="selectInModal" value="2">Two</option>
                <option class="selectInModal" value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><h6 className="">Tracking Number</h6></Form.Label>
              <Form.Control type="text" placeholder="Enter Tracking Number...." />
              {/* <Form.Text className="text-muted">
                </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><h6 className="">Quantity</h6></Form.Label>
              <Form.Control type="text" placeholder="Enter Quantity...." />
              {/* <Form.Text className="text-muted">
                </Form.Text> */}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.setModal(false)}>
              Cancel
            </Button>
            <Button variant="success" onClick={() => this.setModal(false)}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        {/* endModal */}

        {/* Modal */}
        <Modal
          show={showModalStepper}
          onHide={() => this.setModalStepper(false)}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h6 class="textItemOrder">TKN History</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="col-12">
              <div class="row gx-5">
                <div class="col">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <svg width="40" height="40" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_771_36818)">
                              <path d="M32 0.5H0V32.5H32V0.5Z" fill="white" fill-opacity="0.01" />
                              <path d="M26 4.5H6C4.89543 4.5 4 5.39543 4 6.5V26.5C4 27.6046 4.89543 28.5 6 28.5H26C27.1046 28.5 28 27.6046 28 26.5V6.5C28 5.39543 27.1046 4.5 26 4.5Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linejoin="round" />
                              <path d="M22.6663 18.5H9.33301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M17.9997 23.166H9.33301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_771_36818">
                                <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td>
                          <div class="contaiText">
                            <b class="textTkn">Add TKN</b>
                            <svg width="14" height="14" class="checkIcon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.99967 13.6673C10.6816 13.6673 13.6663 10.6825 13.6663 7.00065C13.6663 5.97112 13.433 4.9961 13.0162 4.12559C12.876 3.83259 12.491 3.78552 12.2613 4.01522L7.27582 9.00065C6.75512 9.52135 5.9109 9.52135 5.3902 9.00065L3.52827 7.13872C3.26792 6.87837 3.26792 6.45626 3.52827 6.19591C3.78862 5.93556 4.21073 5.93556 4.47108 6.19591L6.33301 8.05784L11.5675 2.82708C11.7571 2.63755 11.7648 2.33059 11.5696 2.14676C10.3763 1.02278 8.7684 0.333984 6.99967 0.333984C3.31778 0.333984 0.333008 3.31875 0.333008 7.00065C0.333008 10.6825 3.31778 13.6673 6.99967 13.6673Z" fill="#007B5C" />
                            </svg>
                            <br />
                            <text class="textTknBot">TKN: 525145124241</text>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <div class="hrPoi"></div>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col">
                  <div class="textTime"><br />Jan 15, 2022</div>
                </div>
              </div>

              <div></div>
            </div>


            <div class="col-12">
              <div class="row gx-5">
                <div class="col">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <svg width="40" height="40" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_771_36818)">
                              <path d="M32 0.5H0V32.5H32V0.5Z" fill="white" fill-opacity="0.01" />
                              <path d="M26 4.5H6C4.89543 4.5 4 5.39543 4 6.5V26.5C4 27.6046 4.89543 28.5 6 28.5H26C27.1046 28.5 28 27.6046 28 26.5V6.5C28 5.39543 27.1046 4.5 26 4.5Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linejoin="round" />
                              <path d="M22.6663 18.5H9.33301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M17.9997 23.166H9.33301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_771_36818">
                                <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td>
                          <div class="contaiText">
                            <b class="textTkn">Add TKN</b>
                            <svg width="14" height="14" class="checkIcon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.99967 13.6673C10.6816 13.6673 13.6663 10.6825 13.6663 7.00065C13.6663 5.97112 13.433 4.9961 13.0162 4.12559C12.876 3.83259 12.491 3.78552 12.2613 4.01522L7.27582 9.00065C6.75512 9.52135 5.9109 9.52135 5.3902 9.00065L3.52827 7.13872C3.26792 6.87837 3.26792 6.45626 3.52827 6.19591C3.78862 5.93556 4.21073 5.93556 4.47108 6.19591L6.33301 8.05784L11.5675 2.82708C11.7571 2.63755 11.7648 2.33059 11.5696 2.14676C10.3763 1.02278 8.7684 0.333984 6.99967 0.333984C3.31778 0.333984 0.333008 3.31875 0.333008 7.00065C0.333008 10.6825 3.31778 13.6673 6.99967 13.6673Z" fill="#007B5C" />
                            </svg>
                            <br />
                            <text class="textTknBot">TKN: 525145124241</text>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <div class="hrPoi"></div>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col">
                  <div class="textTime"><br />Jan 15, 2022</div>
                </div>
              </div>

              <div></div>
            </div>

            <div class="col-12">
              <div class="row gx-5">
                <div class="col">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <svg width="40" height="40" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_771_36818)">
                              <path d="M32 0.5H0V32.5H32V0.5Z" fill="white" fill-opacity="0.01" />
                              <path d="M26 4.5H6C4.89543 4.5 4 5.39543 4 6.5V26.5C4 27.6046 4.89543 28.5 6 28.5H26C27.1046 28.5 28 27.6046 28 26.5V6.5C28 5.39543 27.1046 4.5 26 4.5Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linejoin="round" />
                              <path d="M22.6663 18.5H9.33301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M17.9997 23.166H9.33301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_771_36818">
                                <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td>
                          <div class="contaiText">
                            <b class="textTkn">Add TKN</b>
                            <svg width="14" height="14" class="checkIcon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.99967 13.6673C10.6816 13.6673 13.6663 10.6825 13.6663 7.00065C13.6663 5.97112 13.433 4.9961 13.0162 4.12559C12.876 3.83259 12.491 3.78552 12.2613 4.01522L7.27582 9.00065C6.75512 9.52135 5.9109 9.52135 5.3902 9.00065L3.52827 7.13872C3.26792 6.87837 3.26792 6.45626 3.52827 6.19591C3.78862 5.93556 4.21073 5.93556 4.47108 6.19591L6.33301 8.05784L11.5675 2.82708C11.7571 2.63755 11.7648 2.33059 11.5696 2.14676C10.3763 1.02278 8.7684 0.333984 6.99967 0.333984C3.31778 0.333984 0.333008 3.31875 0.333008 7.00065C0.333008 10.6825 3.31778 13.6673 6.99967 13.6673Z" fill="#007B5C" />
                            </svg>
                            <br />
                            <text class="textTknBot">TKN: 525145124241</text>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <div class="hrPoi"></div>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col">
                  <div class="textTime"><br />Jan 15, 2022</div>
                </div>
              </div>

              <div></div>
            </div>

            <div class="col-12">
              <div class="row gx-5">
                <div class="col">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <svg width="40" height="40" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_771_36818)">
                              <path d="M32 0.5H0V32.5H32V0.5Z" fill="white" fill-opacity="0.01" />
                              <path d="M26 4.5H6C4.89543 4.5 4 5.39543 4 6.5V26.5C4 27.6046 4.89543 28.5 6 28.5H26C27.1046 28.5 28 27.6046 28 26.5V6.5C28 5.39543 27.1046 4.5 26 4.5Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linejoin="round" />
                              <path d="M22.6663 18.5H9.33301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M17.9997 23.166H9.33301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_771_36818">
                                <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td>
                          <div class="contaiText">
                            <b class="textTkn">Add TKN</b>
                            <svg width="14" height="14" class="checkIcon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.99967 13.6673C10.6816 13.6673 13.6663 10.6825 13.6663 7.00065C13.6663 5.97112 13.433 4.9961 13.0162 4.12559C12.876 3.83259 12.491 3.78552 12.2613 4.01522L7.27582 9.00065C6.75512 9.52135 5.9109 9.52135 5.3902 9.00065L3.52827 7.13872C3.26792 6.87837 3.26792 6.45626 3.52827 6.19591C3.78862 5.93556 4.21073 5.93556 4.47108 6.19591L6.33301 8.05784L11.5675 2.82708C11.7571 2.63755 11.7648 2.33059 11.5696 2.14676C10.3763 1.02278 8.7684 0.333984 6.99967 0.333984C3.31778 0.333984 0.333008 3.31875 0.333008 7.00065C0.333008 10.6825 3.31778 13.6673 6.99967 13.6673Z" fill="#007B5C" />
                            </svg>
                            <br />
                            <text class="textTknBot">TKN: 525145124241</text>
                          </div>
                        </td>
                      </tr>
                      {/* <tr>
                      <div class="hrPoi"></div>
                    </tr> */}
                    </tbody>
                  </table>
                </div>
                <div class="col">
                  <div class="textTime"><br />Jan 15, 2022</div>
                </div>
              </div>

              <div></div>
            </div>
            <div class="footerModal"></div>

          </Modal.Body>
        </Modal>
        {/* endModal */}

        {/* Modal bids */}
        <Modal
          show={showModalBids}
          onHide={() => this.setModalBids(false)}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h6 class="textItemOrder">TKN History</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="col-12">
              <div class="row">
                <div class="col-9">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 9.83268C4 3.16602 9.33333 3.16602 9.33333 3.16602V16.4993H4C4 16.4993 4 16.4993 4 9.83268Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linejoin="round" />
                            <path d="M27.9997 7.16602H9.33301V11.166H27.9997V7.16602Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linejoin="round" />
                            <path d="M4 20.5H28C28 20.5 28 25.8333 24 25.8333C20 25.8333 19.3333 25.8333 19.3333 25.8333L20.6667 29.8333H8.66667L10 25.8333H4V20.5Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linejoin="round" />
                          </svg>

                        </td>
                        <td>
                          <div class="contaiText">
                            <b class="textTkn">Bids</b>
                            <svg width="14" height="14" class="checkIcon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.99967 13.6673C10.6816 13.6673 13.6663 10.6825 13.6663 7.00065C13.6663 5.97112 13.433 4.9961 13.0162 4.12559C12.876 3.83259 12.491 3.78552 12.2613 4.01522L7.27582 9.00065C6.75512 9.52135 5.9109 9.52135 5.3902 9.00065L3.52827 7.13872C3.26792 6.87837 3.26792 6.45626 3.52827 6.19591C3.78862 5.93556 4.21073 5.93556 4.47108 6.19591L6.33301 8.05784L11.5675 2.82708C11.7571 2.63755 11.7648 2.33059 11.5696 2.14676C10.3763 1.02278 8.7684 0.333984 6.99967 0.333984C3.31778 0.333984 0.333008 3.31875 0.333008 7.00065C0.333008 10.6825 3.31778 13.6673 6.99967 13.6673Z" fill="#007B5C" />
                            </svg>
                            <br />
                            <text class="textTknBot">WORKPRO 5-Shelf Garage Freestanding Shelves, Black, 4000 lbs.</text>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <div class="hrPoi"></div>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-3">
                  <div class="textTime"><br />Jan 15, 2022</div>
                </div>
              </div>

              <div></div>
            </div>


            <div class="col-12">
              <div class="row">
                <div class="col-9">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 9.83268C4 3.16602 9.33333 3.16602 9.33333 3.16602V16.4993H4C4 16.4993 4 16.4993 4 9.83268Z" fill="#E0E0E0" stroke="black" stroke-width="2" stroke-linejoin="round" />
                            <path d="M27.9997 7.16602H9.33301V11.166H27.9997V7.16602Z" fill="#E0E0E0" stroke="black" stroke-width="2" stroke-linejoin="round" />
                            <path d="M4 20.5H28C28 20.5 28 25.8333 24 25.8333C20 25.8333 19.3333 25.8333 19.3333 25.8333L20.6667 29.8333H8.66667L10 25.8333H4V20.5Z" fill="#E0E0E0" stroke="black" stroke-width="2" stroke-linejoin="round" />
                          </svg>

                        </td>
                        <td>
                          <div class="contaiText">
                            <b class="textTkn">Bids</b>

                            <br />
                            <text class="textTknBot">Everstart Maxx 15 Amp Automotive Battery Charger with 50 Amp Patented Engine Start (BC50BE)</text>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <div class="hrPoi"></div>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-3">
                  <div class="textTime"><br />Jan 15, 2022</div>
                </div>
              </div>

              <div></div>
            </div>

            <div class="col-12">
              <div class="row">
                <div class="col-9">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 9.83268C4 3.16602 9.33333 3.16602 9.33333 3.16602V16.4993H4C4 16.4993 4 16.4993 4 9.83268Z" fill="#E0E0E0" stroke="black" stroke-width="2" stroke-linejoin="round" />
                            <path d="M27.9997 7.16602H9.33301V11.166H27.9997V7.16602Z" fill="#E0E0E0" stroke="black" stroke-width="2" stroke-linejoin="round" />
                            <path d="M4 20.5H28C28 20.5 28 25.8333 24 25.8333C20 25.8333 19.3333 25.8333 19.3333 25.8333L20.6667 29.8333H8.66667L10 25.8333H4V20.5Z" fill="#E0E0E0" stroke="black" stroke-width="2" stroke-linejoin="round" />
                          </svg>

                        </td>
                        <td>
                          <div class="contaiText">
                            <b class="textTkn">Bids</b>

                            <br />
                            <text class="textTknBot">TKN: 525145124241</text>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <div class="hrPoi"></div>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-3">
                  <div class="textTime"><br />Jan 15, 2022</div>
                </div>
              </div>

              <div></div>
            </div>

            <div class="col-12">
              <div class="row">
                <div class="col-9">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 9.83268C4 3.16602 9.33333 3.16602 9.33333 3.16602V16.4993H4C4 16.4993 4 16.4993 4 9.83268Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linejoin="round" />
                            <path d="M27.9997 7.16602H9.33301V11.166H27.9997V7.16602Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linejoin="round" />
                            <path d="M4 20.5H28C28 20.5 28 25.8333 24 25.8333C20 25.8333 19.3333 25.8333 19.3333 25.8333L20.6667 29.8333H8.66667L10 25.8333H4V20.5Z" fill="#007B5C" stroke="black" stroke-width="2" stroke-linejoin="round" />
                          </svg>
                        </td>
                        <td>
                          <div class="contaiText">
                            <b class="textTkn">Bids</b>
                            <svg width="14" height="14" class="checkIcon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.99967 13.6673C10.6816 13.6673 13.6663 10.6825 13.6663 7.00065C13.6663 5.97112 13.433 4.9961 13.0162 4.12559C12.876 3.83259 12.491 3.78552 12.2613 4.01522L7.27582 9.00065C6.75512 9.52135 5.9109 9.52135 5.3902 9.00065L3.52827 7.13872C3.26792 6.87837 3.26792 6.45626 3.52827 6.19591C3.78862 5.93556 4.21073 5.93556 4.47108 6.19591L6.33301 8.05784L11.5675 2.82708C11.7571 2.63755 11.7648 2.33059 11.5696 2.14676C10.3763 1.02278 8.7684 0.333984 6.99967 0.333984C3.31778 0.333984 0.333008 3.31875 0.333008 7.00065C0.333008 10.6825 3.31778 13.6673 6.99967 13.6673Z" fill="#007B5C" />
                            </svg>
                            <br />
                            <text class="textTknBot">TKN: 525145124241</text>
                          </div>
                        </td>
                      </tr>
                      {/* <tr>
                      <div class="hrPoi"></div>
                    </tr> */}
                    </tbody>
                  </table>
                </div>
                <div class="col-3">
                  <div class="textTime"><br />Jan 15, 2022</div>
                </div>
              </div>

              <div></div>
            </div>
            <div class="footerModal"></div>

          </Modal.Body>
        </Modal>
        {/* endModal */}
      </>
    )
  }
}

export default App;
