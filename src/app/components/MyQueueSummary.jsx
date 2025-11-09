'use client';
import React from 'react';

export default function MyQueueSummary({tickets, onRemove, onClear}) {
  return (
    <div className ="border rounded p-4">
      <h2 className ="font-semibold text-lg mb-2">My Queue</h2>
      {tickets.length === 0 ? (
        <p className="text-sm text-gray-600 mb-2">
          There are no tickets in your queue.
        </p>
      ) : (
        <ul className="space-y-1 mb-2">
          {tickets.map((t) => (
            <li key={t.id} className="flex justify-between text-sm">
              <span>{t.title}</span>
              <button
                onClick={() => onRemove(t.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}




      <div className="flex justify-between items-center">
        <p className="text-sm">Selected: {tickets.length}</p>
        <button
          onClick={onClear}
          disabled={!tickets.length}
          className={`text-sm px-3 py-1 rounded ${
            tickets.length
              ? 'bg-gray-200 hover:bg-gray-300'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Clear Queue
        </button>
      </div>
    </div>
  );
};