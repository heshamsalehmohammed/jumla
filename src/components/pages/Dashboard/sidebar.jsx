import React, { Component } from 'react';
import UserImage from "../../../assets/images/DPP.png";
import $ from 'jquery/dist/jquery.min.js';

export class Sidebar extends Component {


    constructor(props) {
        super(props);
        this.bodyNavigation = this.bodyNavigation.bind(this);
    }

    componentDidMount() {
        document.querySelector("#close-sidebar").addEventListener('click', this.closeSideBar);
        document.querySelector("#show-sidebar").addEventListener('click', this.showSideBar);

        $(".sidebar-dropdown > a,.sidebar-dropdown > .sidebar-dropdown-header").click(function () {
            $(".sidebar-submenu").slideUp(200);
            if ($(this).parent().hasClass("active")) {
                $(".sidebar-dropdown").removeClass("active");
                $(this).parent().removeClass("active");
            } else {
                $(".sidebar-dropdown").removeClass("active");
                $(this).next(".sidebar-submenu").slideDown(200);
                $(this).parent().addClass("active");
            }
        });

    };

    componentWillUnmount() {
        document.querySelector("#close-sidebar").removeEventListener('click', this.closeSideBar);
        document.querySelector("#show-sidebar").removeEventListener('click', this.showSideBar);
    };

    closeSideBar(e) {
        document.querySelector(".page-wrapper").classList.remove("toggled");
    };

    showSideBar(e) {
        document.querySelector(".page-wrapper").classList.add("toggled");
    };

    bodyNavigation(e){
        e.preventDefault();
        let BContent = e.currentTarget.getAttribute('id');
        this.props.bodyContentChange(BContent);
    }

    render() {
        return (
            <React.Fragment>
                <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                    <i className="fa fab fa-bars"></i>
                </a>
                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="sidebar-brand justify-content-end">
                            <div id="close-sidebar">
                                <i className="fa fab fa-times"></i>
                            </div>
                        </div>
                        <div className="sidebar-header">
                            <div className="user-pic">
                                <img className="img-responsive img-rounded" src={UserImage} alt="User picture" />
                            </div>
                            <div className="user-info">
                                <span className="user-name">{"hesham saleh"}</span>
                                <span className="user-role"></span>
                                <span className="user-status"><i className="fa fa-circle"></i> <span>Online</span></span>
                            </div>
                        </div>

                        <div className="sidebar-menu">
                            <ul>

                                <li>
                                    <a href="#" id="home" onClick={this.bodyNavigation}>
                                        <i className="fa fab fa-home"></i>
                                        <span>Home</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" id="sentrequests"  onClick={this.bodyNavigation}>
                                        <i className="fa fab fa-share-square"></i>
                                        <span>Sent Requests</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" id="recievedrequests"  onClick={this.bodyNavigation}>
                                        <i style={{ transform: "rotateY(180deg)" }} className="fa fab fa-share-square"></i>
                                        <span>Recieved Requests</span>
                                    </a>
                                </li>

                                <li className="header-menu">
                                    <span>Configurations</span>
                                </li>
                                <li className="sidebar-dropdown">
                                    <div className="sidebar-dropdown-header">
                                        <i className="fa fab fa-users"></i> <span>Profile Settings</span>
                                    </div>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="\#">Manage Users</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="sidebar-dropdown">
                                    <div className="sidebar-dropdown-header">
                                        <i className="fa fab fa-podcast"></i> <span>Notifications Settings</span>
                                    </div>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="\#">Pending Cases</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>


                            </ul>
                        </div>

                    </div>

                    <div className="sidebar-footer">
                        <a href="\#">
                            <i className="fa fa-bell"></i>
                        </a>
                        <a href="\#">
                            <i className="fa fa-envelope"></i>
                        </a>
                        <a href="\#">
                            <i className="fa fa-cog"></i>
                        </a>
                        <a href="\#">
                            <i className="fa fa-power-off"></i>
                        </a>
                    </div>
                </nav>

            </React.Fragment>
        );
    }
}

export default Sidebar;
