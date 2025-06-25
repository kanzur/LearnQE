import React, { useState } from 'react';
import { X } from 'lucide-react';
import quizQuestions from '../data/quizQuestions';

const QuizModal = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null);

  const handleAnswer = (optionIndex) => {
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === quizQuestions[currentQuestion].answer;
    setAnsweredCorrectly(isCorrect);
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setShowExplanation(true);
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
    setShowExplanation(false);
    setAnsweredCorrectly(null);
    
    if (currentQuestion >= quizQuestions.length - 1) {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setAnsweredCorrectly(null);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-500" />
        </button>
        
        {!showResult ? (
          <div className="p-8">
            <div className="mb-6">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300" 
                  style={{ width: `${((currentQuestion + (showExplanation ? 1 : 0)) / quizQuestions.length) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                <span>{Math.round(((currentQuestion + (showExplanation ? 1 : 0)) / quizQuestions.length) * 100)}%</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-left">{quizQuestions[currentQuestion].question}</h3>
            
            <div className="space-y-3 mb-6">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full p-4 text-left rounded-lg border transition-all font-medium ${
                    selectedOption === index 
                      ? answeredCorrectly 
                        ? 'border-green-500 bg-green-50 text-green-800 shadow-sm' 
                        : 'border-red-500 bg-red-50 text-red-800 shadow-sm'
                      : showExplanation && index === quizQuestions[currentQuestion].answer 
                        ? 'border-green-500 bg-green-50 text-green-800 animate-pulse shadow-sm'
                        : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                  }`}
                  onClick={() => !showExplanation && handleAnswer(index)}
                  disabled={showExplanation}
                >
                  <div className="flex items-center">
                    <span className="mr-3 font-bold text-gray-500">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </div>
                </button>
              ))}
            </div>
            
            {showExplanation && (
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6 text-left">
                <p className="font-semibold text-blue-800 mb-2">Explanation:</p>
                <p className="text-gray-700 mb-4">{quizQuestions[currentQuestion].explanation}</p>
                <button 
                  onClick={handleNext} 
                  className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
                >
                  {currentQuestion === quizQuestions.length - 1 ? 'View Results' : 'Next Question'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">
                  {score}/{quizQuestions.length}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {score === quizQuestions.length ? 'Perfect Score! 🎉' :
                 score >= quizQuestions.length / 2 ? 'Good Job! 👍' :
                 'Keep Practicing! 💪'}
              </h2>
              <p className="text-gray-600">
                {score === quizQuestions.length ? 'You aced the quiz! You clearly know your testing techniques.' :
                 score >= quizQuestions.length / 2 ? 'You have a good understanding of testing techniques.' :
                 'Review the techniques and try again to improve your score.'}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={resetQuiz} 
                className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
              >
                Try Again
              </button>
              <button 
                onClick={onClose} 
                className="py-2 px-6 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-300 transition-colors shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal; 