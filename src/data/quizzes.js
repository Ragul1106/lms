const quizzes = [
  {
    courseId: 1,
    questions: [
      {
        question: 'What is JSX?',
        options: [
          'Java Standard XML',
          'JavaScript XML',
          'JSON Syntax Extension',
          'Java XML Syntax'
        ],
        correctAnswer: 'JavaScript XML'
      },
      {
        question: 'What is a component?',
        options: [
          'Database Table',
          'Reusable UI piece',
          'Server Element',
          'Router logic'
        ],
        correctAnswer: 'Reusable UI piece'
      }
    ]
  },
  {
    courseId: 2,
    questions: [
      {
        question: 'What is a closure?',
        options: [
          'A function without return',
          'Function bundled with its lexical scope',
          'A global variable',
          'An arrow function'
        ],
        correctAnswer: 'Function bundled with its lexical scope'
      },
      {
        question: 'What is hoisting?',
        options: [
          'Function returning another function',
          'A memory leak prevention method',
          'Moving declarations to top of scope',
          'Async call chaining'
        ],
        correctAnswer: 'Moving declarations to top of scope'
      }
    ]
  }
];

export default quizzes;
