export default function Tracker() {
  const etapas = [
    "Diseño",
    "Desarrollo",
    "Testing",
    "Lanzamiento",
    "Soporte y Mantenimiento",
  ];

  return (
    <div className="tracker">
      <div className="actualStage">
        <p>Desarrollo</p>
      </div>
      <div className="lineTracker">
        {etapas.map((etapa, index) => (
          <div className="stage" key={index}>
            <div className="dotStage"></div>
            {etapa}
          </div>
        ))}
      </div>
    </div>
  );
}
