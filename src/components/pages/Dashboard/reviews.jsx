import React, { Component } from 'react';
import Rating from './rating';
import UserImage from "../../../assets/images/DPP.png";


const reviews = [
    {
        id: "0",
        reviewerName: "Ahmed Saleh",
        reviewerImg: "../../images/DPP.png",
        reviewerRate: "4",
        reviewerMessage: "this person is really nnice and serious",
        reviewDate: "5/5/2020 18:19"
    },
    {
        id: "1",
        reviewerName: "Mohamed Sabry",
        reviewerImg: "../../images/DPP.png",
        reviewerRate: "3",
        reviewerMessage: "i called you twice with no response",
        reviewDate: "8/4/2020 02:19"
    },
    {
        id: "2",
        reviewerName: "Ahmed Ezzat",
        reviewerImg: "../../images/DPP.png",
        reviewerRate: "5",
        reviewerMessage: "thank you for the fast response",
        reviewDate: "5/9/2019 11:19"
    },
    {
        id: "3",
        reviewerName: "Nada Amr",
        reviewerImg: "../../images/DPP.png",
        reviewerRate: "2",
        reviewerMessage: "dude you give me a wrong number and u didn't answer my mail ",
        reviewDate: "3/7/2018 11:05"
    },
];

let mCustomScrollbar = "";

export default class Reviews extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="reviews mb-2 " ref={this.props.containerRef}>
                <div className="reviews-content" >
                    {reviews &&
                        reviews.length > 0 &&
                        reviews.map((RV, index) => {
                            return <ReviewMsg key={index} Id={RV.id} CardId={this.props.CardId} ReviewerName={RV.reviewerName} ReviewerImg={RV.reviewerImg} ReviewerRate={RV.reviewerRate} ReviewerMessage={RV.reviewerMessage} ReviewDate={RV.reviewDate} />;
                        })}
                </div>
            </div>
        );
    }
}



class ReviewMsg extends Component {
    render() {
        return (
            <div className="message text-left new mb-4 mr-1">
                <figure className="avatar">
                    <img src={UserImage} />
                </figure>
                {this.props.ReviewerMessage}
                <div className="timestamp">{this.props.ReviewDate}</div>
                <Rating KeyName={"reviewmessage_"+this.props.CardId} Id={this.props.Id} RatingValue={this.props.ReviewerRate} />
            </div>
        );
    }
}





