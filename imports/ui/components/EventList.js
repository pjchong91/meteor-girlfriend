import React from "react";

const EventList = ({ events }) => (
  <div>
    <ul>
      {events.map(event => (
        <li key={event._id}>
          {event.event}
          <label htmlFor={event._id} />
        </li>
      ))}
    </ul>
  </div>
);

export default EventList