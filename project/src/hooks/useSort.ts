import { useState, useCallback, Component } from 'react';

import { processors } from '../data/processors';
import { SortField, SortDirection } from '../types';

export function useSort(initialField: SortField = 'name') {
  const [sortField, setSortField] = useState<SortField>(initialField);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = useCallback((field: SortField) => {
    if (field === sortField) {
      setSortDirection(current => current === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  }, [sortField]);

  const sortProcessors = useCallback((sampleComponents: Component[]) => {
    return [...sampleComponents].sort((a, b) => {
      const modifier = sortDirection === 'asc' ? 1 : -1;
      
      if (sortField === 'price') {
        return (a[sortField] - b[sortField]) * modifier;
      }
      
      return a[sortField].localeCompare(b[sortField]) * modifier;
    });
  }, [sortField, sortDirection]);

  return {
    sortField,
    sortDirection,
    handleSort,
    sortProcessors
  };
}