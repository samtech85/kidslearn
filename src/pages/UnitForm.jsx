import { useState } from 'react';
import { useLessons } from '../context/LessonsContext';

function UnitForm({ unit, onClose }) {
  const { lessons, setLessons } = useLessons();
  const [form, setForm] = useState({
    title: unit?.title || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to ${unit ? 'update' : 'add'} this unit?`)) {
      if (unit) {
        // Edit
        setLessons(prev => ({
          ...prev,
          units: prev.units.map(u => u.id == unit.id ? { ...u, title: form.title } : u)
        }));
      } else {
        // Add
        const newUnit = {
          id: Math.max(...lessons.units.map(u => u.id)) + 1,
          title: form.title,
          lessons: []
        };
        setLessons(prev => ({
          ...prev,
          units: [...prev.units, newUnit]
        }));
      }
      onClose();
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h2>{unit ? 'Edit' : 'Add'} Unit</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Unit Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default UnitForm;