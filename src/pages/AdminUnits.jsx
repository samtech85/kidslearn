import { useState } from 'react';
import { useLessons } from '../context/LessonsContext';
import { Link } from 'react-router-dom';
import UnitForm from './UnitForm';

function AdminUnits() {
  const { lessons, setLessons } = useLessons();
  const [editing, setEditing] = useState(null);

  const handleDelete = (unitId) => {
    // Only allow delete if no lessons
    const unit = lessons.units.find(u => u.id == unitId);
    if (unit.lessons.length > 0) {
      alert('Cannot delete unit with lessons. Delete lessons first.');
      return;
    }
    if (window.confirm('Are you sure you want to delete this unit?')) {
      setLessons(prev => ({
        ...prev,
        units: prev.units.filter(u => u.id != unitId)
      }));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Manage Units</h1>
      <Link to="/admin/units/new"><button>Add New Unit</button></Link>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Lessons Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lessons.units.map(unit => (
            <tr key={unit.id}>
              <td>{unit.id}</td>
              <td>{unit.title}</td>
              <td>{unit.lessons.length}</td>
              <td>
                <button onClick={() => setEditing(unit)}>Edit</button>
                <button onClick={() => handleDelete(unit.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editing && <UnitForm unit={editing} onClose={() => setEditing(null)} />}
    </div>
  );
}

export default AdminUnits;