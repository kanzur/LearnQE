import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const TechniqueItem = ({ technique, isSelected, onSelect, isStudied }) => {
  return (
    <button
      onClick={() => onSelect(technique.name)}
      className={`w-full flex items-start p-4 rounded-lg transition-colors ${
        isSelected ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-gray-50'
      }`}
    >
      <div className="flex-shrink-0 mr-3">
        {isStudied ? (
          <CheckCircle className="w-5 h-5 text-green-500" />
        ) : (
          <Circle className="w-5 h-5 text-gray-300" />
        )}
      </div>
      <div className="text-left">
        <h3 className="text-sm font-medium text-gray-900">{technique.name}</h3>
        <p className="text-xs text-gray-500 mt-1">{technique.description}</p>
      </div>
    </button>
  );
};

export default TechniqueItem; 