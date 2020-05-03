import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
// import CardDeck from 'react-bootstrap/CardDeck'



// remove const masterTicketList = [ ... ]. We no longer want these.

function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {/* We now need to map over the values of an object, not an array. */}
      {Object.values(props.ticketList).map((ticket) => {
        // Make sure to explicitly return the Ticket object this time! We will explain why below.
        return <Ticket
          whenTicketClicked={props.onTicketSelection}
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id} />
      })}
      {/* Don't forget to add the curly brace above - otherwise there will be a syntax error. */}
    </React.Fragment>
  );
}


TicketList.propTypes = {
  // The PropType below has been updated - it's now an object, not an array.
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};


export default TicketList;




