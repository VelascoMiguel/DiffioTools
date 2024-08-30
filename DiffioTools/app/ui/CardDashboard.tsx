export default function CardDashboard({ nameCard, amount, details }: any) {
  return (
    <>
      <div className="cardDashboard rounded-xl border bg-card text-card-foreground">
        <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="tracking-tight nameCardDashboard">{nameCard}</h3>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg> */}
        </div>
        <div className="p-6 pt-0">
          <div className="text-2xl font-bold">{amount}</div>
          <p className="text-xs text-muted-foreground">
            {details}
          </p>
        </div>
      </div>
    </>
  );
}
