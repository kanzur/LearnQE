import React from 'react';

const TechniqueDetails = ({ technique }) => {
  if (!technique) return null;

  const categoryColors = {
    'Black Box': 'bg-blue-600',
    'White Box': 'bg-red-600',
    'Experience Based': 'bg-green-600',
    'Risk Based': 'bg-yellow-600'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 text-left">
      <div className={`${categoryColors[technique.category]} p-6 text-white`}>
        <div className="flex items-center">
          <span className="text-4xl mr-4">{technique.icon}</span>
          <div>
            <h1 className="text-2xl font-bold">{technique.name}</h1>
            <span className="inline-block mt-1 px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
              {technique.category}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
          <p className="text-gray-700">{technique.description}</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Example</h2>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-gray-700">{technique.example}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Pros</h2>
            <ul className="space-y-2">
              {technique.pros.map((pro, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Cons</h2>
            <ul className="space-y-2">
              {technique.cons.map((con, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <span className="text-gray-700">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechniqueDetails; 