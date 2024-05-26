import React from 'react';
import './form.css';

function HariNadh2() {
  return (
    <div className="form-container">
      <form className="styled-form">
        <h2>Contact Us</h2>
        <label htmlFor="userId">UserID</label>
        <input type="text" id="userId" name="userId" placeholder="Ex: Harinadh14" required />
        <label htmlFor="contact">Contact</label>
        <input type="text" id="contact" name="contact" placeholder="Ex: +91 1234567890" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Ex: example@gmail.com" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter Password" required />
        <label htmlFor="reEnterPassword">ReEnter Password</label>
        <input type="password" id="reEnterPassword" name="reEnterPassword" placeholder="Re-Enter Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default HariNadh2;
