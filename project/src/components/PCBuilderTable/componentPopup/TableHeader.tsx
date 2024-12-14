import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { SortDirection, SortField } from '../../../types';


interface TableHeaderProps {
  field: SortField;
  currentField: SortField;
  direction: SortDirection;
  onSort: (field: SortField) => void;
  children: React.ReactNode;
}

export function TableHeader({ 
  field, 
  currentField, 
  direction, 
  onSort, 
  children 
}: TableHeaderProps) {
  const isActive = field === currentField;
  
  return (
    <th 
      className="px-4 py-2 text-left cursor-pointer hover:bg-gray-100"
      onClick={() => onSort(field)}
    >
      <div className="flex items-center justify-between">
        <span>{children}</span>
        <div className="flex flex-col ml-1">
          <ChevronUp 
            className={`w-3 h-3 ${isActive && direction === 'asc' ? 'text-blue-600' : 'text-gray-400'}`}
          />
          <ChevronDown 
            className={`w-3 h-3 ${isActive && direction === 'desc' ? 'text-blue-600' : 'text-gray-400'}`}
            style={{ marginTop: '-2px' }}
          />
        </div>
      </div>
    </th>
  );
}