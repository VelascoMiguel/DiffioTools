import Sidebar from "../ui/Sidebar";
import HeadPage from "../ui/HeadPage";
import Tracker from "../ui/Tracker";

export default function ProjectTracking() {

    return (
        <>
            <div className="contentPage shadow">
                <Sidebar />
                <section className="services page">
                    <HeadPage namePage="Ruta del proyecto" descriptionPage="En esta seccion podras ver el seguimiento de tu proyecto y en que etapa nos encontramos actualmente." />
                    <div className="">
                        <Tracker />
                    </div>
                </section>
            </div>
        </>
    )

}