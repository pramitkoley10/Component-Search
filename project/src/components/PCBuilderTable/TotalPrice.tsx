import React from 'react';
import { Component } from '../../types';

interface TotalPriceProps {
  components: Component[];
}

export function TotalPrice({ components }: TotalPriceProps) {
  const total = components.reduce((sum, component) => {
    const lowestPrice = Math.min(...Object.values(component.prices));
    return sum + lowestPrice;
  }, 0);

  return (
    <div className="bg-white px-6 py-4 border-t">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-lg font-semibold">Total Price:</span>
          <span className="text-sm text-gray-500 ml-2">(Best Prices)</span>
        </div>
        <span className="text-xl font-bold">₹{total.toLocaleString()}</span>
      </div>
    </div>
  );
}