import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
// import CardDeck from 'react-bootstrap/CardDeck'



// remove const masterTicketList = [ ... ]. We no longer want these.

function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.ticketList).map((ticket) => {
        return <Ticket
          whenTicketClicked={props.onTicketSelection}
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          id={ticket.id}
          key={ticket.id} />
      })}
    </React.Fragment>
  );
}


TicketList.propTypes = {
  // The PropType below has been updated - it's now an object, not an array.
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};


export default TicketList;




