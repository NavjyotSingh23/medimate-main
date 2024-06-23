"use client"
import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Send email data to backend
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });
      if (response.ok) {
        alert('Email sent successfully!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={styles.textarea}
          />
        </label>
        <button type="submit" className={styles.button} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Email'}
        </button>
      </form>
      <img src="/contact.jpg" alt="Contact" className={styles.image} />
    </div>
  );
}

export default ContactForm;
