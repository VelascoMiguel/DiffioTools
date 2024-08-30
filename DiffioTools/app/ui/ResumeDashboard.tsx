import CardDashboard from "./CardDashboard";

export default function ResumeDashboard() {
  return (
    <>
      <section className="resumeDashboard">
        <CardDashboard nameCard="Servicios contratados" amount="3" />
        <CardDashboard nameCard="Trafico mensual" amount="15.5%" />
        <CardDashboard nameCard="Recordatorios y alertas" amount="7" />
        <CardDashboard nameCard="Etapa del proyecto" amount="4/10"/>
      </section>
    </>
  );
}
