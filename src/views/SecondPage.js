import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardTitle, Progress, Navbar, Nav, NavItem, NavLink, Input } from 'reactstrap';
import CourseDetails from './CourseDetails';
import './SecondPage.css';

const SecondPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/courses.json')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  const openCourseDetails = (course) => {
    setSelectedCourse(course);
  };

  const closeCourseDetails = () => {
    setSelectedCourse(null);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/course">Courses</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/more">More</NavLink>
          </NavItem>
        </Nav>
        <Input
          type="text"
          placeholder="Search courses"
          value={searchQuery}
          onChange={handleSearch}
        />
      </Navbar>

      <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
        {filteredCourses.map((course) => (
          <Card key={course.id} onClick={() => openCourseDetails(course)}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
              <p style={{ fontWeight: 'bold' }}>Lecturer: {course.instructor}</p>
            </CardHeader>
            <CardBody>
              <Progress value={course.progress} /> <p>{course.progress}%</p>
            </CardBody>
          </Card>
        ))}
      </div>

      {selectedCourse && (
        <div className="floating-page">
          <CourseDetails course={selectedCourse} onClose={closeCourseDetails} />
        </div>
      )}
    </div>
  );
};

export default SecondPage;
