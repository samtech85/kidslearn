import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1 style={{ fontSize: '48px', color: '#0984e3', marginBottom: '20px' }}>Welcome to KidsLearn!</h1>
      <p style={{ fontSize: '20px', margin: '20px 0', color: '#555' }}>Learn English with fun YouTube videos from beginner to advanced levels.</p>
      <Link to="/units"><button style={{ fontSize: '24px', padding: '15px 30px', marginTop: '30px' }}>Start Learning</button></Link>
      {/* Placeholder for illustration */}
      <div style={{ marginTop: '50px' }}>
        <div style={{ width: '300px', height: '200px', backgroundColor: '#f0f0f0', borderRadius: '15px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>Illustration of kids learning</span>
        </div>
      </div>
    </div>
  );
}

export default Home;