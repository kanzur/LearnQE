const quizQuestions = [
  {
    id: 1,
    question: 'Which technique would you use to test input ranges?',
    options: [
      'Equivalence Partitioning',
      'State Transition Testing',
      'Error Guessing',
      'Ad-hoc Testing'
    ],
    answer: 0,
    explanation: 'Equivalence Partitioning is specifically designed for testing input ranges by dividing them into valid and invalid partitions.'
  },
  {
    id: 2,
    question: 'What is the main advantage of pairwise testing?',
    options: [
      'Tests all possible combinations',
      'Reduces test cases while covering most interactions',
      'Only tests invalid inputs',
      'Focuses on code coverage'
    ],
    answer: 1,
    explanation: 'Pairwise testing dramatically reduces test cases while still covering most interaction bugs by testing all pairs of parameters.'
  },
  {
    id: 3,
    question: 'Which technique would best test a complex workflow?',
    options: [
      'Boundary Value Analysis',
      'State Transition Testing',
      'Statement Coverage',
      'Error Guessing'
    ],
    answer: 1,
    explanation: 'State Transition Testing is ideal for workflows as it models the system states and transitions between them.'
  },
  {
    id: 4,
    question: 'What does 100% branch coverage guarantee?',
    options: [
      'All code is executed',
      'All possible branches are tested',
      'All paths are tested',
      'All requirements are met'
    ],
    answer: 1,
    explanation: 'Branch coverage ensures all decision points (branches) in the code are tested, but doesn\'t guarantee all paths are tested.'
  }
];

export default quizQuestions; 