import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TechniqueItem from '../components/TechniqueItem';
import TechniqueDetails from '../components/TechniqueDetails';
import Instructions from '../components/Instructions';
import QuizModal from '../components/QuizModal';
import testTechniques from '../data/testTechniques';

const UnderDevelopmentModal = ({ onClose, title }) => (
  <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex justify-center items-center z-50 p-4">
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl w-full max-w-md p-8 text-center relative overflow-hidden">
      <div className="absolute -top-20 -right-20 bg-yellow-400/20 w-40 h-40 rounded-full"></div>
      <div className="relative z-10">
        <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
          🚧
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Under Development</h2>
        <p className="text-gray-600 mb-6">{title || 'This section is under development. Please check back soon!'}</p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-medium rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  const [mainCard, setMainCard] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTechnique, setSelectedTechnique] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDevModal, setShowDevModal] = useState(false);
  const [devModalTitle, setDevModalTitle] = useState('');
  const [studiedTechniques, setStudiedTechniques] = useState(new Set());

  const categories = Object.keys(testTechniques).map(name => ({
    name,
    icon: testTechniques[name][0]?.icon || '📋',
    color: {
      'Black Box': 'from-blue-500 to-blue-600',
      'White Box': 'from-red-500 to-red-600',
      'Experience Based': 'from-green-500 to-green-600',
      'Risk Based': 'from-yellow-500 to-yellow-600'
    }[name] || 'from-gray-500 to-gray-600'
  }));

  const techniques = selectedCategory ? testTechniques[selectedCategory] : [];
  const selectedTechniqueData = techniques.find(t => t.name === selectedTechnique);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedTechnique('');
  };

  const handleSelectTechnique = (techniqueName) => {
    setSelectedTechnique(techniqueName);
  };

  const handleQuizComplete = () => {
    if (selectedTechnique) {
      setStudiedTechniques(prev => new Set([...prev, selectedTechnique]));
    }
    setShowQuiz(false);
  };

  // Card selection UI
  if (!mainCard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header quizType={undefined} title={undefined} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testing Techniques Card */}
          <div 
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            onClick={() => setMainCard('testing')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 h-full flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl mb-4 shadow-md">
                🧪
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Testing Techniques</h3>
              <p className="text-gray-600 mb-4 flex-grow">General Testing Approaches | Explore and learn about various software testing techniques.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-blue-600">Explore →</span>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Test Design Techniques Card */}
          <div 
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            onClick={() => setMainCard('design')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 h-full flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-2xl mb-4 shadow-md">
                ✏️
              </div>
{/*               <h3 className="text-xl font-bold text-gray-800 mb-2">Test Design Techniques</h3> */}
{/*               <p className="text-gray-600 mb-4 flex-grow">Coming soon: Learn about test design techniques and best practices for effective test cases.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-green-600">Coming soon</span>
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div> */}
              </div>
            </div>
          </div>

          {/* Other Feature Cards */}
          {[
            { 
              title: 'Test Execution', 
              gradient: 'from-purple-500 to-purple-600',
              icon: '⚡',
              description: 'Explore methods for executing test cases efficiently and effectively.'
            },
            { 
              title: 'Test Management', 
              gradient: 'from-amber-500 to-amber-600',
              icon: '📊',
              description: 'Learn about planning and controlling the testing process.'
            },
            { 
              title: 'Test Data', 
              gradient: 'from-pink-500 to-pink-600',
              icon: '🗃️',
              description: 'Discover strategies for creating and maintaining test data.'
            },
            { 
              title: 'Test Automation', 
              gradient: 'from-cyan-500 to-cyan-600',
              icon: '🤖',
              description: 'Understand frameworks and tools for automating tests.'
            },
            { 
              title: 'Defect Management', 
              gradient: 'from-red-500 to-red-600',
              icon: '🐞',
              description: 'Master the process of identifying and tracking defects.'
            },
            { 
              title: 'Security & Performance', 
              gradient: 'from-teal-500 to-teal-600',
              icon: '🛡️',
              description: 'Approaches for ensuring security and optimal performance.'
            }
          ].map((card, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onClick={() => { setDevModalTitle(card.title); setShowDevModal(true); }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white text-2xl mb-4 shadow-md`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{card.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium`} style={{ color: `var(--${card.gradient.split(' ')[0].split('-')[1]}-600)` }}>Coming soon</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center`} style={{ backgroundColor: `var(--${card.gradient.split(' ')[0].split('-')[1]}-100)` }}>
                    <svg className={`w-4 h-4`} style={{ color: `var(--${card.gradient.split(' ')[0].split('-')[1]}-600)` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {showDevModal && <UnderDevelopmentModal onClose={() => setShowDevModal(false)} title={devModalTitle} />}
        
        <footer className="bg-white border-t border-gray-200 py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-3 md:mb-0">Based on ISO/IEC/IEEE 29119 Software Testing Standards</p>
            <span className="text-sm text-gray-400">&copy; 2025 - LearnQE</span>
          </div>
        </footer>
      </div>
    );
  }

  // Testing Techniques UI
  if (mainCard === 'testing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header onOpenQuiz={() => setShowQuiz(true)} quizType="testing" title="Testing Techniques" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            {selectedTechnique ? (
              <button
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-medium transition-colors duration-200 flex items-center"
                onClick={() => setSelectedTechnique('')}
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Techniques
              </button>
            ) : selectedCategory ? (
              <button
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-medium transition-colors duration-200 flex items-center"
                onClick={() => setSelectedCategory('')}
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Categories
              </button>
            ) : (
              <button
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-medium transition-colors duration-200 flex items-center"
                onClick={() => setMainCard('')}
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Main Menu
              </button>
            )}
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-64 flex-shrink-0">
              <Sidebar 
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={handleSelectCategory}
              />
            </div>
            
            <div className="flex-1">
              {!selectedCategory ? (
                <div className="space-y-6">
                  <Instructions />
                  <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 text-left">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <span className="text-blue-600 text-xl">🧪</span>
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                          Testing Techniques
                        </h1>
                        <p className="text-blue-600 font-medium">
                          Comprehensive testing techniques categorized by approach
                        </p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p className="text-gray-700">
                        Select a category from the sidebar to begin exploring different testing techniques. 
                        Each category represents a distinct approach to software testing.
                      </p>
                    </div>
                  </div>
                </div>
              ) : !selectedTechnique ? (
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className={`${categories.find(c => c.name === selectedCategory)?.color} text-white p-3 rounded-full mr-4`}>
                      <span className="text-xl">{categories.find(c => c.name === selectedCategory)?.icon}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {selectedCategory} Techniques
                    </h2>
                  </div>
                  <div className="grid gap-3">
                    {techniques.map((technique) => (
                      <TechniqueItem
                        key={technique.name}
                        technique={technique}
                        isSelected={false}
                        onSelect={handleSelectTechnique}
                        isStudied={studiedTechniques.has(technique.name)}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <TechniqueDetails technique={selectedTechniqueData} />
              )}
            </div>
          </div>
        </div>
        
        {showQuiz && <QuizModal onClose={handleQuizComplete} />}
        
        <footer className="bg-white border-t border-gray-200 py-4 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="mb-2 md:mb-0">Based on ISO/IEC/IEEE 29119 Software Testing Standards</p>
            <span className="text-gray-400">&copy; 2025 - LearnQE</span>
          </div>
        </footer>
      </div>
    );
  }

  // Test Design Techniques placeholder
  if (mainCard === 'design') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header onOpenQuiz={() => setShowDevModal(true)} quizType="design" title="Test Design Techniques" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-green-600 transform transition-all duration-300 hover:shadow-xl">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-green-600 text-3xl">📝</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Test Design Techniques</h2>
            <p className="text-gray-600 text-lg mb-6">
              This section is coming soon! Here you will find resources and guides on designing effective test cases and strategies.
            </p>
            <button
              className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md flex items-center mx-auto"
              onClick={() => setMainCard('')}
            >
              Back to Main Menu
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
          </div>
        </div>
        {showDevModal && <UnderDevelopmentModal onClose={() => setShowDevModal(false)} />}
        <footer className="bg-white border-t border-gray-200 py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-3 md:mb-0">Based on ISO/IEC/IEEE 29119 Software Testing Standards</p>
            <span className="text-sm text-gray-400">&copy; 2025 - LearnQE</span>
          </div>
        </footer>
      </div>
    );
  }
};

export default HomePage;
