'use client';
import { useState } from 'react';

export default function BookMeButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: 'Doctor Booking',
        message: 'A user has requested a booking via Clinica.pk',
      }),
    });

    const data = await res.json();
    setLoading(false);
    if (data.success) {
      alert('Email sent!');
    } else {
      alert('Failed to send email. Check logs.');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded"
      disabled={loading}
    >
      {loading ? 'Sending...' : 'Book Me'}
    </button>
  );
}
