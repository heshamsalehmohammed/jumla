import React, {Component} from 'react';
import UserImage from '../../../assets/images/DPP.png';

export class Sidebar extends Component {
  componentDidMount() {
  }

  sidebarDDHeaderHandler(e) {
    let parent = e.target.parentElement;
    while(!parent.classList.contains('sidebar-dropdown')){
      parent = parent.parentElement;
    }
    if (parent.classList.contains('active')) {
      parent.classList.remove('active')
    } else {
      parent.classList.add('active')
    }
  }

  closeSideBar(e) {
    document.querySelector('.page-wrapper').classList.remove('toggled');
  }

  showSideBar(e) {
    document.querySelector('.page-wrapper').classList.add('toggled');
  }

  render() {
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
            </div>

            <div className="sidebar-menu">
              <ul>
                <li>
                  <a href="\#" id="home">
                    <i className="fa fab fa-home"></i>
                    <span>Home</span>
                  </a>
                </li>

                <li>
                  <a href="\#" id="sentrequests">
                    <i className="fa fab fa-share-square"></i>
                    <span>Sent Requests</span>
                  </a>
                </li>

                <li>
                  <a href="\#" id="recievedrequests">
                    <i
                      style={{transform: 'rotateY(180deg)'}}
                      className="fa fab fa-share-square"></i>
                    <span>Recieved Requests</span>
                  </a>
                </li>

                <li className="header-menu">
                  <span>Configurations</span>
                </li>
                <li className="sidebar-dropdown">
                  <div
                    className="sidebar-dropdown-header"
                    onClick={this.sidebarDDHeaderHandler}>
                    <i className="fa fab fa-users"></i>{' '}
                    <span>Profile Settings</span>
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
                  <div
                    className="sidebar-dropdown-header"
                    onClick={this.sidebarDDHeaderHandler}>
                    <i className="fa fab fa-podcast"></i>{' '}
                    <span>Notifications Settings</span>
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
