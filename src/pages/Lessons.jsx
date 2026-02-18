import { useParams, Link } from 'react-router-dom';

import { useLessons } from '../context/LessonsContext';

function Lessons() {

  const { unitId } = useParams();

  const { lessons, progress } = useLessons();

  const unit = lessons.units.find(u => u.id == unitId);

  if (!unit) return <div style={{ textAlign: 'center', padding: '50px' }}>Unit not found</div>;

  return (

    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>

      <h1 style={{ textAlign: 'center', color: '#00b894' }}>{unit.title} Lessons</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>

        {unit.lessons.map(lesson => {

          const completed = progress[unit.id]?.[lesson.id];

          return (

            <Link key={lesson.id} to={`/units/${unitId}/lessons/${lesson.id}`} style={{ textDecoration: 'none' }}>

              <div className={`card lesson-card ${completed ? 'completed' : ''}`} style={{ width: '250px', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', position: 'relative' }}>

                <h3>{lesson.title}</h3>

                <p style={{ fontSize: '14px', textAlign: 'center' }}>{lesson.description}</p>

                {completed && <span style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '20px' }}>✓</span>}

              </div>

            </Link>

          );

        })}

      </div>

    </div>

  );

}

export default Lessons;