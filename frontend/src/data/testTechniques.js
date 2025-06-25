const testTechniques = {
  'Black Box': [
    {
      id: 'equivalence-partitioning',
      name: 'Equivalence Partitioning',
      description: 'Divides input data into valid and invalid partitions where test cases are designed to cover each partition.',
      example: 'For a field accepting numbers 1-100, test with 0 (invalid), 50 (valid), 101 (invalid).',
      pros: ['Reduces redundant test cases', 'Efficient coverage', 'Systematic approach'],
      cons: ['May miss boundary conditions', 'Doesn\'t test combinations'],
      category: 'Black Box',
      icon: '🧩'
    },
    {
      id: 'boundary-value',
      name: 'Boundary Value Analysis',
      description: 'Focuses on testing at the boundaries between partitions.',
      example: 'For a field accepting 1-100, test with 0,1,2 and 99,100,101.',
      pros: ['Finds edge-case defects', 'Complements equivalence partitioning', 'High defect detection rate'],
      cons: ['Only effective for numeric ranges', 'Doesn\'t test middle values'],
      category: 'Black Box',
      icon: '🔢'
    },
    {
      id: 'decision-table',
      name: 'Decision Table Testing',
      description: 'Uses tables to represent complex business logic and combinations of inputs.',
      example: 'Testing login functionality with all combinations of valid/invalid username/password.',
      pros: ['Covers complex business rules', 'Visual representation', 'Combinatorial coverage'],
      cons: ['Can become large', 'Time-consuming'],
      category: 'Black Box',
      icon: '📊'
    },
    {
      id: 'state-transition',
      name: 'State Transition Testing',
      description: 'Testing based on system states and transitions between them.',
      example: 'Testing an ATM: valid card → PIN entry → transaction selection → completion.',
      pros: ['Good for workflow systems', 'Models real user behavior', 'Finds transition bugs'],
      cons: ['Requires state knowledge', 'Complex for large systems'],
      category: 'Black Box',
      icon: '🔄'
    },
    {
      id: 'pairwise',
      name: 'Pairwise Testing',
      description: 'Testing all possible pairs of input parameters to reduce test cases.',
      example: 'Testing a form with 3 fields (10 options each) would test all pairs instead of all combinations.',
      pros: ['Reduces test cases dramatically', 'Finds most interaction bugs', 'Efficient'],
      cons: ['May miss some complex interactions', 'Requires tool support'],
      category: 'Black Box',
      icon: '👥'
    }
  ],
  'White Box': [
    {
      id: 'statement-coverage',
      name: 'Statement Coverage',
      description: 'Ensures every line of code is executed at least once.',
      example: 'Write tests to execute all lines in a function.',
      pros: ['Simple metric', 'Basic coverage measure', 'Easy to implement'],
      cons: ['Doesn\'t test logic flow', 'Misses untested branches'],
      category: 'White Box',
      icon: '📝'
    },
    {
      id: 'branch-coverage',
      name: 'Branch Coverage',
      description: 'Testing all possible branches in the code (if statements, loops).',
      example: 'For an if-else statement, test both true and false conditions.',
      pros: ['Better than statement coverage', 'Finds logical errors', 'Tests decision points'],
      cons: ['More effort required', 'Doesn\'t test all paths'],
      category: 'White Box',
      icon: '🌿'
    },
    {
      id: 'path-coverage',
      name: 'Path Coverage',
      description: 'Testing all possible paths through the code.',
      example: 'Testing all combinations of conditions in a complex function.',
      pros: ['Most thorough coverage', 'Finds complex bugs', 'Tests all execution paths'],
      cons: ['Exponential growth of test cases', 'Often impractical'],
      category: 'White Box',
      icon: '🛤️'
    }
  ],
  'Experience Based': [
    {
      id: 'exploratory',
      name: 'Exploratory Testing',
      description: 'Simultaneous learning, test design, and execution.',
      example: 'Exploring an application without predefined tests to find unexpected issues.',
      pros: ['Finds unexpected bugs', 'Adaptable', 'Good for new testers'],
      cons: ['Hard to measure coverage', 'Depends on tester skill'],
      category: 'Experience Based',
      icon: '🔍'
    },
    {
      id: 'error-guessing',
      name: 'Error Guessing',
      description: 'Using experience to anticipate likely defects.',
      example: 'Testing known problematic areas based on past experience.',
      pros: ['Finds likely bugs', 'Uses tester intuition', 'No formal technique needed'],
      cons: ['Depends on tester skill', 'Not systematic'],
      category: 'Experience Based',
      icon: '🎯'
    }
  ],
  'Risk Based': [
    {
      id: 'risk-prioritization',
      name: 'Risk-Based Testing',
      description: 'Prioritizing testing based on risk assessment and business impact.',
      example: 'Focusing more on payment processing than UI colors in an e-commerce app.',
      pros: ['Efficient resource use', 'Business-focused', 'Finds critical bugs first'],
      cons: ['Requires risk analysis', 'May miss low-risk bugs'],
      category: 'Risk Based',
      icon: '⚠️'
    }
  ]
};

export default testTechniques; 