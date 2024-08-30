import CardRecentService from "./CardRecentService";

export default function RecentServices() {
  return (
    <>
      <div className="recentServices rounded-xl border bg-card text-card-foreground shadow col-span-3">
        <div>
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              Servicios adquiridos.
            </h3>
            <p className="text-sm text-muted-foreground">
              Adquiriste 4 servicios en total.
            </p>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-8">
              <CardRecentService nameService="Dominio" detailService="Compra de Dominio web" amount="1400" />
              <CardRecentService nameService="Hosting" detailService="Compra de Hosting web" amount="8100" />
            </div>
          </div>
        </div>
        <a href="/services" className="p-6 seeAllService">Ver todos los servicios</a>
      </div>
    </>
  );
}
