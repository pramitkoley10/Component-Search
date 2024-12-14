import React from 'react';
import { Component } from '../types';
import { ShoppingCart, Package } from 'lucide-react';

interface ComponentListProps {
  components: Component[];
  onSelect: (component: Component) => void;
}

export function ComponentList({ components, onSelect }: ComponentListProps) {
  return (
    <div className="space-y-4">
      {components.map((component) => (
        <div
          key={component.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <img
              src={component.image}
              alt={component.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{component.name}</h3>
              <p className="text-gray-600">{component.model}</p>
              <div className="mt-2 grid grid-cols-4 gap-4">
                {Object.entries(component.prices).map(([store, price]) => (
                  <div key={store} className="text-sm">
                    <span className="font-medium capitalize">{store}:</span>
                    <span className="ml-1">₹{price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => onSelect(component)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}