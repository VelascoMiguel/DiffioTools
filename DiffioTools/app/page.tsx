import Sidebar from "./ui/Sidebar";
import Dashboard from "./ui/Dashboard";

export default function Home() {
  return (
    <>
      <div className="contentPage shadow">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}
