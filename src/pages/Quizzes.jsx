import React, { useState } from 'react';
import quizzes from '../data/quizzes';

const Quizzes = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (courseId, qIndex, option) => {
    setAnswers(prev => ({
      ...prev,
      [`${courseId}-${qIndex}`]: option
    }));
  };

  const handleSubmit = () => {
    let correct = 0;

    quizzes.forEach(set => {
      set.questions.forEach((q, i) => {
        const userAnswer = answers[`${set.courseId}-${i}`];
        if (userAnswer === q.correctAnswer) correct++;
      });
    });

    setScore(correct);
    setSubmitted(true);
  };

  return (
    <div className="container mt-4">
      <h2>📝 Quizzes</h2>
      {quizzes.map((set, idx) => (
        <div className="card my-3" key={idx}>
          <div className="card-body">
            <h5>📘 Course #{set.courseId}</h5>
            {set.questions.map((q, i) => (
              <div className="mb-3" key={i}>
                <p><strong>{i + 1}. {q.question}</strong></p>
                {q.options.map((opt, j) => {
                  const key = `${set.courseId}-${i}`;
                  return (
                    <div className="form-check" key={j}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name={key}
                        value={opt}
                        disabled={submitted}
                        checked={answers[key] === opt}
                        onChange={() => handleChange(set.courseId, i, opt)}
                      />
                      <label className="form-check-label">{opt}</label>
                    </div>
                  );
                })}
                {submitted && (
                  <p className={`mt-1 ${answers[`${set.courseId}-${i}`] === q.correctAnswer ? 'text-success' : 'text-danger'}`}>
                    {answers[`${set.courseId}-${i}`] === q.correctAnswer
                      ? '✔ Correct!'
                      : `✘ Correct Answer: ${q.correctAnswer}`}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={handleSubmit} disabled={submitted}>
        Submit Quiz
      </button>
      {submitted && (
        <div className="alert alert-info mt-4">
          ✅ You got <strong>{score}</strong> out of <strong>{
            quizzes.reduce((sum, set) => sum + set.questions.length, 0)
          }</strong> correct!
        </div>
      )}
    </div>
  );
};

export default Quizzes;
