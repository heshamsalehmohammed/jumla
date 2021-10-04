import './MainNav.scss';
import React, {Component} from 'react';
import $ from 'jquery/dist/jquery.min.js';

export default class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    function test() {
      var tabsNewAnim = $('#navbarSupportedContent');
      var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
      var activeItemNewAnim = tabsNewAnim.find('.active');
      var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      var itemPosNewAnimTop = activeItemNewAnim.position();
      var itemPosNewAnimLeft = activeItemNewAnim.position();
      $('.hori-selector').css({
        top: itemPosNewAnimTop.top + 'px',
        left: itemPosNewAnimLeft.left + 'px',
        height: activeWidthNewAnimHeight + 'px',
        width: activeWidthNewAnimWidth + 'px',
      });
      $('#navbarSupportedContent').on('click', 'li', function (e) {
        $('#navbarSupportedContent ul li').removeClass('active');
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $('.hori-selector').css({
          top: itemPosNewAnimTop.top + 'px',
          left: itemPosNewAnimLeft.left + 'px',
          height: activeWidthNewAnimHeight + 'px',
          width: activeWidthNewAnimWidth + 'px',
        });
      });
    }
    $(document).ready(function () {
      setTimeout(function () {
        test();
      });
    });
    $(window).on('resize', function () {
      setTimeout(function () {
        test();
      }, 500);
    });
    $('.navbar-toggler').click(function () {
      $('.navbar-collapse').slideToggle(300);
      setTimeout(function () {
        test();
      });
    });
  }

  render() {
    return (
      <nav class="navbar navbar-expand-custom navbar-mainbg">
        <a class="navbar-brand navbar-logo" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i class="fa fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <div class="hori-selector">
              <div class="left"></div>
              <div class="right"></div>
            </div>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <i class="fas fa-tachometer-alt"></i>Dashboard
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="javascript:void(0);">
                <i class="  fa fa-address-book"></i>Address Book
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <i class="  fa fa-clone"></i>Components
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <i class="  fa fa-calendar-alt"></i>Calendar
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <i class="  fa fa-chart-bar"></i>Charts
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <i class="  fa fa-copy"></i>Documents
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
