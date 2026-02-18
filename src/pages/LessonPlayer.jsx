import { useParams, Link } from 'react-router-dom';

import { useLessons } from '../context/LessonsContext';

function LessonPlayer() {

  const { unitId, lessonId } = useParams();

  const { lessons, progress, setProgress } = useLessons();

  const unit = lessons.units.find(u => u.id == unitId);

  const lesson = unit?.lessons.find(l => l.id == lessonId);

  if (!lesson) return <div style={{ textAlign: 'center', padding: '50px' }}>Lesson not found</div>;

  const handleComplete = () => {

    setProgress(prev => ({

      ...prev,

      [unitId]: {

        ...prev[unitId],

        [lessonId]: true

      }

    }));

  };

  const nextLesson = unit.lessons.find(l => l.id == parseInt(lessonId) + 1);

  const prevLesson = unit.lessons.find(l => l.id == parseInt(lessonId) - 1);

  return (

    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>

      <h1 style={{ color: '#ff6b6b' }}>{lesson.title}</h1>

      <p style={{ fontSize: '18px', marginBottom: '20px' }}>{lesson.description}</p>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>

        <iframe width="560" height="315" src={lesson.youtubeUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ borderRadius: '15px' }}></iframe>

      </div>

      <div style={{ margin: '20px 0' }}>

        <h3>Vocabulary</h3>

        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>

          {lesson.vocabulary.map(word => <li key={word} style={{ backgroundColor: '#f0f0f0', padding: '5px 10px', borderRadius: '5px' }}>{word}</li>)}

        </ul>

      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>

        {prevLesson && <Link to={`/units/${unitId}/lessons/${prevLesson.id}`}><button>Previous Lesson</button></Link>}

        <button onClick={handleComplete} style={{ backgroundColor: '#00b894' }}>Mark as Completed</button>

        {nextLesson && <Link to={`/units/${unitId}/lessons/${nextLesson.id}`}><button>Next Lesson</button></Link>}

      </div>

    </div>

  );

}

export default LessonPlayer;