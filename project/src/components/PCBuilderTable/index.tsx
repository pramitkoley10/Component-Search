import React, { useState } from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

import { TotalRow } from './TotalRow';
import { Component, ComponentCategory } from '../../types';
import { ComponentSelector } from './ComponentSelector';
import { ProcessorPopup } from './componentPopup/ProcessorPopup';

interface PCBuilderTableProps {
  categories: ComponentCategory[];
  components: Component[];
}

export function PCBuilderTable({ categories, components }: PCBuilderTableProps) {
  const [selectedComponents, setSelectedComponents] = useState<Record<string, Component>>({});
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleOpenSelector = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
    setSelectorOpen(true);
  };

  const handleSelectComponent = (component: Component) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [component.category]: component,
    }));
  };

  const handleRemoveComponent = (categoryKey: string) => {
    setSelectedComponents((prev) => {
      const newComponents = { ...prev };
      delete newComponents[categoryKey];
      return newComponents;
    });
  };

  return (
    <>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <TableHeader />
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((category) => (
                <TableRow
                  key={category.id}
                  category={category}
                  selectedComponent={selectedComponents[category.key]}
                  onSelect={() => handleOpenSelector(category.key)}
                  onRemove={() => handleRemoveComponent(category.key)}
                />
              ))}
              <TotalRow selectedComponents={Object.values(selectedComponents)} />
            </tbody>
          </table>
        </div>
      </div>

      <ProcessorPopup
        isOpen={selectorOpen}
        onClose={() => setSelectorOpen(false)}
        component={components}
        category={selectedCategory}
        onSelect={handleSelectComponent}
      />
    </>
  );
}