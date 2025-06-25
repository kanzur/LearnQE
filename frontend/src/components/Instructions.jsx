import React from 'react';

const Instructions = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200 text-left">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">How to Use This App</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-left">
          <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mb-2 font-bold">1</div>
          <p className="text-sm text-gray-700">Select a category from the sidebar</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-left">
          <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mb-2 font-bold">2</div>
          <p className="text-sm text-gray-700">Click on a technique to learn about it</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-left">
          <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mb-2 font-bold">3</div>
          <p className="text-sm text-gray-700">Take the quiz to test your knowledge</p>
        </div>
      </div>
    </div>
  );
};

export default Instructions; 