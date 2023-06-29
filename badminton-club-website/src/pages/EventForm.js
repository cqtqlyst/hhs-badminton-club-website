import React, { useState } from "react";

function EventForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation
    if (name.trim() === "" || email.trim() === "") {
      setError("Please enter a valid name and email.");
      return;
    }

    setError("");

    // Logic to handle form submission (e.g., save data locally)
    // Here, you can perform any desired actions with the form data
    // For example, you can store the form data in an array or object

    // Reset form fields and show success message
    setName("");
    setEmail("");
    setSuccess(true);
  };

  return (
    <div className="event-form">
      <h2>Event Title</h2>
      <p>Event Description</p>
      {error && <div className="error">{error}</div>}
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

export default EventForm;
