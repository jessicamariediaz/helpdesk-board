'use client';
import React from 'react';
import TicketCard from './TicketCard';

export default function TicketList({tickets, queue, onAddToQueue}) {
  if (!tickets || tickets.length === 0) {
    return <p className="text-gray-600">No tickets available.</p>;
  }

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tickets.map((t) => (
        <TicketCard
          key={t.id}
          ticket={t}
          onAddToQueue={() => onAddToQueue(t.id)}
          isQueued={!!queue[t.id]}
        />
      ))}
    </div>


  );
};