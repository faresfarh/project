
import Sidebar from './Sidebar';

export default function Dashboard({ role }) {
  return (
    <div className="flex">
      <Sidebar role={role} />
      <div className="flex-1 p-8">
        <h1 className="text-4xl">Welcome to {role} Dashboard</h1>
      </div>
    </div>
  );
}
