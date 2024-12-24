
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = [
      { email: 'admin@example.com', role: 'admin' },
      { email: 'staff@example.com', role: 'staff' },
      { email: 'student@example.com', role: 'student' },
    ];

    const user = users.find((u) => u.email === email);

    if (user) {
      navigate(`/${user.role}`);
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-lg w-96">
      <h2 className="text-2xl mb-6">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border mb-6"
      />
      <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </div>
  );
}
