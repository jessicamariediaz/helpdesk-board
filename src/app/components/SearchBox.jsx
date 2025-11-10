'use client';
import React from 'react';

export default function SearchBox({value, onChange}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search title or description"
      className="border p-2 rounded flex-1 min-w-[200px]"
    />
  );
}