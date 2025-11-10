'use client';
import React from 'react';

export default function StatusMessage({type}) {
  const messages = {
    loading: 'Loading…',
    error: 'Unable to load tickets.',
    empty: 'No tickets match your filters.',
  };
  return (
    <div className="text-center py-10 text-gray-600 text-lg">
      {messages[type] || ''}
    </div>
  );
};