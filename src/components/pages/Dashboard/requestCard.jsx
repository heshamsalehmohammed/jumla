import React, { Component } from "react";
import UserImage from "../../../assets/images/DPP.png";


export default class RequestCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card requestcard m-2" ref={ref => (this.RCard = ref)}>
                <div className="ripple"></div>
                <div className="ripple"></div>
                <div className="row m-0 content justify-content-center">
                    <div className="col-4 ">
                        <div className="row justify-content-center">
                            <div className="col-12 p-0">
                                <img className="card-userimage" src={UserImage} alt="user image" />
                            </div>
                            <div className="col-12 p-0">
                                <h6 className="cardName">
                                    {this.props.RequesterName}
                                </h6>
                                <div className="location text-center">
                                    <span className="cardCity fa fa-map-marker"> {this.props.RequesterCity}</span>
                                    <span className="cardDistance"> {this.props.RequesterDistance}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-8 pt-2 mb-2 cardmessage" >
                        <div className="row">
                            <div className="col-12">
                                <h5> Request For | {this.props.RequestedUnits}</h5>
                            </div>
                            <div className="col-12 pt-2">
                                <p>{this.props.RequesterMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel bottom" >
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group ml-auto" role="group" aria-label="Second group">
                            <button type="button" className="btn btn-secondary" onClick={this.sendRequestHandler} style={{ borderRight: "2px solid #f85f6a" }}>Accept</button>
                            <button type="button" className="btn btn-secondary" onClick={this.toggleReviewsDisplay} >Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



