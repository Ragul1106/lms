import React, { useEffect, useState } from 'react';

const Progress = () => {
  const [progress, setProgress] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 5 : prev));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Learning Progress</h2>
      <div className="progress mt-3">
        <div
          className="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Progress;
