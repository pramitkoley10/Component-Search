import React, { Component, useState } from 'react';
import { X } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { ProcessorTable } from './ProcessorTable';

import { useSort } from '../../../hooks/useSort';
import { processors } from '../../../data/processors';
import { Processor } from '../../../types/processor';
import { sampleComponents } from '../../../data/components';




interface ProcessorPopupProps {
  isOpen: boolean;
  onClose: () => void;
  components: Component[];
  onSelect: (Components: Component) => void;
}

export function ProcessorPopup({ isOpen, onClose, onSelect }: ProcessorPopupProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { sortField, sortDirection, handleSort, sortProcessors } = useSort();

  if (!isOpen) return null;

  const filteredProcessors = sampleComponents.filter(proc =>
    proc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProcessors = sortProcessors(filteredProcessors);
  
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Choose Processor (CPU)</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          <div className="flex gap-4 mb-4">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>

          <ProcessorTable
            processors={sortedProcessors}
            onSelect={onSelect}
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
          />
        </div>
      </div>
    </div>
  );
}