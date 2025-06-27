import React, { useState } from 'react';
import courses from '../data/courses';

const Courses = () => {
  const [enrolled, setEnrolled] = useState([]);

  const handleEnroll = (id) => {
    if (!enrolled.includes(id)) {
      setEnrolled([...enrolled, id]);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Courses</h2>
      <div className="row">
        {courses.map(course => (
          <div className="col-md-4" key={course.id}>
            <div className="card shadow-sm mb-3">
              <div className="card-body">
                <h5>{course.title}</h5>
                <p>Lessons: {course.lessons}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEnroll(course.id)}
                  disabled={enrolled.includes(course.id)}
                >
                  {enrolled.includes(course.id) ? 'Enrolled' : 'Enroll'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
