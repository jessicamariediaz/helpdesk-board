'use client';
import React from 'react';

export default function TicketCard({ticket, onAddToQueue, isQueued}) {
  return (
    
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="font-bold text-lg mb-1">{ticket.title}</h3>
      <p className="text-sm text-gray-700 mb-2">{ticket.description}</p>

      <p className="text-sm mb-1">
        <strong>Priority:</strong> {ticket.priority}
      </p>
      <p className="text-sm mb-1">
        <strong>Status:</strong> {ticket.status}
      </p>
      <p className="text-sm mb-1">
        <strong>Assignee:</strong> {ticket.assignee}
      </p>

      <p className="text-xs text-gray-500 mt-2">
        <strong>Updated:</strong>{' '}
        {new Date(ticket.updatedAt).toLocaleString()}
      </p>




      <button
        onClick={onAddToQueue}
        disabled={isQueued}
        className={`mt-3 px-3 py-1 rounded ${
          isQueued
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white text-sm`}
      >
        {isQueued ? 'In My Queue' : 'Add to My Queue'}
      </button>



    </div>
  );
}
