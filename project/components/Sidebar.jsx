
import { Link } from 'react-router-dom';

export default function Sidebar({ role }) {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-6 font-bold text-2xl">Dashboard</div>
      <ul>
        <li className="px-6 py-3 hover:bg-gray-700">
          <Link to="/">Home</Link>
        </li>

        {role === 'admin' && (
          <li className="px-6 py-3 hover:bg-gray-700">
            <Link to="/admin/users">Manage Users</Link>
          </li>
        )}

        {role === 'staff' && (
          <li className="px-6 py-3 hover:bg-gray-700">
            <Link to="/staff/reports">Reports</Link>
          </li>
        )}

        {role === 'student' && (
          <li className="px-6 py-3 hover:bg-gray-700">
            <Link to="/student/transactions">Transactions</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
