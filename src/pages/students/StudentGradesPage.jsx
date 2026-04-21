import { LuBadgeCheck } from 'react-icons/lu';
import { FiCalendar } from 'react-icons/fi';
import { PiGraduationCap } from 'react-icons/pi';
import PageHeader from '../../components/ui/modal/teachers/PageHeader';
import StudentGradeCard from '../../components/ui/modal/students/StudentGradeCard';
import '../../styles/students/studentGrades.css';

const gradeStats = [
  { id: 'gpa', icon: <PiGraduationCap />, label: 'Current G.P.A', value: '3.11' },
  { id: 'credits', icon: <LuBadgeCheck />, label: 'Credits Earned', value: '35' },
  { id: 'courses', icon: <FiCalendar />, label: 'Courses Taken', value: '12' },
];

const courses = [
  {
    id: 'web-dev-101',
    title: 'Web Development 101',
    average: 88,
    grade: 'A',
    gradeTone: 'green',
    assessments: [
      { id: 'quiz-1', title: 'Quiz 1', score: '92/100', percentage: '92%', weight: '10%' },
      { id: 'midterm', title: 'Midterm Exam', score: '85/100', percentage: '85%', weight: '30%' },
      { id: 'project-1', title: 'Project 1', score: '88/100', percentage: '88%', weight: '20%' },
    ],
  },
  {
    id: 'data-structures',
    title: 'Data Structures & Algorithms',
    average: 85,
    grade: 'B+',
    gradeTone: 'blue',
    assessments: [
      { id: 'quiz-1', title: 'Quiz 1', score: '85/100', percentage: '85%', weight: '10%' },
      { id: 'assignment-1', title: 'Assignment 1', score: '90/100', percentage: '90%', weight: '15%' },
      { id: 'midterm', title: 'Midterm Exam', score: '82/100', percentage: '82%', weight: '30%' },
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Principles',
    average: 91,
    grade: 'A-',
    gradeTone: 'green',
    assessments: [
      { id: 'design-project', title: 'Design Project 1', score: '95/100', percentage: '95%', weight: '25%' },
      { id: 'quiz-1', title: 'Quiz 1', score: '88/100', percentage: '88%', weight: '10%' },
      { id: 'midterm', title: 'Midterm Exam', score: '90/100', percentage: '90%', weight: '30%' },
    ],
  },
];

function StudentGradesPage() {
  return (
    <div className="student-grades-page">
      <div className="student-grades-header">
        <PageHeader userName="Hi, Kofi Wayoo" />
      </div>

      <section className="student-grades-stats-grid">
        {gradeStats.map((item) => (
          <article key={item.id} className="student-grades-stat-card">
            <div className="student-grades-stat-icon">{item.icon}</div>
            <p>{item.label}</p>
            <h2>{item.value}</h2>
          </article>
        ))}
      </section>

      <div className="student-grades-course-list">
        {courses.map((course) => (
          <StudentGradeCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default StudentGradesPage;
