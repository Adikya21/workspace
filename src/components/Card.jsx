import React from "react";
function Card(props) {
  return (
    <div className="card">
      <div>
        <p className="info">CompanyName: {props.companyName}</p>
        <p className="info">ownerName:{props.ownerName}</p>
        <p className="info">RollNo: {props.rollNo}</p>
        <p className="info">ownerEmail: {props.ownerEmail}</p>
        <p className="info">accessCode: {props.accessCode}</p>
        <p className="info">CompanyName: {props.companyName}</p>
        <p className="info">ClientId: {props.ClientId}</p>
        <p className="info">clientSecret: {props.clientSecret}</p>
      </div>
      <div>
        <p className="info">trainName: {props.trainName}</p>
      </div>
    </div>
  );
}
export default Card;
