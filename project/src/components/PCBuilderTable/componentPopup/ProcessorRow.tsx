import React from 'react';

import { QuantityInput } from './QuantityInput';
import { Processor } from '../../../types/processor';
import { Component } from '../../../types';
import { ProcessorPopup } from './ProcessorPopup';

interface ProcessorRowProps {
  component: Component;
  onSelect: (component: Component) => void;
}

export function ProcessorRow({ component, onSelect }: ProcessorRowProps) {
  return (
    <tr className="border-t border-gray-200">
      <td className="px-4 py-2">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=48&h=48&q=80"
            alt={component.name}
            className="w-8 h-8 object-contain"
          />
        </div>
      </td>
      <td className="px-4 py-2">{component.name}</td>
      <td className="px-4 py-2">{component.model}</td>
      <td className="px-4 py-2">₹{Math.min(...Object.values(component.prices)).toLocaleString()}</td>
      <td className="px-4 py-2">
        <span className="text-green-600">{component.availability}</span>
      </td>
      <td className="px-4 py-2">
        <QuantityInput />
      </td>
      <td className="px-4 py-2">
  <button
    onClick={() => {
      onSelect(component);
      onclose(ProcessorPopup);
    }}
    className="bg-gray-700 text-white px-4 py-1 rounded-md hover:bg-gray-800 transition-colors"
  >
    Add To List
  </button>
</td>
    </tr>
  );
}