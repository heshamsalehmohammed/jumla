import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import auth from '../../../services/authService';
import UserImage from '../../../assets/images/DPP.png';

export class Sidebar extends Component {
  componentDidMount() {}

  sidebarDDHeaderHandler(e) {
    let parent = e.target.parentElement;
    while (!parent.classList.contains('sidebar-dropdown')) {
      parent = parent.parentElement;
    }
    if (parent.classList.contains('active')) {
      parent.classList.remove('active');
    } else {
      parent.classList.add('active');
    }
  }

  closeSideBar(e) {
    document.querySelector('.page-wrapper').classList.remove('toggled');
  }

  showSideBar(e) {
    document.querySelector('.page-wrapper').classList.add('toggled');
  }

  render() {
    const user = auth.getCurrentUser();
    return (
      <React.Fragment>
        <div
          id="show-sidebar"
          className="btn btn-sm btn-dark"
          onClick={this.showSideBar}>
          <i className="fa fab fa-bars"></i>
        </div>
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-brand justify-content-end">
              <div id="close-sidebar" onClick={this.closeSideBar}>
                <i className="fa fab fa-times"></i>
              </div>
            </div>
            <div className="sidebar-header">
              <Link to={`/dashboard/userprofile/${user.id}`}>
                <div className="user-pic">
                  <img
                    className="img-responsive img-rounded"
                    src={UserImage}
                    alt="User"
                  />
                </div>
                <div className="user-info">
                  <span className="user-name">{'hesham saleh'}</span>
                  <span className="user-role">Admin</span>
                  <span className="user-status">
                    <i className="fa fa-circle"></i> <span>Online</span>
                  </span>
                </div>
              </Link>
            </div>

            <div className="sidebar-menu">
              <ul>
                <li>
                  <Link to="/dashboard">
                    <i className="fa fab fa-home"></i>
                    <span className="m-1">Home</span>
                  </Link>
                </li>

                {/*                 <li className="header-menu">
                  <span>Configurations</span>
                </li> */}

                <li className="sidebar-dropdown">
                  <div
                    className="sidebar-dropdown-header"
                    onClick={this.sidebarDDHeaderHandler}>
                    <i className="fa fab fa-users"></i>
                    <span className="m-1">Products</span>
                  </div>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="/dashboard/addproduct">Add Product</Link>
                      </li>
                      <li>
                        <Link to="/dashboard/products">All Products</Link>
                      </li>
                    </ul>
                  </div>
                </li>



                <li className="sidebar-dropdown">
                  <div
                    className="sidebar-dropdown-header"
                    onClick={this.sidebarDDHeaderHandler}>
                    <i className="fa fab fa-podcast"></i>
                    <span className="m-1">Orders</span>
                  </div>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="/dashboard/orders">All Orders</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="sidebar-footer">
            <Link to="/logout">
              <i className="fa fa-power-off"></i>
            </Link>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Sidebar;
