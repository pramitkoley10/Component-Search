import React from 'react';

export function TableHeader() {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Component
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Selection
        </th>
        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan={4}>
          Unit Price
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Action
        </th>
      </tr>
      <tr>
        <th colSpan={2}></th>
        <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-x">
          Amazon
        </th>
        <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-x">
          Flipkart
        </th>
        <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-x">
          MDComputer
        </th>
        <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-x">
          Vedant
        </th>
        <th></th>
      </tr>
    </thead>
  );
}