import { useState } from 'react';
import { useLessons } from '../context/LessonsContext';
import { Link } from 'react-router-dom';
import LessonForm from './LessonForm';

function AdminLessons() {
  const { lessons, setLessons } = useLessons();
  const [editing, setEditing] = useState(null);

  const handleDelete = (unitId, lessonId) => {
    if (window.confirm('Are you sure you want to delete this lesson?')) {
      setLessons(prev => ({
        ...prev,
        units: prev.units.map(unit =>
          unit.id == unitId
            ? { ...unit, lessons: unit.lessons.filter(l => l.id != lessonId) }
            : unit
        )
      }));
    }
  };

  const allLessons = lessons.units.flatMap(unit =>
    unit.lessons.map(lesson => ({ ...lesson, unitId: unit.id, unitTitle: unit.title }))
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Manage Lessons</h1>
      <Link to="/admin/lessons/new"><button>Add New Lesson</button></Link>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Unit</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allLessons.map(lesson => (
            <tr key={`${lesson.unitId}-${lesson.id}`}>
              <td>{lesson.unitTitle}</td>
              <td>{lesson.title}</td>
              <td>{lesson.description}</td>
              <td>
                <button onClick={() => setEditing(lesson)}>Edit</button>
                <button onClick={() => handleDelete(lesson.unitId, lesson.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editing && <LessonForm lesson={editing} onClose={() => setEditing(null)} />}
    </div>
  );
}

export default AdminLessons;