import PageHeader from '../../components/ui/modal/teachers/PageHeader';
import TeachersCourse from '../../components/ui/modal/teachers/TeachersCourse';
import { studentCourses } from '../../data/studentCoursesData';
import '../../styles/students/studentCourses.css';
import { useNavigate } from 'react-router-dom';

function StudentCoursesPage() {
  const navigate = useNavigate();

  return (
    <div className="student-courses-page">
      <div className="student-courses-page-header">
        <PageHeader userName="Hi, Kofi Wayoo" />
      </div>

      <div className="student-courses-listing">
        {studentCourses.map((course) => (
          <TeachersCourse
            key={course.id}
            active={course.active}
            buttonText="View Details"
            code={course.code}
            onClick={() => navigate(`/students/courses/${course.id}`)}
            progress={course.progress}
            room={course.room}
            schedule={course.schedule}
            students={course.students}
            title={course.title}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentCoursesPage;
