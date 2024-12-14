import React from 'react';
import { PCBuilderTable } from './components/PCBuilderTable';
import { categories, sampleComponents } from './data/components';
import { Cpu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Cpu className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">PC Builder</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-medium text-gray-900">
              Select the components to configure your PC to measure.
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              You can check the characteristics of the article and its availability by clicking on its name.
            </p>
          </div>

          <PCBuilderTable
            categories={categories}
            components={sampleComponents}
          />
        </div>
      </main>
    </div>
  );
}

export default App;