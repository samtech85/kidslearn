import { useState } from 'react';
import { useLessons } from '../context/LessonsContext';

function LessonForm({ lesson, onClose }) {
  const { lessons, setLessons } = useLessons();
  const [form, setForm] = useState({
    unitId: lesson?.unitId || 1,
    title: lesson?.title || '',
    description: lesson?.description || '',
    youtubeUrl: lesson?.youtubeUrl || '',
    vocabulary: lesson?.vocabulary?.join(', ') || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to ${lesson ? 'update' : 'add'} this lesson?`)) {
      const vocab = form.vocabulary.split(',').map(w => w.trim());
      const newLesson = { ...form, vocabulary: vocab, id: lesson?.id || Date.now() };
      setLessons(prev => {
        const units = prev.units.map(unit =>
          unit.id == form.unitId
            ? {
                ...unit,
                lessons: lesson
                  ? unit.lessons.map(l => l.id == lesson.id ? newLesson : l)
                  : [...unit.lessons, newLesson]
              }
            : unit
        );
        return { ...prev, units };
      });
      onClose();
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h2>{lesson ? 'Edit' : 'Add'} Lesson</h2>
      <form onSubmit={handleSubmit}>
        <select value={form.unitId} onChange={(e) => setForm({ ...form, unitId: e.target.value })}>
          {lessons.units.map(unit => <option key={unit.id} value={unit.id}>{unit.title}</option>)}
        </select>
        <input type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
        <input type="text" placeholder="YouTube URL" value={form.youtubeUrl} onChange={(e) => setForm({ ...form, youtubeUrl: e.target.value })} required />
        <input type="text" placeholder="Vocabulary (comma separated)" value={form.vocabulary} onChange={(e) => setForm({ ...form, vocabulary: e.target.value })} />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default LessonForm;