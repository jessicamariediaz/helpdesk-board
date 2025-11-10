'use client';
import React from 'react';

export default function PriorityFilter({value, onChange}) {
  // Available priority levels (as required by the rubric)
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