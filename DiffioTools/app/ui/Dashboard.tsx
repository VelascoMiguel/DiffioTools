import HeadPage from "./HeadPage";
import RecentServices from "./RecentServices";
import ResumeDashboard from "./ResumeDashboard";
import TrafficChart from "./TrafficChart";

export default function Dashboard() {
  return (
    <>
      <section className="dashboard page">
        <HeadPage namePage="Dashboard" descriptionPage="En esta seccion encontraras un breve resumen de tu proyecto." />
        <ResumeDashboard />
        <div className="trafficChartAndRecentServices">
          <TrafficChart />
          <RecentServices />
        </div>
      </section>
    </>
  );
}
