import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <header style={{ backgroundColor: '#0984e3', color: 'white', padding: '10px 20px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="logo" style={{ fontSize: '24px', fontWeight: 'bold' }}>KidsLearn</div>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/units" style={{ color: 'white', textDecoration: 'none' }}>Units</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
          {isLoggedIn ? (
            <li><Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>Admin</Link></li>
          ) : (
            <li><Link to="/admin/login"><button style={{ backgroundColor: '#ff6b6b', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px' }}>Login</button></Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;