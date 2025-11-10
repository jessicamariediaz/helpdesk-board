'use client';
import React from 'react';

export default function PriorityFilter({value, onChange}) {

//priorities
  const priorities = ['All', 'Low', 'Medium', 'High', 'Critical'];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded"
    >
      {priorities.map((priority) => (
        <option key={priority} value={priority}>
          {priority}
        </option>
      ))}
    </select>
  );
}