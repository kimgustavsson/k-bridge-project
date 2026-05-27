'use client';

import { useState, type FormEvent } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hook into backend / email service here.
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        aria-label="Email address"
        className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-brand-yellow focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-md bg-brand-yellow px-3 py-2 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-yellow-dark"
      >
        {submitted ? 'Subscribed!' : 'Subscribe'}
      </button>
    </form>
  );
}
