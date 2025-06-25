import React from 'react';

const Header = ({ onOpenQuiz, quizType, title }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl mr-3">🧪</span>
          <h1 className="text-xl font-bold text-gray-900">{title || 'LearnQE'}</h1>
        </div>
        {quizType === 'testing' && (
          <button 
            onClick={onOpenQuiz} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Take Quiz
          </button>
        )}
        {quizType === 'design' && (
          <button 
            onClick={onOpenQuiz} 
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Test Design Quiz
          </button>
        )}
      </div>
    </header>
  );
};

export default Header; 