import React, { Component } from "react";
import UserCard from "./usercard.jsx";
import RequestCard from "./requestCard.jsx";
import RequestModal from './requestModal';

const UsersCardData = [
  { id: "1", name: "Hesham Saleh", city: "Cairo", distance: "32 Km", rating: "5" },
  { id: "2", name: "Hesham Saleh", city: "Cairo", distance: "32 Km", rating: "3" },
  { id: "3", name: "Hesham Saleh", city: "Cairo", distance: "32 Km", rating: "1" },
  { id: "4", name: "Hesham Saleh", city: "Cairo", distance: "32 Km", rating: "2" },
  { id: "5", name: "Hesham Saleh", city: "Cairo", distance: "32 Km", rating: "4" },
  { id: "6", name: "Hesham Saleh", city: "Cairo", distance: "32 Km", rating: "4" },
  { id: "7", name: "Hesham Saleh", city: "Cairo", distance: "32 Km", rating: "5" },
  { id: "8", name: "Hesham Saleh", city: "Cairo", distance: "32 Km", rating: "3" },
  { id: "9", name: "Hesham Saleh", city: "Cairo", distance: "32 Km", rating: "2" },
  { id: "10", name: "Hesham Saleh", city: "Cairo", distance: "32 Km", rating: "1" },
  { id: "11", name: "Hesham Saleh", city: "Cairo", distance: "32 Km", rating: "5" },
  { id: "12", name: "Hesham Saleh", city: "Cairo", distance: "32 Km", rating: "4" }
];

const RequestsCardData = [
  { id: "1", requesterName: "Hesham Saleh", requestedUnits: "5 Units", requesterDistance: "18 Km", requesterCity: "cairo", requesterMessage: "hello there canu please provide me with 5 unit of blood type O+ thanks in advance" },
  { id: "2", requesterName: "Hesham Saleh", requestedUnits: "4 Units", requesterDistance: "32 Km", requesterCity: "cairo", requesterMessage: "hello there canu please provide me with 5 unit of blood type O+ thanks in advance" },
  { id: "3", requesterName: "Hesham Saleh", requestedUnits: "1 Units", requesterDistance: "20 Km", requesterCity: "cairo", requesterMessage: "hello there canu please provide me with 5 unit of blood type O+ thanks in advance" },
];

const SentRequestsCardData = [
  { id: "1", requesterName: "Ahmed Saleh", requestedUnits: "5 Units", requesterDistance: "55 Km", requesterCity: "cairo", requesterMessage: "hello there canu please provide me with 5 unit of blood type O+ thanks in advance" },
  { id: "2", requesterName: "Ahmed Saleh", requestedUnits: "5 Units", requesterDistance: "30 Km", requesterCity: "cairo", requesterMessage: "hello there canu please provide me with 5 unit of blood type O+ thanks in advance" },
  { id: "3", requesterName: "Ahmed Saleh", requestedUnits: "5 Units", requesterDistance: "4 Km", requesterCity: "cairo", requesterMessage: "hello there canu please provide me with 5 unit of blood type O+ thanks in advance" },
];

export default class body extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <div className="container-fluid pt-5 pb-5 ml-2 mr-2 cases_container">
        <div className="row p-0 m-0 justify-content-center">
          <div className="w-100 p-0 m-0 justify-content-center usersCardsWrapper">

            {this.props.BodyContent == "home" &&
              UsersCardData &&
              UsersCardData.length > 0 &&
              UsersCardData.map((CD, index) => {
                return <UserCard
                  key={index}
                  Id={CD.id}
                  Name={CD.name}
                  City={CD.city}
                  Distance={CD.distance}
                  Rating={CD.rating} />;
              })}

            {this.props.BodyContent == "recievedrequests" &&
              RequestsCardData &&
              RequestsCardData.length > 0 &&
              RequestsCardData.map((CD, index) => {
                return <RequestCard
                  key={index}
                  Id={CD.id}
                  RequesterName={CD.requesterName}
                  RequestedUnits={CD.requestedUnits}
                  RequesterDistance={CD.requesterDistance}
                  RequesterCity={CD.requesterCity}
                  RequesterMessage={CD.requesterMessage} />;
              })}

            {this.props.BodyContent == "sentrequests" &&
              SentRequestsCardData &&
              SentRequestsCardData.length > 0 &&
              SentRequestsCardData.map((CD, index) => {
                return <RequestCard
                  key={index}
                  Id={CD.id}
                  RequesterName={CD.requesterName}
                  RequestedUnits={CD.requestedUnits}
                  RequesterDistance={CD.requesterDistance}
                  RequesterCity={CD.requesterCity}
                  RequesterMessage={CD.requesterMessage} />;
              })}

          </div>
          <div className="col-12 LoadMoreCards text-center">
            <a href="\home">Load More</a>
          </div>
        </div>
        <RequestModal containerRef={ref => (this.RequestModal = ref)} />
      </div>
    );
  }
}







