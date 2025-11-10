'use client';
import React from 'react';

export default function StatusFilter({value, onChange}) {


    
  const statuses = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved'];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded"
    >
      {statuses.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
}
