import React from 'react';

export function QuantityInput() {
  return (
    <input
      type="number"
      min="1"
      defaultValue="1"
      className="w-16 px-2 py-1 border border-gray-300 rounded-md"
    />
  );
}