import React, { Component } from "react";
import UserImage from "../../../assets/images/DPP.png";
import Rating from './rating';
import Reviews from './reviews';
import $ from 'jquery/dist/jquery.min.js';

export default class UserCard extends Component {

  constructor(props) {
    super(props);
    this.toggleReviewsDisplay = this.toggleReviewsDisplay.bind(this)
    this.sendRequestHandler = this.sendRequestHandler.bind(this)
    this.hideCardHandler = this.hideCardHandler.bind(this);
  }

  toggleReviewsDisplay(e) {
    if (this.Reviews.classList.contains("show")) {
      this.Reviews.classList.remove("show");
    } else {
      this.Reviews.classList.add("show");
    }
  }

  sendRequestHandler() {
    $('#requestModal-container').removeAttr('class').addClass("four");
    $('html').addClass('modal-active');
  }

  hideCardHandler() {
    let MyCard = this.Card ;
    MyCard.style.animation = "removecard 1s ease-out forwards";
    setTimeout(function () {
      MyCard.classList.add("remove");
    }, 500);
  }

  render() {
    return (
      <div className="card m-2" ref={ref => (this.Card = ref)}>
        <div className="ripple"></div>
        <div className="ripple"></div>
        <div className="row panel top m-0 justify-content-end text-center">
          <div className="col-6 p-0  carduserdata">
            <h6 className="cardName">
              {this.props.Name}
            </h6>
            <div className="location text-center">
              <span className="cardCity fa fa-map-marker"> {this.props.City}</span>
              <span className="cardDistance"> {this.props.Distance}</span>
            </div>
          </div>
        </div>
        <div className="row m-0 content justify-content-start">
          <div className="col-6 p-0">
            <img className="card-userimage" src={UserImage} alt="user image" />
          </div>
          <Rating KeyName={"userreview"} Id={this.props.Id} RatingValue={this.props.Rating} />
          <Reviews CardId={this.props.Id} containerRef={ref => (this.Reviews = ref)} />
        </div>
        <div className="panel bottom" >
          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-auto" role="group" aria-label="Second group">
              <button type="button" className="btn btn-secondary" onClick={this.sendRequestHandler} style={{ borderRight: "2px solid #f85f6a" }}>Request</button>
              <button type="button" className="btn btn-secondary" onClick={this.toggleReviewsDisplay} >Reviews</button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-secondary" onClick={this.hideCardHandler} >Hide</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



