import Sidebar from "../ui/Sidebar";
import HeadPage from "../ui/HeadPage";
import ContactInformationForm from "../ui/ContactInformationForm";

export default function ContactInformation() {
  return (
    <>
      <div className="contentPage shadow">
        <Sidebar />
        <section className="services page">
          <HeadPage
            namePage="Datos de contacto"
            descriptionPage="En esta seccion podras editar y agregar tus datos de contacto, estos cambios impactaran en tu pagina web."
          />
          <ContactInformationForm />
        </section>
      </div>
    </>
  );
}
