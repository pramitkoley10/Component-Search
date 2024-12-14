import React from 'react';
import { TableHeader } from './TableHeader';
import { ProcessorRow } from './ProcessorRow';

import { Component, SortDirection, SortField } from '../../../types';
import { sampleComponents } from '../../../data/components';

interface ProcessorTableProps {
  Component: Component;
  onSelect: () => void;
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}

export function ProcessorTable({ 
  Component, 
  onSelect, 
  sortField, 
  sortDirection, 
  onSort
}: ProcessorTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-2 text-left">Image</th>
            <TableHeader 
              field="name" 
              currentField={sortField} 
              direction={sortDirection} 
              onSort={onSort}
            >
              Product Name
            </TableHeader>
            <TableHeader 
              field="model" 
              currentField={sortField} 
              direction={sortDirection} 
              onSort={onSort}
            >
              Model
            </TableHeader>
            <TableHeader 
              field="price" 
              currentField={sortField} 
              direction={sortDirection} 
              onSort={onSort}
            >
              Unit Price
            </TableHeader>
            <th className="px-4 py-2 text-left">Availability</th>
            <th className="px-4 py-2 text-left">Quantity</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {sampleComponents.map((Component) => (
            <ProcessorRow
              key={Component.id}
              component={Component}
              onSelect={onSelect}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}