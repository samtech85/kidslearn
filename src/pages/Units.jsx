import { Link } from 'react-router-dom';

import { useLessons } from '../context/LessonsContext';

function Units() {

  const { lessons, progress } = useLessons();

  return (

    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>

      <h1 style={{ textAlign: 'center', color: '#0984e3' }}>Units</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>

        {lessons.units.map(unit => {

          const completedLessons = unit.lessons.filter(lesson => progress[unit.id]?.[lesson.id]).length;

          const progressPercent = (completedLessons / unit.lessons.length) * 100;

          return (

            <Link key={unit.id} to={`/units/${unit.id}`} style={{ textDecoration: 'none' }}>

              <div className="card unit-card" style={{ width: '250px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>

                <h2>{unit.title}</h2>

                <div className="progress-bar" style={{ width: '80%', margin: '10px 0' }}>

                  <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>

                </div>

                <p>{completedLessons}/{unit.lessons.length} completed</p>

              </div>

            </Link>

          );

        })}

      </div>

    </div>

  );

}

export default Units;