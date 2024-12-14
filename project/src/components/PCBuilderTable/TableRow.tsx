import React from 'react';
import { Component, ComponentCategory } from '../../types';
import { ChevronRight, X } from 'lucide-react';

interface TableRowProps {
  category: ComponentCategory;
  selectedComponent?: Component;
  onSelect: () => void;
  onRemove: () => void;
}

export function TableRow({ category, selectedComponent, onSelect, onRemove }: TableRowProps) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{category.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {selectedComponent ? (
          <div className="flex items-center">
            <img
              src={selectedComponent.image}
              alt={selectedComponent.name}
              className="h-10 w-10 rounded-md mr-3"
            />
            <div>
              <div className="text-sm font-medium text-gray-900">
                {selectedComponent.name}
              </div>
              <div className="text-sm text-gray-500">{selectedComponent.model}</div>
            </div>
          </div>
        ) : (
          <button
            onClick={onSelect}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
          >
            Choose {category.name}
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        )}
      </td>
      {/* Amazon Price */}
      <td className="px-4 py-4 whitespace-nowrap text-center border-x">
        {selectedComponent?.prices.amazon ? (
          <span className="text-sm font-medium">
            ₹{selectedComponent.prices.amazon.toLocaleString()}
          </span>
        ) : (
          <span className="text-sm text-gray-400">-</span>
        )}
      </td>
      {/* Flipkart Price */}
      <td className="px-4 py-4 whitespace-nowrap text-center border-x">
        {selectedComponent?.prices.flipkart ? (
          <span className="text-sm font-medium">
            ₹{selectedComponent.prices.flipkart.toLocaleString()}
          </span>
        ) : (
          <span className="text-sm text-gray-400">-</span>
        )}
      </td>
      {/* MDComputer Price */}
      <td className="px-4 py-4 whitespace-nowrap text-center border-x">
        {selectedComponent?.prices.mdcomputer ? (
          <span className="text-sm font-medium">
            ₹{selectedComponent.prices.mdcomputer.toLocaleString()}
          </span>
        ) : (
          <span className="text-sm text-gray-400">-</span>
        )}
      </td>
      {/* Vedant Computer Price */}
      <td className="px-4 py-4 whitespace-nowrap text-center border-x">
        {selectedComponent?.prices.vedantcomputer ? (
          <span className="text-sm font-medium">
            ₹{selectedComponent.prices.vedantcomputer.toLocaleString()}
          </span>
        ) : (
          <span className="text-sm text-gray-400">-</span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {selectedComponent && (
          <button
            onClick={onRemove}
            className="text-red-600 hover:text-red-800"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </td>
    </tr>
  );
}