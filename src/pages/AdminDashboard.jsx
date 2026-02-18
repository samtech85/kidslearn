import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function AdminDashboard() {
  const { logout } = useAuth();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Link to="/admin/units"><button>Manage Units</button></Link>
        <Link to="/admin/lessons"><button>Manage Lessons</button></Link>
        <button onClick={logout}>Logout</button>
      </nav>
      <p>Welcome to the admin panel. Use the buttons above to manage units and lessons.</p>
    </div>
  );
}

export default AdminDashboard;