export default function ContactInformationForm() {
  return (
    <form action="" className="contactInformationForm">
      <div className="inputsAndLabelsForm">
        <div className="contactMethod">
          <label>Email</label>
          <input
            type="text"
            className="inputContactForm"
            placeholder="ejemplo@gmail.com"
          />
        </div>
        <div className="contactMethod">
          <label>Telefono</label>
          <input
            type="text"
            className="inputContactForm"
            placeholder="11 3333-9999"
          />
        </div>
        <div className="contactMethod">
          <label>Instagram</label>
          <input
            type="text"
            className="inputContactForm"
            placeholder="https://www.instagram.com/tupagina"
          />
        </div>
        <div className="contactMethod">
          <label>Facebook</label>
          <input
            type="text"
            className="inputContactForm"
            placeholder="https://www.facebook.com/tupagina"
          />
        </div>
        <div className="contactMethod">
          <label>LinkedIn</label>
          <input
            type="text"
            className="inputContactForm"
            placeholder="https://www.linkedin.com/tupagina"
          />
        </div>
      </div>
      <button className="applyChangesContactForm">Aplicar cambios</button>
    </form>
  );
}
