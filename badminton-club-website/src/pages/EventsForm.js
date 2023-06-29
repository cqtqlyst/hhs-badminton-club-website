import React, { useState } from "react";

function EventsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., send data to server)

    // Reset form fields and show success message
    setName("");
    setEmail("");
    setSuccess(true);
  };

  return (
    <div>
      <h2>Register for Events</h2>
      {success ? (
        <div className="success">Registration successful!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />

          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default EventsForm;
