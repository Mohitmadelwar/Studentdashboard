import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Course = ({ onClose }) => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetch('/courses.json')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
  };

  return (
    <Container>
      {selectedCourse ? (
        <div>
          <h2>{selectedCourse.name} Details</h2>
          <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
          <h4>Syllabus:</h4>
          <ul>
            {selectedCourse.syllabus.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button color="primary" onClick={handleBackToCourses}>Back to Courses</Button>

        </div>
      ) : (
        <Row>
          <Col>
            <h2>Course List</h2>
            <ul>
              {courses.map(course => (
                <li key={course.id}>
                  <strong>Course Name:</strong> {course.name} <br />
                  <strong>Instructor:</strong> {course.instructor} <br />
                  <strong>Description:</strong> {course.description} <br />
                  <Button color="primary" onClick={() => handleViewDetails(course)}>View Syllabus</Button>
                  <hr />
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Course;
