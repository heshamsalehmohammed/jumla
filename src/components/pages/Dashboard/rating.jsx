import React, { Component } from 'react';

export default class Rating extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
          <div className="product-review-stars" id={'rating_' + this.props.KeyName +"_"+ this.props.Id } >
            <input type="radio" id={'star5_' + this.props.KeyName +"_"+ this.props.Id } name={'rating_' + this.props.KeyName +"_"+ this.props.Id } value="5" defaultChecked={this.props.RatingValue ==="5"} className="visuallyhidden" disabled /><label htmlFor={'star5_' + this.props.KeyName +"_"+ this.props.Id } title="Rocks!">★</label>
            <input type="radio" id={'star4_' + this.props.KeyName +"_"+ this.props.Id } name={'rating_' + this.props.KeyName +"_"+ this.props.Id } value="4" defaultChecked={this.props.RatingValue ==="4"} className="visuallyhidden" disabled /><label htmlFor={'star4_' + this.props.KeyName +"_"+ this.props.Id } title="Pretty good">★</label>
            <input type="radio" id={'star3_' + this.props.KeyName +"_"+ this.props.Id } name={'rating_' + this.props.KeyName +"_"+ this.props.Id } value="3" defaultChecked={this.props.RatingValue ==="3"} className="visuallyhidden" disabled /><label htmlFor={'star3_' + this.props.KeyName +"_"+ this.props.Id } title="Meh">★</label>
            <input type="radio" id={'star2_' + this.props.KeyName +"_"+ this.props.Id } name={'rating_' + this.props.KeyName +"_"+ this.props.Id } value="2" defaultChecked={this.props.RatingValue ==="2"} className="visuallyhidden" disabled /><label htmlFor={'star2_' + this.props.KeyName +"_"+ this.props.Id } title="Kinda bad">★</label>
            <input type="radio" id={'star1_' + this.props.KeyName +"_"+ this.props.Id } name={'rating_' + this.props.KeyName +"_"+ this.props.Id } value="1" defaultChecked={this.props.RatingValue ==="1"} className="visuallyhidden" disabled /><label htmlFor={'star1_' + this.props.KeyName +"_"+ this.props.Id } title="Sucks big time">★</label>
          </div>
        );
    }
}
