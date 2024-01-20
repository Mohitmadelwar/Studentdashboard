import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Home = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: 'Mohit Madelwar',
    profilePicture: './Myphoto.jpg',
    department: 'Computer Science and Engineering',
    year: '4th',
    grade: 'A',
    mobile: '+917020646093',
    mail: 'Mohitmadelwar225@gmail.com',
  });

  const [editing, setEditing] = useState(false);

  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      name: "Introduction to Python Programming",
      instructor: "Aryan Sharma",
    },
    {
      name: "Machine Learning Essentials with Python",
      instructor: "Neha Gupta",
    },
  ]);

  useEffect(() => {
    // Fetch student details from the server or other data source
    // and update the studentDetails state
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails({ ...studentDetails, [name]: value });
  };

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Dashboard</CardTitle>
      </CardHeader>
     
      <CardBody>
        <img
          src={studentDetails.profilePicture}
          alt="Profile"
          style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom:'20px' }}
        />
        {editing ? (
          <Form onSubmit={handleFormSubmit}>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={studentDetails.name}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="department">Department:</Label>
              <Input
                type="text"
                name="department"
                id="department"
                value={studentDetails.department}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="year">Year:</Label>
              <Input
                type="text"
                name="year"
                id="year"
                value={studentDetails.year}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="grade">Grade:</Label>
              <Input
                type="text"
                name="grade"
                id="grade"
                value={studentDetails.grade}
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Save
            </Button>{' '}
            <Button color="secondary" onClick={handleEditToggle}>
              Cancel
            </Button>
          </Form>
        ) : (
          <div>
            <CardText>
              <strong>Name:</strong> {studentDetails.name}
            </CardText>
            <CardText>
              <strong>Department:</strong> {studentDetails.department}
            </CardText>
            <CardText>
              <strong>Year:</strong> {studentDetails.year}
            </CardText>
            <CardText>
              <strong>Grade:</strong> {studentDetails.grade}
            </CardText>
            <CardText>
              <strong>Mobile no:</strong> {studentDetails.mobile}
            </CardText>
            <CardText>
              <strong>Mail Id:</strong> {studentDetails.mail}
            </CardText>
            <Button color="primary" onClick={handleEditToggle} >
              Edit
            </Button>
            <CardText style={{ marginTop: '20px' }}>
              <strong>Enrolled Courses:</strong>
            </CardText>
            <ul>
              {enrolledCourses.map((course, index) => (
                <li key={index} >
                  {course.name} (Instructor: {course.instructor })
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default Home;
