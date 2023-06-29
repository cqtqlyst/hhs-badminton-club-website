import React from "react";
import EventForm from "./EventForm";

function Events() {
  return (
    <div>
      <h1 className="events-title">Good Events Title</h1>
      <div className="event-form-container">
        <EventForm />
        <EventForm />
      </div>
    </div>
  );
}

export default Events;
