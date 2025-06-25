import React from 'react';
import { ChevronRight } from 'lucide-react';

const Sidebar = ({ categories, selectedCategory, onSelect }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 text-left">
    <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
    <div className="space-y-2">
      {categories.map(({ name, icon, color }) => (
        <button
          key={name}
          onClick={() => onSelect(name)}
          className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
            selectedCategory === name
              ? `${color} text-white`
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <span className="mr-3 text-lg">{icon}</span>
          <span className="flex-1 text-left">{name}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      ))}
    </div>
  </div>
);

export default Sidebar; 