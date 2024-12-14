import React from 'react';
import { Component } from '../types';
import { Trash2, RefreshCw } from 'lucide-react';

interface SelectedComponentsProps {
  components: Component[];
  onRemove: (component: Component) => void;
}

export function SelectedComponents({ components, onRemove }: SelectedComponentsProps) {
  const total = components.reduce((sum, component) => {
    const lowestPrice = Math.min(...Object.values(component.prices));
    return sum + lowestPrice;
  }, 0);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Selected Components</h2>
      <div className="space-y-4">
        {components.map((component) => (
          <div key={component.id} className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center space-x-4">
              <img
                src={component.image}
                alt={component.name}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <h3 className="font-medium">{component.name}</h3>
                <p className="text-sm text-gray-600">
                  Best Price: ₹{Math.min(...Object.values(component.prices)).toLocaleString()}
                </p>
              </div>
            </div>
            <button
              onClick={() => onRemove(component)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-full"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-xl font-bold">₹{total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}