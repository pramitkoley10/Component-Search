import React from 'react';
import { Component } from '../../types';

interface TotalRowProps {
  selectedComponents: Component[];
}

export function TotalRow({ selectedComponents }: TotalRowProps) {
  const totals = {
    amazon: selectedComponents.reduce((sum, component) => 
      sum + (component.prices.amazon || 0), 0),
    flipkart: selectedComponents.reduce((sum, component) => 
      sum + (component.prices.flipkart || 0), 0),
    mdcomputer: selectedComponents.reduce((sum, component) => 
      sum + (component.prices.mdcomputer || 0), 0),
    vedantcomputer: selectedComponents.reduce((sum, component) => 
      sum + (component.prices.vedantcomputer || 0), 0),
  };

  return (
    <tr className="bg-gray-50 font-semibold">
      <td className="px-6 py-4 whitespace-nowrap" colSpan={2}>
        <div className="text-sm text-gray-900">Total Price</div>
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-center border-x">
        <span className="text-sm">
          ₹{totals.amazon.toLocaleString()}
        </span>
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-center border-x">
        <span className="text-sm">
          ₹{totals.flipkart.toLocaleString()}
        </span>
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-center border-x">
        <span className="text-sm">
          ₹{totals.mdcomputer.toLocaleString()}
        </span>
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-center border-x">
        <span className="text-sm">
          ₹{totals.vedantcomputer.toLocaleString()}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-xs text-gray-500">
          Best Price: ₹{Math.min(...Object.values(totals)).toLocaleString()}
        </span>
      </td>
    </tr>
  );
}