import React from "react";
import contacts from "../contacts";
import Card from "../components/Card";
import "./styles.css";

function App() {
  return (
    <div className="total">
      <div className="cardcontainer">
        <div>
          <h1 className="heading">Train Schedule</h1>
        </div>

        <div className="heading">
          <Card
            companyName={contacts[0].companyName}
            ownerName={contacts[0].ownerName}
            rollNo={contacts[0].rollNo}
            ownerEmail={contacts[0].ownerEmail}
            accessCode={contacts[0].accessCode}
            ClientId={contacts[0].ClientId}
            clientSecret={contacts[0].clientSecret}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
