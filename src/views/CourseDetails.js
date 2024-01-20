import React from 'react'
import { Button } from 'reactstrap'
const getEnrollmentStatus = (progress) => {
    if (progress === 100) {
      return 'Closed'
    } else if (progress > 0) {
      return 'In Progress'
    } else {
      return 'Open'
    }
  }
const CourseDetails = ({ course, onClose }) => {
  return (
    <div style={{ color: 'black'}}>
<h1 style={{ textAlign: 'center', fontWeight:'bold' }}>COURSE DETAILS</h1>
      <h2 style={{ textAlign: 'center'}}>{course.name}</h2>
      <div style={{fontSize:'15px'}}>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {getEnrollmentStatus(course.progress)}</p>
      <p>Duration: {course.duration} months</p>
      <p>Schedule: {course.schedule || 'Not specified'}</p>
      <p>Location: {course.location || 'Not specified'}</p>
      <p>Pre-requisites: {course.prerequisites || 'None'}</p>
      <p>
        Syllabus:
        {course.syllabus ? (
          <ul>
            {course.syllabus.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          'Not available'
        )}
      </p>
      </div>
      <Button color="primary" onClick={onClose}>
        Close
      </Button>
    </div>
  )
}

export default CourseDetails
